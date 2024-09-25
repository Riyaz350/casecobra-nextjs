import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import Image from 'next/image'
export default function Home() {
  const UserImages = ({ src }) => {
    return (
      <Image src={src} width={100} height={100} className="inline-block h-10 w-10 rounded-full ring-2 ring-sky-100 object-cover" alt="user"></Image>

    )
  }
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col  items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image width={100} height={100} alt="snake image" src='/snake-1.png'></Image>
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image on a
                <span className="bg-green-600 px-2 text-white">Custom</span> Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{' '}
                <span> one-of-one </span>
                phone case. Casecobra allows you to protect your memories, not just your phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-center">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <FaCheck className="w-5 h-5 shrink-0 text-green-600" />
                    High-Quality, durable material.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <FaCheck className="w-5 h-5 shrink-0 text-green-600" />
                    5 Year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <FaCheck className="w-5 h-5 shrink-0 text-green-600" />
                    Modern iPhone models supported.
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <UserImages src='/users/user-1.png' />
                  <UserImages src='/users/user-2.png' />
                  <UserImages src='/users/user-3.png' />
                  <UserImages src='/users/user-4.jpg' />
                  <UserImages src='/users/user-5.jpg' />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex items-center justify-center gap-0.5">
                    <FaStar className="h-4 w-4 text-green-600 fill-green-500"/>
                    <FaStar className="h-4 w-4 text-green-600 fill-green-500"/>
                    <FaStar className="h-4 w-4 text-green-600 fill-green-500"/>
                    <FaStar className="h-4 w-4 text-green-600 fill-green-500"/>
                    <FaStar className="h-4 w-4 text-green-600 fill-green-500"/>
                  </div>
                  <p><span className="font-semibold">1.250</span>happy customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
