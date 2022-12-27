import { memo } from "react";
import NormalButton from "../../components/NormalButton";

const TitleBarBox = ({ titleElement }: { titleElement: TitleElement }) => {
    return (
        <li className="flex mb-1.5">
            <NormalButton label={titleElement.value}
                className="bg-amber-400"
                handleOnClick={() => {}}/>
            <NormalButton label="Xoá"
                className="bg-red-500 ml-1.5 max-h-9"
                handleOnClick={() => {}}/>
        </li>
    );
}

export default memo(TitleBarBox);