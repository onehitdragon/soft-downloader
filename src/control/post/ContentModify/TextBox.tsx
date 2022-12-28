import { memo } from "react"
import { useDispatch } from "react-redux";
import { removeElementFromModifierContent } from "../../../feature/control/controlPost/PostContentModiferSlice";
import NormalButton from "../../components/NormalButton";

const TextBox = ({ textElement }: { textElement: TextElement | ParaElement}) => {
    const dispatch = useDispatch();

    return (
        <li className="flex mb-1.5">
            <NormalButton label={textElement.value}
                className="bg-blue-400"
                handleOnClick={() => {}}/>
            <NormalButton label="Xoá"
                className="bg-red-500 ml-1.5 max-h-9"
                handleOnClick={() => {
                    dispatch(removeElementFromModifierContent(textElement));
                }}/>
        </li>
    );
}

export default memo(TextBox);