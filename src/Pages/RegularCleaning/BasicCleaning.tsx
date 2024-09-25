import Container from "../../components/Container";
import outdoor from "../../assets/icons/Outdoor.png";



const BasicCleaning = () => {
  return (
    <Container >
        <div className="card gap-8 bg-terraGray p-10 w-[420px] sm:w-[700px] sm:h-[700px] sm:pt-16">
           <div className="flex justify-center items-center gap-1 ml-[-50px]">

          <img src={outdoor} alt="leaves" className="w-24 h-24" />
          <h1 className="text-2xl text-center">Choose the clean that fits your needs.</h1>
           </div>
        
        <div className="mt-10 flex flex-col justify-center items-center ">

          <p className="font-medium text-center">Based on your responses, we recommend the basic cleaning service for maintaining a neat and orderly home on a budget. This service focus on routine upkeep and easy-to-reach areas, ensuring your space stays fresh and cean.</p>

            <a href="/basicCleaningDetails" className="w-full bg-terraPink py-3 rounded-md text-white text-lg text-center mt-6 hover:bg-[#d43ee2] ">Basic Cleaning</a>
        </div>

          <div className="flex flex-col items-center justify-center sm:mt-10 mt-6">
            <p className="font-medium text-center">However, if you are looking for a more thorough rejuvanation, consider upgrading to our Deluxe Cleaning. It's a comprehensive top-to-bottom clean, perfect for tacklinkg those hard-to-reach spots and providing detailed sanitization for truly spotless environments.</p>

            <a href="/basicCleaningDetails" className="w-full bg-terraPink py-3 rounded-md text-white text-lg text-center mt-6 hover:bg-[#d43ee2] ">Deluxe Cleaning</a>
          </div>
        </div>
      </Container>
  )
}

export default BasicCleaning
