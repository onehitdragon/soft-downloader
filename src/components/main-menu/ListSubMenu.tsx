import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import ListSubMenuItem from "./ListSubMenuItem";

const ListSubMenu = () => {
    const categories = useSelector<RootState, Category[]>(state => state.mainMenu.categories);

    return (
        <div className="flex">
            {
                categories.map((category) => {
                    return (
                        <div key={category.id} className="font-medium relative group cursor-pointer flex z-40">
                            <span className="uppercase hover:text-red-400 p-2 transition">{category.name}</span>
                            <ListSubMenuItem childCategories={category.childCategories}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default memo(ListSubMenu);