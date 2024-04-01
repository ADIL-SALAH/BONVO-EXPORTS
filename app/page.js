import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/components/HomePage/HomePage";
import Image from "next/image";

export default function Home() {
  return (

    <div className="h-screen flex flex-col justify-center items-center overflow-x-hidden">

      {/* <div className="card w-1/2 h-4/5 flex justify-end items-end p-10">
        <button className="px-4 py-2">
          TEST BUTTON
        </button>
      </div> */}
      {/* <Navbar /> */}

      <HomePage />
    </div >
  );
}
