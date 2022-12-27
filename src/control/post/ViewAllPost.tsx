import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import NormalTable from "../components/NormalTable";
import NormalTableBody from "../components/NormalTableBody";
import NormalTableColumn from "../components/NormalTableColumn";
import NormalTableHead from "../components/NormalTableHead";
import NormalTableRow from "../components/NormalTableRow";

const ViewAllPost = () => {
    const softs = useSelector<RootState, Soft[] | null>(state => state.control.softs);

    return (
        softs === null ?
        <></>
        :
        <NormalTable>
            <NormalTableHead 
                titles={["Id", "Tiêu đề", "Nội dung", "Tác giả", "Lượt xem", "Ngày tạo", "Thể loại"]}
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
                                        <span>Xem nội dung</span>
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
                                </NormalTableRow>
                            );
                        })
                    }
            </NormalTableBody>
        </NormalTable>
    );
}

export default memo(ViewAllPost);