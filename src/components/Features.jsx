"use client"
import Image from "next/image";

const Features = () => {
    return (
        <div className="text-white py-10 bg-[#2B0D57]">
            <div className="grid max-w-[900px] mx-auto grid-cols-3 lg:grid-cols-5">
                <div className="text-center">
                    <div className="flex mb-4 justify-center">
                    <Image width="40"  height="40" src="/assets/Frame 32.png" alt="logo" /> 
                    </div>
                    <h4 className="font-bold text-3xl">360+</h4>
                    <p>Teachers</p>
                </div>
                <div className="text-center">
                    <div className="flex mb-4 justify-center">
                    <Image width="40"  height="40" src="/assets/Frame 31.png" alt="logo" /> 
                    </div>
                    <h4 className="font-bold text-3xl">30k+</h4>
                    <p>Students</p>
                </div>
                <div className="text-center">
                    <div className="flex mb-4 justify-center">
                    <Image width="40"  height="40" src="/assets/Frame 30.png" alt="logo" /> 
                    </div>
                    <h4 className="font-bold text-3xl">8K+</h4>
                    <p>Lessons</p>
                </div>
                <div className="text-center">
                    <div className="flex mb-4 justify-center">
                    <Image width="40"  height="40" src="/assets/Frame 31 (1).png" alt="logo" /> 
                    </div>
                    <h4 className="font-bold text-3xl">200</h4>
                    <p>Partners</p>
                </div>
                <div className="text-center">
                    <div className="flex mb-4 justify-center">
                    <Image width="40"  height="40" src="/assets/Frame 29.png" alt="logo" /> 
                    </div>
                    <h4 className="font-bold text-3xl">60%</h4>
                    <p>Success</p>
                </div>
            </div>
        </div>
    );
};

export default Features;