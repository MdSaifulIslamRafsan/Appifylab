"use client"
import Image from "next/image";
import Link from "next/link";

const TopCategories = () => {
    return (
        <div className="text-center text-white py-10 bg-[#2B0D57]">
            <h1 className="text-4xl  max-w-lg mx-auto font-bold">Our Top Categories</h1>
            <p className="max-w-lg my-5 mx-auto">Take high quality online courses from the best online instrictors
            around the world & develop your skills.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-2xl mx-auto">
                <div className="bg-[#FF8FDF] py-5 rounded-lg">
                    <div className="flex justify-center"> <Image width="40" height="40" src="/assets/Group.png" alt="logo" /> </div>
                
                    <h5>React Coding</h5>
                    <Link href="/">View More</Link>
                </div>
                <div className="bg-[#FF8787] py-5 rounded-lg">
                    <div className="flex justify-center"> <Image width="40" height="40" src="/assets/web-development 1.png" alt="logo" /> </div>
                
                    <h5>Laravel Coding</h5>
                    <Link href="/">View More</Link>
                </div>
                <div className="bg-[#49E1BB] py-5 rounded-lg">
                    <div className="flex justify-center"> <Image width="40" height="40" src="/assets/money-growth 1.png" alt="logo" /> </div>
                
                    <h5>Vue Coding</h5>
                    <Link href="/">View More</Link>
                </div>
                <div className="bg-[#FF5BB4] py-5 rounded-lg">
                    <div className="flex justify-center"> <Image width="40"  height="40" src="/assets/paint-palette 1.png" alt="logo" /> </div>
                
                    <h5>Angular</h5>
                    <Link href="/">View More</Link>
                </div>
                
                
                
                
            </div>
            
        </div>
    );
};

export default TopCategories;