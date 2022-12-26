import { memo } from "react";
import NormalTable from "../components/NormalTable";

const ViewAllPost = () => {

    return (
        <NormalTable 
            titles={["Id", "Tiêu đề", "Nội dung", "Tác giả", "Lượt xem", "Ngày tạo", "Thể loại"]}
            rows={[]}
        />
    );
}

export default memo(ViewAllPost);