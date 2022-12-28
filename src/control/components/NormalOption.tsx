import { memo } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, SwitchHorizontalIcon } from "@heroicons/react/solid";

function NormalOption<Item>({ listItem, selectItem, print, handleOnSelected }: { listItem: Item[], selectItem: Item, print: (i: Item) => string, handleOnSelected: (i: Item) => any }){
    return (
        <Listbox>
            <div className="relative w-40 text-black text-sm z-30">
                <Listbox.Button className="rounded
                    px-2 py-1.5 text-left bg-white w-full">
                    <div className="flex justify-between">
                        <span>{ print(selectItem) }</span>
                        <SwitchHorizontalIcon className="w-5"/>
                    </div>
                </Listbox.Button>
                <Listbox.Options className="absolute w-full rounded bg-white py-0.5 mt-1">
                    {
                        listItem.map((i) => {
                            return (
                                <Listbox.Option key={print(i)} value={print(i)} className="px-2 py-1.5 hover:bg-red-400 hover:text-white transition-all"
                                    onClick={(() => { handleOnSelected(i) })}>
                                    <div className="cursor-default flex">
                                        { selectItem === i && <CheckIcon className="w-5 mr-1 text-red-600"/> }
                                        <span>{print(i)}</span>
                                    </div>
                                </Listbox.Option>
                            );
                        })
                    }
                </Listbox.Options>
            </div>
        </Listbox>
    );
}

export default memo(NormalOption);