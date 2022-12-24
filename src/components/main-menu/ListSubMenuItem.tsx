import { memo } from "react";
import { BASE_URL } from "../../util/api";

const ListSubMenuItem = ({ childCategories }: { childCategories: ChildCategory[] }) => {
    return (
        <div className="bg-slate-600 w-48 absolute top-full right-0
            hidden group-hover:block text-sm">
            {
                childCategories.map((childCategory) => {
                    return (
                        <div key={childCategory.id} className="flex p-2 items-center">
                            <img src={BASE_URL + childCategory.iconUrl} className="w-6 h-6 mr-2" alt="error"/>
                            <a href="/" className="hover:text-red-400 flex-1 transition">{childCategory.name}</a>
                        </div>
                    );
                })
            }
        </div>
        
    );
}

export default memo(ListSubMenuItem);