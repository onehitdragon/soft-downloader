import { memo } from "react"

function NormalTable({ children }: { children: JSX.Element[] }){
    
    return (
        <table>
            { children }
        </table>
    );
}

export default memo(NormalTable);