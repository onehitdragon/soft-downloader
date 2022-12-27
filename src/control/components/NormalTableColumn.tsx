import { memo } from "react";

const NormalTableColumn = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <td className="p-2.5">
            { children }
        </td>
    );
}

export default memo(NormalTableColumn);