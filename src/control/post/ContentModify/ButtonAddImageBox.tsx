import { ChangeEvent, memo, useRef } from "react"
import { useDispatch } from "react-redux";
import { addElementToModifierContent, addFile } from "../../../feature/control/controlPost/PostContentModiferSlice";
import NormalButton from "../../components/NormalButton";

const ButtonAddImageBox = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const handleOnCLick = () => {
        inputRef.current?.click();
    }

    const handleOnUpload = (e: ChangeEvent) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if(typeof file !== "undefined"){
            const fr = new FileReader();
            fr.onload = (e) => {
                dispatch(addFile(file));
                dispatch(addElementToModifierContent({
                    type: "image",
                    url: e.target?.result as string
                }));
            }
            fr.readAsDataURL(file);
        }
    }

    return (
        <>
            <input ref={inputRef} className="hidden" type="file" accept="image/*"
                onChange={handleOnUpload}/>
            <NormalButton label="Thêm ảnh" className="bg-cyan-400 mb-1.5"
                handleOnClick={() => {
                    handleOnCLick();
                }}/>
        </>
        
    );
}

export default memo(ButtonAddImageBox);