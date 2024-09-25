import { createContext, useEffect, useState } from "react";
import { combinationRooms, cleaningData } from "../Ultils/Utils";


export const CleaningDataContext = createContext(null);

interface ExtraRoomProps{
  id: string,
  price: string,
  title: string
}
const getBasicRooms = () => {
  const localStorageTasks = localStorage.getItem("basicRooms");
  return localStorageTasks
    ? JSON.parse(localStorageTasks)
    : { basicBedroom: 0, basicBathroom: 0, basicHalfBath: 0 };
};

const getHouseExtraRooms = () => {
  const localStorageTasks = localStorage.getItem("extraRoomCart");
  return localStorageTasks ? JSON.parse(localStorageTasks) :  [
    {
      id: "1",
      price: "40",
      title: "Office"
  },
  {
      id: "2",
      price: "40",
      title: "Playroom"
  },
  {
      id: "3",
      price: "40",
      title: "Laundry Room"
    },
{
        id: "4",
        price: "40",
        title: "Family Room"
     },
 {
         id: "5",
         price: "40",
         title: "Gym"
       },
 {
         id: "6",
         price: "40",
         title: "Not Listed"
       },
  ] ;
};


export const CleaningData = ({ children }: { children: React.ReactNode }) => {
 
  // Basic Cleaning ===========
  const [basicBedroom, setBasicBedroom] = useState<number>(
    getBasicRooms().basicBedroom
  );
  const [basicBathroom, setBasicBathroom] = useState<number>(
    getBasicRooms().basicBathroom
  );
  const [basicHalfBath, setBasicHalfBath] = useState<number>(
    getBasicRooms().basicHalfBath
  );
  
  const [extraRoomCart, setExtraRoomCart] = useState<ExtraRoomProps>(getHouseExtraRooms);

  const [cleaningDataObject, setCleaningDataObject] = useState(cleaningData);
 


  let fullPrice = 0;
  if(basicBedroom && basicBedroom === 1){
    fullPrice = Number(combinationRooms[0].price);
  }else if(basicBedroom && basicBedroom === 2){
    fullPrice = Number(combinationRooms[1].price);
  }else if(basicBedroom && basicBedroom === 3){
    fullPrice = Number(combinationRooms[2].price);
  }else if(basicBedroom === 2 && basicBathroom === 1){
    fullPrice = Number(combinationRooms[3].price);
  }
  
console.log(fullPrice);


 
  

  useEffect(() => {
    window.localStorage.setItem(
      "basicRooms",
      JSON.stringify({ basicBedroom, basicBathroom, basicHalfBath })
    );
  }, [basicBathroom, basicBedroom, basicHalfBath]);

  useEffect(() => {
    window.localStorage.setItem(
      "extraRoomCart",
      JSON.stringify(extraRoomCart)
    );
  }, [extraRoomCart]);


  const BedroomDecrement = () => {
    if (basicBedroom > 0) {
      setBasicBedroom((prev) => prev - 1);
    }
  };
  const BathroomDecrement = () => {
    if (basicBathroom > 0) {
      setBasicBathroom((prev) => prev - 1);
    }
  };
  const HalfBathDecrement = () => {
    if (basicHalfBath > 0) {
      setBasicHalfBath((prev) => prev - 1);
    }
  };
  const BedroomIncrement = () => {
    setBasicBedroom((prev) => prev + 1);
  };
  const BathroomIncrement = () => {
    setBasicBathroom((prev) => prev + 1);
  };
  const HalfBathIncrement = () => {
    setBasicHalfBath((prev) => prev + 1);
  };

 interface cleanDataProps{
  basicBedroom: number;
  basicBathroom: number;
  basicHalfBath: number;
  BedroomDecrement: () => void;
  BathroomDecrement: () => void;
  HalfBathDecrement: () => void;
  BedroomIncrement: () => void;
  BathroomIncrement: () => void;
  HalfBathIncrement: () => void;
  extraRoomCart: ExtraRoomProps;
  setExtraRoomCart: ( ) => void;
 }

  const value: cleanDataProps = {
    basicBedroom,
    setBasicBedroom,
    basicBathroom,
    setBasicBathroom,
    basicHalfBath,
    setBasicHalfBath,
    BedroomDecrement,
    BathroomDecrement,
    HalfBathDecrement,
    BedroomIncrement,
    BathroomIncrement,
    HalfBathIncrement,
    fullPrice,
    extraRoomCart,
    // setExtraRoomCart,
   
  };

  return (
    <CleaningDataContext.Provider value={value}>
      {children}
    </CleaningDataContext.Provider>
  );
};
