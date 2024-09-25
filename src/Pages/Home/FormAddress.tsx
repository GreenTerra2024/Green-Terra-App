import { motion } from "framer-motion";
import React, { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Input from "../../components/Input";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";


const FormAddress = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [phoneCity, setPhoneCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [sqFootage, setSqFootage] = useState("");

  const titleVariants = isMobile
    ? {
        initial: {
          opacity: 0,
          x: 0,
          y: 0,
        },
        animate: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 3,
            type: "spring",
          },
        },
      }
    : {
        initial: {
          opacity: 0,
          x: -500,
          y: 0,
        },
        animate: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 3,
            type: "spring",
          },
        },
      };

  const birdVariants = isMobile
    ? {
        initial: {
          opacity: 0,
          x: 200,
          y: 155,
        },
        animate: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 5,
            type: "spring",
          },
        },
      }
    : {
        initial: {
          opacity: 0,
          x: -1500,
          y: 250,
        },
        animate: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 5,
            type: "spring",
          },
        },
      };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if (input === "") return;
         navigate("/movein");
        console.log(firstName, lastName, email, phoneNumber, address, phoneCity, state, zipCode, sqFootage);
        
      }

  return (
    <Container>
      {/* Title =========== */}
      <motion.h1
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
        className="title gradient-text text-3xl sm:text-5xl lg:text-7xl text-center mb-10 tracking-wider p-2"
      >
        Enter your address to get your price
      </motion.h1>

      <p className="text-neutral-500 text-[13px] sm:text-xl tracking-wider mb-10 sm:w-[600px] w-[390px]  ">
        (Don't worry, we're not storing your pesonal information)
      </p>

      {/* Bird =========== */}
      <motion.div
        variants={birdVariants}
        initial="initial"
        whileInView="animate"
        className='bird bg-[url("assets/bird.png")] bg-no-repeat bg-cover bg-top sm:h-[200px] sm:w-[200px] w-32 h-32 absolute top-[-5px] right-2 sm:top-[200px] sm:left-[1400px]'
      ></motion.div>

      {/* //FormAddress */}
      <div className="card bg-terraGray p-2 w-[420px] sm:w-[700px]">
        <form onSubmit={handleSubmit} className="card-body items-center text-center w-full ">
          <div className="flex flex-col sm:flex-row gap-4 w-full mb-2">
            <Input
              type="text"
              placeholder="First Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Last Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full mb-2">
            <Input
              type="text"
              placeholder="Email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Phone Number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full mb-2">
            <Input
              type="text"
              placeholder="Address"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Phone City"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneCity(e.target.value)}
            />
          </div>

          <div className="flex gap-4 w-full">
            <Input
              type="text"
              placeholder="State"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Zip Code"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Sq Footage"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSqFootage(e.target.value)}
            />
          </div>
          <div className="card-actions justify-end mt-6">
            <button className="btn bg-terraDarkGray w-28 text-terraGray">
              Cancel
            </button>
            <button className="btn bg-terraPink w-28 text-terraGray">
              Next
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default FormAddress;
