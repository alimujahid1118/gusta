import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuBox from "../Components/MenuBox.jsx";
import Logo from "../Components/Logo.jsx";

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
        <>
        <div id="black-section" className="flex flex-col gap-10 w-full pt-20 md:pt-60 pb-36 md:pb-8 bg-black">
            <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="hidden md:flex flex-row gap-4 items-center px-8 justify-center">
                        <p className="text-[40px] font-semibold text-white hidden md:block">Let's work together!</p>
                        <div id="hi-img" className="w-12 h-12 rounded-full hidden md:block">
                            <img src="https://framerusercontent.com/images/PuvnN0YSZyFwziROuckDkgNjLXA.png" alt="" />
                        </div>
                    </div>
                    <div id="hi-img" className="w-16 h-16 rounded-full md:hidden">
                        <img src="https://framerusercontent.com/images/PuvnN0YSZyFwziROuckDkgNjLXA.png" alt="" />
                    </div>
                    <p className="text-[#91948f] font-semibold pt-4 md:hidden">Contact</p>
                    <p className="text-[35px] font-semibold text-white px-8 md:hidden">Let's work together!</p>
                    <p className="text-[#91948f] text-[21px] md:text-[22px] font-semibold px-14 md:max-w-[600px]">We’d love to hear more about your project, and explore how we can help bring it to life together.</p>
                </div>
                <Link className="bg-[#0ba5bd] text-2xl md:text-3xl text-white px-10 md:px-14 py-6 md:pt-6 md:pb-8 rounded-full font-semibold md:font-bold md:hover:shadow-[0_0_140px_rgba(11,165,189,0.8),inset_0_0_15px_rgba(255,255,255,0.7)] md:hover:transition-all md:hover:duration-200">
                    Send a message
                </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-center text-center gap-6 md:gap-14 md:pb-20">
                <div className="flex flex-col gap-4">
                    <p className="text-[#91948f] text-[20px] font-semibold">Email</p>
                    <p className="text-white text-[28px] font-semibold">hola@gusta.studio</p>
                </div>
                <div className="flex flex-col gap-4 md:pt-10">
                    <p className="text-[#91948f] text-[20px] font-semibold">Studio</p>
                    <p className="text-white text-[28px] font-semibold px-20 md:max-w-[300px] md:px-0">
                        C/ Pintor Gisbert 4  46006 Valencia
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center gap-4 items-center md:items-start">
                <div className="relative w-[300px] h-[450px]">
                    <img className="w-32 absolute -top-8 -left-4" src="https://framerusercontent.com/images/xR3Nfk3GNjk35aLaem04GB2BIvw.png?width=1250&height=668" alt="" />
                    <img className="w-full h-full object-cover rounded-[15px]" src="https://framerusercontent.com/images/EvwItFJl8XNgSp2bOMWaRQIbIY.jpg?width=1040&height=1640" alt="" />
                </div>
                {/* Mobile */}
                <div className="flex flex-col items-start gap-4 md:hidden">
                    <div className="bg-[#2c2f2e] p-2 rounded-[40px] flex flex-row gap-2 w-[300px]">
                        <div className="px-[14px] py-[3px] flex items-center justify-center bg-[#abe8e8] rounded-full">
                            <i className="fi fi-rr-calendar text-[20px]"></i>
                        </div>
                        <div>
                            <p className="text-white font-semibold">Meeting with Gusta</p>
                            <p className="text-[#91948f] font-normal">Schedule an introduction call</p>
                        </div>
                    </div>
                    <div className="flex w-[250px]">
                        <img className="w-full h-full rounded-[40px]" src="https://framerusercontent.com/images/qRF9FfcpqCgpzNbNOjOwDb41ucY.jpg?width=1310&height=1240" alt="" />
                    </div>
                </div>
                {/* Desktop */}
                <div className="md:flex flex-col gap-4 hidden">
                    <div className="flex w-[350px]">
                        <img className="w-full h-full rounded-[40px]" src="https://framerusercontent.com/images/qRF9FfcpqCgpzNbNOjOwDb41ucY.jpg?width=1310&height=1240" alt="" />
                    </div>
                    <div className="bg-[#2c2f2e] p-2 rounded-[40px] flex flex-row gap-2 w-[300px]">
                        <div className="px-[14px] py-[3px] flex items-center justify-center bg-[#abe8e8] rounded-full">
                            <i className="fi fi-rr-calendar text-[20px]"></i>
                        </div>
                        <div>
                            <p className="text-white font-semibold">Meeting with Gusta</p>
                            <p className="text-[#91948f] font-normal">Schedule an introduction call</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:items-center md:justify-center">
                <div className="flex flex-col gap-8 bg-[#18191acc] text-white mx-12 pl-8 md:pl-12 pr-6 md:pr-14 pt-10 pb-32 rounded-[40px] md:max-w-[700px]">
                    <h1 className="font-bold text-[30px] md:text-[40px] leading-9">
                        Start a collaboration
                    </h1>
                    <div className="flex flex-col gap-6 items-start">
                        <p className="bg-[#27292ccc] text-[#91948f] rounded-full px-5 py-3">
                            1
                        </p>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold md:font-bold md:text-[22px] text-[20px]">Get in touch</p>
                            <p className="text-[#91948f] text-[18px] md:text-[22px] md:font-semibold">We’d love to hear more about your project and how we can help. Send us an email and we’ll get back to you shortly.</p>
                        </div>
                        <button className="bg-[#0ba5bd] text-[20px] font-semibold md:font-bold px-6 md:px-8 md:my-4 py-2 md:py-3 rounded-[40px]">
                            Send a message
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 items-start">
                        <p className="bg-[#27292ccc] text-[#91948f] rounded-full px-5 py-3">
                            2
                        </p>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-[20px] md:text-[22px]">Meeting → Proposal</p>
                            <p className="text-[#91948f] text-[18px] md:text-[22px] md:font-semibold">We’ll meet to discuss and negotiate the scope, followed by a proposal. Agree? Let’s do this!</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start">
                        <p className="bg-[#27292ccc] text-[#91948f] rounded-full px-5 py-3">
                            3
                        </p>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-[20px] md:text-[22px]">Let’s get started!</p>
                            <p className="text-[#91948f] text-[18px] md:text-[22px] md:font-semibold">We’re excited to go on this journey together and committed to make this a great collaboration.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="absolute w-48 md:52 top-8 md:top-16 right-8 md:-right-4" src="https://framerusercontent.com/images/qtc7TP5T8MMifX4HjxmT0XI6I.png?width=2162&height=1807" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-14 items-start mx-4 pt-20 md:pt-0 md:relative md:items-center md:px-60 md:h-[890px]">
                <div className="flex flex-col md:absolute md:max-w-[440px] md:top-28 md:left-60 gap-2 px-2">
                    <p className="text-white text-[30px] font-semibold">Join us</p>
                    <p className="text-[#91948f] text-[19px] md:text-[21px]"> 
                        Currently, we have no job openings. <br />
                        However, we are always curious to meet new talent. Feel free to contact us via hola@gusta.studio.
                    </p>
                </div>
                <div className="bg-[#fed096] flex flex-col md:absolute md:bottom-14 md:right-60 md:max-w-[540px] relative items-start gap-4 md:gap-6 rounded-[30px] p-6 md:py-10 md:pl-14 md:pr-16">
                    <p className="text-[30px] md:text-[32px] font-semibold md:font-bold">Collaborate with us</p>
                    <p className="text-[#080a0ccc] text-[19px] md:text-[22px] md:font-semibold">We are always looking to expand our network of collaborators for projects that require more than digital design. If you share our values and way of working, and think you could be an asset on our next project, we’d love to hear from you.</p>
                    <button className="bg-black text-white font-semibold text-[19px] px-6 py-2 md:my-6 rounded-[40px]">Become a collaborator</button>
                    <img className="absolute w-28 -bottom-24 right-14" src="https://framerusercontent.com/images/CjO0w6B4KAMVgVRUrjoRPmze74.png?width=640&height=874" alt="" />
                </div>
            </div>
            {/* Mobile */}
            <div className="flex flex-col items-center pt-10 gap-10 md:hidden">
                <div className="relative flex flex-col w-full pt-10 pl-6 pr-0 gap-8">
                    <h2 className="text-3xl text-white pr-28 font-semibold">Stay connected with updates, insights, and inspiration.</h2>
                    <div className="w-[250px] h-[450px] rounded-xl">
                        <video loop muted autoPlay className="rounded-2xl" src="https://framerusercontent.com/assets/7lIGZQ6m8lkueVE4gq0N7vp8aRM.mp4"></video>
                        <button className="absolute bottom-14 text-white font-semibold text-md bg-slate-400/60 mx-3 rounded-sm px-4 py-2">@gusta.studio</button>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col py-10 px-6 gap-6 text-center bg-[#abe8e8] md:hidden">
                <img className="absolute w-28 -top-11 right-6" src="https://framerusercontent.com/images/pqmEbEHZ6IodkvP01Yoz5uBYu9U.png?width=2704&height=2133" alt="" />
                <h2 className="text-4xl font-semibold">The Socarrat</h2>
                <p className="text-lg px-6">Our newsletter with a digestible selection of inspiring finds. Sent every month, from our screen to yours.</p>
                <div className="flex flex-row gap-6 justify-center items-center">
                    <button className="bg-black text-white text-lg font-bold px-6 py-3 rounded-3xl">
                        Subscribe
                    </button>
                    <Link className="flex flex-row text-xl gap-4">
                        <p className="font-semibold">Archive</p>
                        <p>{`>`}</p>
                    </Link>
                </div>
            </div>
            {/* Desktop */}
            <div className="hidden md:flex items-center justify-center">
                <div className="hidden md:relative md:flex flex-col items-center w-[800px] py-10 pl-6 pr-10 gap-8">
                    <h2 className="text-[40px] text-white pr-36 font-semibold max-w-[700px]">Stay connected with updates, insights, and inspiration.</h2>
                    <div className="flex flex-row gap-6">
                        <div className="w-[300px] h-[550px] rounded-xl">
                            <video loop muted autoPlay className="rounded-2xl" src="https://framerusercontent.com/assets/7lIGZQ6m8lkueVE4gq0N7vp8aRM.mp4"></video>
                            <button className="absolute top-[670px] text-white font-semibold text-md bg-slate-400/60 mx-3 rounded-sm px-4 py-2">@gusta.studio</button>
                        </div>
                        <div className="flex items-end">
                            <img className="w-[400px] rounded-full" src="stay-connected.avif" alt="" />
                        </div>
                    </div>
                    <div className="hidden md:relative md:flex md:flex-col max-w-[700px] rounded-[60px] py-16 px-6 gap-10 text-center bg-[#abe8e8]">
                        <img className="absolute w-28 -top-11 right-6" src="https://framerusercontent.com/images/pqmEbEHZ6IodkvP01Yoz5uBYu9U.png?width=2704&height=2133" alt="" />
                        <h2 className="text-6xl font-semibold">The Socarrat</h2>
                        <p className="text-lg px-40">Our newsletter with a digestible selection of inspiring finds. Sent every month, from our screen to yours.</p>
                        <div className="flex flex-row gap-6 justify-center items-center">
                            <button className="bg-black text-white text-lg font-bold px-6 py-3 rounded-3xl">
                                Subscribe
                            </button>
                            <Link className="flex flex-row text-xl gap-4">
                                <p className="font-semibold">Previous issues</p>
                                <p>{`>`}</p>
                            </Link>
                        </div>
                    </div>
                </div>
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
        <Logo />
        < MenuBox />
        </>
    )
}