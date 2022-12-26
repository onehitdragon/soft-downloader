import { memo } from "react";
import { BookmarkIcon, ChartPieIcon, ClipboardListIcon, UsersIcon } from "@heroicons/react/solid";
import { MenuItemType } from "../feature/control/MenuItemType.enum";
import { useDispatch, useSelector } from "react-redux";
import { updateCurMenuItem } from "../feature/control/controlMenuSlice";
import { RootState } from "../feature/store";

const ControlMenu = () => {
    const curMenuItem = useSelector<RootState, MenuItemType>(state => state.controlMenu.curMenuItem);
    const dispatch = useDispatch();

    const handleMenuItemClick = (menuItem: MenuItemType) => {
        dispatch(updateCurMenuItem(menuItem));
    }

    return (
        <ul className="">
            <li className={"flex px-4 py-3 cursor-pointer bg-gradient-to-r " + 
                (curMenuItem === MenuItemType.Info ? "from-red-400" : "hover:brightness-75")}
                onClick={() => { handleMenuItemClick(MenuItemType.Info) }}>
                <ChartPieIcon className="w-5 mr-2"/>
                <span className="">Thông tin</span>
            </li>
            <li className={"flex px-4 py-3 cursor-pointer bg-gradient-to-r " + 
                (curMenuItem === MenuItemType.Post ? "from-red-400" : "hover:brightness-75")}
                onClick={() => { handleMenuItemClick(MenuItemType.Post) }}>
                <ClipboardListIcon className="w-5 mr-2"/>
                <span className="">Bài viết</span>
            </li>
            <li className={"flex px-4 py-3 cursor-pointer bg-gradient-to-r " + 
                (curMenuItem === MenuItemType.Category ? "from-red-400" : "hover:brightness-75")}
                onClick={() => { handleMenuItemClick(MenuItemType.Category) }}>
                <BookmarkIcon className="w-5 mr-2"/>
                <span className="">Thể loại</span>
            </li>
            <li className={"flex px-4 py-3 cursor-pointer bg-gradient-to-r " + 
                (curMenuItem === MenuItemType.User ? "from-red-400" : "hover:brightness-75")}
                onClick={() => { handleMenuItemClick(MenuItemType.User) }}>
                <UsersIcon className="w-5 mr-2"/>
                <span className="">Người dùng</span>
            </li>
        </ul>
    );
}

export default memo(ControlMenu);