import { useContext } from "react";
import { CleaningDataContext } from "../CONTEXT/CleaningData";

const AmountOfTasks = () => {
  const context = useContext(CleaningDataContext);

  if (!context) return null;

  const {
    basicBedroom,
    basicBathroom,
    basicHalfBath,
    office,
    playroom,
    laundryRoom,
    familyRoom,
    gym,
    notListed,
  } = context;

  return (
    <>
      <div className="flex justify-center items-center text-sm sm:text-lg text-neutral-900 gap-1 sm:gap-4 bg-terraGreen py-8 px-1 mb-8 overflow-hidden rounded-md font-medium">
        <div className="flex">
          <span>{basicBedroom}</span>-<p>Bedrooms</p>
        </div>
        <div className="flex">
          <span>{basicBathroom}</span>-<p>Bathrooms</p>
        </div>
        <div className="flex">
          {basicHalfBath > 0 ? (
            <span>
              {basicHalfBath}-<span>Half Bath</span>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2">{office ? <span>Office</span> : null}</div>
        <div className="flex gap-2">
          {playroom ? <span>Playroon</span> : null}
        </div>
        <div className="flex gap-2">
          {laundryRoom ? <span>Laundry</span> : null}
        </div>
        <div className="flex gap-2">
          {familyRoom ? <span>Family Room</span> : null}
        </div>
        <div className="flex gap-2">{gym ? <span>Gym</span> : null}</div>
        <div className="flex gap-2">
          {notListed ? <span>Not Listed</span> : null}
        </div>
      </div>
    </>
  );
};

export default AmountOfTasks;
