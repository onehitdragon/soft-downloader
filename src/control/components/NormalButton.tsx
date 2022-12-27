import { memo } from "react";

const NormalButton = ({ label, handleOnClick, className }: { label: string, handleOnClick: Function, className?: string}) => {
    return (
        <button className={"bg-emerald-400 px-4 py-1.5 rounded hover:brightness-95"
            + " " + (typeof className !== "undefined" ? className : "")}
            onClick={() => { handleOnClick() }}>
            { label }
        </button>
    );
}

export default memo(NormalButton);