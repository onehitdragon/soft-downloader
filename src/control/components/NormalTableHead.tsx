import { memo } from "react"

const NormalTableHead = ({ titles }: { titles: string[] }) => {
    return (
        <thead>
            <tr className="bg-red-400">
                {
                    titles?.map((title, idx) => {
                        return (
                            <td className="p-2.5 text-center font-medium min-w-fit" key={idx}>
                                {title}
                            </td>
                        );
                    })
                }
            </tr>
        </thead>
    );
}

export default memo(NormalTableHead);