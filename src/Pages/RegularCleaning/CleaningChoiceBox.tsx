import  Container from "../../components/Container";
import Title from "../../components/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CleaningChoiceBox = () => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);

    const navigate = useNavigate();
    
    console.log(box1, box2, box3, box4);
    
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if(box1 && box2 && box3){
        console.log("submit");
      }else{
        navigate("/basicCleaning");
      }
    
    }

  return (
    <Container >
        <form id="movein" className="card bg-terraGray p-10 w-[420px] sm:w-[700px] sm:h-[700px] ">
            <h1 className="text-center text-2xl font-medium mb-10">👌Let's help you find the perfect clean for your space?</h1>
          <Title>Answer a few questions to find your ideal cleaning service.</Title>
        
        <div className="mt-10 flex flex-col gap-3">
          <div className="flex gap-3 border-2 py-4 px-2 rounded-lg hover:bg-terraDarkGray ">
                <input type="checkbox" className="checkbox" onChange={(e) => setBox1(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                Has it been over three months since your last professional cleaning?
                </label>
              </div>
          <div className="flex gap-3  border-2 py-4 px-2 rounded-lg hover:bg-terraDarkGray">
                <input type="checkbox" className="checkbox" onChange={(e) => setBox2(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                  Do you want those hard-to-reach spots behind and under furnitures and appliances to be cleaned?
                </label>
              </div>
          <div className="flex gap-3  border-2 py-4 px-2 rounded-lg hover:bg-terraDarkGray">
                <input type="checkbox" className="checkbox" onChange={(e) => setBox3(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                  Do you want your counters and baseboards to require more than just a quick wipe, perhaps a deep scrub to truly make them shine?
                </label>
              </div>
          <div className="flex gap-3  border-2 py-4 px-2 rounded-lg hover:bg-terraDarkGray">
                <input type="checkbox" className="checkbox" onChange={(e) => setBox4(e.target.checked)} />
                <label className="text-center font-medium text-lg">
                  Just looking for Basic Clean-up? We've got you covered!
                </label>
              </div>
        </div>

          <div className="card-actions justify-center sm:mt-10 mt-6">
            <a href="/vacationHome" className="btn-gray">Back</a>
            <button onClick={handleSubmit} className="btn-pink">Next</button>
          </div>
        </form>
      </Container>
  )
}

export default CleaningChoiceBox
