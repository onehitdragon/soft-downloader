import { ChangeEvent, memo, useRef } from "react"
import { useDispatch } from "react-redux";
import { addElementToModifierContent } from "../../../feature/control/controlPost/PostContentModiferSlice";
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
            dispatch(addElementToModifierContent({
                type: "image",
                file
            }));
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