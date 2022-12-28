import { memo } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../../feature/store";
import ButtonAddImageBox from "./ButtonAddImageBox";
import ButtonAddTextBox from "./ButtonAddTextBox";
import ButtonAddTitleBarBox from "./ButtonAddTitleBarBox";
import ImageBox from "./ImageBox";
import ListBox from "./ListBox";
import TextBox from "./TextBox";
import TitleBarBox from "./TitleBarBox";

const PostContentModifer = () => {
    const modifierContent = useSelector<RootState, (TitleElement | TextElement | ParaElement | ListElement | ImageElement)[]>(state => state.postModifierContent.modifierContent);
    
    return (
        <div className="flex">
            <ul className="flex flex-col w-full">
                {
                    modifierContent.map((e, idx) => {
                        if(e.type === "title"){
                            return (
                                <TitleBarBox key={idx} titleElement={e}/>
                            );
                        }
                        else if(e.type === "image"){
                            return (
                                <ImageBox key={idx} imageElement={e}/>
                            );
                        }
                        else if(e.type === "text" || e.type === "para"){
                            return (
                                <TextBox key={idx} textElement={e}/>
                            );
                        }
                        else{
                            return (
                                <ListBox key={idx} listElement={e}/>
                            );
                        }
                    })
                }
            </ul>
            <div className="mx-1.5 border"></div>
            <div className="flex flex-col min-w-fit">
                <ButtonAddTitleBarBox />
                <ButtonAddImageBox />
                {/* <NormalButton label="Thêm danh sách" className="bg-green-400 mb-1.5"
                    handleOnClick={() => {}}/> */}
                <ButtonAddTextBox />
            </div>
        </div>
    );
}

export default memo(PostContentModifer);