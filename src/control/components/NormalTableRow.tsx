import { memo } from "react";

function NormalTableRow({ children }: { children: JSX.Element[] }){
    
    return (
        <tr className="bg-slate-500 odd:bg-slate-600">
            { children }
        </tr>
    );
}

export default memo(NormalTableRow);