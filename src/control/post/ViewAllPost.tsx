import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../feature/store";
import NormalButton from "../components/NormalButton";
import NormalTable from "../components/NormalTable";
import NormalTableBody from "../components/NormalTableBody";
import NormalTableColumn from "../components/NormalTableColumn";
import NormalTableHead from "../components/NormalTableHead";
import NormalTableRow from "../components/NormalTableRow";

const ViewAllPost = () => {
    const softs = useSelector<RootState, Soft[] | null>(state => state.control.softs);
    const navigate = useNavigate();

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
                                            handleOnClick={() => {  }}/>
                                    </NormalTableColumn>
                                    <NormalTableColumn>
                                        <NormalButton label="Xoá" className="bg-red-500"
                                            handleOnClick={() => {  }}/>
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