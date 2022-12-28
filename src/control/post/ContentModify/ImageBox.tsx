import { memo, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { ImageElementUpload } from "../../../feature/control";
import { removeElementFromModifierContent } from "../../../feature/control/controlPost/PostContentModiferSlice";
import NormalButton from "../../components/NormalButton";

const ImageBox = ({ imageElementUpload }: { imageElementUpload: ImageElementUpload }) => {
    const dispatch = useDispatch();
    const [src, setSrc] = useState("");

    useEffect(() => {
        const fr = new FileReader();
        fr.onload = (e) => {
            setSrc(e.target?.result as string);
        }
        fr.readAsDataURL(imageElementUpload.file);
    }, [imageElementUpload])

    return (
        <li className="flex mb-1.5">
            <div className="bg-cyan-400 p-0.5 rounded">
                <img alt="error" src={src}
                    className=""/>
            </div>
            <NormalButton label="Xoá"
                className="bg-red-500 ml-1.5 max-h-9"
                handleOnClick={() => {
                    dispatch(removeElementFromModifierContent(imageElementUpload));
                }}/>
        </li>
    );
}

export default memo(ImageBox);