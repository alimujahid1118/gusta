import { Link } from "react-router-dom";
import Logo from "../Components/Logo";
import MenuBox from "../Components/MenuBox";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import gsap from "gsap";

export default function Playground () {

    useEffect(() => {

        const archive = document.querySelector("#archiveText");

        const texts = [
            "explore ideas",
            "test tools",
            "experiment",
        ];

        let currentIndex = 0;

        const setText = (text) => {

            archive.innerHTML = text
                .split("")
                .map((char) => {
                    return `<span class="archiveChar inline-block">${
                        char === " " ? "&nbsp;" : char
                    }</span>`;
                })
                .join("");

        };

        // Initial text
        setText(texts[0]);

        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 1,
        });

        const animateText = () => {

            const currentChars =
                archive.querySelectorAll(".archiveChar");

            // Move current text upward
            tl.to(currentChars, {
                y: "-100%",
                opacity: 0,
                duration: 0.6,
                ease: "power3.inOut",
                stagger: 0.04,
            });

            // Change the text
            tl.call(() => {

                currentIndex =
                    (currentIndex + 1) % texts.length;

                setText(texts[currentIndex]);

                const newChars =
                    archive.querySelectorAll(".archiveChar");

                gsap.set(newChars, {
                    y: "100%",
                    opacity: 0,
                });

                // New text comes from bottom
                gsap.to(newChars, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.04,
                });

            });

            // Wait before next change
            tl.to({}, {
                duration: 1,
            });
        };

        animateText();
        animateText();
        animateText();

        return () => {
            tl.kill();
        };

    }, []);

    return (
        <div className="bg-white">
            <Logo />

            <div className="flex flex-col gap-4 pt-32 pb-10 px-6 md:px-12">
                <p className="text-[#717470] md:hidden">Playground</p>
                <img className="absolute w-36 md:w-64 top-[320px] md:top-[380px] left-[30px] md:left-[550px]" src="/underline.png" alt="" />
                <h1 className="text-[40px] md:text-[80px] relative font-bold max-w-[410px] md:max-w-none leading-9 md:leading-[1.05]">
                    <span>In this{" "}</span>

                    <img
                        className="w-12 md:w-14 inline-block mb-2"
                        src="/archive.png"
                        alt=""
                    />{" "}

                    <span>archive, </span>

                    <span className="whitespace-nowrap md:block">
                        <span>
                            we{" "}
                        </span>
                        <span
                            id="archiveText"
                            className="inline-block overflow-hidden align-bottom whitespace-nowrap"
                        >
                            explore ideas
                        </span>{" "} <br />
                        to follow our curiosity
                    </span>
                </h1>
                <img className="absolute w-8 z-40 top-[286px] md:top-[307px] left-[180px] md:left-[800px] rotate-90" src="/drops.png" alt="" />
                <p className="text-[#717470] text-[19px] md:text-[22px] py-2">With our 4:1 workweek ratio, Fridays are our Playground. We work four days on projects and dedicate one day to growth through play.</p>
            </div>

            <div className="flex flex-col gap-4 px-8">
                <div className="flex flex-col md:flex-row md:items-end gap-4">
                    <div className="w-full h-[520px] md:h-[400px]">
                        <video loop autoPlay muted className="w-full h-full object-cover rounded-[24px]" src="https://framerusercontent.com/assets/1V6FeVm3JZisZm2BHkpc0hGRPc.mp4" />
                    </div>
                    <div className="w-full h-full">
                        <img className="w-full h-full rounded-[90px]" src="https://framerusercontent.com/images/LjISzlHjNXskPdETkheZzk14h8M.png?width=2160&height=2160" alt="" />
                    </div>
                    <div className="w-full h-full">
                        <video loop autoPlay muted className="w-full h-full rounded-[50px]" src="https://framerusercontent.com/assets/kkW7VRlDQOTrMT0L4MRv6cP0LaU.mp4" alt="" />
                    </div>
                    <div className="w-full h-full">
                        <video loop autoPlay muted className="w-full h-full rounded-[20px]" src="https://framerusercontent.com/assets/hFd57VnwEU55rOTcz4uRBpIuv8.mp4" alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-[900px] h-[520px] md:h-[470px]">
                        <video className="w-full h-full object-cover rounded-[220px] bg-[#c4c1ba]" loop autoPlay muted src="https://framerusercontent.com/assets/e4uljM80ddVcp9TejrvY3l5J8g.mp4" />
                    </div>
                    <div className="w-full md:w-[110%] h-full md:h-[97%]">
                        <video className="w-full h-full object-cover rounded-[90px] md:rounded-[50px]" src="https://framerusercontent.com/assets/fBjvjGEad0SYc78AoadypWsNw.mp4" />
                    </div>
                    <div className="md:h-[95%]">
                        <img className="w-full h-full object-cover" src="https://framerusercontent.com/images/2vvLyqnxOUtmWC6GB0LfR6Z3Jqs.png?width=1040&height=1340" alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div>
                        <video loop autoPlay muted className="w-full h-full object-cover rounded-[12px]" src="https://framerusercontent.com/assets/Z6pO66t6f9nK0AOkON3CiPYeGwo.mp4" />
                    </div>
                    <div className="h-[230px] md:h-full overflow-hidden rounded-[40px] relative bg-[#fcc113]">
                        <video
                            loop
                            autoPlay
                            muted
                            className="w-full h-[300px] md:h-[500px] object-cover absolute bottom-10 md:bottom-6"
                            src="https://framerusercontent.com/assets/40vLi67Y2F8JpYETzxoIuq3b3s.mp4"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="h-[400px] md:w-[850px] md:h-[250px]">
                        <video className="w-full h-full object-cover rounded-[50px]" loop autoPlay muted src="https://framerusercontent.com/assets/xVp7CSXqrHCqzQt2njxrOuvNruU.mp4" />
                    </div>
                    <div className="h-[250px] md:w-[1480px] md:h-[300px]">
                        <video className="w-full h-full object-cover rounded-[30px] md:rounded-[16px]" loop autoPlay muted src="https://framerusercontent.com/assets/vTI5SOLA7ny7akvNUYHK3hvqvE.mp4" />
                    </div>
                    <div className="md:w-[750px] md:h-[400px]">
                        <video className="w-full h-full object-cover rounded-[30px] md:rounded-[16px]" loop autoPlay muted src="https://framerusercontent.com/assets/yiBkKzfvMcUdo2S46fLsEw1Xw4w.mp4" />
                    </div>
                    <div className="md:w-[70%] md:h-[70%]">
                        <video className="w-full h-full object-cover rounded-[100px] md:rounded-[40px]" loop autoPlay muted src="https://framerusercontent.com/assets/2J2UikjiM8tCxXE7hLOM0JGLKRs.mp4" />
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col pt-10 items-center gap-10 bg-white md:hidden">
                <div className="bg-[#fcc113] relative flex flex-col w-full py-10 pl-6 pr-10 gap-8">
                    <h2 className="text-3xl pr-36 font-semibold">Stay connected with updates, insights, and inspiration.</h2>
                    <div className="w-[250px] h-[450px] rounded-xl">
                        <video loop muted autoPlay className="rounded-2xl" src="https://framerusercontent.com/assets/7lIGZQ6m8lkueVE4gq0N7vp8aRM.mp4"></video>
                        <button className="absolute bottom-14 text-white font-semibold text-md bg-slate-400/60 mx-3 rounded-sm px-4 py-2">@gusta.studio</button>
                    </div>
                </div>
            </div>
            {/* Desktop */}
            <div className="hidden md:flex md:flex-col pt-10 items-center relative gap-24 bg-white">
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

            <MenuBox />
            <Footer />
        </div>
    )
}