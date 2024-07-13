import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FormAddress from "./components/FormAddress";
import MoveIn from "./Pages/MoveIn";
import MoveInDetails from "./Pages/MoveInDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormAddress />} />
        <Route path="/movein" element={<MoveIn />} />
         <Route path="/moveinDetails" element={<MoveInDetails />} />
       {/* <Route path="/workflow" element={<div>Workflow</div>} />
        <Route path="/pricing" element={<div>Pricing</div>} /> */}
      </Routes>
    </BrowserRouter>
  );

      {/* <section id="formAddress">
          <FormAddress />
      </section> */}

      {/* <section className="text-6xl font-bold" id="about">
        page 2
      </section>

      <section className="text-6xl font-bold" id="services">
        page 3
      </section>

      <section className="text-6xl font-bold" id="workflow">
        page 4
      </section>

      <section className="text-6xl font-bold" id="pricing">
        page 5
      </section> */}
   
  
}

export default App;
