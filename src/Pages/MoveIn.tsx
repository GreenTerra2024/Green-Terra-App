import Container from "../components/Container";
import Title from "../components/Title";

const MoveIn = () => {
  return (
    <div id="movein">
      {/* Move in or out =========== */}
      <Container >
        <div id="movein" className="card bg-terraGray p-10 w-[420px] sm:w-[700px] h-[200px] ">
          <Title>Are you moving in or out of your home?</Title>
          <div className="card-actions justify-center sm:mt-10 mt-6">
            <a href="/" className="btn-gray">No</a>
            <a href="#moveincheckbox" className="btn-pink">Yes</a>
          </div>
        </div>
      </Container>

      {/* Checkbox Move in or out =========== */}
      <Container>
        <div id='moveincheckbox' className="card flex flex-col justify-center items-center bg-terraGray p-10 w-[420px] sm:w-[700px] h-[300px] ">
          <div className="flex gap-3 mb-6">
            <input type="checkbox" className="checkbox" />
            <label className="text-center font-medium text-xl">Moving-out from your Home?</label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox"  className="checkbox" />
            <label className="text-center font-medium text-xl">Moving-in to a new Home?</label>
          </div>
          <div className="card-actions justify-center sm:mt-10 mt-6">
            <a href="#movein" className="btn-gray">Back</a>
            <button className="btn-pink">Next</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoveIn;
