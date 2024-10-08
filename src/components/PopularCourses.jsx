"use client"
import Image from "next/image";
import Link from "next/link";
import { MdEventNote } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const PopularCourses = () => {
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
            <div className="join">
  <button className="join-item btn">{"<"}</button>
  <button className="join-item btn">1</button>
  <button className="join-item btn">2</button>
  <button className="join-item btn btn-disabled">...</button>
  <button className="join-item btn">99</button>
  <button className="join-item btn">100</button>
  <button className="join-item btn">{">"}</button>
</div>
            </div>
        </div>
    );
};

export default PopularCourses;