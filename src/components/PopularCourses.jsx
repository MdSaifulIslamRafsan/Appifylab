"use client"
import {IoIosArrowBack , IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { MdEventNote } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useState } from 'react';
const PopularCourses = () => {
    const [pageNumber,setPageNumber] = useState(0)
    const page = 5 
    const updatePageNumber = (num)=>{
        if((num > (page - 1)) || (0 > num)){ return setPageNumber(0) }
        setPageNumber(num)
    }
    return (
        <div className="max-w-[1440px] my-10 w-10/12 mx-auto">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Popular Courses</h1>
                <Link  className="underline" href="/ViewAll">View All</Link>
            </div>
            <div className="mt-10 grid gap-10 grid-cols-1 lg:grid-cols-3">
                <div className="space-y-5 ">
                <Image width="400"  height="200" src="/assets/Rectangle 2.png" alt="logo" /> 
                <p className="bg-[#F3F2FF] inline-block px-5 py-2 rounded-md">Design</p>
                <h4 className="font-bold">The 6 Steps to Building a 
                powerful Personal brand</h4>
                <p className="flex items-center gap-2"><MdEventNote />
                <span>2 Lesoons</span></p>
                <div className="flex items-center justify-between" >
                    <p className="flex items-center gap-2"><FaUsers />
                   <span> 30 Students
                    enrolled</span></p>
                    <button className="btn btn-outline">View Course</button>
                </div>
                </div>
                <div className="space-y-5 ">
                <Image width="400"  height="200" src="/assets/Rectangle 2.png" alt="logo" /> 
                <p className="bg-[#F3F2FF] inline-block px-5 py-2 rounded-md">Design</p>
                <h4 className="font-bold">The 6 Steps to Building a 
                powerful Personal brand</h4>
                <p className="flex items-center gap-2"><MdEventNote />
                <span>2 Lesoons</span></p>
                <div className="flex items-center justify-between" >
                    <p className="flex items-center gap-2"><FaUsers />
                   <span> 30 Students
                    enrolled</span></p>
                    <button className="btn btn-outline">View Course</button>
                </div>
                </div>
                <div className="space-y-5 ">
                <Image width="400"  height="200" src="/assets/Rectangle 2.png" alt="logo" /> 
                <p className="bg-[#F3F2FF] inline-block px-5 py-2 rounded-md">Design</p>
                <h4 className="font-bold">The 6 Steps to Building a 
                powerful Personal brand</h4>
                <p className="flex items-center gap-2"><MdEventNote />
                <span>2 Lesoons</span></p>
                <div className="flex items-center justify-between" >
                    <p className="flex items-center gap-2"><FaUsers />
                   <span> 30 Students
                    enrolled</span></p>
                    <button className="btn btn-outline">View Course</button>
                </div>
                </div>
            </div>
            <div className="flex mt-10 justify-center">
            <div className='flex select-none justify-center items-center gap-5 '>
        {/* left arrow */}
        <div onClick={()=>{updatePageNumber(pageNumber - 1)}} className=' hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-zinc-200 px-1 py-1 rounded-full'>
        <IoIosArrowBack />

        </div> 
            <div className='flex justify-center items-center gap-2 '>
                 {[...Array(page).keys()].map((item,ind) => <div onClick={()=>{setPageNumber(item)}} className={`cursor-pointer hover:scale-110 scale-100 transition-all duration-200 px-5 ${pageNumber === item ? 'bg-[#4942BB] text-white':'bg-white'} border-zinc-300  font-semibold   py-3 rounded-full`} key={item}>
                {item + 1}
              </div>)}
            </div>
            {/* right arrow */}
              <div  onClick={()=>{updatePageNumber(pageNumber + 1)}}>
              <IoIosArrowForward />

              </div>
        </div>
            </div>
        </div>
    );
};

export default PopularCourses;