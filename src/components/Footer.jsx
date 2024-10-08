"use client"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="max-w-[1440px] py-10 grid grid-cols-3 justify-center gap-5 w-10/12 mx-auto text-white">
            <div>
            <Image width="140" height="40" src="/assets/logo.png" alt="logo" />
            <p className="tracking-[.5em] mt-10">CONTACT</p>
            <p className="text-[#FDDC02]">hollocode@gmail.com</p>
            </div>
            <div className="text-center space-y-20">
                <ul className="flex justify-center gap-5">
                    <li><Link href="teachers">Teachers</Link></li>
                    <li><Link href="courses">Courses</Link></li>
                    <li><Link href="Scholarship">Scholarship</Link></li>
                    <li><Link href="Pricing">Pricing</Link></li>
                </ul>
               
                <p className="text-xs">Copyright©codelearn 2021. All rights reserved</p>
            </div>
            <div>
                <p className="font-bold">Stay up to date</p>
                <p className="mb-5 text-[#CFD1D6]">Stay Informed On How You Can Make a Difference</p>
                <input type="email" placeholder="Your email address"  className="py-2 px-4 rounded-3xl"/>
                <button className="btn rounded-3xl bg-[#EAE34A] hover:bg-[#EAE34A] px-5 ml-3">Submit</button>
               
            </div>
        </div>
    );
};

export default Footer;