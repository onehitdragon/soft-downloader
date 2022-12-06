import { memo, useEffect, useState } from "react";
import { FireIcon } from "@heroicons/react/solid";
import api from "../../util/api";
import { convertDateToString, numberToFloat } from "../../util/convert";

const RelativeSoft = ({ soft }: { soft: Soft }) => {
    const [listRelativeSoft, setListRelativeSoft] = useState<Soft[] | null>(null);

    useEffect(() => {
        api.get(`/soft/getbychildcategory/?childCategoryId=${soft.childCategories[0].id}`)
        .then((res) => {
            return res?.json();
        })
        .then((data: Soft[]) => {
            data.forEach((soft) => {
                soft.content = (soft.content as any).replaceAll("\\", "\\\\");
                soft.content = JSON.parse(soft.content as any);
            })
            setListRelativeSoft(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div style={{ minWidth: '400px' }} className="ml-5 hidden lg:block">
            <div className="mb-2">
                <span className="text-xl font-bold">Bài viết liên quan</span>
            </div>
            {
                listRelativeSoft !== null &&
                <ul className="">
                    {
                        listRelativeSoft.map((relativeSoft) => {
                            if(relativeSoft.id === soft.id){
                                return "";
                            }
                            return (
                                <li key={soft.id}  className="flex flex-col bg-black hover:bg-slate-400 group cursor-pointer transition-all">
                                    <div className="flex p-2">
                                        <img alt="error"
                                            src={(relativeSoft.content.find(content => content.type === "image") as ImageElement).url}
                                            className="mr-3 w-40"/>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <span className="hover:underline font-medium">
                                                {relativeSoft.title}
                                            </span>
                                            <div className="flex justify-between opacity-90">
                                                <span>{convertDateToString(new Date(relativeSoft.createDate))}</span>
                                                <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                                    <FireIcon className="w-5"/>
                                                    <span>{numberToFloat(relativeSoft.amountView)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-slate-400"/>
                                </li>
                            );
                        })
                    }
                </ul>
            }
        </div>
    );
}

export default memo(RelativeSoft);