import  Container from "../components/Container";
import Title from "../components/Title";

const VacationHome = () => {
  return (
    <Container >
        <div id="movein" className="card bg-terraGray p-10 w-[420px] sm:w-[700px] h-[200px] ">
          <Title>Is this a Vacation Home? Rental Properties like Airbnb?</Title>
          <div className="card-actions justify-center sm:mt-10 mt-6">
            <a href="/cleaningChoiceBox" className="btn-gray">No</a>
            <a href="/vacationDetails" className="btn-pink">Yes</a>
          </div>
        </div>
      </Container>
  )
}

export default VacationHome
