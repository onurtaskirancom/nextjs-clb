import ScrollButton from "@/components/scroll-button";
import { CiMail } from "react-icons/ci";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="dark:text-tahiti-bio text-lg">
        <h2 className="b-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-tahiti-title">
          Contact
        </h2>

        <br />
        <p className="text-[47px] float-left mr-2">
          <CiMail />
        </p>
        <p className="dark:text-zinc-200 float-left mt-2">
          onurtaskirancom@gmail.com
        </p>
        <br />
        <Image
          className="max-md:float-none max-sm:float-none max-xl:float-right max-2xl:float-right float-right pl-8 max-xl:pl-8 max-2xl:pl-8 mb-8 max-w-full mx-auto sm:pl-0 max-md:ml-0 max-md:pl-0 ml-8 w-2/6 max-sm:w-10/12 max-md:w-10/12"
          src="/images/onurtaskiran-logo.svg"
          alt="onurtaskiran"
          width={600}
          height={600}
        />
      </div>
      <ScrollButton />
    </>
  );
};
export default page;
