import { memo } from "react"

const ListResultItem = () => {
    return (
        <div className="flex cursor-pointer p-3 group">
            <img alt="error" src="/wd.jpeg" className="h-24"/>
            <div className="flex flex-col justify-between ml-2 overflow-hidden">
                <span className="text-ellipsis line-clamp-1 text-red-500 font-medium
                    group-hover:text-red-300 transition-colors">
                    Ghost Windows 10 (x64 + x86) 21H1  No Full Soft, Bamboo Aug 2021
                </span>
                <span className="text-ellipsis line-clamp-3 text-sm">
                    Mới đây, một bản Ghost Windows 10 21H1 với chủ đề Bamboo (tre xanh) được ra mắt đến những bạn nào đang quan tâm ghoster Lehait. Từng bản ghost mà tác giả chia sẻ là một sản phẩm cực kì chất
                </span>
            </div>
        </div>
    );
}

export default memo(ListResultItem);