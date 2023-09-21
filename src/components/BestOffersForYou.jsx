import {useRef } from "react";
import { CDN_URL } from "../utils/constants";

const BestOffersForYou = (props) => {

  const offersdata  = props?.offersdata;
  const ref = useRef(null);
  
  const rightScroll = () => {
     ref.current.scrollLeft += 400;
  };

  const leftScroll = () => {
      ref.current.scrollLeft -= 400;
  };

 

  return (
    <div className="relative w-10/12 m-auto  my- flex-shrink-0">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-[28px] text-blacks my-3 mx-3">
          Best offers for you
        </h1>
        <div className="my-3 mx-3">
          <button className="rounded-full p-1 bg-gray-300 hover:animate-pulse mr-2 hover:bg-sky-300" id="prevBtn" onClick={leftScroll}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button id="nextBtn" className="rounded-full p-1 bg-gray-300 hover:animate-pulse my-2 hover:bg-sky-300" onClick={rightScroll}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
              </svg>
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth" ref={ref}>
          {offersdata?.map((each) => (
            <div
              key={each.id}
              className="m-4 flex-shrink-0 w-{450px} rounded transition-all"
            >
              <img
                src={CDN_URL + each.imageId}
                alt="Offer-Banner"
                className="h-56 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestOffersForYou;
