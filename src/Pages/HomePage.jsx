import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"

export default function HomePage() {

    const [ menuBox, setMenuBox ] = useState(false);

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

        return () => tl.kill()
    }, [])

    return (
        <div className="flex flex-col">
            <div className="flex fixed z-40 top-8 left-8">
                <img className="w-14" src="gusta-logo.avif" alt="Website logo" />
            </div>
            <div className="flex flex-col py-32 items-center overflow-x-hidden">
                <h1 className="font-bold px-4 py-2 text-center text-4xl md:text-7xl md:max-w-[700px] max-w-[400px]">Forward Through Digital Design</h1>
                <div className="w-full h-[624px] relative">
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
                <div className="flex flex-col py-20 px-10 md:text-center md:px-64 text-4xl md:text-5xl font-normal gap-8 md:gap-14">
                    <p>We are Gusta, a design studio rooted in craft, curosity, and care.</p>
                    <p>We design Products, brands, and websites that people love, helping businesses thrive.</p>
                </div>
                <div className="flex flex-col px-8 gap-12">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-slate-400 w-full h-[350px] rounded-2xl">
                            {/* Insert Image here */}
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-2xl">Jeanologia</h2>
                                <p className="text-xl text-gray-600">
                                    End-to-end software suite for sustainable denim design and manufacturing
                                </p>
                            </div>
                            <div>
                                <Link className="flex flex-row gap-3 items-center">
                                    <p className="text-xl font-semibold mt-1">View Case</p>
                                    <p className="text-3xl">{`>`}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-slate-400 w-full h-[350px] rounded-2xl">
                            {/* Insert Image here */}
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-2xl">Oria</h2>
                                <p className="text-xl text-gray-600">
                                    Brand Identity and product design for a smarter way to power your home
                                </p>
                            </div>
                            <div>
                                <Link className="flex flex-row gap-3 items-center">
                                    <p className="text-xl font-semibold mt-1">View Case</p>
                                    <p className="text-3xl">{`>`}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-slate-400 w-full h-[350px] rounded-2xl">
                            {/* Insert Image here */}
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-2xl">Nixfarma</h2>
                                <p className="text-xl text-gray-600">
                                    Accessible, intelligent pharmacy management for pharmacists throughout Spain
                                </p>
                            </div>
                            <div>
                                <Link className="flex flex-row gap-3 items-center">
                                    <p className="text-xl font-semibold mt-1">View Case</p>
                                    <p className="text-3xl">{`>`}</p>
                                </Link>
                            </div>
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
            <div className="bg-[#fff1d6] flex flex-col max-w-[350px] md:max-w-[750px] mx-10 rounded-3xl gap-12 mt-8 md:ml-[450px] py-8">
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
            <div className="flex flex-col w-full pt-14">
                <div className="bg-slate-400 w-full h-[350px]">
                    {/* Insert Image here */}
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center py-10 gap-6 max-w-[350px] md:max-w-[750px]">
                        <h2 className="text-3xl md:text-4xl font-normal px-6 text-center">
                            We're the creative link between people, business, and technology.
                        </h2>
                        <button className="bg-black text-white rounded-3xl md:rounded-[40px] md:text-xl px-5 md:px-10 py-3 md:py-4 font-semibold md:font-bold">
                            Our expertise
                        </button>
                    </div>
                </div>
                <div className="bg-slate-400 w-full h-[350px]">
                    {/* Insert Image here */}
                </div>
            </div>
            <div className="flex flex-col pt-10 items-center gap-10">
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
                    <div className="bg-slate-400 w-[250px] h-[450px] rounded-xl">
                        {/* Insert video here */}
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col py-10 px-6 gap-6 text-center bg-[#fff1d6]">
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
            <div className="flex flex-col gap-10 w-full pt-20 pb-36 bg-black">
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center text-center gap-4">
                        <img className="bg-white w-24 h-24 rounded-full">
                            {/* Insert Image here */}
                        </img>
                        <p className="text-3xl font-semibold text-white px-8">Ready to move forward?Let's work together!</p>
                    </div>
                    <Link className="bg-[#0ba5bd] text-2xl text-white px-10 py-6 rounded-full font-semibold">
                        Contact us
                    </Link>
                </div>
                <div className="flex flex-col gap-8 px-6 pt-10">
                    <div className="text-white flex flex-col gap-4 items-start text-5xl">
                        <button>Work</button>
                        <button>Services</button>
                        <button>About</button>
                        <button>Contact</button>
                    </div>
                    <div className="flex flex-col text-[#91948fbf] items-start text-xl">
                        <button>FAQ</button>
                        <button>Playground</button>
                        <button>Shop</button>
                    </div>
                </div>
                <div className="flex flex-col px-6 gap-4 text-xl">
                    <h3 className="text-white font-bold">Studio</h3>
                    <div className="flex flex-col gap-1 text-[#91948fbf]">
                        <p>C/ Pintor Gisbert 4</p>
                        <p>46006 Valencia, Spain</p>
                    </div>
                </div>
                <div className="flex flex-col px-6 gap-4">
                    <h3 className="text-white font-bold text-xl">New business</h3>
                    <p className="text-[#91948fbf] text-lg">hola@gusta.studio</p>
                </div>
                <div className="flex flex-col px-6 gap-2 items-start">
                    <h3 className="text-white font-bold text-xl">Connect</h3>
                    <button className="text-[#91948fbf] text-lg">Instagram</button>
                    <button className="text-[#91948fbf] text-lg">Behance</button>
                    <button className="text-[#91948fbf] text-lg">LinkedIn</button>
                </div>
                <div className="px-4 py-8">
                    <div className="bg-[#292c2abf] relative flex flex-col w-full rounded-3xl p-6 gap-12">
                        <img className="absolute w-24 -top-24 right-5" src="https://framerusercontent.com/images/yMcZyBTYBbjoT7Ltpr4npl44us.png?scale-down-to=2048&width=2581&height=3373" alt="" />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-white font-semibold">
                                Subscribe to the Socarrat
                            </h2>
                            <input className="text-[#91948fbf] text-2xl bg-transparent" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-[#91948fbf] text-lg">
                                Digestible selection of inspiring finds. Sent monthly, from our screen to yours.
                            </p>
                            <div className="flex flex-row justify-between items-center">
                                <button className="bg-[#0ba5bd] px-6 py-2 text-white rounded-3xl text-lg font-bold">Subscribe</button>
                                <Link className="text-[#91948fbf] underline">Privacy</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-8 gap-8">
                    <div className="flex flex-row gap-4">
                        <img className="w-16" src="gusta-logo.avif" alt="" />
                        <p className="font-bold text-5xl text-white">gusta</p>
                    </div>
                    <div className="flex flex-col gap-4 text-[#91948fbf] text-sm">
                        <div className="flex flex-row gap-6">
                            <Link>Terms and Conditions</Link>
                            <Link>Privacy</Link>
                        </div>
                        <p>© 2026 Gusta</p>
                    </div>
                </div>
            </div>
            {/* Menu */}
            <div
                onClick={() => setMenuBox(prev => !prev)}
                className="fixed z-50 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 bottom-6 md:top-9 md:right-12"
                >
                <div
                    className={`z-50 px-4 py-3 rounded-full transition-all duration-500 ${
                    menuBox
                        ? "bg-[#d6dcd3bf] md:bg-zinc-700 md:text-white"
                        : "bg-white md:bg-[#e7efe3bf] shadow-xl md:shadow-none"
                    }`}
                >
                    <span
                    className={`inline-block transition-transform duration-300 ${
                        menuBox ? "-rotate-45" : "rotate-0"
                    }`}
                    >
                    <i className="fi fi-rr-plus text-3xl md:text-[35px]"></i>
                    </span>
                </div>
            </div>
            {/* Menu box */}
            {
                menuBox && (
                    <div className="flex flex-col bg-white md:bg-black rounded-3xl md:rounded-[40px] z-40 fixed left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 shadow-xl bottom-2 md:right-11 md:top-8">
                        <div className="flex flex-col md:text-white md:items-start md:pl-10 md:pr-40 gap-3 px-24 pt-10 text-4xl md:text-5xl">
                            <button>Home</button>
                            <button>Work</button>
                            <button>Services</button>
                            <button>About</button>
                            <button>Contact</button>
                        </div>
                        <div className="flex flex-col gap-2 text-[#5e605cbf] md:text-[#868984bf] py-8 items-center md:items-start md:px-10 text-md">
                            <button>Playground</button>
                            <button>Shop</button>
                            <button>Newsletter</button>
                        </div>
                        <div className="flex flex-row gap-4 text-[#5e605cbf] md:text-[#868984bf] text-2xl md:text-3xl justify-center md:justify-end md:px-12 pb-24">
                            <i className="fi fi-brands-instagram"></i>
                            <i className="fi fi-brands-behance"></i>
                            <i className="fi fi-brands-linkedin"></i>
                        </div>
                    </div>
                )
            }
        </div>
    )
}