import { memo } from "react";

function NormalTableBody({ children }: { children: JSX.Element[] }){
    
    return (
        <tbody>
            { children }
        </tbody>
    );
}

export default memo(NormalTableBody);