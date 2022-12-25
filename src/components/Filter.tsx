import { memo, useEffect } from "react"
import HeaderBar from "./headerbar/HeaderBar";
import MainMenu from "./main-menu/MainMenu";
import { Listbox } from "@headlessui/react";
import { SwitchHorizontalIcon, CheckIcon } from "@heroicons/react/solid";
import SoftCategoryGridTemplateArea from "./home/SoftCategoryGridTemplateArea";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../feature/store";
import { Sort } from "../feature/filter/Sort.enum";
import { Order } from "../feature/filter/Order.enum";
import { updateCurOrder, updateCurSort } from "../feature/filter/filterSlice";

const Filter = () => {
    const curSort = useSelector<RootState, Sort>(state => state.filter.curSort);
    const curOrder = useSelector<RootState, Order>(state => state.filter.curOrder);
    const dispatch = useDispatch();
    
    const enumToOptions = (ee: any, selected: any, onSelected: (e: any) => any) => {
        return Object.keys(ee).map((e) => {
            return (
                <Listbox.Option key={ee[e]} value={""} className="px-2 py-1.5 hover:bg-red-400 hover:text-white transition-all"
                    onClick={(() => { onSelected(ee[e]) })}>
                    <div className="cursor-default flex">
                        {
                            ee[e] === selected &&
                            <CheckIcon className="w-5 mr-1 text-red-600"/>
                        }
                        <span>{ee[e]}</span>
                    </div>
                </Listbox.Option>
            );
        })
    }

    const navigate = useNavigate();
    const childCategory = useSelector<RootState, ChildCategory | null>(state => state.filter.curChildCategory);
    const softs = useSelector<RootState, Soft[]>(state => state.filter.softs);
    
    useEffect(() => {
        if(childCategory === null){
            navigate("/home");
        }
    }, [childCategory, navigate])


    return (
        <div className="mx-14 my-4 bg-slate-700 text-white">
            <HeaderBar />
            <MainMenu />
            <div className="mx-4 my-3 flex items-center">
                <span className="text-2xl font-bold">
                    { childCategory?.name }
                </span>
                <div className="flex-1 h-1 cursor-pointer bg-red-400 ml-4 rounded"></div>
            </div>
            <div className="mx-4 my-3 border border-slate-500 rounded-sm">
                <ul className="flex">
                   <li className="flex items-center mx-5 my-3.5">
                        <span className="mr-7 text-sm font-medium">Sắp xếp</span>
                        <Listbox>
                            <div className="relative w-36 text-black text-sm z-50">
                                <Listbox.Button className="rounded
                                    px-2 py-1.5 text-left bg-white w-full">
                                    <div className="flex justify-between">
                                        <span>{curSort}</span>
                                        <SwitchHorizontalIcon className="w-5"/>
                                    </div>
                                </Listbox.Button>
                                <Listbox.Options className="absolute w-full rounded bg-white py-0.5 mt-1">
                                    { 
                                        enumToOptions(Sort, curSort, (e) => {
                                            dispatch(updateCurSort(e));
                                        })
                                    }
                                </Listbox.Options>
                            </div>
                        </Listbox>
                   </li>
                   <li className="flex items-center mx-5 my-3.5">
                        <span className="mr-7 text-sm font-medium">Thứ tự</span>
                        <Listbox>
                            <div className="relative w-36 text-black text-sm z-50">
                                <Listbox.Button className="rounded
                                    px-2 py-1.5 text-left bg-white w-full">
                                    <div className="flex justify-between">
                                        <span>{curOrder}</span>
                                        <SwitchHorizontalIcon className="w-5"/>
                                    </div>
                                </Listbox.Button>
                                <Listbox.Options className="absolute w-full rounded bg-white py-0.5 mt-1">
                                    { 
                                        enumToOptions(Order, curOrder, (e) => {
                                            dispatch(updateCurOrder(e));
                                        })
                                    }
                                </Listbox.Options>
                            </div>
                        </Listbox>
                   </li>
                </ul>

            </div>
            <SoftCategoryGridTemplateArea 
                softs={softs}
            />
        </div>
    );
}

export default memo(Filter);