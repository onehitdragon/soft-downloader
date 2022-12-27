import { memo, useState } from "react"
import NormalButton from "../../components/NormalButton";
import NormalInput from "../../components/NormalInput";

const ButtonAddTitleBarBox = () => {
    const [adding, setAdding] = useState(false);
    const [title, setTitle] = useState("");

    return (
        !adding ?
        <NormalButton label="Thêm thanh tiêu đề" className="bg-amber-400 mb-1.5"
            handleOnClick={() => { setAdding(true) }}/>
        :
        (
            <div className="mb-1.5">
                <NormalInput placeholder="Tên thanh tiêu đề"
                    value={title}
                    onChange={(v) => {
                        setTitle(v);
                    }}
                />
                {
                    title !== "" &&
                    <NormalButton label="Đồng ý" className="bg-amber-400 ml-1.5"
                        handleOnClick={() => {

                        }}
                        />
                }
                <NormalButton label="Huỷ" className="bg-amber-400 ml-1.5"
                    handleOnClick={() => { setAdding(false) }}/>
            </div>
        )
    );
}

export default memo(ButtonAddTitleBarBox);