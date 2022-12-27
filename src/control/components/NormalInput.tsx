import { memo } from "react";

const NormalInput = ({ placeholder = "", value = "", onChange = () => {} }: { placeholder?: string, value?: string, onChange?: (value: string) => any }) => {
    return (
        <input type="text" autoComplete="on" onChange={(e) => { onChange(e.target.value) }}
            value={value}
            placeholder={placeholder}
            className="text-black px-2.5 py-1.5 outline-none rounded-sm bg-slate-50"/>
    );
}

export default memo(NormalInput);