import { useEffect } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../Components/Logo";
import MenuBox from "../Components/MenuBox";
import Footer from "../Components/Footer";

export default function HomePage() {

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        var tl = gsap.timeline({
            repeat: -1
        })

        tl.to("#content1", {
            opacity: 1,
            duration: 0
        })
        tl.to("#content1", {
            opacity: 0,
            delay: 3,
            duration: 0
        })
        .to("#content2", {
            opacity: 1,
            duration: 0
        })
        .to("#content2", {
            opacity: 0,
            delay: 3,
            duration: 0
        })
        .to("#content3", {
            opacity: 1,
            duration: 0
        })
        .to("#content3", {
            opacity: 0,
            delay: 3,
            duration: 0
        })

        gsap.to("#image-scroll", {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: "#image-scroll",
                start: "top 70%",
                end: "top -200%",
                scrub: 2,
            }
        });

        return () => tl.kill()
    }, [])

    const handleEnter = () => {
        gsap.to("#paragraph", {
            backgroundColor: "#fff1d6",
            overwrite:true
        })
    }

    const handleLeave = () => {
        gsap.to("#paragraph", {
            backgroundColor: "white",
            overwrite:true
        })
    }

    return (
        <div className="flex flex-col">
            <Logo />
            <div className="flex flex-col py-32 items-center overflow-x-hidden">
                <h1 className="font-bold px-4 py-2 text-center text-4xl md:text-7xl md:max-w-[700px] max-w-[400px]">Forward Through Digital Design</h1>
                {/* Mobile */}
                <div className="w-full h-[624px] relative md:hidden">
                    <div id="content1" className="opacity-0 absolute left-1/2 -translate-x-1/2 w-[550px] h-[624px]">
                        <video className="w-52 absolute -rotate-3 -left-[3%] top-[300px] rounded-xl" src="https://framerusercontent.com/assets/lLvZTmIKfLwL7G5qVBUXGdhQo.mp4" preload="auto" autoPlay loop muted poster="https://framerusercontent.com/images/dZrjOw82qYCOxUCOashJHT8oaZY.png?width=360&height=640"></video>
                        <img className="absolute top-[400px] -right-12 rotate-3 w-96 h-64 rounded-3xl" src="https://framerusercontent.com/images/qYVaoPHzFIbni6dJOLvx5SAlYGk.png?scale-down-to=1024&width=960&height=1120 877w,https://framerusercontent.com/images/qYVaoPHzFIbni6dJOLvx5SAlYGk.png?width=960&height=1120 960w" alt="" />
                        <img className="w-80 rounded-xl rotate-6 absolute top-[30px] -left-3" src="https://framerusercontent.com/images/yq0IGMMzJtKXkVuRq470oUtnM0.jpg?scale-down-to=512&width=1000&height=740 512w,https://framerusercontent.com/images/yq0IGMMzJtKXkVuRq470oUtnM0.jpg?width=1000&height=740 1000w" alt="" />
                        <img className="w-56 -rotate-3 absolute top-48 -right-4 rounded-3xl" src="https://framerusercontent.com/images/MrtB1IFGvmEkWTjmnuvYcOHSgM.jpg?scale-down-to=512&width=660&height=560 512w,https://framerusercontent.com/images/MrtB1IFGvmEkWTjmnuvYcOHSgM.jpg?width=660&height=560 660w" alt="" />
                        <img className="w-44 rounded-3xl absolute right-0 rotate-6" src="https://framerusercontent.com/images/LbLTTeXIMS3l2pO0OnyTFePogo.png?scale-down-to=512&width=600&height=600 512w,https://framerusercontent.com/images/LbLTTeXIMS3l2pO0OnyTFePogo.png?width=600&height=600 600w" alt="" />
                        <img className="w-24 absolute top-[300px] left-56" src="https://framerusercontent.com/images/AwjThmm5Qa0BI05po6eHlv6vHSE.png?width=300&height=234" alt="" />
                    </div>
                    <div id="content2" className="opacity-0 absolute left-1/2 -translate-x-1/2 w-[550px] h-[624px]">
                        <img className="w-44 rounded-full absolute rotate-6 left-8" src="https://framerusercontent.com/images/VxoTEviyPKo09XuXJigjmmaPcsc.jpg?width=640&height=920 640w" alt="" />
                        <img className="absolute w-72 rotate-6 bottom-4 rounded-full -right-8 bg-yellow-400 px-6 py-4" src="https://framerusercontent.com/images/EMQNMW35h7D8LENGmKJJkkcKg.png?scale-down-to=512&width=800&height=330 512w,https://framerusercontent.com/images/EMQNMW35h7D8LENGmKJJkkcKg.png?width=800&height=330 800w" alt="" />
                        <video className="w-56 absolute bottom-44 rounded-3xl right-0" autoPlay loop muted src="https://framerusercontent.com/assets/8zqBjfXanNa1XpaIzKT2PW75ak.mp4"></video>
                        <img className="w-48 absolute left-8 -bottom-6 rounded-3xl rotate-12" src="https://framerusercontent.com/images/KUhX8gQK2Ytrp1MlkqgmwCHhH0.jpg?width=643&height=840" alt="" />
                        <video className="absolute w-44 rounded-3xl -rotate-6 right-4" loop autoPlay muted src="https://framerusercontent.com/assets/laGrVxebPqdjgUpnNzPB5d4vfE.mp4"></video>
                        <video className="w-48 absolute rounded-3xl top-[200px] left-32 -rotate-6" loop muted autoPlay src="https://framerusercontent.com/assets/LhSo2NvVJcTAG0F1fRavHkc.mp4"></video>
                        <img className="w-24 absolute left-48 top-[100px] -rotate-12" src="https://framerusercontent.com/images/3LS14LWMJvsGn6gXywuvtwBqHE.png?width=450&height=612 450w" alt="" />
                        <img className="w-40 absolute left-40 bottom-6" src="https://framerusercontent.com/images/P70Yh5NQDps6cgriD2sKWhLpI.png?width=781&height=465" alt="" />
                    </div>
                    <div id="content3" className="opacity-0 absolute left-1/2 -translate-x-1/2 w-[550px] h-[624px]">
                        <img className="w-60 h-64 absolute right-8 -rotate-6 rounded-3xl top-56" src="https://framerusercontent.com/images/xPkMQNqVicuf9ASIlzKvbEcUDY.jpg?width=1040&height=920" alt="" />
                        <img className="w-64 absolute -bottom-12 left-6 rounded-[50px] -rotate-6" src="https://framerusercontent.com/images/EFvgHvy3aSaDGW9vcn7sDmvsg.png?width=1040&height=1040" alt="" />
                        <img className="w-60 absolute rounded-3xl top-4 -rotate-6" src="https://framerusercontent.com/images/A5F8uo7VL5EcRnNHef1DeRhmPDQ.jpg?width=1000&height=740" alt="" />
                        <video className="w-48 absolute rounded-3xl rotate-3 left-12 top-[210px]" loop muted autoPlay src="https://framerusercontent.com/assets/j44HvIGeouTMmh0w41xzipuF9o.mp4"></video>
                        <video className="w-44 absolute right-8 -bottom-12 rounded-3xl rotate-6" loop autoPlay muted src="https://framerusercontent.com/assets/TU7cHjIr2E44lZ20TcFYKqyqF0.mp4"></video>
                        <video className="w-60 absolute right-14 top-6 -rotate-3 rounded-3xl" loop autoPlay muted src="https://framerusercontent.com/assets/9ly0T7RZY6WBkHqlwQvZBOUnR3w.mp4"></video>
                        <img className="w-40 absolute top-40 left-40" src="https://framerusercontent.com/images/70EAw0GRWLLWf2k7oi1sth6rVY.png?width=750&height=630" alt="" />
                        <img className="w-28 rotate-6 absolute bottom-10 left-60" src="https://framerusercontent.com/images/lwjDF4oM1o8BkiG9VVrRLUQzik8.png?width=483&height=420" alt="" />
                    </div>
                </div>
                <div className="hidden md:block w-full max-w-[1200px] h-[900px] mx-auto py-20">
                    <div className="relative w-full aspect-[16/9] rounded-[40px]">
                        <img
                            className="absolute w-[400px] rounded-3xl rotate-6 top-10 -left-12"
                            src="https://framerusercontent.com/images/yq0IGMMzJtKXkVuRq470oUtnM0.jpg?width=1000&height=740"
                            alt=""
                        />
                        <img
                            className="absolute w-[280px] rounded-3xl -rotate-3 top-28 right-40"
                            src="https://framerusercontent.com/images/MrtB1IFGvmEkWTjmnuvYcOHSgM.jpg?width=660&height=560"
                            alt=""
                        />
                        <video
                            className="absolute w-[250px] rounded-3xl -rotate-3 top-[300px] -left-8"
                            src="https://framerusercontent.com/assets/lLvZTmIKfLwL7G5qVBUXGdhQo.mp4"
                            autoPlay
                            loop
                            muted
                        />
                        <img
                            className="absolute w-[280px] rounded-3xl rotate-3 top-[380px] left-[360px]"
                            src="https://framerusercontent.com/images/qYVaoPHzFIbni6dJOLvx5SAlYGk.png?width=960&height=1120"
                            alt=""
                        />
                        <img
                            className="absolute w-[180px] rounded-full rotate-6 top-8 left-[380px]"
                            src="https://framerusercontent.com/images/VxoTEviyPKo09XuXJigjmmaPcsc.jpg?width=640&height=920"
                            alt=""
                        />
                        <video
                            className="absolute w-[220px] rounded-3xl rotate-6 top-[240px] left-[550px]"
                            src="https://framerusercontent.com/assets/8zqBjfXanNa1XpaIzKT2PW75ak.mp4"
                            autoPlay
                            loop
                            muted
                        />
                        <img
                            className="absolute w-[180px] rounded-3xl rotate-12 bottom-10 left-[200px]"
                            src="https://framerusercontent.com/images/KUhX8gQK2Ytrp1MlkqgmwCHhH0.jpg?width=643&height=840"
                            alt=""
                        />
                        <video
                            className="absolute w-[240px] rounded-3xl -rotate-6 top-[100px] -right-8"
                            src="https://framerusercontent.com/assets/laGrVxebPqdjgUpnNzPB5d4vfE.mp4"
                            autoPlay
                            loop
                            muted
                        />
                        <img
                            className="absolute w-[230px] rounded-3xl -rotate-6 -bottom-12 right-0"
                            src="https://framerusercontent.com/images/xPkMQNqVicuf9ASIlzKvbEcUDY.jpg?width=1040&height=920"
                            alt=""
                        />
                        <img
                            className="absolute w-[220px] rounded-[50px] rotate-6 -bottom-14 right-[330px]"
                            src="https://framerusercontent.com/images/EFvgHvy3aSaDGW9vcn7sDmvsg.png?width=1040&height=1040"
                            alt=""
                        />
                        <video
                            className="absolute w-[210px] rounded-3xl rotate-3 top-[350px] right-[220px]"
                            src="https://framerusercontent.com/assets/j44HvIGeouTMmh0w41xzipuF9o.mp4"
                            autoPlay
                            loop
                            muted
                        />
                        <video
                            className="absolute w-[250px] rounded-3xl -rotate-3 top-8 right-[380px]"
                            src="https://framerusercontent.com/assets/9ly0T7RZY6WBkHqlwQvZBOUnR3w.mp4"
                            autoPlay
                            loop
                            muted
                        />
                        <img
                            className="absolute w-32 rotate-6 top-[280px] left-[400px]"
                            src="https://framerusercontent.com/images/70EAw0GRWLLWf2k7oi1sth6rVY.png?width=750&height=630"
                            alt=""
                        />

                    </div>
                </div>
                <div className="flex flex-col py-20 px-10 md:text-center md:px-64 text-4xl md:text-5xl font-normal gap-8 md:gap-14">
                    <p>We are Gusta, a design studio rooted in craft, curosity, and care.</p>
                    <p>We design Products, brands, and websites that people love, helping businesses thrive.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 px-8 md:px-12">

                    {/* Jeanologia */}
                    <div className="flex flex-col gap-6">
                        <div className="relative w-full rounded-3xl overflow-hidden">
                            <div className="absolute z-10 left-4 top-3 flex gap-2">
                                <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                    Product
                                </button>
                                <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                    Fashion
                                </button>
                            </div>

                            <video
                                className="w-full aspect-[4/3] object-cover rounded-3xl"
                                loop
                                autoPlay
                                muted
                                src="https://framerusercontent.com/assets/Py00ZrwZ0EZGP6Q4CS68uI.mp4"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-2xl">
                                    Jeanologia
                                </h2>

                                <p className="text-xl text-gray-600">
                                    End-to-end software suite for sustainable denim
                                    design and manufacturing
                                </p>
                            </div>

                            <Link className="flex items-center gap-3">
                                <p className="text-xl font-semibold">
                                    View Case
                                </p>
                                <p className="text-3xl">
                                    {`>`}
                                </p>
                            </Link>
                        </div>
                    </div>


                    {/* Oria */}
                    <div className="flex flex-col gap-6">
                        <div className="relative w-full rounded-3xl overflow-hidden">
                            <div className="absolute z-10 left-4 top-3 flex gap-2">
                                <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                    Product
                                </button>

                                <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                    Brand
                                </button>

                                <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                    Energy
                                </button>
                            </div>

                            <video
                                className="w-full aspect-[4/3] object-cover rounded-3xl"
                                loop
                                autoPlay
                                muted
                                src="https://framerusercontent.com/assets/eKyUB6C9K7bxBl9Ftxm79pHkkKM.mp4"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-2xl">
                                    Oria
                                </h2>

                                <p className="text-xl text-gray-600">
                                    Brand identity and product design for a smarter
                                    way to power your home
                                </p>
                            </div>

                            <Link className="flex items-center gap-3">
                                <p className="text-xl font-semibold">
                                    View Case
                                </p>
                                <p className="text-3xl">
                                    {`>`}
                                </p>
                            </Link>
                        </div>
                    </div>


                    {/* Nixfarma */}
                    <div className="flex flex-col gap-6">
                        <div className="relative w-full rounded-3xl overflow-hidden">
                            <div className="absolute z-10 left-4 top-3 flex gap-2">
                                <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                    Product
                                </button>

                                <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                    Pharmaceutical
                                </button>
                            </div>

                            <img
                                className="w-full aspect-[4/3] object-cover rounded-3xl"
                                src="https://framerusercontent.com/images/pNWmvtzGxBYfK36LNtnBwyHuY.png?width=1080&height=1350"
                                alt="Nixfarma"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-2xl">
                                    Nixfarma
                                </h2>

                                <p className="text-xl text-gray-600">
                                    Accessible, intelligent pharmacy management
                                    for pharmacists throughout Spain
                                </p>
                            </div>

                            <Link className="flex items-center gap-3">
                                <p className="text-xl font-semibold">
                                    View Case
                                </p>
                                <p className="text-3xl">
                                    {`>`}
                                </p>
                            </Link>
                        </div>
                    </div>


                    {/* Project 4 */}
                    <div className="flex flex-col gap-6">
                        <div className="relative w-full rounded-3xl overflow-hidden">
                            <div className="absolute z-10 left-4 top-3 flex gap-2">
                                <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                    Product
                                </button>

                                <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                    Technology
                                </button>
                            </div>

                            <video
                                className="w-full aspect-[4/3] object-cover rounded-3xl"
                                loop
                                autoPlay
                                muted
                                src="https://framerusercontent.com/assets/Py00ZrwZ0EZGP6Q4CS68uI.mp4"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-2xl">
                                    Project Four
                                </h2>

                                <p className="text-xl text-gray-600">
                                    Digital product experience designed to make
                                    complex technology simple and accessible
                                </p>
                            </div>

                            <Link className="flex items-center gap-3">
                                <p className="text-xl font-semibold">
                                    View Case
                                </p>
                                <p className="text-3xl">
                                    {`>`}
                                </p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            
            <Link className="flex relative pb-14 py-4 justify-center">
                <img className="absolute -top-8 left-28 md:left-[500px] w-20 mb-20" src="https://framerusercontent.com/images/unH8JgbHJKTgSOwAqjiuOl5T4.png?width=300&height=351" alt="" />
                <p className="bg-[#080a0c] text-3xl font-semibold rounded-[35px] text-white pt-20 pb-6 px-8 md:px-14">
                    View all projects
                </p>
            </Link>
            <div className="flex flex-col w-full md:pl-64 items-center text-center justify-center md:items-start md:justify-start">
                <div className="flex flex-col bg-[#ddf3f3] max-w-[350px] md:max-w-[450px] px-8 mx-4 rounded-3xl md:rounded-[80px] pt-12">
                    <h1 className="text-[#0ba5bd] text-7xl">”</h1>
                    <p className="text-xl text-zinc-600">
                        It's not just the end result that Gusta offers, it's how they are embedded in the project to maximize the value offered in the shortest possible time.
                    </p>
                    <div className="flex flex-col py-10 gap-6 items-center">
                        <img className="rounded-full w-20" src="person-1.avif" alt="" />
                        <div>
                            <h2 className="font-semibold text-lg">José García de la Guía</h2>
                            <p className="text-zinc-500">Port & Logistics IT Consultant</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-[#fff1d6] flex flex-col max-w-[350px] md:max-w-[550px] mx-10 rounded-3xl gap-12 mt-8 md:ml-[450px] py-8">
                    <h1 className="px-8 md:px-36 text-4xl font-bold text-center text-zinc-700">
                        How can we help you?
                    </h1>
                    <div className="flex flex-col gap-4">
                        <h2 className="pl-8 md:text-xl">Choose what fit your needs</h2>
                        <div className="flex flex-col px-2 md:px-6 gap-2 md:text-xl">
                            <button className="bg-white p-2 md:p-4 max-w-80 md:max-w-[400px] rounded-xl text-left font-semibold">
                                Our product needs to be more intuitive
                            </button>
                            <button className="bg-white p-2 md:p-4 max-w-56 md:max-w-[300px] rounded-xl text-left font-semibold">
                                We need a consistent look and feel across our products
                            </button>
                            <button className="bg-white p-2 md:p-4 max-w-80 md:max-w-[400px] rounded-xl text-left font-semibold">
                                Our product needs a new UX/UI design
                            </button>
                            <button className="bg-white p-2 md:p-4 max-w-80 md:max-w-[400px] rounded-xl text-left font-semibold">
                                Our brand needs to reflect who we are
                            </button>
                            <button className="bg-white p-2 md:p-4 max-w-56 md:max-w-[370px] rounded-xl text-left font-semibold">
                                We need compelling visuals to bring our brand to life
                            </button>
                            <button className="bg-white p-2 md:p-4 max-w-48 md:max-w-64 rounded-xl text-left font-semibold">
                                We need a new website
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="paragraph" className="flex flex-col w-full pt-14">

                {/* ================= TOP IMAGE SECTION ================= */}
                <div className="relative w-full h-[350px] md:max-w-[1000px] md:mx-auto">

                    {/* Top image */}
                    <div
                        className="
                            absolute
                            right-[80px]
                            top-0
                            w-[150px]
                            h-[150px]
                            rounded-3xl
                            overflow-hidden

                            md:right-auto
                            md:left-[250px]
                            md:w-[210px]
                            md:h-[210px]
                            md:-translate-x-1/2
                        "
                    >
                        <img
                            id="image-scroll"
                            className="absolute w-full h-auto max-w-none"
                            src="https://framerusercontent.com/images/rZcQWllc4c3CVxQQAfwRJRHTYgo.png?width=500&height=716"
                            alt=""
                        />
                    </div>


                    {/* Left image */}
                    <img
                        className="
                            absolute
                            left-[16px]
                            top-[160px]
                            w-[144px]

                            md:left-[calc(50%-40px)]
                            md:w-[160px]
                            md:top-[130px]
                        "
                        src="https://framerusercontent.com/images/u6RQ8n0V3e7XnoFiOmvjaiE6b4.png?width=400&height=360"
                        alt=""
                    />


                    {/* Right image */}
                    <img
                        className="
                            absolute
                            right-0
                            top-[192px]
                            w-[112px]

                            md:right-auto
                            md:w-[140px]
                            md:left-[calc(50%+280px)]
                            md:top-[192px]
                        "
                        src="https://framerusercontent.com/images/m5ACNgRDKTs10VlZqpmLeL3cM.png?width=328&height=400"
                        alt=""
                    />

                </div>


                {/* ================= TEXT ================= */}
                <div className="flex flex-col items-center justify-center text-center">

                    <div className="flex flex-col items-center py-10 gap-6 max-w-[750px] px-6">

                        <h2 className="text-3xl md:text-4xl font-normal text-center">
                            We're the creative link between people, business, and technology.
                        </h2>

                        <button className="bg-black text-white rounded-3xl md:rounded-[40px] md:text-xl px-5 md:px-10 py-3 md:py-4 font-semibold md:font-bold">
                            Our expertise
                        </button>

                    </div>

                </div>


                {/* ================= BOTTOM IMAGE SECTION ================= */}
                <div className="relative w-full h-[350px] md:max-w-[1000px] md:mx-auto">

                    {/* Center circle */}
                    <div
                        className="
                            bg-[#abe8e8]
                            absolute
                            right-48
                            flex
                            justify-center
                            items-center
                            overflow-hidden
                            w-24
                            h-24
                            rounded-full

                            md:right-auto
                            md:left-[400px]
                            md:top-[110px]
                            md:w-[150px]
                            md:h-[150px]
                            md:-translate-x-1/2
                        "
                    >
                        <div className="bg-[#8bbbbb] absolute right-0 ml-14 pr-[65px] md:pr-[95px] rounded-l-[20px] md:rounded-l-[30px] h-10 md:h-14">

                            <div className="bg-white absolute top-1 md:top-2 right-7 md:right-[50px] w-8 h-8 md:w-10 md:h-10 rounded-full" />

                        </div>
                    </div>


                    {/* Bottom left image */}
                    <img
                        className="
                            absolute
                            w-32
                            left-[-16px]
                            rounded-3xl
                            top-16

                            md:left-[calc(50%-450px)]
                            md:-top-12
                            md:w-[160px]
                        "
                        src="https://framerusercontent.com/images/UpZmkBz2pRPBV1v7uIXkAmOOiI.png?width=2160&height=2700"
                        alt=""
                    />


                    {/* Bottom right image */}
                    <img
                        className="
                            absolute
                            w-28
                            right-4
                            rounded-3xl
                            top-32

                            md:right-auto
                            md:w-[160px]
                            md:left-[calc(50%+150px)]
                            md:top-20
                        "
                        src="https://framerusercontent.com/images/mFA1qXsCrvd3M2PFSuqWHciT1QA.png?width=400&height=560"
                        alt=""
                    />

                </div>

            </div>

            {/* Mobile */}
            <div id="paragraph" onPointerEnter={handleEnter} onPointerLeave={handleLeave} className="flex flex-col pt-10 items-center gap-10 bg-white md:hidden">
                <img className="w-64 h-40 rounded-3xl items-center" src="get-to-know-us-1.avif" alt="" />
                <div className="flex flex-col items-start px-6 gap-10 max-w-[400px]">
                    <h2 className="text-3xl">We’re a small team of versatile creatives, committed to doing good work while having fun.</h2>
                    <button className="bg-black text-white text-xl rounded-3xl px-5 py-3 font-semibold">
                        Get to know us
                    </button>
                </div>
                <div className="flex relative items-end justify-end w-full px-8 max-w-[400px]">
                    <img className="w-44 rounded-2xl" src="get-to-know-us-2.avif" alt="" />
                    <img className="absolute w-28 -bottom-8 right-32" src="https://framerusercontent.com/images/X1NF4nBj3ynPnt5C5wXPCQ1AU.png?width=270&height=209" alt="" />
                </div>
                <div className="bg-[#fcc113] relative flex flex-col w-full py-10 pl-6 pr-10 gap-8">
                    <h2 className="text-3xl pr-36 font-semibold">Stay connected with updates, insights, and inspiration.</h2>
                    <div className="w-[250px] h-[450px] rounded-xl">
                        <video loop muted autoPlay className="rounded-2xl" src="https://framerusercontent.com/assets/7lIGZQ6m8lkueVE4gq0N7vp8aRM.mp4"></video>
                        <button className="absolute bottom-14 text-white font-semibold text-md bg-slate-400/60 mx-3 rounded-sm px-4 py-2">@gusta.studio</button>
                    </div>
                </div>
            </div>
            {/* Desktop */}
            <div id="paragraph" onPointerEnter={handleEnter} onPointerLeave={handleLeave} className="hidden md:flex md:flex-col pt-10 items-center relative gap-24 bg-white">
                <div className="flex relative right-14 w-full px-8 max-w-[600px]">
                    <img className="w-[350px] rounded-2xl" src="get-to-know-us-2.avif" alt="" />
                    <img className="absolute w-28 -bottom-8 right-44" src="https://framerusercontent.com/images/X1NF4nBj3ynPnt5C5wXPCQ1AU.png?width=270&height=209" alt="" />
                </div>
                <div className="flex relative w-full max-w-[600px] h-[320px]">
                    <img className="absolute w-[500px] h-[330px] rounded-3xl -right-9" src="get-to-know-us-1.avif" alt="" />
                </div>
                <div className="flex flex-col items-start pl-20 gap-10 max-w-[500px]">
                    <h2 className="text-[35px] font-semibold">We’re a small team of versatile creatives, committed to doing good work while having fun.</h2>
                    <button className="bg-black text-white text-xl rounded-3xl px-6 pt-3 pb-4 font-bold">
                        Get to know us
                    </button>
                </div>
                <div className="bg-[#fcc113] relative flex flex-col items-center w-full py-10 pl-6 pr-10 gap-8">
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
            
            <Footer />

            <MenuBox />
        </div>
    )
}