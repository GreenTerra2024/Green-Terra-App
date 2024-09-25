import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FormAddress from "./Pages/Home/FormAddress";
import MoveIn from "./Pages/MoveInOut/MoveIn";
import MoveInDetails from "./Pages/MoveInOut/MoveInDetails";
import VacationHome from "./Pages/VacationHome";
import VacationDetails from "./Pages/VacationDetails";
import CleaningChoiceBox from "./Pages/RegularCleaning/CleaningChoiceBox";
import BasicCleaning from "./Pages/RegularCleaning/BasicCleaning";
import BasicCleaningDetails from "./Pages/RegularCleaning/BasicCleaningDetails";
import BasicCleaningPrice from "./Pages/RegularCleaning/BasicCleaningPrice";
import BasicCleaningPriceExtra from "./Pages/RegularCleaning/BasicCleaningExtra";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormAddress />} />
        <Route path="/movein" element={<MoveIn />} />
         <Route path="/moveinDetails" element={<MoveInDetails />} />
       <Route path="/vacationHome" element={<VacationHome />} />
        <Route path="/vacationDetails" element={<VacationDetails />} />
        <Route path="/cleaningChoiceBox" element={<CleaningChoiceBox />} />
        <Route path="/basicCleaning" element={<BasicCleaning />} />
        <Route path="/basicCleaningDetails" element={<BasicCleaningDetails />} />
        <Route path="/basicCleaningPrice" element={<BasicCleaningPrice />} />
        <Route path="/basicCleaningPriceExtra/:id" element={<BasicCleaningPriceExtra />} />
      </Routes>
    </BrowserRouter>
  );
   
  
}

export default App;
