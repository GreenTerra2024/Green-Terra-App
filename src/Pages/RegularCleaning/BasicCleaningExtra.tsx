import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { cleaningData, extraService } from "../../Ultils/Utils";
import { Microwave } from "lucide-react";
import AmountOfTasks from "../../components/AmountOfTasks";
import { useState, useEffect } from "react";


interface ExtraServiceProps{
  id: string;
  icon: string;
  desc: string;
  price: string;
}

const getBasicCart = () => {
  const localStorageTasks = localStorage.getItem("basicCART");
  return localStorageTasks ? JSON.parse(localStorageTasks) : [
    {
      id: "1",
      icon: "",
      desc: "Inside the oven",
      price: "40",
      title: "oven"
  },
  {
      id: "2",
      icon: "",
      desc: "Inside the Fridge",
      price: "40",
      title: "fridge"
  },
  {
      id: "3",
      icon: "",
      desc: "Loads of towels",
      price: "40",
      title: "loads"
    },
{
        id: "4",
        icon: "",
        desc: "Washing Machine",
        price: "40",
        title: "wash"
     },
 {
         id: "5",
         icon: "",
         desc: "Sanitizer",
         price: "40",
         title: "sanitizer"
       },
  ];
};

const BasicCleaningExtra = () => {
  const params = useParams();
  const dataRegular = cleaningData.filter((item) => item.id === params.id);
 
  const [totalPrice, setTotalPrice] = useState(0);

  const extra: ExtraServiceProps[] = extraService;
  const [cart, setCart] = useState<ExtraServiceProps[]>(getBasicCart);

console.log(extra)
console.log(cart)

useEffect(() => {
const data =window.localStorage.getItem("basicCART");
if (!data) {
  setCart(JSON.parse(data as string) );
}
}, []);


useEffect(() => {
  window.localStorage.setItem(
    "basicCART",
    JSON.stringify(cart)
  );
}, [cart]);



const addToCart = (item: ExtraServiceProps) => {
  const newCart = [...cart,item]
  setCart(newCart as ExtraServiceProps[]);
}

const handleRemove = (item: ExtraServiceProps) => {
  if (Array.isArray(cart)) {
  const newCart = cart.filter((cartItem: ExtraServiceProps) => cartItem.id !== item.id);
  setCart(newCart);
  }
};

 const calcTotalPrice = () => {
  let initial = Number(dataRegular[0].price);
  const amount = 1;

  cart.map((item) => {
    initial += amount * Number(item.price);
  });
  setTotalPrice(initial);
}

useEffect(() => {
  calcTotalPrice();
});

  return (
    <Container>
      <div className="card bg-white sm:bg-terraGray p-2 sm:p-10 w-[420px] sm:w-[900px] h-screen sm:h-[1100px] ">
        <Title>Extra Service</Title>
        <p className="mt-8 text-center">
          We understand that every home has unique cleaning needs. That's why we
          offer a specialized add-on services to enhance your cleaning
          experience.
        </p>

        {/* Extra Services ================== */}
        <div className="flex justify-between items-center gap-4 mt-12 mb-10 sm:mb-16 bg-pink-100 px-2 py-10 rounded-lg">
          <div className="flex flex-col gap-3 items-center">
            <Microwave />
            <p>{extraService[0].desc}</p>
            <span className="text-lg text-terraPink">
              {extraService[0].price}
            </span>
            {cart.includes(extraService[0]) ? (
              <button className="btn-pink" onClick={() => handleRemove(extraService[0])}>remove</button>
            ) : (
              <button className="btn-pink" onClick={() => addToCart( extraService[0])}>Add</button>
            )}
           
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Microwave />
            <p>{extraService[1].desc}</p>
            <span className="text-lg text-terraPink">
              {extraService[1].price}
            </span>
            {cart.includes(extraService[1]) ? (
              <button className="btn-pink" onClick={() => handleRemove(extraService[1])}>remove</button>
            ) : (
              <button className="btn-pink" onClick={() => addToCart( extraService[1])}>Add</button>
            )}
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Microwave />
            <p>{extraService[2].desc}</p>
            <span className="text-lg text-terraPink">
              {extraService[2].price}
            </span>
            {cart.includes(extraService[2]) ? (
              <button className="btn-pink" onClick={() => handleRemove(extraService[2])}>remove</button>
            ) : (
              <button className="btn-pink" onClick={() => addToCart( extraService[2])}>Add</button>
            )}
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Microwave />
            <p>{extraService[3].desc}</p>
            <span className="text-lg text-terraPink">
              {extraService[3].price}
            </span>
            {cart.includes(extraService[3]) ? (
              <button className="btn-pink" onClick={() => handleRemove(extraService[3])}>remove</button>
            ) : (
              <button className="btn-pink" onClick={() => addToCart( extraService[3])}>Add</button>
            )}
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Microwave />
            <p>{extraService[4].desc}</p>
            <span className="text-lg text-terraPink">
              {extraService[4].price}
            </span>
            {cart.includes(extraService[4]) ? (
              <button className="btn-pink" onClick={() => handleRemove(extraService[4])}>remove</button>
            ) : (
              <button className="btn-pink" onClick={() => addToCart( extraService[4])}>Add</button>
            )}
          </div>
        </div>

        {/* amount of Tasks ============= */}
        <AmountOfTasks />

        <div className="flex flex-wrap justify-center items-center text-sm sm:text-lg text-neutral-900 gap-1 sm:gap-4  py-3 px-1 mb-8 overflow-hidden rounded-md font-medium">
          <div className="flex justify-center items-center bg-pink-200 rounded-lg w-48 h-12 text-center text font-medium">
            <p>{dataRegular?.[0]?.title}</p>
          </div>
          <div className="flex justify-center items-center bg-pink-200 rounded-lg w-48 h-12 text-center text font-medium">
            <p>{dataRegular?.[0]?.time}</p>
          </div>
          {cart.includes(extraService[0]) ? (
            <div className="flex justify-center items-center gap-2 bg-pink-200 rounded-lg w-48 h-12 text-center text font-medium">
              <Microwave />
              <p>Inside Oven</p>
            </div>
          ) : null}
          {cart.includes(extraService[1]) ? (
            <div className="flex justify-center items-center gap-2 bg-pink-200 rounded-lg w-48 h-12 text-center text font-medium">
              <Microwave />
              <p>Inside of Fridge</p>
            </div>
          ) : null}
          {cart.includes(extraService[2]) ? (
            <div className="flex justify-center items-center gap-2 bg-pink-200 rounded-lg w-48 h-12 text-center text font-medium">
              <Microwave />
              <p>Load of Towels</p>
            </div>
          ) : null}
          {cart.includes(extraService[3]) ? (
            <div className="flex justify-center items-center gap-2 bg-pink-200 rounded-lg w-48 h-12 text-center text font-medium">
              <Microwave />
              <p>Wash Dishes</p>
            </div>
          ) : null}
          {cart.includes(extraService[4]) ? (
            <div className="flex justify-center items-center gap-2 bg-pink-200 rounded-lg w-48 h-12 text-center text font-medium">
              <Microwave />
              <p>Sanitizer Spray</p>
            </div>
          ) : null}
        </div>

       
          {/* Total Price ========== */}
          <div className="flex flex-col justify-center items-center gap-2 mt-10 mx-auto bg-pink-200 rounded-lg w-96 h-32 text-center text font-medium">
            <p>Total Price</p>
            <span className="text-2xl text-terraPink">
              
              ${totalPrice}
              
                
              
            </span>
          </div>
         
       
      </div>
    </Container>
  );
};

export default BasicCleaningExtra;
