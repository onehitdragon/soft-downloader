import { memo } from "react"
import NotificationList from "./NotificationList";

const NotificationPopup = () => {
    return (
        <div className="absolute top-full right-full translate-x-10 mt-2 w-80 bg-slate-600 p-3 cursor-default z-50">
            <NotificationList />
        </div>
    );
}

export default memo(NotificationPopup);