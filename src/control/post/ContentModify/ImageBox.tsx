import { memo } from "react"
import { useDispatch } from "react-redux";
import { removeElementFromModifierContent } from "../../../feature/control/controlPost/PostContentModiferSlice";
import NormalButton from "../../components/NormalButton";

const ImageBox = ({ imageElement }: { imageElement: ImageElement }) => {
    const dispatch = useDispatch();

    return (
        <li className="flex mb-1.5">
            <div className="bg-cyan-400 p-0.5 rounded">
                <img alt="error" src={imageElement.url}
                    className=""/>
            </div>
            <NormalButton label="Xoá"
                className="bg-red-500 ml-1.5 max-h-9"
                handleOnClick={() => {
                    dispatch(removeElementFromModifierContent(imageElement));
                }}/>
        </li>
    );
}

export default memo(ImageBox);