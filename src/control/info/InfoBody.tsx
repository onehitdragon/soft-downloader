import { memo } from "react"
import ListTotalBox from "./ListTotalBox";
import SmallTotalBox from "./SmallTotalBox";

const InfoBody = () => {
    return (
        <div className="flex flex-wrap">
            <SmallTotalBox title="Tổng lượt xem" total={52} imageUrl="/icon/icons8-phoenix-96.png"/>
            <SmallTotalBox title="Tổng người dùng" total={92} imageUrl="/icon/icons8-dinosaur-egg-96.png"/>
            <ListTotalBox title="Hiện tại" list={[
                {
                    title: "Tổng bài viết",
                    total: 52,
                    imageUrl: "/icon/icons8-unicorn-96.png"
                },
                {
                    title: "Tổng thể loại",
                    total: 15,
                    imageUrl: "/icon/icons8-moosebear-96.png"
                },
                {
                    title: "Tổng bình luận",
                    total: 89,
                    imageUrl: "/icon/icons8-pig-with-lipstick-96.png"
                }
            ]}/>
        </div>
    );
}

export default memo(InfoBody);