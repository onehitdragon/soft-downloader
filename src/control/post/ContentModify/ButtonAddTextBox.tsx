import { memo, useState } from "react"
import { useDispatch } from "react-redux";
import { addElementToModifierContent } from "../../../feature/control/controlPost/PostContentModiferSlice";
import NormalButton from "../../components/NormalButton";
import NormalInput from "../../components/NormalInput";

const ButtonAddTextBox = () => {
    const [adding, setAdding] = useState(false);
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    return (
        !adding ?
        <NormalButton label="Thêm đoạn văn" className="bg-blue-400 mb-1.5"
            handleOnClick={() => { setAdding(true) }}/>
        :
        (
            <div className="mb-1.5">
                <NormalInput placeholder="Nhập đoạn văn"
                    value={text}
                    onChange={(v) => {
                        setText(v);
                    }}
                />
                {
                    text !== "" &&
                    <NormalButton label="Đồng ý" className="bg-amber-400 ml-1.5"
                        handleOnClick={() => {
                            setAdding(false);
                            setText("");
                            dispatch(addElementToModifierContent(
                                {
                                    type: "para",
                                    value: text
                                }
                            ));
                        }}
                        />
                }
                <NormalButton label="Huỷ" className="bg-amber-400 ml-1.5"
                    handleOnClick={() => { setAdding(false) }}/>
            </div>
        )
    );
}

export default memo(ButtonAddTextBox);