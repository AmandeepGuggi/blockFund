import { useEffect, useState } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";

export default function Carousal({children: slides, AutoSlide }){
  
    const [curr, setCurr] = useState(0);
    const autoSlideInterval = 3000
    const prev = () => {
        setCurr(curr === 0 ? slides.length - 2 : curr - 1);
      };
   
  const next = () => {
    setCurr(curr === slides.length - 2 ? 0 : curr + 1);
  };

  useEffect(()=> {
    if (!AutoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [curr])
    return (
        <div className="overflow-hidden relative ">
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr*100}%)`}}>
                {slides}
            </div>

            {/* <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white" >
                    <ChevronsLeft size={40} />
                </button>
                <button onClick={next} className="p-1 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white">
                    <ChevronsRight size={40} />
                </button>
            </div> */}

            <div className="absolute bottom-10 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {
                        slides.map((_,i)=> (
                            <div 
                            className={`
                                transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-4": "bg-opacity-50"}
                                `} />
                        ))
                    }
                </div>
            </div>

        </div>
       
    )
}