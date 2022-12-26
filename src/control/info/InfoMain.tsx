import { memo } from "react"
import NormalTilteBar from "../components/NormalTilteBar";
import InfoBody from "./InfoBody";

const InfoMain = () => {
    return (
        <>
            <NormalTilteBar title="Thông tin"/>
            <InfoBody />
        </>
    );
}

export default memo(InfoMain);