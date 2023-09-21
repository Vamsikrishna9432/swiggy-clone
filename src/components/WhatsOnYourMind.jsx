import React,{useRef} from 'react'
import { CDN_URL } from '../utils/constants';

const WhatsOnYourMind = ({intrestdata}) => {

    const ref = useRef(null);

  return (
    <div className="relative w-10/12 m-auto  my-1 flex-shrink-0">
        <h1 className="font-bold text-[28px] text-blacks my-3 mx-3">
           What's on your mind?
        </h1>
        <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth" ref={ref}>
          {intrestdata?.map((each) => (
            <div
              key={each.id}
              className="m-2 w-{144px} h-{180px} flex-shrink-0 transition-all"
            >
              <img
                src={CDN_URL + each.imageId}
                alt="Offer-Banner"
                className="w-{90px} h-{120px} flex-shrink-0"
              />
            </div>
          ))}
        </div>
    </div>
  )
}

export default WhatsOnYourMind