import { memo } from "react"

const NotificationListItem = () => {
    return (
        <div className="flex flex-col text-left">
            <span className="text-base">
                Chúng tôi không chịu trách nhiệm về nội dung đăng tải do người dùng đưa lên và sẵn sàng tháo bỏ những nội dung vi phạm.
            </span>
            <span className="mt-1 text-sm text-slate-300">
                09/08/2022
            </span>
            <hr className="my-1"/>
        </div>
    );
}

export default memo(NotificationListItem);