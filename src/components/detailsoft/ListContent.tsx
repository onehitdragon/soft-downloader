import { memo } from "react"
import { processTextElement } from "../../util/processTextElement";

const ListContent = ({ listElement }: { listElement: ListElement }) => {
    return (
        <ul className="ml-5 my-2.5">
            {
                listElement.value.map((value, idx) => {
                    if(typeof value === "string"){
                        return (
                            <li key={idx} className="flex items-center">
                                <span className="h-1 w-1 mr-2 rounded-full bg-slate-400"></span>
                                <span className="w-fit">
                                    {value}
                                </span>
                            </li>
                        );
                    }
                    else{
                        return (
                            <li key={idx} className="flex items-center">
                                <span className="h-1 w-1 mr-2 rounded-full bg-slate-400"></span>
                                <span className="w-fit"
                                    dangerouslySetInnerHTML={{ __html: processTextElement(value)}}>
                                </span>
                            </li>
                        );
                    }
                })
            }
        </ul>
    );
}

export default memo(ListContent);