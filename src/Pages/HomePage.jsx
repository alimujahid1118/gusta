import { useState } from "react"
import { Link } from "react-router-dom"

export default function HomePage() {

    const [ menuBox, setMenuBox ] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <div className="flex fixed z-40 top-8 left-8">
                <img className="w-14" src="gusta-logo.avif" alt="Website logo" />
            </div>
            <div className="flex flex-col py-32 items-center">
                <h1 className="font-bold px-4 py-2 text-center text-4xl max-w-[400px]">Forward Through Digital Design</h1>
                <div className="bg-slate-400 w-full h-[624px]">
                    {/* Insert Image here */}
                </div>
                <div className="flex flex-col py-20 px-10 text-4xl font-normal gap-8">
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
                <img className="absolute -top-8 left-16 w-20 mb-20" src="https://framerusercontent.com/images/unH8JgbHJKTgSOwAqjiuOl5T4.png?width=300&height=351" alt="" />
                <p className="bg-[#080a0c] text-3xl font-semibold rounded-[35px] text-white pt-20 pb-6 px-8">
                    View all projects
                </p>
            </Link>
            <div className="flex flex-col bg-[#ddf3f3] max-w-[350px] px-8 mx-4 rounded-3xl pt-12 items-center text-center justify-center">
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
            <div className="bg-[#fff1d6] flex flex-col max-w-[350px] rounded-3xl gap-12 mt-8 py-8">
                <h1 className="px-8 text-4xl font-bold text-center text-zinc-700">
                    How can we help you?
                </h1>
                <div className="flex flex-col gap-4">
                    <h2 className="pl-8">Choose what fit your needs</h2>
                    <div className="flex flex-col px-2 gap-2">
                        <button className="bg-white p-2 max-w-80 rounded-xl text-left font-semibold">
                            Our product needs to be more intuitive
                        </button>
                        <button className="bg-white p-2 max-w-56 rounded-xl text-left font-semibold">
                            We need a consistent look and feel across our products
                        </button>
                        <button className="bg-white p-2 max-w-80 rounded-xl text-left font-semibold">
                            Our product needs a new UX/UI design
                        </button>
                        <button className="bg-white p-2 max-w-80 rounded-xl text-left font-semibold">
                            Our brand needs to reflect who we are
                        </button>
                        <button className="bg-white p-2 max-w-56 rounded-xl text-left font-semibold">
                            We need compelling visuals to bring our brand to life
                        </button>
                        <button className="bg-white p-2 max-w-48 rounded-xl text-left font-semibold">
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
                    <div className="flex flex-col items-center py-10 gap-6 max-w-[350px]">
                        <h2 className="text-3xl font-normal px-6 text-center">
                            We're the creative link between people, business, and technology.
                        </h2>
                        <button className="bg-black text-white rounded-3xl px-5 py-3 font-semibold">
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
                <div className="bg-[#fcc113] relative flex flex-col py-10 pl-6 pr-10 gap-8">
                    <h2 className="text-3xl pr-44 font-semibold">Stay connected with updates, insights, and inspiration.</h2>
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
            <div onClick={() => setMenuBox((prev) => !prev)} className="fixed z-50 bottom-6">
                <div className={menuBox? `bg-[#d6dcd3bf] z-50 px-4 py-3 rounded-full transition-all duration-500 delay-300` : `bg-white z-50 shadow-xl px-4 py-3 rounded-full`}>
                    <i className="fi fi-rr-plus text-3xl z-50"></i>
                </div>
            </div>
            {/* Menu box */}
            {
                menuBox && (
                    <div className="flex flex-col bg-white rounded-3xl z-40 fixed bottom-2">
                        <div className="flex flex-col gap-3 px-24 pt-10 text-4xl">
                            <button>Home</button>
                            <button>Work</button>
                            <button>Services</button>
                            <button>About</button>
                            <button>Contact</button>
                        </div>
                        <div className="flex flex-col gap-2 text-[#5e605cbf] py-8 items-center text-md">
                            <button>Playground</button>
                            <button>Shop</button>
                            <button>Newsletter</button>
                        </div>
                        <div className="flex flex-row gap-4 text-[#5e605cbf] text-2xl justify-center pb-24">
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