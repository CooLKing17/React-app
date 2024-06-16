import { useEffect, useRef } from "react";
import { CDNCarouselIm } from "../Routing/Config";
import { Link } from "react-router-dom";

const Carousel = ({ info }) => {
  const scrollContainerCar = useRef(null);
  console.log(info)
  const scrollLeftCar = () => {
    scrollContainerCar.current.scrollBy({
      left: -400,
      behavior: 'smooth',
    });
  };

  const scrollRightCar = () => {
    scrollContainerCar.current.scrollBy({
      left: 400,
      behavior: 'smooth',
    });
  };

  const extractBetween = (str, startChar, endChar) => {
    const startIndex = str.indexOf(startChar) + startChar.length;
    const endIndex = str.indexOf(endChar, startIndex);
    if (startIndex >= startChar.length && endIndex > startIndex) {
      return str.substring(startIndex, endIndex).trim();
    }
    return null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRightCar();
    }, 2000); // Adjust the time interval as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative pt-4 mt-4 p-4">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="bg-transparent border-2 border-black text-black hover:text-white text-3xl w-10 h-20 rounded-full p-2 hover:bg-gray-600"
          onClick={scrollLeftCar}
        >
          &lt;
        </button>
      </div>
      <div
        className="flex overflow-x-auto scrollbar-hide space-x-4"
        ref={scrollContainerCar}
      >
        {info &&
          info.map((item, index) => (
            <div
              key={index}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex-shrink-0 w-64 h-64"
            >
              <Link
                to={`/restofilter/${extractBetween(item.action.link, 'collection_id=', '&type=rcv2')}`}
              >
                <img
                  className="w-60 h-60"
                  src={CDNCarouselIm + item.imageId}
                  alt=""
                />
              </Link>
            </div>
          ))}
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="bg-transparent border-2 border-black text-black hover:text-white text-3xl w-10 h-20 rounded-full p-2 hover:bg-gray-600"
          onClick={scrollRightCar}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
