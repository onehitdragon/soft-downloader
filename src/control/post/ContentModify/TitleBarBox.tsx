import { memo } from "react";
import { useDispatch } from "react-redux";
import { removeElementFromModifierContent } from "../../../feature/control/controlPost/PostContentModiferSlice";
import NormalButton from "../../components/NormalButton";

const TitleBarBox = ({ titleElement }: { titleElement: TitleElement }) => {
    const dispatch = useDispatch();

    return (
        <li className="flex mb-1.5">
            <NormalButton label={titleElement.value}
                className="bg-amber-400"
                handleOnClick={() => {}}/>
            <NormalButton label="Xoá"
                className="bg-red-500 ml-1.5 max-h-9"
                handleOnClick={() => {
                    dispatch(removeElementFromModifierContent(titleElement));
                }}/>
        </li>
    );
}

export default memo(TitleBarBox);