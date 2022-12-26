import { memo } from "react"
import { useSelector } from "react-redux";
import { Info } from "../../feature/control";
import { RootState } from "../../feature/store";
import ListTotalBox from "./ListTotalBox";
import SmallTotalBox from "./SmallTotalBox";

const InfoBody = () => {
    const info = useSelector<RootState, Info | null>(state => state.control.info);

    return (
        info === null ?
        <></>
        :
        <div className="flex flex-wrap">
            <SmallTotalBox title="Tổng lượt xem" total={1614001} imageUrl="/icon/icons8-phoenix-96.png"/>
            <SmallTotalBox title="Tổng người dùng" total={info.totalUser} imageUrl="/icon/icons8-dinosaur-egg-96.png"/>
            <ListTotalBox title="Hiện tại" list={[
                {
                    title: "Tổng bài viết",
                    total: info.totalPost,
                    imageUrl: "/icon/icons8-unicorn-96.png"
                },
                {
                    title: "Tổng thể loại",
                    total: info.totalCategory,
                    imageUrl: "/icon/icons8-moosebear-96.png"
                },
                {
                    title: "Tổng bình luận",
                    total: info.totalComment,
                    imageUrl: "/icon/icons8-pig-with-lipstick-96.png"
                }
            ]}/>
        </div>
    );
}

export default memo(InfoBody);