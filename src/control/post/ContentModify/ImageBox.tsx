import { memo } from "react"
import NormalButton from "../../components/NormalButton";

const ImageBox = ({ imageElement }: { imageElement: ImageElement }) => {
    return (
        <li className="flex mb-1.5">
            <div className="bg-cyan-400 p-0.5 rounded">
                <img alt="error" src={imageElement.url}
                    className=""/>
            </div>
            <NormalButton label="Xoá"
                className="bg-red-500 ml-1.5 max-h-9"
                handleOnClick={() => {}}/>
        </li>
    );
}

export default memo(ImageBox);