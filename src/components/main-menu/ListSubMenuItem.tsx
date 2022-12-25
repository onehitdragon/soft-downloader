import { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getSoftsByChildCategory } from "../../feature/filter/filterSlice";
import { BASE_URL } from "../../util/api";

const ListSubMenuItem = ({ childCategories }: { childCategories: ChildCategory[] }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChildCagegoryClick = (childCategory: ChildCategory) => {
        dispatch<any>(getSoftsByChildCategory(
            childCategory,
            () => {
                navigate("/filter");
            }
        ));
    }

    return (
        <div className="bg-slate-600 w-48 absolute top-full right-0
            hidden group-hover:block text-sm">
            {
                childCategories.map((childCategory) => {
                    return (
                        <div key={childCategory.id} className="flex p-2 items-center"
                            onClick={() => handleChildCagegoryClick(childCategory)}>
                            <img src={BASE_URL + childCategory.iconUrl} className="w-6 h-6 mr-2" alt="error"/>
                            <span className="hover:text-red-400 flex-1 transition">{childCategory.name}</span>
                        </div>
                    );
                })
            }
        </div>
        
    );
}

export default memo(ListSubMenuItem);