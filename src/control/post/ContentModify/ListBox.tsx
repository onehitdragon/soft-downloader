import { memo } from "react"
import { useDispatch } from "react-redux";
import { removeElementFromModifierContent } from "../../../feature/control/controlPost/PostContentModiferSlice";
import NormalButton from "../../components/NormalButton";

const ListBox = ({ listElement }: { listElement: ListElement }) => {
    const dispatch = useDispatch();

    return (
        <li className="flex mb-1.5">
            <ul className="bg-green-400 rounded p-2.5">
                {
                    listElement.value.map((value, idx) => {
                        return (
                            typeof value === "string" ?
                            <li className="flex mb-1.5" key={value + idx}>
                                <span className="p-1 mr-2 rounded-full bg-green-600"></span>
                                {value}
                            </li>
                            :
                            ""
                        );
                    })
                }
            </ul>
            <NormalButton label="Xoá"
                className="bg-red-500 ml-1.5 max-h-9"
                handleOnClick={() => {
                    dispatch(removeElementFromModifierContent(listElement));
                }}/>
        </li>
    );
}

export default memo(ListBox);