import { memo } from "react"
import { useSelector } from "react-redux";
import { MenuItemType } from "../feature/control/MenuItemType.enum";
import { RootState } from "../feature/store";
import InfoMain from "./info/InfoMain";
import PostMain from "./post/PostMain";

const ControlBody = () => {
    const curMenuItem = useSelector<RootState, MenuItemType>(state => state.controlMenu.curMenuItem);

    return (
        <div className="w-full p-5">
            {
                curMenuItem === MenuItemType.Info &&
                <InfoMain />
            }
            {
                curMenuItem === MenuItemType.Post &&
                <PostMain />
            }
        </div>
    );
}

export default memo(ControlBody);