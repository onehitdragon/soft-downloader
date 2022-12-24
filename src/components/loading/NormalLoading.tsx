import { memo } from "react"

const NormalLoading = ({ className }: { className?: string }) => {
    return <div className={"flex justify-center items-center " + (className ? className : "")}>
            <img alt="error" src="/loading/loading-gif.gif"
                className="w-7 h-7"/>
        </div>
}

export default memo(NormalLoading);