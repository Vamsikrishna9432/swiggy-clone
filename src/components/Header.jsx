import foodlogo from "../assets/onifood-logo.png";

const Header = () => {
      return (
        <div className="w-full bg-white shadow-lg flex justify-between items-center pr-6">
            <div className="">
                <img src={foodlogo} alt="onifood logo" className="w-32 h-24"/>
            </div>
            <ul className="list-none flex align-middle text-lg font-medium text-red-500">
                <li className="my-auto mx-7">Online Status: 💚</li>
                <li className="my-auto mx-7">Home</li>
                <li className="my-auto mx-7">Contact</li>
                <li className="my-auto mx-7">About</li>
                <li className="my-auto mx-7">Cart</li>
            </ul>
        </div>
      )
};

export default Header;