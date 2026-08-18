import { useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import Logo from "../Components/Logo";
import MenuBox from "../Components/MenuBox";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function About () {

    const rollerRef = useRef(null)
    const firstSetRef = useRef(null)

    useEffect(() => {
        const roller = rollerRef.current
        const firstSet = firstSetRef.current
        const gap = 32
        const firstSetWidth = firstSet.offsetWidth + gap

        const animation = gsap.to(roller, {
            x:-firstSetWidth * 2,
            duration: 20 * 5,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(
                    gsap.utils.wrap(-firstSetWidth, 0)
                )
            }
        })

        return () => {
            animation.kill()
        }
    }, [])

    return (
        <div>
            <Logo />
            <MenuBox />

            <div className="bg-[#0ba5bd]">
                <div className="text-white flex flex-col gap-4 px-8 pt-36">
                    <p>About</p>
                    <p className="text-3xl font-semibold pr-[140px]">We’re a design studio shaped by the people we design for, and the people we design with.</p>
                </div>
                <div className="relative text-white pt-10 mb-20">
                    <div className="relative overflow-x-clip h-40">
                        <div ref={rollerRef} className="flex absolute top-8 w-max gap-8 px-6">

                            {/* First set */}
                            <div ref={firstSetRef} className="flex w-max gap-8">
                                <div className="relative">
                                    <img className="w-64 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/0VX8BhcfCDqj0smnLt93FsJcYWs.jpg?width=720&height=600" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-36 -rotate-6 rounded-[30px]" src="https://framerusercontent.com/images/Vg50OIhhHHwTF72s6jw0erFiHcU.jpg?width=360&height=400" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-40 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/rEHAaHSlxyHZaPlbhyeue1C1bTk.jpg?width=440&height=620" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-64 -rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/0fX7HCDEI3Qqe0nAl7CkZKzGA.jpg?width=640&height=520" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-64 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/b1pXAWWoLFxO7M6A8kUXlilg.jpg?width=600&height=400" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-56 -rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/A2KAOIpF3wHDuETTC4Nsk8n1fE.jpg?width=640&height=520" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-36 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/RiWb5QImBvSPXlHQRTuFC9tI4w.jpg?width=320&height=450" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-56 relative -top-8 -rotate-6 rounded-[120px]" src="https://framerusercontent.com/images/PExJAHh9WQNeCJ4w4qA3vmGqJE.jpg?width=512&height=640" alt="" />
                                </div>
                            </div>

                            {/* Duplicate set */}
                            <div className="flex w-max gap-8">
                                <div className="relative">
                                    <img className="w-64 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/0VX8BhcfCDqj0smnLt93FsJcYWs.jpg?width=720&height=600" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-36 -rotate-6 rounded-[30px]" src="https://framerusercontent.com/images/Vg50OIhhHHwTF72s6jw0erFiHcU.jpg?width=360&height=400" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-40 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/rEHAaHSlxyHZaPlbhyeue1C1bTk.jpg?width=440&height=620" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-64 -rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/0fX7HCDEI3Qqe0nAl7CkZKzGA.jpg?width=640&height=520" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-64 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/b1pXAWWoLFxO7M6A8kUXlilg.jpg?width=600&height=400" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-56 -rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/A2KAOIpF3wHDuETTC4Nsk8n1fE.jpg?width=640&height=520" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-36 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/RiWb5QImBvSPXlHQRTuFC9tI4w.jpg?width=320&height=450" alt="" />
                                </div>
                                <div className="relative">
                                    <img className="w-56 -rotate-6 rounded-[120px]" src="https://framerusercontent.com/images/PExJAHh9WQNeCJ4w4qA3vmGqJE.jpg?width=512&height=640" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col gap-6 pt-28 px-8">
                <h1 className="text-[32px] font-normal leading-9">We design digital products and brands people love.</h1>
                <p className="text-[20px] text-[#505451]">We believe in creating more than just functional solutions. We love to craft experiences that bridge people, businesses, and technology by designing products and brands that are intuitive, impactful, and drive progress, all while having fun along the way. We put people first, from the team we nurture and the collaborators we partner with to the people using what we create.</p>
            </div>
            <div className="flex flex-col gap-14 py-16 px-8 items-end">
                <div className="flex relative w-64 h-48">
                    <img className="absolute w-24 -top-16 -right-6" src="https://framerusercontent.com/images/ulqG2xXxRRX7rnPnEXctaYgE.png?width=702&height=520" alt="" />
                    <img className="w-full h-full object-cover rounded-[25px]" src="https://framerusercontent.com/images/eeyff7IaqXENEEDIzO6X30SogHw.jpg?width=1310&height=1500" alt="" />
                </div>
                <div className="flex relative w-48 h-64">
                    <img className="absolute w-20 -bottom-6 -right-4" src="https://framerusercontent.com/images/lMWbRhfBbnPWFA5yuMZG1NgFEX4.png?width=322&height=322" alt="" />
                    <img className="w-full h-full object-cover rounded-[25px]" src="https://framerusercontent.com/images/Ysn5CSGJ8du7ISLWeD0hZrsMncU.jpg?width=1040&height=1240" alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-6 px-8">
                <h2 className="text-[34px] leading-9">Based in Valencia, <br /> working worldwide.</h2>
                <p className="text-[#505451] text-[21px] leading-9">
                    We help companies explore <br />
                    and establish new business opportunities, empowering them to lead and push their industries forward. And like the international businesses we work with, <br />
                    our studio is constantly evolving, driven to shape what’s next. <br />
                    Being curious and having clear communication in our collaborations guide us at every step, helping us to understand, adapt, and move forward. 
                </p>
            </div>
            <div className="flex flex-col py-8 px-6 gap-4">
                <div className="flex flex-col gap-4">
                    <div className="bg-[#abe8e8] flex flex-col relative rounded-[30px] items-start px-6 py-4">
                        <img className="absolute w-14 right-4 -bottom-2" src="https://framerusercontent.com/images/Ee7newnG9WuOVtlpRsYtRGX8iTg.png?width=165&height=311" alt="" />
                        <p className="text-[20px]">Founded in Amsterdam</p>
                        <p className="text-[40px] font-bold tracking-tighter">3187</p>
                        <p className="text-[20px]">days ago</p>
                    </div>
                    <div className="bg-[#fed096] flex flex-col rounded-[15px] items-start px-6 py-4">
                        <p className="text-[40px] font-bold tracking-tighter">4</p>
                        <p className="text-[20px]">
                            Versatile creatives tackling <br />
                            big ideas and challenges
                        </p>
                    </div>
                </div>
                <div className="bg-[#fcc113] flex flex-col relative rounded-[30px] items-start px-6 py-4">
                    <img className="absolute w-14 right-4 -bottom-2" src="https://framerusercontent.com/images/YF38mVRvtVps7hZm23Zhovml6zA.png?width=179&height=372" alt="" />
                    <p className="text-[40px] font-bold tracking-tighter">4:1</p>
                    <p className="text-[20px]">
                        Working and learning ratio <br />
                        driving weekly growth
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center p-8 justify-center bg-[#f1f0ee]">
                <div className="flex justify-center w-full h-[300px]">
                    <img className="w-full h-full object-cover rounded-[25px]" src="https://framerusercontent.com/images/3zyamXyTfM5BPKATYuvuk6LsJ8E.jpg?width=1230&height=1440" alt="" />
                </div>
                <div className="flex flex-col items-start gap-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[38px] font-semibold">What we do</h2>
                        <p className="text-[#505451] text-[21px]">Our expertise lies in designing useful digital products, websites, and brands that resonate for forward-thinking businesses. We leverage our eye for detail, a strong understanding of technology, and a mind for strategic execution to provide a lasting value and drive results.</p>
                    </div>
                    <Link className="text-white text-[17px] font-bold bg-black rounded-[40px] px-6 pt-2 pb-3">Our services</Link>
                </div>
            </div>
            <div className="flex flex-col gap-8 p-8">
                <div className="w-60 h-80">
                    <img className="w-full h-full object-cover rounded-[25px]" src="https://framerusercontent.com/images/w4uzxOi333MWYLthKXdqGlqEuQ.png?width=2080&height=2880" alt="" />
                </div>
                <div className="pr-20">
                    <p className="text-[22px] text-[#505451]">
                        Gusta was founded by <img className="w-7 h-5 inline-block mb-1 rounded-sm" src="https://flagcdn.com/es.svg" alt="" /> <b>Mar Albiol</b> and <img className="w-7 h-5 inline-block mb-1 rounded-sm" src="https://flagcdn.com/nl.svg" alt="" /> <img className="w-7 h-5 inline-block mb-1 rounded-sm" src="https://flagcdn.com/aw.svg" alt="" /> <b>Kevin van der Wijst</b>. Since the start in 2017, we’ve dedicated ourselves to making sure our studio is a comfortable place to sustainably do great work. An inclusive workplace with a healthy and respectful work culture, where you can feel empowered, be honest, learn and exchange ideas with each other. It’s way more fun like that. We think that having fun is the best way to create—and it shows in our way of working and the products we design.
                    </p>
                </div>
            </div>
            <div className="flex flex-col relative py-10 px-8">
                <div className="flex flex-row">
                    <div className="relative w-40 h-56">
                    <img className="absolute w-full h-full object-cover rounded-[40px]" src="https://framerusercontent.com/images/vOvu04Nm8NMxnGdX3qbbHMGuyjE.jpg?width=770&height=1080" alt="" />
                    </div>
                    <div className="relative -right-20 -top-9 w-40 h-64">
                        <video loop autoPlay muted className="w-full h-full object-cover rounded-[20px]" src="https://framerusercontent.com/assets/mOHnupLJiZmD5PeerE3ZhlcC5W8.mp4" />
                    </div>
                </div>
                <div className="relative w-80 h-52">
                    <img className="absolute -right-14 w-full h-full object-cover rounded-[40px]" src="https://framerusercontent.com/images/PDsLJ57BGXhbosPpfgWqxIoqlE8.jpg?width=1310&height=1050" alt="" />
                    <img className="absolute w-32 -bottom-8 -right-14" src="https://framerusercontent.com/images/58QIauTu8GEQmyhmiSxtimHNgeU.png?width=3140&height=2973" alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}