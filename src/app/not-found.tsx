
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const NotFound = () => {
  return (
    <div className="max-w-7xl  mx-auto px-5 md:px-10 lg:px-16 ">
      <div className="flex flex-col items-center justify-center text-center mt-5 ">
        <Image
          src="/images/notFoundThisPage.jpg"
          width={400}
          height={400}
          alt="notFound"
        />
        <Link href="/" className=" items-center justify-center">
          <button className=" mt-5 flex text-white text-lg items-center justify-center border border-gray-700 bg-gray-800 hover:bg-gray-900 py-1 px-4 rounded-md cursor-pointer">
            <IoIosArrowRoundBack /> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;