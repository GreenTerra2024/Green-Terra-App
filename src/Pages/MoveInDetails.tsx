import Container from "../components/Container";
import house from "../assets/icons/house.png";
import Title from "../components/Title";
import { BedDouble, Bath, ChevronDown } from "lucide-react";

const MoveInDetails = () => {
  return (
    <div>
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
            <div className="flex justify-between items-center w-full px-4 py-6">
              <div>
                <h2 className="text-center font-medium">Bedroom</h2>
                <div className="flex gap-2 items-center mt-3">
                  <button className="bg-terraDarkGray w-8 h-8 rounded-full">
                    -
                  </button>
                  <span>0</span>
                  <button className="bg-terraDarkGray w-8 h-8 rounded-full">
                    +
                  </button>
                </div>
              </div>
              <div>
                <h2 className="text-center font-medium">Bathroom</h2>
                <div className="flex gap-2 items-center mt-3">
                  <button className="bg-terraDarkGray w-8 h-8 rounded-full">
                    -
                  </button>
                  <span>0</span>
                  <button className="bg-terraDarkGray w-8 h-8 rounded-full">
                    +
                  </button>
                </div>
              </div>
              <div>
                <h2 className="text-center font-medium">Half Bath</h2>
                <div className="flex gap-2 items-center mt-3">
                  <button className="bg-terraDarkGray w-8 h-8 rounded-full">
                    -
                  </button>
                  <span>0</span>
                  <button className="bg-terraDarkGray w-8 h-8 rounded-full">
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
                    <input type="checkbox" className="checkbox" />
                    <label className="text-center font-medium text-lg">
                      Office
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="checkbox" />
                    <label className="text-center font-medium text-lg">
                      Playroom
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="checkbox" />
                    <label className="text-center font-medium text-lg">
                      Laundry Room
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <input type="checkbox" className="checkbox" />
                    <label className="text-center font-medium text-lg">
                      Family Room
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="checkbox" />
                    <label className="text-center font-medium text-lg">
                      Gym
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="checkbox" />
                    <label className="text-center font-medium text-lg">
                      Not Listed
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-actions justify-center sm:mt-6 mt-6">
            <a href="/movein" className="btn-gray">
              Back
            </a>
            <a href="#moveincheckbox" className="btn-pink">
              Next
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoveInDetails;
