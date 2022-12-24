import { BeakerIcon } from "@heroicons/react/solid";
import { memo } from "react";

const TitleContent = ({ titleElement }: { titleElement: TitleElement }) => {
    return (
        <div className="">
            <div className="flex items-center w-full">
                <span className="p-2 px-2.5 bg-red-400">
                    <BeakerIcon className="w-5"/>
                </span>
                <span className="ml-2.5 text-lg font-medium uppercase">
                    {titleElement.value}
                </span>
            </div>
            <div className="h-0.5 bg-red-400"></div>
        </div>
    );
}

export default memo(TitleContent);