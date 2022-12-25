import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import SoftCategoryGridTemplateArea from "./SoftCategoryGridTemplateArea";
import TitleBarWithLink from "./TitleBarWithLink";

const CategoryViewingArea = () => {
    const listGhostWin11 = useSelector<RootState, Soft[]>(state => state.home.listGhostWin11);
    const listGhostWin10 = useSelector<RootState, Soft[]>(state => state.home.listGhostWin10);

    return (
        <>
            <TitleBarWithLink head="WINDOWS" tail="11"/>
            <SoftCategoryGridTemplateArea 
                softs={listGhostWin11}
            />
            <TitleBarWithLink head="WINDOWS" tail="10"/>
            <SoftCategoryGridTemplateArea
                softs={listGhostWin10}
            />
        </>
    );
}

export default memo(CategoryViewingArea);