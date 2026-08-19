import { useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import Logo from "../Components/Logo";
import MenuBox from "../Components/MenuBox";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function About () {

    const rollerRef = useRef(null)
    const firstSetRef = useRef(null)

    const items = [
        {
            id: 1,
            type: "video",
            media: "https://framerusercontent.com/assets/GePJDstrr0sQiV2cR8beEyPoQk.mp4",
            title: "En Temporada",
            description:
                "Our initiative to help make a conscious decision on the fruit and vegetables we consume",
            caseStudy: true,
        },
        {
            id: 2,
            type: "image",
            media: "https://framerusercontent.com/images/s5OBi4dBhlSZWoBBoNdGMPNzS0.jpg?width=1310&height=1310",
            title: "Awwwards Jury",
            description: "Part of a global panel of specialists in the creative industry that assess the best web projects in the world.",
        },
        {
            id: 3,
            type: "image",
            media: "https://framerusercontent.com/images/8pXy4cvIIf8Osf2MRjh2DQIUvM.jpg?width=1200&height=1600",
            title: "Politechnical University of Valencia",
            description: "We teach classes about UX/UI design in the Design and Illustration master (MDI) and Interface Design diploma (DDI).",
        },
        {
            id: 4,
            type: "video",
            media: "https://framerusercontent.com/assets/ej9n5wAa1vN9uRDTRZj2juXCu3k.mp4",
            title: "Loop",
            description: "Being part of globally distributed team to help design and build a humanitarian and development aid platform.",
        },
        {
            id: 5,
            type: "image",
            media: "https://framerusercontent.com/images/WxMeBSJZLvNSD9FjWyo51wt2mU.png?width=1310&height=1310",
            title: "Conference talks and events",
            description: "We’re grateful to speak and share our vision on digital product design at conferences and events, including our recent talk at VLC Testing.",
        },
        {
            id: 6,
            type: "image",
            media: "https://framerusercontent.com/images/JNMBinio7bQaGdWO2813Cztc16g.png?width=1310&height=1310",
            title: "Part of local professional associations",
            description: "We’re part of several associations within the Valencian Community, such as ITI and ADCV, to help the industry move forward.",
        },
        {
            id: 7,
            type: "video",
            media: "https://framerusercontent.com/assets/iR7FbL7RHD1mUb9YVnM4RD5G2k.mp4",
            title: "Face This",
            description: "Designing a new website for a charity streetwear brand to help raise funds for improving education in Indonesia.",
        },
    ]

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

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 })

        items.forEach((item) => {
            tl.to(`#item${item.id}`, {
                opacity: 1,
                duration: 0,
            })

            tl.to(`#item${item.id}`, {
                opacity: 0,
                duration: 0,
                delay: 5,
            })
        })

        return () => tl.kill()
    }, [])

    useEffect(() => {
        const bars = gsap.utils.toArray(".bar")

        const tl = gsap.timeline({ repeat: -1 })

        bars.forEach((bar) => {
            tl.to(bar, {
                x: 40,
                duration: 5,
            })
        })

        return () => tl.kill()
    }, [])

    return (
        <div>
            <Logo />
            <MenuBox />

            <div className="bg-[#0ba5bd]">
                <div className="text-white flex flex-col gap-4 px-8 pt-36 md:pt-44 md:pb-20">
                    <p className="md:hidden">About</p>
                    <p className="text-3xl md:text-[40px] md:leading-10 md:max-w-[720px] font-semibold pr-[140px]">We’re a design studio shaped by the people we design for, and the people we design with.</p>
                </div>
                <div className="relative text-white pt-10 mb-20">
                    <div className="relative overflow-x-clip h-40">
                        <div ref={rollerRef} className="flex absolute top-8 w-max gap-8 px-6">

                            {/* First set */}
                            <div ref={firstSetRef} className="flex w-max gap-8">
                                <div className="relative">
                                    <img className="w-64 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/0VX8BhcfCDqj0smnLt93FsJcYWs.jpg?width=720&height=600" alt="" />
                                    <p className="relative bottom-0 rotate-6 text-sm max-w-64 text-[#505451]">Testing the Software we designed for Jeanologia</p>
                                </div>
                                <div className="relative">
                                    <img className="w-36 -rotate-6 rounded-[30px]" src="https://framerusercontent.com/images/Vg50OIhhHHwTF72s6jw0erFiHcU.jpg?width=360&height=400" alt="" />
                                    <p className="relative bottom-0 left-2 -rotate-6 text-sm max-w-40 text-[#505451]">AMS x VLC collaborators</p>
                                </div>
                                <div className="relative">
                                    <img className="w-40 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/rEHAaHSlxyHZaPlbhyeue1C1bTk.jpg?width=440&height=620" alt="" />
                                    <p className="relative -top-64 -left-4 -rotate-6 text-sm max-w-40">Design thinking</p>
                                </div>
                                <div className="relative">
                                    <img className="w-64 -rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/0fX7HCDEI3Qqe0nAl7CkZKzGA.jpg?width=640&height=520" alt="" />
                                    <p className="relative bottom-0 left-4 -rotate-6 text-sm max-w-64 text-[#505451]">Testing Nixfarma with challenging light conditions</p>
                                </div>
                                <div className="relative">
                                    <img className="w-64 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/b1pXAWWoLFxO7M6A8kUXlilg.jpg?width=600&height=400" alt="" />
                                    <p className="relative bottom-0 rotate-6 text-sm max-w-64 text-[#505451]">On-site crop management with Agro4all</p>
                                </div>
                                <div className="relative">
                                    <img className="w-56 -rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/A2KAOIpF3wHDuETTC4Nsk8n1fE.jpg?width=640&height=520" alt="" />
                                    <p className="relative -top-[215px] -left-6 text-nowrap -rotate-6 text-sm max-w-56">Making port access efficient at Valenciaport</p>
                                </div>
                                <div className="relative">
                                    <img className="w-36 relative left-10 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/RiWb5QImBvSPXlHQRTuFC9tI4w.jpg?width=320&height=450" alt="" />
                                    <p className="relative bottom-0 left-2 rotate-6 text-sm max-w-64 text-[#505451]">UK workshop with Lufthansa</p>
                                </div>
                                <div className="relative">
                                    <img className="w-56 relative -top-8 -rotate-6 rounded-[120px]" src="https://framerusercontent.com/images/PExJAHh9WQNeCJ4w4qA3vmGqJE.jpg?width=512&height=640" alt="" />
                                    <p className="relative bottom-12 -right-24 -rotate-12 text-sm max-w-64 text-[#505451]">At the studio</p>
                                </div>
                            </div>
                            <div className="flex w-max gap-8">
                                <div className="relative">
                                    <img className="w-64 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/0VX8BhcfCDqj0smnLt93FsJcYWs.jpg?width=720&height=600" alt="" />
                                    <p className="relative bottom-0 rotate-6 text-sm max-w-64 text-[#505451]">Testing the Software we designed for Jeanologia</p>
                                </div>
                                <div className="relative">
                                    <img className="w-36 -rotate-6 rounded-[30px]" src="https://framerusercontent.com/images/Vg50OIhhHHwTF72s6jw0erFiHcU.jpg?width=360&height=400" alt="" />
                                    <p className="relative bottom-0 left-2 -rotate-6 text-sm max-w-40 text-[#505451]">AMS x VLC collaborators</p>
                                </div>
                                <div className="relative">
                                    <img className="w-40 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/rEHAaHSlxyHZaPlbhyeue1C1bTk.jpg?width=440&height=620" alt="" />
                                    <p className="relative -top-64 -left-4 -rotate-6 text-sm max-w-40">Design thinking</p>
                                </div>
                                <div className="relative">
                                    <img className="w-64 -rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/0fX7HCDEI3Qqe0nAl7CkZKzGA.jpg?width=640&height=520" alt="" />
                                    <p className="relative bottom-0 left-4 -rotate-6 text-sm max-w-64 text-[#505451]">Testing Nixfarma with challenging light conditions</p>
                                </div>
                                <div className="relative">
                                    <img className="w-64 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/b1pXAWWoLFxO7M6A8kUXlilg.jpg?width=600&height=400" alt="" />
                                    <p className="relative bottom-0 rotate-6 text-sm max-w-64 text-[#505451]">On-site crop management with Agro4all</p>
                                </div>
                                <div className="relative">
                                    <img className="w-56 -rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/A2KAOIpF3wHDuETTC4Nsk8n1fE.jpg?width=640&height=520" alt="" />
                                    <p className="relative -top-[215px] -left-6 text-nowrap -rotate-6 text-sm max-w-56">Making port access efficient at Valenciaport</p>
                                </div>
                                <div className="relative">
                                    <img className="w-36 relative left-10 rotate-6 rounded-[40px]" src="https://framerusercontent.com/images/RiWb5QImBvSPXlHQRTuFC9tI4w.jpg?width=320&height=450" alt="" />
                                    <p className="relative bottom-0 left-2 rotate-6 text-sm max-w-64 text-[#505451]">UK workshop with Lufthansa</p>
                                </div>
                                <div className="relative">
                                    <img className="w-56 relative -top-8 -rotate-6 rounded-[120px]" src="https://framerusercontent.com/images/PExJAHh9WQNeCJ4w4qA3vmGqJE.jpg?width=512&height=640" alt="" />
                                    <p className="relative bottom-12 -right-24 -rotate-12 text-sm max-w-64 text-[#505451]">At the studio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col md:max-w-[850px] gap-6 pt-28 px-8 md:pl-60">
                <h1 className="text-[32px] font-normal leading-9 md:pr-8 md:text-[40px]">We design digital products and brands people love.</h1>
                <p className="text-[20px] text-[#505451] md:text-[22px]">We believe in creating more than just functional solutions. We love to craft experiences that bridge people, businesses, and technology by designing products and brands that are intuitive, impactful, and drive progress, all while having fun along the way. We put people first, from the team we nurture and the collaborators we partner with to the people using what we create.</p>
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
            <div className="flex flex-col relative py-8 px-4">
                <div className="flex flex-row">
                    <div className="relative w-40 h-56">
                    <img className="absolute w-full h-full object-cover rounded-[40px]" src="https://framerusercontent.com/images/vOvu04Nm8NMxnGdX3qbbHMGuyjE.jpg?width=770&height=1080" alt="" />
                    </div>
                    <div className="relative -right-16 -top-9 w-40 h-64">
                        <video loop autoPlay muted className="w-full h-full object-cover rounded-[20px]" src="https://framerusercontent.com/assets/mOHnupLJiZmD5PeerE3ZhlcC5W8.mp4" />
                    </div>
                </div>
                <div className="relative w-80 h-52">
                    <img className="absolute -right-14 w-full h-full object-cover rounded-[40px]" src="https://framerusercontent.com/images/PDsLJ57BGXhbosPpfgWqxIoqlE8.jpg?width=1310&height=1050" alt="" />
                    <img className="absolute w-32 -bottom-12 -right-14" src="https://framerusercontent.com/images/58QIauTu8GEQmyhmiSxtimHNgeU.png?width=3140&height=2973" alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-8 bg-[#fff1d6] p-8">
                <div className="flex flex-col gap-6">
                    <h3 className="text-[34px] leading-9 font-normal">
                        Meet our team <br />
                        of versatile creatives
                    </h3>
                    <p className="text-[#474747] text-[22px] leading-7">We’re purposely small, meaning no fuss, but room for focus on big ideas, challenges, and results. We’re all hands-on creative, with diverse backgrounds and experiences, striving for top-notch quality work, designing products people love to use.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center justify-center">
                    <div className="flex flex-col gap-4">
                        <img className="aspect-[640/860] rounded-lg" src="https://framerusercontent.com/images/gISsr3aViWo2DodcFvmbKQGvmX4.jpg?width=770&height=992" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">Luz Andreu</p>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className="aspect-[640/860] rounded-lg" src="https://framerusercontent.com/images/wPDEhg38h4WQVNS9eUSBxgNyprc.jpg?width=770&height=992" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">Mar Albiol</p>
                            <p>Managing Director</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className="aspect-[640/860] rounded-lg" src="https://framerusercontent.com/images/IHNhZ3uY4x2aAia8ferpm7ESIw.jpg?width=770&height=992" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">Estrella Gracia</p>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className="aspect-[640/860] rounded-lg" src="https://framerusercontent.com/images/lslVPZTG4nhntKXLUuntwdGI3k.jpg?width=770&height=992" alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">Kevin van der Wijst</p>
                            <p>Design Director</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-20">
                <div className="flex flex-col gap-6 pl-8 pr-10">
                    <h2 className="text-[35px] font-semibold">
                        Community
                    </h2>
                    <p className="text-[#505451] text-[22px]">
                        Communities are fundamental to great experiences. Whether we’re engaging with people and initiatives around us, connecting with the design community in the virtual space, or annually dedicating some of our time to providing services to charitable organizations—we like to give back.
                    </p>
                </div>
                <div className="flex flex-row gap-2 pt-10 pl-8 pr-10 items-center justify-center">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-x-hidden rounded-2xl"
                        >
                            <p className="bar bg-slate-700 absolute -left-10 px-5 py-1 rounded-2xl"></p>

                            <p className="bg-slate-300 px-5 py-1"></p>
                        </div>
                    ))}
                </div>
                <div className="relative py-10 h-[600px]">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            id={`item${item.id}`}
                            className={`item absolute w-full px-10 ${
                                index !== 0 ? "opacity-0" : ""
                            }`}
                        >
                            <div className="flex flex-col rounded-2xl items-center w-full gap-3">

                                <div className="w-full aspect-square max-w-[350px] overflow-hidden rounded-2xl">
                                    {item.type === "video" ? (
                                        <video
                                            className="w-full h-full object-cover"
                                            src={item.media}
                                            loop
                                            autoPlay
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.media}
                                            alt={item.title}
                                        />
                                    )}
                                </div>

                                <div className="flex flex-col gap-3 items-start text-start w-full max-w-[350px]">
                                    <p className="text-[22px] font-semibold">
                                        {item.title}
                                    </p>

                                    <p className="text-[#505451] text-[20px] pr-10">
                                        {item.description}
                                    </p>

                                    {item.caseStudy && (
                                        <Link className="flex flex-row items-center gap-4">
                                            <p className="text-[18px] font-semibold">
                                                View Case study
                                            </p>

                                            <p className="text-[25px] mb-[1px]">
                                                {`>`}
                                            </p>
                                        </Link>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#abe8e8] py-10 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-6 max-w-[300px] items-start justify-start">
                    <img className="w-24" src="/world-logo.png" alt="" />
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[28px] font-semibold">Design for change</h3>
                        <p className="text-[#080a0ccc] text-[18px]">Once a year, we like to dedicate our time to providing services to non-profit organizations or social good projects. With this initiative we aim to make design more accessible to organizations positively impacting the world.</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <div className="bg-white flex justify-center items-center w-4 h-4 mt-1 rounded-full">
                            <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                        </div>
                        <p className="text-[17px] font-semibold">Currently closed for applications</p>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className="flex flex-col items-center gap-10 bg-white md:hidden">
                <div className="bg-[#fcc113] relative flex flex-col w-full py-10 pl-6 pr-10 gap-8">
                    <h2 className="text-3xl pr-36 font-semibold">Stay connected with updates, insights, and inspiration.</h2>
                    <div className="w-[250px] h-[450px] rounded-xl">
                        <video loop muted autoPlay className="rounded-2xl" src="https://framerusercontent.com/assets/7lIGZQ6m8lkueVE4gq0N7vp8aRM.mp4"></video>
                        <button className="absolute bottom-14 text-white font-semibold text-md bg-slate-400/60 mx-3 rounded-sm px-4 py-2">@gusta.studio</button>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col py-10 px-6 gap-6 text-center bg-[#fff1d6] md:hidden">
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
            <div className="hidden bg-[#fcc113] md:relative md:flex flex-col items-center w-full py-10 pl-6 pr-10 gap-8">
                <h2 className="text-[40px] pr-36 font-semibold max-w-[700px]">Stay connected with updates, insights, and inspiration.</h2>
                <div className="flex flex-row gap-6">
                    <div className="w-[300px] h-[550px] rounded-xl">
                        <video loop muted autoPlay className="rounded-2xl" src="https://framerusercontent.com/assets/7lIGZQ6m8lkueVE4gq0N7vp8aRM.mp4"></video>
                        <button className="absolute top-[670px] text-white font-semibold text-md bg-slate-400/60 mx-3 rounded-sm px-4 py-2">@gusta.studio</button>
                    </div>
                    <div className="flex items-end">
                        <img className="w-[400px] rounded-full" src="stay-connected.avif" alt="" />
                    </div>
                </div>
                <div className="hidden md:relative md:flex md:flex-col max-w-[700px] rounded-[60px] py-16 px-6 gap-10 text-center bg-[#fff1d6]">
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
            <Footer />
        </div>
    )
}