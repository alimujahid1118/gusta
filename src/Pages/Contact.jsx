import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {

    const [ socarratClick, setSocarratClick] = useState(false)

    useEffect(() => {
        gsap.to("#hi-img", {
            rotate: -6,
            x: -5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        })
    }, [])

    return (
        <div id="black-section" className="flex flex-col gap-10 w-full pt-20 pb-36 md:pb-8 bg-black">
            <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col items-center text-center gap-4">
                    <div id="hi-img" className="w-24 h-24 rounded-full">
                        <img src="https://framerusercontent.com/images/PuvnN0YSZyFwziROuckDkgNjLXA.png" alt="" />
                    </div>
                    <p className="text-3xl font-semibold text-white px-8">Ready to move forward?Let's work together!</p>
                </div>
                <Link className="bg-[#0ba5bd] text-2xl text-white px-10 py-6 rounded-full font-semibold">
                    Contact us
                </Link>
            </div>
            <div className="flex flex-col gap-8 px-6 pt-10 md:flex-row md:pl-8 md:pr-[400px] md:justify-between">

                {/* Navigation */}
                <div className="text-white flex flex-col gap-4 items-start text-5xl">
                    <Link to={`/work/all`}>Work</Link>
                    <Link to={`/services`}>Services</Link>
                    <Link to={`/about`}>About</Link>
                    <button>Contact</button>
                    <div className="flex flex-col text-[#91948fbf] items-start text-xl">
                        <button>FAQ</button>
                        <button>Playground</button>
                        <button>Shop</button>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex flex-col gap-8">

                    <div className="flex flex-col gap-4 text-xl">
                        <h3 className="text-white font-bold">Studio</h3>
                        <div className="flex flex-col gap-1 text-[#91948fbf]">
                            <p>C/ Pintor Gisbert 4</p>
                            <p>46006 Valencia, Spain</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-bold text-xl">New business</h3>
                        <p className="text-[#91948fbf] text-lg">hola@gusta.studio</p>
                    </div>

                    <div className="flex flex-col gap-2 items-start">
                        <h3 className="text-white font-bold text-xl">Connect</h3>
                        <button className="text-[#91948fbf] text-lg">Instagram</button>
                        <button className="text-[#91948fbf] text-lg">Behance</button>
                        <button className="text-[#91948fbf] text-lg">LinkedIn</button>
                    </div>

                </div>
            </div>
            <div className="md:flex md:flex-col md:items-end px-4 md:px-6 py-8">
                <div onClick={() => setSocarratClick(true)} className={`bg-[#292c2abf] relative flex flex-col w-full md:max-w-[500px] rounded-3xl p-6 md:p-14 md:rounded-[50px] gap-12 md:gap-28 ${socarratClick ? `md:bg-white` : `md:bg-[#292c2abf]`}`}>
                    <img className="absolute w-24 md:w-32 -top-24 md:top-56 right-5 md:-left-20" src="https://framerusercontent.com/images/yMcZyBTYBbjoT7Ltpr4npl44us.png?scale-down-to=2048&width=2581&height=3373" alt="" />
                    <div className="flex flex-col gap-2">
                        <h2 className={socarratClick ? "text-white font-semibold md:text-black md:text-xl" :`text-white font-semibold md:text-xl`}>
                            Subscribe to the Socarrat
                        </h2>
                        <input className="text-[#91948fbf] text-2xl md:text-4xl bg-transparent" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className={`text-[#91948fbf] text-lg md:px-8 md:text-right ${socarratClick ? `md:hidden`: `md:flex`}`}>
                            Digestible selection of inspiring finds. Sent monthly, from our screen to yours.
                        </p>
                        <div className={`flex flex-row justify-between items-center ${socarratClick ? `md:flex`: `md:hidden`}`}>
                            {/* Mobile */}
                            <button className="bg-[#0ba5bd] px-6 py-2 text-white rounded-3xl text-lg font-bold md:hidden">Subscribe</button>
                            <Link className="text-[#91948fbf] underline md:hidden">Privacy</Link>

                            {/* Desktop */}
                            <Link className="hidden md:block md:text-[#91948fbf] underline">Privacy</Link>
                            <button className="hidden md:block bg-[#0ba5bd] px-6 py-2 text-white rounded-3xl text-lg font-bold">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-8 gap-8">
                <div className="flex flex-row gap-4">
                    <img className="w-16" src="gusta-logo.avif" alt="" />
                    <p className="font-bold text-5xl text-white">gusta</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 text-[#91948fbf] text-sm">
                    <div className="flex flex-row gap-6">
                        <Link>Terms and Conditions</Link>
                        <Link>Privacy</Link>
                    </div>
                    <p>© 2026 Gusta</p>
                </div>
            </div>
        </div>
    )
}