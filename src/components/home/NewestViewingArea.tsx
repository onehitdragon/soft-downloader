import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import SoftGridTemplateArea from "./SoftGridTemplateArea";
import TitleBar from "./TitleBar";

const NewestViewingArea = () => {
    const listNewestViewing = useSelector<RootState, Soft[]>(state => state.home.listNewestViewing);

    return (
        <>
            <TitleBar head="MỚI" tail="NHẤT"/>
            <SoftGridTemplateArea softs={listNewestViewing}/>
        </>
    );
}

export default memo(NewestViewingArea);