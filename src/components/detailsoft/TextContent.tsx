import { memo } from "react";
import { processTextElement } from "../../util/processTextElement";

const TextContent = ({ textElement }: { textElement: TextElement | ParaElement}) => {
    return (
        <div className="my-2.5">
            <span
                dangerouslySetInnerHTML={{ __html: processTextElement(textElement)}}>
            </span>
        </div>
    );
}

export default memo(TextContent);