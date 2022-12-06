import { memo } from "react";
import ImageContent from "./ImageContent";
import ListContent from "./ListContent";
import TextContent from "./TextContent";
import TitleContent from "./TitleContent";

const ContentSoft = ({ content }: { content: (TitleElement | TextElement | ParaElement | ListElement | ImageElement)[] }) => {
    return (
        <div>
            {
                content.map((element, idx) => {
                    if(element.type === "title"){
                        return (
                            <TitleContent key={idx} titleElement={element}/>
                        );
                    }
                    else if(element.type === "image"){
                        return (
                            <ImageContent key={idx} imageElement={element}/>
                        );
                    }
                    else if(element.type === "text" || element.type === "para"){
                        return (
                            <TextContent key={idx} textElement={element}/>
                        );
                    }
                    else{
                        return (
                            <ListContent key={idx} listElement={element}/>
                        );
                    }
                })
            }
        </div>
    );
}

export default memo(ContentSoft);