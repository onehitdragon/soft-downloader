import { memo, useEffect, useState } from "react";
import api from "../../util/api";
import NormalLoading from "../loading/NormalLoading";
import ListResult from "./ListResult";

const SearchBar = () => {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState<null | boolean>(null);
    const [result, setResult] = useState<Soft[]>([]);

    useEffect(() => {
        if(value === ""){
            setLoading(null);
            return;
        };

        setLoading(true);
        const wait = setTimeout(() => {
            api.get(`/soft/search?keyword=${value}`)
            .then((res) => {
                return res?.json();
            })
            .then((data: Soft[]) => {
                console.log(data);
                data.forEach((soft) => {
                    soft.content = (soft.content as any).replaceAll("\\", "\\\\");
                    soft.content = JSON.parse(soft.content as any);
                })
                setLoading(false);
                setResult(data);
            })
            .catch((err) => {
                console.log(err);
                setLoading(null);
            })
        }, 2000)

        return () => {
            clearTimeout(wait);
        }
    }, [value])

    return (
        <div className="flex-1 mx-2 max-w-lg relative">
            <input className="w-full px-2.5 py-1.5 text-base text-black outline-none" placeholder="Tìm kiếm gì đó..."
                value={value}
                onChange={(e) => { setValue(e.target.value); }} />
            {
                loading === null ? "" :
                loading ?
                <NormalLoading className="pt-1.5"/>
                :
                <ListResult softs={result}/>
            }
        </div>
    );
}

export default memo(SearchBar);