import Container from "../../components/Container";
import Title from "../../components/Title";
import { useState } from "react";

const MoveIn = () => {
  const [moveIn, setMoveIn] = useState(false);
  const [moveOut, setMoveOut] = useState(false);

  console.log(moveIn, moveOut);
  

  return (
    <div id="movein">
      {/* Move in or out =========== */}
      <Container >
        <div id="movein" className="card bg-terraGray p-10 w-[420px] sm:w-[700px] h-[200px] ">
          <Title>Are you moving in or out of your home?</Title>
          <div className="card-actions justify-center sm:mt-10 mt-6">
            <a href="/vacationHome" className="btn-gray">No</a>
            <a href="#moveincheckbox" className="btn-pink">Yes</a>
          </div>
        </div>
      </Container>

      {/* Checkbox Move in or out =========== */}
      <Container>
        <div id='moveincheckbox' className="card flex flex-col justify-center items-center bg-terraGray p-10 w-[420px] sm:w-[700px] h-[300px] ">
          <div className="flex gap-3 mb-6">
            <input type="checkbox" className="checkbox" onChange={(e) => setMoveOut(e.target.checked)} />
            <label className="text-center font-medium text-xl">Moving-out from your Home?</label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox"  className="checkbox" onChange={(e) => setMoveIn(e.target.checked)} />
            <label className="text-center font-medium text-xl">Moving-in to a new Home?</label>
          </div>
          <div className="card-actions justify-center sm:mt-10 mt-6">
            <a href="#movein" className="btn-gray">Back</a>
            <a href="/moveInDetails" className="btn-pink">Next</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoveIn;
