import { memo } from "react"
import { useNavigate } from "react-router";
import { BASE_URL } from "../../util/api";

const ListResultItem = ({ soft }: { soft: Soft }) => {
    const navigate = useNavigate();

    return (
        <div className="flex cursor-pointer p-3 group"
            onClick={() => { navigate(`/soft/${soft.id}`) }}>
            <img alt="error" src={
                BASE_URL + (soft.content.find(content => content.type === "image") as ImageElement).url
            } className="w-36"/>
            <div className="flex flex-col justify-between ml-2 overflow-hidden">
                <span className="text-ellipsis line-clamp-1 text-red-500 font-medium
                    group-hover:text-red-300 transition-colors">
                    {soft.title}
                </span>
                <span className="text-ellipsis line-clamp-3 text-sm">
                   {/* {soft.author.fullName} */}
                </span>
            </div>
        </div>
    );
}

export default memo(ListResultItem);