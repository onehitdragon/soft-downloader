import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { memo, useEffect, useState } from "react";

const slides = [
    {
        url: "",
        image: "1.jpg"
    },
    {
        url: "",
        image: "2.jpg"
    },
    {
        url: "",
        image: "3.jpg"
    },
    {
        url: "",
        image: "4.jpg"
    },
    {
        url: "",
        image: "5.jpg"
    }
];

const SlideBar = () => {
    const [idxSlide, setIdxSlide] = useState(0);

    useEffect(() => {
        const linear = setInterval(() => {
            let next = idxSlide + 1;
            if(next === slides.length){
                next = 0;
            }
            setIdxSlide(next);
        }, 2500)

        return () => {
            clearInterval(linear);
        }
    }, [idxSlide]);

    return (
        <div className="flex justify-center">
            <div className="px-4 py-6 max-w-fit relative">
                <img alt="error" src={"/slide/" + slides[idxSlide].image}
                    className=""/>
                <hr className="border-none w-full h-1 bg-red-400"/>
                <button className="absolute bg-black rounded-full p-0.5 animate-pulse
                        top-1/2 -translate-y-1/2 -translate-x-1/2 shadow shadow-black bg-opacity-80"
                    onClick={() => {
                        let next = idxSlide - 1;
                        if(next === -1){
                            next = slides.length - 1;
                        }
                        setIdxSlide(next);
                    }}>
                    <ChevronLeftIcon className="w-8 text-red-400"/>
                </button>
                <button className="absolute bg-black rounded-full p-0.5 animate-pulse
                        top-1/2 right-0 -translate-y-1/2 shadow shadow-black bg-opacity-80"
                    onClick={() => {
                        let next = idxSlide + 1;
                        if(next === slides.length){
                            next = 0;
                        }
                        setIdxSlide(next);
                    }}>
                    <ChevronRightIcon className="w-8 text-red-400"/>
                </button>
                <ul className="absolute left-1/2 flex -translate-x-1/2 -translate-y-4">
                    {
                        slides.map((slide, idx) => {
                            if(slide === slides[idxSlide]){
                                return (
                                    <li key={slide.image} className="w-7 h-1.5 cursor-pointer mr-1 bg-red-400"
                                        onClick={() => { setIdxSlide(idx) }}></li>
                                );
                            }
                            else{
                                return (
                                    <li key={slide.image} className="w-7 h-1.5 bg-slate-400 cursor-pointer mr-1"
                                        onClick={() => { setIdxSlide(idx) }}></li>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default memo(SlideBar);