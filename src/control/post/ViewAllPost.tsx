import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ImageElementUpload } from "../../feature/control";
import { updateModifierContent } from "../../feature/control/controlPost/PostContentModiferSlice";
import { removePostThunk, updateCurCategory, updateCurChildCategory, updateIsAdd, updateSoftIdModify, updateTitle } from "../../feature/control/controlPost/PostFormSlice";
import { RootState } from "../../feature/store";
import { BASE_URL } from "../../util/api";
import NormalButton from "../components/NormalButton";
import NormalTable from "../components/NormalTable";
import NormalTableBody from "../components/NormalTableBody";
import NormalTableColumn from "../components/NormalTableColumn";
import NormalTableHead from "../components/NormalTableHead";
import NormalTableRow from "../components/NormalTableRow";

const ViewAllPost = ({ onModify }: { onModify: Function }) => {
    const softs = useSelector<RootState, Soft[] | null>(state => state.control.softs);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector<RootState, Category[] | null>(state => state.control.categories);

    const handleModifyButton = (soft: Soft) => {
        if (categories === null) return;
        dispatch(updateTitle(soft.title));
        const allImageElementPromise = soft.content.map((e) => {
            if(e.type === "image"){
                return new Promise<ImageElementUpload>((resolve) => {
                    fetch(BASE_URL + e.url)
                    .then((res) => {
                        return res.blob();
                    })
                    .then((blob) => {
                        resolve({
                            type: "image",
                            file: new File([blob], e.url.split("/").at(-1)!)
                        })
                    })
                });
            }
            return undefined;
        });
        Promise.all(allImageElementPromise)
        .then((imageElementUploads) => {
            dispatch(updateModifierContent(
                soft.content.map((e, idx) => {
                    if(e.type === "image"){
                        return imageElementUploads[idx]!;
                    }
                    return {...e}
                })
            ));
        })
        dispatch(updateCurCategory(categories.find((p) => {
            return p.childCategories.find(c => c.id === soft.childCategories[0].id);
        })!));
        dispatch(updateCurChildCategory(soft.childCategories[0]));
        dispatch(updateIsAdd(false));
        dispatch(updateSoftIdModify(soft.id));
        onModify();
    }

    return (
        softs === null ?
        <></>
        :
        <NormalTable>
            <NormalTableHead 
                titles={["Id", "Tiêu đề", "Nội dung", "Tác giả", "Lượt xem", "Ngày tạo", "Thể loại", "", ""]}
                />
            <NormalTableBody>
                    {
                        softs.map((soft) => {
                            return (
                                <NormalTableRow key={soft.id}>
                                    <NormalTableColumn>
                                        <span>{soft.id}</span>
                                    </NormalTableColumn>
                                    <NormalTableColumn>
                                        <span>{soft.title}</span>
                                    </NormalTableColumn>
                                    <NormalTableColumn>
                                        <span className="cursor-pointer hover:underline"
                                            onClick={() => { navigate("/soft/" + soft.id) }}>Xem nội dung</span>
                                    </NormalTableColumn>
                                    <NormalTableColumn>
                                        <span>{soft.author.fullName}</span>
                                    </NormalTableColumn>
                                    <NormalTableColumn>
                                        <span>{soft.amountView}</span>
                                    </NormalTableColumn>
                                    <NormalTableColumn>
                                        <span>{new Date(soft.createDate).toLocaleDateString()}</span>
                                    </NormalTableColumn>
                                    <NormalTableColumn>
                                        {
                                            soft.childCategories.map((childCategory, idx) => {
                                                return (
                                                    <span key={idx}>
                                                        {childCategory.name}
                                                        {
                                                            idx + 1 !== soft.childCategories.length &&
                                                            <span>, </span>
                                                        }
                                                    </span>
                                                );
                                            })
                                        }
                                    </NormalTableColumn>
                                    <NormalTableColumn>
                                        <NormalButton label="Sửa"
                                            handleOnClick={() => {
                                                handleModifyButton(soft);
                                            }}/>
                                    </NormalTableColumn>
                                    <NormalTableColumn>
                                        <NormalButton label="Xoá" className="bg-red-500"
                                            handleOnClick={() => { 
                                                dispatch<any>(removePostThunk(soft.id, () => {
                                                    
                                                }));
                                            }}/>
                                    </NormalTableColumn>
                                </NormalTableRow>
                            );
                        })
                    }
            </NormalTableBody>
        </NormalTable>
    );
}

export default memo(ViewAllPost);