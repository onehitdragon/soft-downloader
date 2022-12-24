import { memo } from "react";
import { BASE_URL } from "../../util/api";

const ImageContent = ({ imageElement }: { imageElement: ImageElement }) => {
    return (
        <div className="my-2.5 flex justify-center">
            <img alt="error" src={BASE_URL + imageElement.url}/>
        </div>
    );
}

export default memo(ImageContent);