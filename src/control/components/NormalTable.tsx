import { memo } from "react"

function NormalTable<T>({ titles, rows }: { titles: string[], rows: T[] }){
    return (
        <table>
            <thead>
                <tr className="bg-slate-600">
                    {
                        titles?.map((title) => {
                            return (
                                <td className="p-2.5 text-center font-medium min-w-fit" key={title}>
                                    {title}
                                </td>
                            );
                        })
                    }
                </tr>
            </thead>
            <tbody>
                <tr className="bg-slate-500">
                    <td className="p-2.5">1</td>
                    <td className="p-2.5">Ghost Win 7 Ultimate 2018 – No Soft & Full Driver</td>
                    <td className="p-2.5">Nội dung</td>
                    <td className="p-2.5">Tác giả</td>
                    <td className="p-2.5">Lượt xem</td>
                    <td className="p-2.5">Ngày tạo</td>
                    <td className="p-2.5">Thể loại</td>
                </tr>
            </tbody>
        </table>
    );
}

export default memo(NormalTable);