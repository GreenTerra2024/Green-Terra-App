import Container from "../../components/Container";
import house from "../../assets/icons/house.png";
import Title from "../../components/Title";
import { BedDouble, Bath, ChevronDown } from "lucide-react";
import { useContext, useState } from "react";
import { CleaningDataContext } from "../../CONTEXT/CleaningData";
import { extraRooms } from "../../Ultils/Utils";


interface ExtraRoomProps{
  id: string;
  price: string;
  title: string;
}

const BasicCleaningDetails = () => {
  const [click, setClick] = useState<boolean>(false);
    const context = useContext(CleaningDataContext);
    //const [extraRoomCart, setExtraRoomCart] = useState<ExtraRoomProps[]>([]);
  
    if (!context)  return null;
    const { basicBedroom,  basicBathroom, basicHalfBath, BedroomDecrement, BathroomDecrement, HalfBathDecrement, BedroomIncrement, BathroomIncrement, HalfBathIncrement, extraRoomCart, setExtraRoomCart } = context;
   

    const addToCart = (item: ExtraRoomProps) => {
      const newCart = [...extraRoomCart,item]
      //setExtraRoomCart(newCart as ExtraRoomProps[]);
    }
    
    const handleRemove = (item: ExtraRoomProps) => {
      if (Array.isArray(extraRoomCart)) {
      const newCart = extraRoomCart.filter((cartItem: ExtraRoomProps) => cartItem.id !== item.id);
      //setExtraRoomCart(newCart);
      }
    };
  
 
    
     
  return (
    <Container>
        <div
          id="movein"
          className="card bg-terraGray p-2 sm:p-10 w-[420px] sm:w-[700px] h-[750px] "
        >
          <div className="flex justify-center items-center gap-3">
            <img src={house} alt="house" className="w-10 h-10" />
            <Title>Tell us about your home!</Title>
          </div>

          {/* Icons */}
          <div className="flex flex-col justify-center items-center gap-10 p-2 mt-6">
            <div className="flex justify-center items-center gap-10">
              <BedDouble size={60} />
              <Bath size={60} />
            </div>

            {/* Count Stats */}
            <div className="flex justify-between items-center w-full px-4 py-6 mb-8 ">
              <div className="w-28">
                <h2 className="text-center font-medium">Bedroom</h2>
                <div className="flex gap-2 items-center mt-3">
                  <button onClick={BedroomDecrement} className="bg-terraDarkGray w-8 h-8 rounded-full">
                    -
                  </button>
                  <span className="flex items-center justify-center w-10 h-8">{basicBedroom}</span>
                  <button onClick={BedroomIncrement} className="bg-terraDarkGray w-8 h-8 rounded-full">
                    +
                  </button>
                </div>
              </div>
              <div className="w-28">
                <h2 className="text-center font-medium">Bathroom</h2>
                <div className="flex gap-2 items-center mt-3">
                  <button onClick={BathroomDecrement} className="bg-terraDarkGray w-8 h-8 rounded-full">
                    -
                  </button>
                  <span className="flex items-center justify-center w-10 h-8">{basicBathroom}</span>
                  <button onClick={BathroomIncrement} className="bg-terraDarkGray w-8 h-8 rounded-full">
                    +
                  </button>
                </div>
              </div>
              <div className="w-28">
                <h2 className="text-center font-medium">Half Bath</h2>
                <div className="flex gap-2 items-center mt-3">
                  <button onClick={HalfBathDecrement} className="bg-terraDarkGray w-8 h-8 rounded-full ">
                    -
                  </button>
                  <span className="flex items-center justify-center w-10 h-8">{basicHalfBath}</span>
                  <button onClick={HalfBathIncrement} className="bg-terraDarkGray w-8 h-8 rounded-full">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*=====================================  Add Supliance */}
          <Title>
            We have added the Kitchen, dinning room and Living room.
          </Title>
          <div className="collapse border-2 rounded mt-6 text-center font-medium ">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium flex justify-center items-center sm:ml-24 ml-10">
              Are there any other rooms?
              <ChevronDown size={30} className="sm:ml-32 ml-10" />
            </div>
            <div className="collapse-content ">
              <div className="flex gap-8ent justify-center">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3">
                   
                  {/* {extraRoomCart?.includes(extraRooms[0]) ? (
                    <button className="btn-pink-small" onClick={() => handleRemove(extraRooms[0])}>remove</button>
                    ) : (
                     <button className="btn-pink-small" onClick={() => addToCart( extraRooms[0])}>Add</button>
                )} */}
                  <button className="btn-pink-small" onClick={() => setClick(!click)}>{click ? "remove" : "Add"}</button>
                    <label className="text-center font-medium text-lg">
                      Office
                    </label>
                  </div>
                  <div className="flex gap-3">
                  {extraRoomCart?.includes(extraRooms[1]) ? (
                    <button className="btn-pink-small" onClick={() => handleRemove(extraRooms[1])}>remove</button>
                    ) : (
                     <button className="btn-pink-small" onClick={() => addToCart( extraRooms[1])}>Add</button>
                   )}
                    <label className="text-center font-medium text-lg">
                      Playroom
                    </label>
                  </div>
                  <div className="flex gap-3">
                  {extraRoomCart?.includes(extraRooms[2]) ? (
                    <button className="btn-pink-small" onClick={() => handleRemove(extraRooms[2])}>remove</button>
                    ) : (
                     <button className="btn-pink-small" onClick={() => addToCart( extraRooms[2])}>Add</button>
                   )}
                    <label className="text-center font-medium text-lg">
                      Laundry Room
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2 ml-5">
                  <div className="flex gap-3">
                  {extraRoomCart?.includes(extraRooms[3]) ? (
                    <button className="btn-pink-small " onClick={() => handleRemove(extraRooms[3])}>remove</button>
                    ) : (
                     <button className="btn-pink-small" onClick={() => addToCart( extraRooms[3])}>Add</button>
                   )}
                    <label className="text-center font-medium text-lg">
                      Family Room
                    </label>
                  </div>
                  <div className="flex gap-3">
                  {extraRoomCart?.includes(extraRooms[4]) ? (
                    <button className="btn-pink-small" onClick={() => handleRemove(extraRooms[4])}>remove</button>
                    ) : (
                     <button className="btn-pink-small" onClick={() => addToCart( extraRooms[4])}>Add</button>
                )}
                    <label className="text-center font-medium text-lg">
                      Gym
                    </label>
                  </div>
                  <div className="flex gap-3">
                  {extraRoomCart?.includes(extraRooms[5]) ? (
                    <button className="btn-pink-small" onClick={() => handleRemove(extraRooms[5])}>Remove</button>
                  ):( 
                     <button className="btn-pink-small" onClick={() => addToCart( extraRooms[5])}>Add</button>
                  )}
                    <label className="text-center font-medium text-lg">
                      Not Listed
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-actions justify-center sm:mt-6 mt-6">
            <a href="/basicCleaning" className="btn-gray">
              Back
            </a>
            <a href="/basicCleaningPrice" className="btn-pink">
              Next
            </a>
          </div>
        </div>
      </Container>
  )
}

export default BasicCleaningDetails
