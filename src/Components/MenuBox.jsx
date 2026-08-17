import { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function MenuBox() {

    const [ menuBox, setMenuBox ] = useState(false);

    const handleClick = () => {
        setMenuBox((prev) => !prev)
    }

    useEffect(() => {
        if (menuBox) {
            gsap.fromTo(
                "#menu",
                {
                    scale: 0.8,
                    y: 20
                },
                {
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out"
                }
            )

            gsap.fromTo(
                ".buttons",
                {
                    x:-40,
                },
                {
                    x:0,
                    stagger:0.025
                }
            )

            gsap.fromTo(
                ".brands",
                {
                    x:40,
                },
                {
                    x:0,
                    stagger:0.025
                }
            )

            gsap.to("#menu", {
                backgroundColor: "white",
                scrollTrigger: {
                    trigger: "#black-section",
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                }
            })

            gsap.to(".btn", {
                color: "black",
                scrollTrigger: {
                    trigger: "#black-section",
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                }
            })

        }
    }, [menuBox])

    return (
        <>
            {/* Menu */}
            <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 md:top-8 md:bottom-auto md:left-auto md:right-11 md:translate-x-0">

                {/* Menu button */}
                <button
                    onClick={handleClick}
                    className={`relative z-50 px-4 py-3 rounded-full transition-all duration-500 ${
                        menuBox
                            ? "bg-[#d6dcd3bf] md:bg-zinc-700 md:text-white"
                            : "bg-white text-black md:bg-[#e7efe3bf] shadow-xl md:shadow-none"
                    }`}
                >
                    <span
                        className={`inline-block transition-transform duration-300 ${
                            menuBox ? "-rotate-45" : "rotate-0"
                        }`}
                    >
                        <i className="fi fi-rr-plus text-3xl md:text-[35px]"></i>
                    </span>
                </button>

                {/* Menu box */}
                {menuBox && (
                    <div
                        id="menu"
                        className="fixed flex flex-col bg-white md:bg-black rounded-3xl md:rounded-[40px] z-40 shadow-xl bottom-0 right-0 md:bottom-auto md:top-0"
                    >
                        <div className="flex flex-col md:text-white md:items-start md:pl-10 md:pr-40 gap-3 px-24 pt-10 text-4xl md:text-5xl">
                            <button className="buttons btn">Home</button>

                            <Link to="/work/all" className="buttons btn text-center">
                                Work
                            </Link>

                            <Link to="/services" className="buttons btn text-center">
                                Services
                            </Link>

                            <button className="buttons btn">About</button>
                            <button className="buttons btn">Contact</button>
                        </div>

                        <div className="flex flex-col gap-2 text-[#5e605cbf] md:text-[#868984bf] py-8 items-center md:items-start md:px-10 text-md">
                            <button className="buttons">Playground</button>
                            <button className="buttons">Shop</button>
                            <button className="buttons">Newsletter</button>
                        </div>

                        <div className="flex flex-row gap-4 text-[#5e605cbf] md:text-[#868984bf] text-2xl md:text-3xl justify-center md:justify-end md:px-12 pb-24">
                            <i className="brands fi fi-brands-instagram"></i>
                            <i className="brands fi fi-brands-behance"></i>
                            <i className="brands fi fi-brands-linkedin"></i>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}