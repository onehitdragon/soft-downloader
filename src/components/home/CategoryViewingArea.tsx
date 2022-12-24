import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import SoftCategoryGridTemplateArea from "./SoftCategoryGridTemplateArea";
import TitleBarWithLink from "./TitleBarWithLink";

const CategoryViewingArea = () => {
    const listGhostWin11 = useSelector<RootState, Soft[]>(state => state.home.listGhostWin11);
    const listGhostWin10 = useSelector<RootState, Soft[]>(state => state.home.listGhostWin10);
    const categories = useSelector<RootState, Category[]>(state => state.mainMenu.categories);
    const ghostWinCategory = categories.find(category => category.name === "Ghost Window")!;

    return (
        <>
            <TitleBarWithLink head="WINDOWS" tail="11"/>
            <SoftCategoryGridTemplateArea 
                softs={listGhostWin11}
                category={ghostWinCategory}
                childCategory={ghostWinCategory.childCategories.find(category => category.name === "Ghost Window 11")!}
            />
            <TitleBarWithLink head="WINDOWS" tail="10"/>
            <SoftCategoryGridTemplateArea
                softs={listGhostWin10}
                category={ghostWinCategory}
                childCategory={ghostWinCategory.childCategories.find(category => category.name === "Ghost Window 10")!}
            />
        </>
    );
}

export default memo(CategoryViewingArea);