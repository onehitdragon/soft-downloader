import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import SoftGridTemplateArea from "./SoftGridTemplateArea";
import TitleBar from "./TitleBar";

const HightestViewingArea = () => {
    const listHightestViewing = useSelector<RootState, Soft[]>(state => state.home.listHightestViewing);

    return (
        <>
            <TitleBar head="XEM" tail="NHIỀU"/>
            <SoftGridTemplateArea softs={listHightestViewing}/>
        </>
    );
}

export default memo(HightestViewingArea);