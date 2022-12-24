import { memo } from "react"
import NotificationListItem from "./NotificationListItem";

const NotificationList = () => {
    return (
        <NotificationListItem />
    );
}

export default memo(NotificationList);