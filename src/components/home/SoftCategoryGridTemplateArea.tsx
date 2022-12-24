import { memo } from "react"
import { useNavigate } from "react-router";
import { BASE_URL } from "../../util/api";
import { numberToFloat } from "../../util/convert";

const SoftCategoryGridTemplateArea = ({ softs, category, childCategory }: { softs: Soft[], category: Category, childCategory: ChildCategory}) => {
    const navigate = useNavigate();
    
    return (
        <ul className="mx-2.5 my-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                softs.map((soft) => {
                    const rating = parseInt(Math.random() * 100 as any);
                    return (
                        <li key={soft.id} className="m-1.5 flex flex-col">
                            <div className="relative" onClick={() => { navigate(`/soft/${soft.id}`) }}>
                                <img alt="error"
                                    src={ BASE_URL + (soft.content.find(content => content.type === "image") as ImageElement).url }
                                    className="rounded cursor-pointer hover:scale-105 transition-all"/>
                                <div className="absolute bottom-1.5 right-1.5 flex justify-center items-center
                                    px-2 py-1 rounded-full bg-white">
                                    <span className="text-black font-medium">{numberToFloat(soft.amountView)}</span>
                                </div>
                            </div>
                            <div className="text-sm mb-1">
                                <p className="text-lg max-w-full truncate
                                    cursor-pointer font-medium mt-1 mb-1.5 hover:text-red-400 transition-all"
                                    onClick={() => { navigate(`/soft/${soft.id}`) }}>
                                    { soft.title }
                                </p>
                                <span className="text-base opacity-90">Thể loại: </span>
                                {
                                    soft.childCategories.map((childCategory, idx) => {
                                        return (
                                            <span key={idx} className="text-red-400 cursor-pointer hover:underline">
                                                {childCategory.name}
                                                {
                                                    idx + 1 !== soft.childCategories.length &&
                                                    <span>, </span>
                                                }
                                            </span>
                                        );
                                    })
                                }
                                
                            </div>
                            <div className="mt-auto flex justify-between">
                                <button className="px-5 py-2.5 bg-slate-600 rounded hover:bg-red-400 transition-all
                                    flex justify-center items-center" onClick={() => { navigate(`/soft/${soft.id}`) }}>
                                    <span className="text-xs font-medium">XEM</span>
                                </button>
                                <button className="w-40 bg-slate-600 rounded cursor-default
                                    flex flex-col justify-center items-center">
                                    <span className="text-xs font-medium">ĐÁNH GIÁ {rating} ĐIỂM</span>
                                    {/* range */}
                                    <div className="h-2 w-28 mt-1 rounded bg-slate-400">
                                        <div style={{ width: `${rating}%` }} className="h-2 bg-red-400 rounded"></div>
                                    </div>
                                </button>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default memo(SoftCategoryGridTemplateArea);