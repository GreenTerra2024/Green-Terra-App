import Container from "../../components/Container";
import Title from "../../components/Title";
import { cleaningData, extraService } from "../../Ultils/Utils";
import { Link } from "react-router-dom";
import AmountOfTasks from "../../components/AmountOfTasks";
import { CleaningDataContext } from "../../CONTEXT/CleaningData";
import { useContext } from "react";


const BasicCleaningPrice = () => {
  const context = useContext(CleaningDataContext);
  if (!context) return null;
  const { fullPrice, discount10, discount25, discount35, extraRoomCart } = context;


console.log(fullPrice);


  return (
    <Container>
      <div className="card bg-white sm:bg-terraGray p-2 sm:p-10 w-[420px] sm:w-[900px] h-screen sm:h-[1100px] ">
        {/* amount of Tasks ============= */}
        <AmountOfTasks />

        <Title>
          Thinking about a one-time cleaning or something more regular?
        </Title>

        <p className="mt-4 sm:mt-8 mb-8 sm:mb-12 text-center">
          Opt for our recurring plan for the ultimate value! As a regular,
          you'll get your own dedicated tech team, VIP scheduling options, and
          major discounts We're all about keeping your space respected and
          spotless, all the time.
        </p>

        <Title>
          Choose our recurring service and keep your home consistently fresh.
        </Title>

        {/* Basic Cleaning =========================*/}
        <div className="flex flex-col gap-4 mt-8 mb-10 sm:mb-16 bg-pink-100 px-2 py-6 rounded-lg">
          <h1 className="bg-terraGreen p-2 rounded-lg w-36 text-center text-white font-medium">
            Basic Cleaning
          </h1>
          <div className="flex gap-3">

           {/* 35% discount */}
          <div className="flex gap-3">
            <div className="bg-white py-6 rounded-lg w-48 text-center text-black font-medium hover:bg-green-300 cursor-pointer hover:scale-110 duration-300">
              <Link to={`/basicCleaningPriceExtra/${cleaningData[0].id}`}>
                <h2 className="text-[18px] mb-3">
                  {cleaningData[0].time}
                  <span className="text-green-500  text-[22px]"> {cleaningData[0].desc}%</span>
                </h2>
                <span className="text-2xl text-terraDarkGreen">${discount35}</span>
                <span className="text-gray-400"> /per visit</span>
              </Link>
            </div>
          </div>

          {/* 25% discount */}
          <div className="flex gap-3">
            <div className="bg-white py-6 rounded-lg w-48 text-center text-black font-medium hover:bg-green-300 cursor-pointer hover:scale-110 duration-300">
              <Link to={`/basicCleaningPriceExtra/${cleaningData[1].id}`}>
                <h2 className="text-[18px] mb-3">
                  {cleaningData[1].time}
                  <span className="text-green-500  text-[22px]"> {cleaningData[1].desc}%</span>
                </h2>
                <span className="text-2xl text-terraDarkGreen">${discount25}</span>
                <span className="text-gray-400"> /per visit</span>
              </Link>
            </div>
          </div>

          {/* 10% discount */}
          <div className="flex gap-3">
            <div className="bg-white py-6 rounded-lg w-48 text-center text-black font-medium hover:bg-green-300 cursor-pointer hover:scale-110 duration-300">
              <Link to={`/basicCleaningPriceExtra/${cleaningData[2].id}`}>
                <h2 className="text-[18px] mb-3">
                  {cleaningData[2].time}
                  <span className="text-green-500  text-[22px]"> {cleaningData[2].desc}%</span>
                </h2>
                <span className="text-2xl text-terraDarkGreen">${discount10}</span>
                <span className="text-gray-400"> /per visit</span>
              </Link>
            </div>
          </div>

          {/* Full Price */}
          <div className="flex gap-3">
            <div className="bg-white py-6 rounded-lg w-48 text-center text-black font-medium hover:bg-green-300 cursor-pointer hover:scale-110 duration-300">
              <Link to={`/basicCleaningPriceExtra/${cleaningData[3].id}`}>
                <h2 className="text-[18px] mb-3">
                  {cleaningData[3].time}
                  
                </h2>
                <span className="text-2xl text-terraDarkGreen">${fullPrice}</span>
                <span className="text-gray-400"> /per visit</span>
              </Link>
            </div>
          </div>


          </div>
        </div>

        <Title>
          for a deep clean, upgrade to our Deluxe Cleaning. It offers a thorough
          top-to-bottom clean, tackling hard-to-reach spots and providing
          detailed sanitization for a spotless home.
        </Title>

        {/* Deluxe Cleaning =============*/}
        <div className="flex flex-col gap-4 bg-pink-100 px-2 py-6 mt-8 rounded-lg">
          <h1 className="bg-terraPink p-2 rounded-lg w-36 text-center text-white font-medium">
            Deluxe Cleaning
          </h1>

          <div className="flex gap-3">
            {cleaningData
              .map((item, index) => (
                <div key={index} className="bg-white py-6 rounded-lg w-48 text-center text-black font-medium hover:bg-pink-200 cursor-pointer hover:scale-110 duration-300">
                  {item.category === "deluxe" ? (
                    <Link
                      to={`/basicCleaningPriceExtra/${item.id}`}
                      key={index}
                    >
                      <h2 className="text-[18px] mb-3">
                        {item.time}{" "}
                        {item.desc > String(0) ? (
                          <span className="text-green-500 text-[22px]">
                            {item.desc}%
                          </span>
                        ) : null}
                      </h2>
                      <span>$100.00</span>{" "}
                      <span className="text-gray-400"> /per visit</span>
                    </Link>
                  ) : null}
                </div>
              ))
              .slice(4, 8)}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BasicCleaningPrice;
