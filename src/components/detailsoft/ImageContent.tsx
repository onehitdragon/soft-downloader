import { memo } from "react";

const ImageContent = ({ imageElement }: { imageElement: ImageElement }) => {
    return (
        <div className="my-2.5 flex justify-center">
            <img alt="error" src={imageElement.url}/>
        </div>
    );
}

export default memo(ImageContent);