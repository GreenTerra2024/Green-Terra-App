import Container from "../components/Container";
import house from "../assets/icons/house.png";
import Title from "../components/Title";
import { BedDouble, Bath, ChevronDown } from "lucide-react";
import { useState } from "react";


const VacationDetails = () => {
    const [Bedroom, setBedroom] = useState(0);
    const [Bathroom, setBathroom] = useState(0);
    const [HalfBath, setHalfBath] = useState(0);
  const [office, setOffice] = useState(false);
  const [playroom, setPlayroom] = useState(false);
  const [laundryRoom, setLaundryRoom] = useState(false);
  const [familyRoom, setFamilyRoom] = useState(false);
  const [gym, setGym] = useState(false);
  const [notListed, setNotListed] = useState(false);
  
    console.log(Bedroom, Bathroom, HalfBath);
  
    const BedroomDecrement = () => {
      if (Bedroom > 0) {
        setBedroom(prev => prev - 1)
      }
    }
  
    const BathroomDecrement = () => {
      if (Bathroom > 0) {
        setBathroom(prev => prev - 1)
      }
    }
  
    const HalfBathDecrement = () => {
      if (HalfBath > 0) {
        setHalfBath(prev => prev - 1)
      }
    }


  return (
    <Container>
    <div
      id="movein"
      className="card bg-terraGray p-2 sm:p-10 w-[420px] sm:w-[700px] h-[700px] "
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
        <div className="flex justify-between items-center w-full px-4 py-6 ">
          <div className="w-28">
            <h2 className="text-center font-medium">Bedroom</h2>
            <div className="flex gap-2 items-center mt-3">
              <button onClick={BedroomDecrement} className="bg-terraDarkGray w-8 h-8 rounded-full">
                -
              </button>
              <span className="flex items-center justify-center w-10 h-8">{Bedroom}</span>
              <button onClick={() => setBedroom(prev => prev + 1)} className="bg-terraDarkGray w-8 h-8 rounded-full">
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
              <span className="flex items-center justify-center w-10 h-8">{Bathroom}</span>
              <button onClick={() => setBathroom(prev => prev + 1)} className="bg-terraDarkGray w-8 h-8 rounded-full">
                +
              </button>
            </div>
          </div>
          <div className="w-28">
            <h2 className="text-center font-medium">Half Bath</h2>
            <div className="flex gap-2 items-center mt-3">
              <button onClick={HalfBathDecrement} className="bg-terraDarkGray w-8 h-8 rounded-full">
                -
              </button>
              <span className="flex items-center justify-center w-10 h-8">{HalfBath}</span>
              <button onClick={() => setHalfBath(prev => prev + 1)} className="bg-terraDarkGray w-8 h-8 rounded-full">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Supliance */}
      <p className="mt-8 text-center font-medium text-xl">
        We have added the Kitchen, dinning room and Living room.
      </p>
      <div className="collapse border-2 rounded mt-6 text-center font-medium ">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium flex justify-center items-center sm:ml-24 ml-10">
          Are there any other rooms?
          <ChevronDown size={30} className="sm:ml-32 ml-10" />
        </div>
        <div className="collapse-content">
          <div className="flex gap-8 justify-center">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" onChange={(e) => setOffice(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                  Office
                </label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" onChange={(e) => setPlayroom(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                  Playroom
                </label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" onChange={(e) => setLaundryRoom(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                  Laundry Room
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" onChange={(e) => setFamilyRoom(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                  Family Room
                </label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" onChange={(e) => setGym(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                  Gym
                </label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" onChange={(e) => setNotListed(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                  Not Listed
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-actions justify-center sm:mt-6 mt-6">
        <a href="/vacationHome" className="btn-gray">
          Back
        </a>
        <a href="" className="btn-pink">
          Next
        </a>
      </div>
    </div>
  </Container>
  )
}

export default VacationDetails
