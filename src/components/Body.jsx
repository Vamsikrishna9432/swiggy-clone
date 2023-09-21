import useGetData from "../utils/customHooks/useGetData";
import {SWIGGY_MAIN_API} from "../utils/constants";
import BestOffersForYou from "./BestOffersForYou";
import WhatsOnYourMind from "./WhatsOnYourMind";

const Body = () => {
     const data = useGetData(SWIGGY_MAIN_API);
     console.log("whatsonyourmind",data?.data?.cards[1]);
     return (
     <div className="w-full flex flex-col justify-center">
          <BestOffersForYou offersdata={data?.data?.cards[0]?.card?.card?.imageGridCards?.info}/>
          <WhatsOnYourMind intrestdata={data?.data?.cards[1]?.card?.card?.imageGridCards?.info}/>
     </div>
     )
};

export default Body;