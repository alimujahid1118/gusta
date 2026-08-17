import { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer";
import Logo from "../Components/Logo";
import MenuBox from "../Components/MenuBox";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Services() {

    const [activeCard, setActiveCard] = useState(0);
    const [openQuestion, setOpenQuestion] = useState(0);

    const sliderRef = useRef(null);
    const barsRef = useRef(null);
    const cardsRef = useRef(null);
    const desktopCardsRef = useRef(null);

    const [ product, setProduct ] = useState(false)
    const [ websites, setWebsites ] = useState(false)
    const [ brand, setBrand ] = useState(false)    

    const handleScroll = (e) => {
        const cardWidth = e.currentTarget.children[0].offsetWidth;
        const gap = 16; // gap-4

        const index = Math.round(
            e.currentTarget.scrollLeft / (cardWidth + gap)
        );

        setActiveCard(index);
    };

    const handleProduct = () => {
        setWebsites(false)
        setBrand(false)
        setProduct((prev) => {
            const newProduct = !prev

            gsap.to("#productCross", {
                rotate: newProduct ? 45 : 0
            })

            return newProduct
        })
        
    }

    const handleWebsites = () => {
        setProduct(false)
        setBrand(false)
        setWebsites((prev) => {
            const newWebsite = !prev

            gsap.to("#websiteCross", {
                rotate: newWebsite ? 45 : 0
            })

            return newWebsite
        })
        
    }

    const handleBrand = () => {
        setProduct(false)
        setWebsites(false)
        setBrand((prev) => {
            const newBrand = !prev

            gsap.to("#brandCross", {
                rotate: newBrand ? 45 : 0
            })

            return newBrand
        })
        
    }

    const totalCards = 6;

    const faqItems = [
        {
            question: "Do you specialize in a particular industry with your design work?",
            answer: "We work across many sectors, but our strength is helping ambitious teams simplify complex products and build digital experiences that are intuitive, strategic, and ready to grow."
        },
        {
            question: "We also need a brand identity. Can you help us with that?",
            answer: "Yes. We design brand systems that align with your product and business goals, giving you a coherent visual language across digital touchpoints and marketing materials."
        },
        {
            question: "Are development services part of your expertise?",
            answer: "We design with implementation in mind and collaborate closely with trusted developers, but our core focus is product, UX, website, and brand design."
        },
        {
            question: "What is the expected timeline and cost for a design project?",
            answer: "Every project is different, so we tailor timing and scope based on your goals, complexity, and level of collaboration required."
        },
        {
            question: "I have the idea, but not all of the features yet. Can you work with that?",
            answer: "Absolutely. We can help shape the direction, define the product priorities, and turn a loose idea into a clear, validated design roadmap."
        },
        {
            question: "We already have a defined list of requirements. What’s next?",
            answer: "We move into discovery, prioritization, and design exploration so we can align the requirements with user needs, business objectives, and a sensible delivery plan."
        },
        {
            question: "Can you handle large or phased projects?",
            answer: "Yes. We’re used to building long-term partnerships and structuring work in phases so teams can move forward with clarity and momentum."
        },
        {
            question: "Do you work with clients in the long term?",
            answer: "Often, yes. We love becoming a strategic design partner for companies that want to keep improving their products, brand, and customer experience over time."
        },
        {
            question: "How can I request a quote or estimate for a design project?",
            answer: "Send us a quick brief about your goals, timeline, and scope, and we’ll get back to you with a recommendation for the right approach and estimate."
        }
    ];

    const updateDesktopCards = (newActiveCard) => {
        const cards = desktopCardsRef.current?.children;

        if (!cards) return;

        Array.from(cards).forEach((card, index) => {
            let position = index - newActiveCard;

            // Infinite loop
            if (position > totalCards / 2) {
                position -= totalCards;
            }

            if (position < -totalCards / 2) {
                position += totalCards;
            }

            if (position === 0) {
                // ACTIVE
                gsap.to(card, {
                    x: "0%",
                    scale: 1,
                    opacity: 1,
                    zIndex: 30,
                    duration: 0.6,
                    ease: "power3.inOut"
                });
            }

            else if (position === -1) {
                // LEFT
                gsap.to(card, {
                    x: "-110%",
                    scale: 1,
                    opacity: 1,
                    zIndex: 20,
                    duration: 0.6,
                    ease: "power3.inOut"
                });
            }

            else if (position === 1) {
                // RIGHT
                gsap.to(card, {
                    x: "110%",
                    scale: 1,
                    opacity: 1,
                    zIndex: 20,
                    duration: 0.6,
                    ease: "power3.inOut"
                });
            }

            else {
                // HIDDEN
                gsap.to(card, {
                    x: position < 0 ? "-130%" : "130%",
                    scale: 0.7,
                    opacity: 0,
                    zIndex: 0,
                    duration: 0.6,
                    ease: "power3.inOut"
                });
            }
        });
    };
    
    const nextCard = () => {
        const next = (activeCard + 1) % totalCards;

        setActiveCard(next);
        updateDesktopCards(next);
    };

    const previousCard = () => {
        const previous = (activeCard - 1 + totalCards) % totalCards;

        setActiveCard(previous);
        updateDesktopCards(previous);
    };

    useEffect(() => {
        const bars = barsRef.current.querySelectorAll(".loadingBar");
        const cards = cardsRef.current.children;

        // Initial state
        gsap.set(cards, {
            opacity: 0
        });

        gsap.set(cards[0], {
            opacity: 1
        });

        gsap.set(bars, {
            width: "0%"
        });

        const tl = gsap.timeline({
            repeat: -1
        });

        for (let i = 0; i < cards.length; i++) {

            // Fill current bar
            tl.to(bars[i], {
                width: "100%",
                duration: 4,
                ease: "none"
            });

            if (i < cards.length - 1) {

                // Previous card disappears immediately
                tl.set(cards[i], {
                    opacity: 0
                });

                // Next card appears immediately
                tl.set(cards[i + 1], {
                    opacity: 1
                });

                // Reset next bar
                tl.set(bars[i + 1], {
                    width: "0%"
                });

            } else {

                // Last card disappears
                tl.set(cards[i], {
                    opacity: 0
                });

                // Reset all cards
                tl.set(cards, {
                    opacity: 0
                });

                // First card appears
                tl.set(cards[0], {
                    opacity: 1
                });

                // Reset bars
                tl.set(bars, {
                    width: "0%"
                });
            }
        }

        return () => {
            tl.kill();
        };

    }, []);

    useEffect(() => {
        updateDesktopCards(0);
    }, []);

    return (
        <div className="overflow-x-hidden overflow-y-visible">
            <Logo />
            <div className="flex flex-col">
                <div className="flex flex-col gap-6 pt-40 px-4">
                    <div className="flex flex-col gap-6 px-6">
                        <p className="md:hidden">Services</p>
                        {/* Mobile */}
                        <h1 className="text-[33px] md:hidden font-normal leading-10">We design digital products for ambitious companies leading their industries forward.</h1>
                        {/* Desktop */}
                        <h1 className="hidden md:block md:text-[42px] md:max-w-[620px] font-normal leading-10">
                            We design digital products <br />
                            for ambitious companies leading
                            their industries forward.</h1>
                    </div>
                    <div className="relative py-10 md:px-6">
                        <img className="absolute w-20 md:w-24 rotate-6 -top-2 right-0 md:right-6" src="https://framerusercontent.com/images/jH0ZhxGxW8UPnrniR9Zjz6FIiXU.png?width=822&height=712" alt="" />
                        <img className="rounded-[35px] md:rounded-[60px] aspect-[1280/860] object-cover" src="https://framerusercontent.com/images/Xte78SeyWy4QnmzpBVP02DuMCes.jpg?width=3200&height=1800" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-20">
                    <div className="flex flex-col md:px-4">
                        <p className="text-lg pl-6 pr-10">We work with companies,</p>
                        <p className="text-lg pl-6 pr-10">big and small, global and near, moving forward through digital design.</p>
                    </div>
                    <div className="flex flex-col">
                        {/* Product */}
                        <div className="flex flex-col">
                            <div onClick={handleProduct} className={`flex flex-row justify-between ${!product && `hover:bg-[#f1eee7] rounded-[30px]`} px-10 ${ !product && `border-b-[1px] border-slate-200`}`}>
                                <h2 className="text-3xl md:text-4xl font-semibold py-8">Product</h2>
                                <button>
                                    <span id="productCross" className={`inline-block rotate-0 px-4 py-3 rounded-full ${product && `bg-[#f9f7f2]`}`}>
                                        <i className="fi fi-rr-plus text-xl md:text-3xl mt-[12px] md:mt-[16px] py-8"></i>
                                    </span>
                                </button>
                            </div>
                            {
                                product && (
                                    <div className="flex flex-col">
                                        <p className="px-10 text-[#505451] md:text-xl md:pr-[550px] font-semibold leading-6">
                                            We design digital products, such as software, apps, and platforms, that are intuitive to use and made to evolve with your business. Our work spans UX/UI design, prototyping, and scalable design systems with thorough documentation, ready for modern development and AI-assisted workflows. Product design is an ongoing process. Working alongside our clients and their teams, we test, validate, and improve as the product grows and user needs evolve.
                                        </p>
                                        <div ref={sliderRef} onScroll={handleScroll} className="flex flex-row gap-5 md:gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-16 md:py-20 px-4 md:px-6 w-full md:grid md:grid-cols-3 md:overflow-visible">
                                            
                                            <div id="card1" className="flex flex-col flex-shrink-0 w-[82vw] sm:w-[390px] md:w-full gap-5 md:gap-6 pl-0 md:pl-0">
                                                <div className="relative w-full h-[420px] sm:h-[450px] md:h-[500px] rounded-[30px] overflow-hidden">
                                                    <div className="absolute z-10 left-4 top-3 flex gap-2">
                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Product
                                                        </button>
                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Fashion
                                                        </button>
                                                    </div>

                                                    <video
                                                        className="w-full h-full object-cover rounded-[30px]"
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

                                            <div id="card2" className="flex flex-col flex-shrink-0 w-[82vw] sm:w-[390px] md:w-full gap-5 md:gap-6 pl-0 md:pl-0">
                                                <div className="relative w-full h-[420px] sm:h-[450px] md:h-[500px] rounded-[30px] overflow-hidden">
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
                                                        className="w-full h-full object-cover rounded-[30px]"
                                                        loop
                                                        autoPlay
                                                        muted
                                                        src="https://framerusercontent.com/assets/eKyUB6C9K7bxBl9Ftxm79pHkkKM.mp4"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-12">
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

                                            <div id="card3" className="flex flex-col flex-shrink-0 w-[82vw] sm:w-[390px] md:w-full gap-5 md:gap-6 pr-0 md:pr-0">
                                                <div className="relative w-full h-[420px] sm:h-[450px] md:h-[500px] rounded-[30px] overflow-hidden">
                                                    <div className="absolute z-10 left-4 top-3 flex gap-2">
                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Product
                                                        </button>

                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Pharmaceutical
                                                        </button>
                                                    </div>

                                                    <img
                                                        className="w-full h-full object-cover rounded-[30px]"
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
                                        </div>
                                        <div className="flex flex-row gap-2 items-center justify-center md:hidden">
                                            {[0, 1, 2].map((index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setActiveCard(index);

                                                        sliderRef.current.children[index].scrollIntoView({
                                                            behavior: "smooth",
                                                            block: "nearest",
                                                            inline: "start",
                                                        });
                                                    }}
                                                    className={`p-1 rounded-full transition-colors duration-300 ${
                                                        activeCard === index
                                                            ? "bg-slate-700"
                                                            : "bg-slate-400"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex py-6 px-8">
                                            <Link className="px-6 rounded-[20px] py-2 bg-black text-white text-lg font-semibold">View more projects</Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {/* Websites */}
                        <div className="flex flex-col">
                            <div onClick={handleWebsites} className={`flex flex-row justify-between ${!websites && `hover:bg-[#f1eee7] rounded-[30px]`} px-10 ${ !websites && `border-b-[1px] border-slate-200`}`}>
                                <h2 className="text-3xl md:text-4xl font-semibold py-8">Websites</h2>
                                <button>
                                    <span id="websiteCross" className={`inline-block rotate-0 px-4 py-3 rounded-full ${websites && `bg-[#f9f7f2]`}`}>
                                        <i className="fi fi-rr-plus text-xl md:text-3xl mt-[12px] md:mt-[16px] py-8"></i>
                                    </span>
                                </button>
                            </div>
                            {
                                websites && (
                                    <div className="flex flex-col">
                                        <p className="px-10 font-semibold text-[#505451] md:text-xl md:pr-[550px] leading-6">
                                            We design websites that represent your brand and turn visitors into customers, from B2B and service websites to full eCommerce platforms. No matter the scope or goal, we focus on creating experiences that look great and feel intuitive to use. For development, we collaborate with trusted developers from our network to bring the designs to life with the care and quality they deserve.
                                        </p>
                                        <div ref={sliderRef} onScroll={handleScroll} className="flex flex-row gap-5 md:gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-16 md:py-20 px-4 md:px-6 w-full md:grid md:grid-cols-3 md:overflow-visible">
                                            <div id="card1" className="flex flex-col flex-shrink-0 w-[82vw] sm:w-[390px] md:w-full gap-5 md:gap-6 pl-0 md:pl-0">
                                                <div className="relative w-full h-[420px] sm:h-[450px] md:h-[500px] rounded-[30px] overflow-hidden">
                                                    <div className="absolute z-10 left-4 top-3 flex gap-2">
                                                        <button className="text-black text-sm font-semibold bg-black/10 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Websites
                                                        </button>
                                                        <button className="text-black text-sm font-semibold bg-black/10 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Food
                                                        </button>
                                                    </div>

                                                    <img
                                                        className="w-full h-full object-cover rounded-[30px]"
                                                        loop
                                                        autoPlay
                                                        muted
                                                        src="https://framerusercontent.com/images/BLJaVDgHvLnmfoNOQxY2YvZEEsM.png?width=1080&height=1350"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-6">
                                                    <div className="flex flex-col gap-2">
                                                        <h2 className="font-semibold text-2xl">
                                                            Adri & Zoon
                                                        </h2>

                                                        <p className="text-xl text-gray-600">
                                                            Ecommerce redesign for one of the Netherlands’ leading seafood wholesalers, delivering fresh fish direct to restaurants
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

                                            <div id="card2" className="flex flex-col flex-shrink-0 w-[82vw] sm:w-[390px] md:w-full gap-5 md:gap-6 pl-0 md:pl-0">
                                                <div className="relative w-full h-[420px] sm:h-[450px] md:h-[500px] rounded-[30px] overflow-hidden">
                                                    <div className="absolute flex-wrap z-10 left-4 top-3 flex gap-2">
                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Websites
                                                        </button>

                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Brand
                                                        </button>

                                                        <button className="text-white text-sm font-semibold bg-black/30 backdrop-blur-sm rounded-2xl px-4 py-2">
                                                            Logistics and transportation
                                                        </button>
                                                    </div>

                                                    <video
                                                        className="w-full h-full object-cover rounded-[30px]"
                                                        loop
                                                        autoPlay
                                                        muted
                                                        src="https://framerusercontent.com/assets/PP3GpQ2Q9RfK9mEZaPJN7eC4aA.mp4"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-12">
                                                    <div className="flex flex-col gap-2">
                                                        <h2 className="font-semibold text-2xl">
                                                            Narmin
                                                        </h2>

                                                        <p className="text-xl text-gray-600">
                                                            An immersive, illustration-driven website for last-mile delivery software that puts drivers first
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

                                            <div id="card3" className="flex flex-col flex-shrink-0 w-[82vw] sm:w-[390px] md:w-full gap-5 md:gap-6 pr-0 md:pr-0">
                                                <div className="relative w-full h-[420px] sm:h-[450px] md:h-[500px] rounded-[30px] overflow-hidden">
                                                    <div className="absolute z-10 left-4 top-3 flex gap-2">
                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Websites
                                                        </button>

                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                                                            Retail
                                                        </button>
                                                    </div>

                                                    <img
                                                        className="w-full h-full object-cover rounded-[30px]"
                                                        src="https://framerusercontent.com/images/DydW41KB1zEX2Q720JJOEjKLuk.png?width=1080&height=1350"
                                                        alt="Nixfarma"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-6">
                                                    <div className="flex flex-col gap-2">
                                                        <h2 className="font-semibold text-2xl">
                                                            Ferreteria Dols
                                                        </h2>

                                                        <p className="text-xl text-gray-600">
                                                            Bold ecommerce redesign for a family-run Valencia hardware store with over 70 years of history
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
                                        <div className="flex flex-row gap-2 items-center justify-center md:hidden">
                                            {[0, 1, 2].map((index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setActiveCard(index);

                                                        sliderRef.current.children[index].scrollIntoView({
                                                            behavior: "smooth",
                                                            block: "nearest",
                                                            inline: "start",
                                                        });
                                                    }}
                                                    className={`p-1 rounded-full transition-colors duration-300 ${
                                                        activeCard === index
                                                            ? "bg-slate-700"
                                                            : "bg-slate-400"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex py-6 px-8">
                                            <Link className="px-6 rounded-[20px] py-2 bg-black text-white text-lg font-semibold">View more projects</Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {/* Brand */}
                        <div className="flex flex-col">
                            <div onClick={handleBrand} className={`flex flex-row justify-between ${!brand && `hover:bg-[#f1eee7] rounded-[30px]`} px-10 ${ !brand && `border-b-[1px] border-slate-200`}`}>
                                <h2 className="text-3xl md:text-4xl font-semibold py-8">Brand</h2>
                                <button>
                                    <span id="brandCross" className={`inline-block rotate-0 px-4 py-3 rounded-full ${brand && `bg-[#f9f7f2]`}`}>
                                        <i className="fi fi-rr-plus text-xl md:text-3xl mt-[12px] md:mt-[16px] py-8"></i>
                                    </span>
                                </button>
                            </div>
                            {
                                brand && (
                                    <div className="flex flex-col">
                                        <p className="px-10 text-[#505451] md:text-xl md:pr-[550px] leading-6">
                                            We design cohesive brand identities and visual systems that turn businesses into something people recognize, remember, and love. Great brands are more than how they look. It's what makes people feel something, choose you, and come back. For ongoing brand expression, we work alongside your team to create visuals tailored to your goals and aligned with your brand, from marketing materials and social content to motion design that adds another dimension across every platform.
                                        </p>
                                        <div ref={sliderRef} onScroll={handleScroll} className="flex flex-row gap-5 md:gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-16 md:py-20 px-4 md:px-6 w-full md:grid md:grid-cols-3 md:overflow-visible">
                                            
                                            <div id="card1" className="flex flex-col flex-shrink-0 w-[82vw] sm:w-[390px] md:w-full gap-5 md:gap-6 pl-0 md:pl-0">
                                                <div className="relative w-full h-[420px] sm:h-[450px] md:h-[500px] rounded-[30px] overflow-hidden">
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
                                                        className="w-full h-full object-cover rounded-[30px]"
                                                        loop
                                                        autoPlay
                                                        muted
                                                        src="https://framerusercontent.com/assets/eKyUB6C9K7bxBl9Ftxm79pHkkKM.mp4"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-12">
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

                                            <div id="card2" className="flex flex-col flex-shrink-0 w-[82vw] sm:w-[390px] md:w-full gap-5 md:gap-6 pl-0 md:pl-0">
                                                <div className="relative w-full h-[420px] sm:h-[450px] md:h-[500px] rounded-[30px] overflow-hidden">
                                                    <div className="absolute z-10 left-4 top-3 flex gap-2">
                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Product
                                                        </button>
                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Brand
                                                        </button>
                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                                                            Corporate services
                                                        </button>
                                                    </div>

                                                    <img
                                                        className="w-full h-full object-cover rounded-[30px]"
                                                        loop
                                                        autoPlay
                                                        muted
                                                        src="https://framerusercontent.com/images/TYQg6twL2f5EUBoxrz83NwptAtU.png?width=1080&height=1350"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-6">
                                                    <div className="flex flex-col gap-2">
                                                        <h2 className="font-semibold text-2xl">
                                                            Thanqs
                                                        </h2>

                                                        <p className="text-xl text-gray-600">
                                                            Automated gifting platform that brightens someone’s day, increasing client and employee satisfaction
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

                                            <div id="card3" className="flex flex-col flex-shrink-0 w-[82vw] sm:w-[390px] md:w-full gap-5 md:gap-6 pr-0 md:pr-0">
                                                <div className="relative w-full h-[420px] sm:h-[450px] md:h-[500px] rounded-[30px] overflow-hidden">
                                                    <div className="absolute z-10 left-4 top-3 flex gap-2">
                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Websites
                                                        </button>

                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-md px-4 py-2">
                                                            Brand
                                                        </button>

                                                        <button className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                                                            Food
                                                        </button>
                                                    </div>

                                                    <img
                                                        className="w-full h-full object-cover rounded-[30px]"
                                                        src="https://framerusercontent.com/images/zFhNtje9LOtkbipPOHGZVTrXDmk.png?width=1080&height=1350"
                                                        alt="Nixfarma"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-6">
                                                    <div className="flex flex-col gap-2">
                                                        <h2 className="font-semibold text-2xl">
                                                            En Temporada
                                                        </h2>

                                                        <p className="text-xl text-gray-600">
                                                            Our initiative to help make a conscious decision on the fruit and vegetables we consume
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
                                        <div className="flex flex-row gap-2 items-center justify-center md:hidden">
                                            {[0, 1, 2].map((index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setActiveCard(index);

                                                        sliderRef.current.children[index].scrollIntoView({
                                                            behavior: "smooth",
                                                            block: "nearest",
                                                            inline: "start",
                                                        });
                                                    }}
                                                    className={`p-1 rounded-full transition-colors duration-300 ${
                                                        activeCard === index
                                                            ? "bg-slate-700"
                                                            : "bg-slate-400"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex py-6 px-8">
                                            <Link className="px-6 rounded-[20px] py-2 bg-black text-white text-lg font-semibold">View more projects</Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex px-8 md:px-60 md:items-end md:justify-end py-10">
                            <Link className="bg-[#e9e6dd] text-center text-lg md:text-xl px-6 py-2 md:py-3 rounded-3xl font-bold">View all our work</Link>
                        </div>
                        <div className="flex flex-col md:relative gap-4 px-4">
                            <div className="bg-black flex flex-col md:ml-48 md:max-w-[400px] relative gap-4 p-8 rounded-[28px]">
                                <img className="absolute w-24 -top-10 right-4" src="https://framerusercontent.com/images/8Pl4JzcnWvgOyr6gxQmdx4xuEps.png?width=240&height=187" alt="" />
                                <h2 className="text-white text-[28px] font-bold">Capabilities</h2>
                                <p className="text-[#91948f] text-[20px]">
                                    Design systems
                                    <br />
                                    Prototyping
                                    <br />
                                    UX/UI design
                                    <br />
                                    Website design
                                    <br />
                                    Mobile app design
                                    <br />
                                    Brand design
                                    <br />
                                    Graphic design
                                    <br />
                                    Motion design
                                    <br />
                                    Product strategy
                                    <br />
                                    Agile working (Scrum, Kanban)
                                    <br />
                                    Usability testing and UX audit
                                    <br />
                                    User research
                                </p>
                            </div>
                            <div className="bg-[#fff1d6] flex flex-col w-full md:max-w-[550px] px-4 rounded-3xl gap-12 md:ml-[450px] py-8">
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
                        <div className="flex flex-col gap-10 py-20">
                            <div className="px-10 md:px-40">
                                <img src="https://framerusercontent.com/images/tZrlKZOTbaWJiQdHxxn0QAyA.png?width=3701&height=3048" alt="" />
                            </div>
                            <div className="flex flex-col gap-6 px-20 md:px-96">
                                <h2 className="text-[34px] md:text-[40px] leading-9">Creative link <br /> to unlock potential</h2>
                                <p className="text-[#505451] text-[20px]">Our clients call us the creative link between people, business, and technology. With deep expertise in digital products, we know what it takes to develop them. We speak the language of technology and business while staying focused on the people using what we design. By truly understanding their needs, we create work that delivers real value.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-20">

                {/* Progress bars */}
                <div
                    ref={barsRef}
                    className="flex flex-row md:hidden gap-2 mb-6"
                >
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="w-14 h-2 bg-[#e9e5dd] rounded-full overflow-hidden"
                        >
                            <div className="loadingBar h-full bg-black rounded-full w-0" />
                        </div>
                    ))}
                </div>


                {/* Cards - Mobile */}
                <div
                    ref={cardsRef}
                    className="relative mx-20 my-20 md:hidden w-[calc(100%-2rem)] h-[600px]"
                >

                {/* Card 1 */}
                <div className="absolute inset-0 flex flex-col md:flex-shrink-0 md:-left-96 gap-4 pt-52 md:pt-72 pb-6 px-6 md:max-w-[600px] mx-10 bg-[#c06642] rounded-[40px] text-white">
                    <img
                        className="absolute w-[600px] -top-12 md:-top-28 left-0"
                        src="https://framerusercontent.com/images/t9TxfgFBjLfMjCkoWj9AOIhTM.png?width=1627&height=1024"
                        alt=""
                    />

                    <h2 className="text-4xl font-semibold">
                        Our approach
                    </h2>

                    <p className="text-lg">
                        Whether you need a new website <br />
                        or need help with product design, <br />
                        we understand that each project is different and needs a flexible approach.
                        By adapting our processes to your specific needs and the people we work with,
                        we aim to add value early on. That’s why close collaboration, exchanging ideas,
                        and the desire to learn are fundamental in our way of working.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="absolute inset-0 flex flex-col gap-4 pt-56 md:pt-72 pb-8 px-6 mx-10 md:max-w-[600px] bg-[#fed096] rounded-[40px]">
                    <img
                        className="absolute w-[500px] -top-16 md:-top-28 left-0 md:left-8"
                        src="https://framerusercontent.com/images/IOYBw59GsBJcKrZ5LFg4XdgrUw.png?width=1280&height=1024"
                        alt=""
                    />

                    <h2 className="text-4xl font-semibold">
                        <span className="text-2xl">Discovery</span>
                        <br />
                        Research
                        <br />
                        and insights
                    </h2>

                    <p className="text-lg">
                        We uncover insights through a process of exploration and research.
                        We listen, challenge the assumptions, and separate the musts from
                        the maybes to align collectively. It’s the first thing we do to really
                        understand your business and create a clear vision for the project.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="absolute inset-0 flex flex-col md:flex-shrink-0 gap-4 pt-56 md:pt-72 pb-8 px-6 mx-10 md:max-w-[600px] bg-[#fe9da1] rounded-[40px]">
                    <img
                        className="absolute w-[600px] md:w-[400px] -top-16 left-0 md:left-20"
                        src="https://framerusercontent.com/images/jTXG8nJYX1KdbMY3iJUgBNg7Mc.png?width=1280&height=1024"
                        alt=""
                    />

                    <h2 className="text-4xl font-semibold">
                        <span className="text-2xl">Exploration</span>
                        <br />
                        The start of a
                        <br />
                        solid foundation
                    </h2>

                    <p className="text-lg">
                        We define the bigger picture and create a solid foundation.
                        The ideas and insights are translated into something tangible
                        that reflects the ambition of your business. Instead of imagining
                        solutions, we spend time to show you what the future of your
                        business could look like.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="absolute inset-0 flex flex-col md:flex-shrink-0 gap-4 pt-52 md:pt-80 pb-8 px-6 mx-10 md:max-w-[600px] bg-[#fedec6] rounded-[40px]">
                    <img
                        className="absolute w-[300px] md:w-[400px] -top-20 left-8 md:left-20"
                        src="https://framerusercontent.com/images/CrkzWLeeZgH1SexGm9WzTueu7rI.png?width=567&height=581"
                        alt=""
                    />

                    <h2 className="text-4xl font-semibold">
                        <span className="text-2xl">Production</span>
                        <br />
                        Designing a
                        <br />
                        new reality
                    </h2>

                    <p className="text-lg">
                        Continuing from the defined base, we create the design in the
                        desired direction. We’re used to working on technical projects
                        to design functional solutions that optimize complex processes
                        (UX/UI) and create thoughtful products that connect with people.
                    </p>
                </div>

                {/* Card 5 */}
                <div className="absolute inset-0 flex flex-col md:flex-shrink-0 gap-4 pt-[250px] md:pt-[340px] pb-8 px-6 mx-10 md:max-w-[600px] bg-[#abe8b6] rounded-[40px]">
                    <img
                        className="absolute w-[300px] md:w-[400px] -top-20 md:-top-28 left-8 md:left-20"
                        src="https://framerusercontent.com/images/MzOY28Hj4dVsLc9WXGw1HaZVck.png?width=1048&height=1160"
                        alt=""
                    />

                    <h2 className="text-4xl font-semibold">
                        <span className="text-2xl">Validation</span>
                        <br />
                        Making sure we’re
                        <br />
                        on the right track
                    </h2>

                    <p className="text-lg">
                        Our Agile way of working allows us to iterate rapidly and
                        incrementally from the feedback of usability testing and
                        stakeholders—whether we’re designing websites, apps, or
                        enterprise software.
                    </p>
                </div>

                {/* Card 6 */}
                <div className="absolute inset-0 flex flex-col md:flex-shrink-0 gap-4 pt-60 md:pt-72 pb-8 px-6 mx-10 md:max-w-[600px] bg-[#abe8e8] rounded-[40px]">
                    <img
                        className="absolute w-[400px] -top-12 left-0 md:left-20"
                        src="https://framerusercontent.com/images/Dls2XRURpNV5pHl9VGpiap2b8.png?width=1280&height=1024"
                        alt=""
                    />

                    <h2 className="text-4xl font-semibold">
                        <span className="text-2xl">Delivery</span>
                        <br />
                        A new beginning
                    </h2>

                    <p className="text-lg">
                        Delivering the project is not the end for us—it’s a new beginning.
                        We work together with your team and a living design system to ensure
                        your evolving business continues to provide value. Together, we learn
                        and iterate to continuously improve the experiences people have with
                        your product.
                    </p>
                </div>

                </div>
                
                {/* Cards - Desktop */}
                <div className="hidden md:block relative z-40">
                    <button
                        onClick={previousCard}
                        className="absolute z-40 w-14 h-14 right-80 top-80 rounded-full bg-black text-white flex items-center justify-center text-2xl"
                    >
                        ←
                    </button>

                    <button
                        onClick={nextCard}
                        className="absolute z-40 w-14 h-14 left-80 top-80 rounded-full bg-black text-white flex items-center justify-center text-2xl"
                    >
                        →
                    </button>
                </div>
                
                <div
                    ref={desktopCardsRef}
                    className="hidden md:flex relative my-20 w-full h-[700px] justify-center"
                >

                {/* Card 1 */}
                <div className="absolute flex flex-col justify-end flex-shrink-0 gap-4 pt-32 md:pt-52 md:pb-10 pb-5 px-6 md:w-[700px] md:h-[620px] md:min-h-[620px] bg-[#c06642] rounded-[40px] text-white">
                    <img
                        className="absolute w-[600px] -top-12 md:-top-28 left-1/2 -translate-x-1/2"
                        src="https://framerusercontent.com/images/t9TxfgFBjLfMjCkoWj9AOIhTM.png?width=1627&height=1024"
                        alt=""
                    />

                    <div className="relative z-10 mt-auto flex flex-col justify-end gap-3 pb-2">
                        <h2 className="text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.05em]">
                            Our approach
                        </h2>

                        <p className="text-[1.18rem] leading-relaxed">
                            Whether you need a new website <br />
                            or need help with product design, <br />
                            we understand that each project is different and needs a flexible approach.
                            By adapting our processes to your specific needs and the people we work with,
                            we aim to add value early on. That’s why close collaboration, exchanging ideas,
                            and the desire to learn are fundamental in our way of working.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="absolute flex flex-col justify-end flex-shrink-0 gap-4 pt-32 md:pt-52 md:pb-10 pb-5 px-6 md:w-[700px] md:h-[620px] md:min-h-[620px] bg-[#fed096] rounded-[40px]">
                    <img
                        className="absolute w-[500px] -top-16 md:-top-28 left-1/2 -translate-x-1/2"
                        src="https://framerusercontent.com/images/IOYBw59GsBJcKrZ5LFg4XdgrUw.png?width=1280&height=1024"
                        alt=""
                    />

                    <div className="relative z-10 mt-auto flex flex-col justify-end gap-3 pb-2">
                        <h2 className="text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.05em]">
                            <span className="text-[1.55rem] block">Discovery</span>
                            Research
                            <br />
                            and insights
                        </h2>

                        <p className="text-[1.18rem] leading-relaxed">
                            We uncover insights through a process of exploration and research.
                            We listen, challenge the assumptions, and separate the musts from
                            the maybes to align collectively. It’s the first thing we do to really
                            understand your business and create a clear vision for the project.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="absolute flex flex-col justify-end flex-shrink-0 gap-4 pt-32 md:pt-52 md:pb-10 pb-5 px-6 md:w-[700px] md:h-[620px] md:min-h-[620px] bg-[#fe9da1] rounded-[40px]">
                    <img
                        className="absolute w-[600px] md:w-[400px] -top-16 left-1/2 -translate-x-1/2"
                        src="https://framerusercontent.com/images/jTXG8nJYX1KdbMY3iJUgBNg7Mc.png?width=1280&height=1024"
                        alt=""
                    />

                    <div className="relative z-10 mt-auto flex flex-col justify-end gap-3 pb-2">
                        <h2 className="text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.05em]">
                            <span className="text-[1.55rem] block">Exploration</span>
                            The start of a
                            <br />
                            solid foundation
                        </h2>

                        <p className="text-[1.18rem] leading-relaxed">
                            We define the bigger picture and create a solid foundation.
                            The ideas and insights are translated into something tangible
                            that reflects the ambition of your business. Instead of imagining
                            solutions, we spend time to show you what the future of your
                            business could look like.
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="absolute flex flex-col justify-end flex-shrink-0 gap-4 pt-28 md:pt-44 md:pb-10 pb-5 px-6 md:w-[700px] md:h-[620px] md:min-h-[620px] bg-[#fedec6] rounded-[40px]">
                    <img
                        className="absolute w-[300px] md:w-[400px] -top-20 left-1/2 -translate-x-1/2"
                        src="https://framerusercontent.com/images/CrkzWLeeZgH1SexGm9WzTueu7rI.png?width=567&height=581"
                        alt=""
                    />

                    <div className="relative z-10 mt-auto flex flex-col justify-end gap-3 pb-2">
                        <h2 className="text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.05em]">
                            <span className="text-[1.55rem] block">Production</span>
                            Designing a
                            <br />
                            new reality
                        </h2>

                        <p className="text-[1.18rem] leading-relaxed">
                            Continuing from the defined base, we create the design in the
                            desired direction. We’re used to working on technical projects
                            to design functional solutions that optimize complex processes
                            (UX/UI) and create thoughtful products that connect with people.
                        </p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="absolute flex flex-col justify-end md:flex-shrink-0 gap-4 pt-[180px] md:pb-10 md:pt-[220px] pb-5 px-6 md:w-[700px] md:h-[620px] md:min-h-[620px] bg-[#abe8b6] rounded-[40px]">
                    <img
                        className="absolute w-[300px] md:w-[400px] -top-20 md:-top-28 left-1/2 -translate-x-1/2"
                        src="https://framerusercontent.com/images/MzOY28Hj4dVsLc9WXGw1HaZVck.png?width=1048&height=1160"
                        alt=""
                    />

                    <div className="relative z-10 mt-auto flex flex-col justify-end gap-3 pb-2">
                        <h2 className="text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.05em]">
                            <span className="text-[1.55rem] block">Validation</span>
                            Making sure we’re
                            <br />
                            on the right track
                        </h2>

                        <p className="text-[1.18rem] leading-relaxed">
                            Our Agile way of working allows us to iterate rapidly and
                            incrementally from the feedback of usability testing and
                            stakeholders—whether we’re designing websites, apps, or
                            enterprise software.
                        </p>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="absolute flex flex-col justify-end md:flex-shrink-0 gap-4 pt-32 md:pt-52 md:pb-10 pb-5 px-6 md:w-[700px] md:h-[620px] md:min-h-[620px] bg-[#abe8e8] rounded-[40px]">
                    <img
                        className="absolute w-[400px] -top-12 left-1/2 -translate-x-1/2"
                        src="https://framerusercontent.com/images/Dls2XRURpNV5pHl9VGpiap2b8.png?width=1280&height=1024"
                        alt=""
                    />

                    <div className="relative z-10 mt-auto flex flex-col justify-end gap-3 pb-2">
                        <h2 className="text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.05em]">
                            <span className="text-[1.55rem] block">Delivery</span>
                            A new beginning
                        </h2>

                        <p className="text-[1.18rem] leading-relaxed">
                            Delivering the project is not the end for us—it’s a new beginning.
                            We work together with your team and a living design system to ensure
                            your evolving business continues to provide value. Together, we learn
                            and iterate to continuously improve the experiences people have with
                            your product.
                        </p>
                    </div>
                </div>
                </div>

                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex relative items-center justify-center">
                        <img className="absolute w-24 -bottom-8 right-10 md:right-80" src="https://framerusercontent.com/images/cpDO4nykehsZgS5slj8PIQlmQA.png?width=600&height=440" alt="" />
                        <img className="w-[350px] h-[250px] md:w-[550px] md:h-[500px] object-cover rounded-[25px]" src="https://framerusercontent.com/images/pzFFH6nE4mzI7FfA2zniQE5iDag.jpg?width=1040&height=1640" alt="" />
                    </div>
                    <div className="flex flex-col px-16 md:px-[360px] gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl md:text-2xl font-semibold">An enjoyable collaboration</h3>
                            <p className="pr-4 text-lg md:text-xl text-[#505451]">From solving big design challenges with ambitious startups to seamlessly integrating with in-house teams at established companies—we’re flexible to adapt. We focus on building a strong relationship, allowing our work to thrive.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl md:text-2xl font-semibold">Expertise rooted in digital design</h3>
                            <p className="pr-4 text-lg md:text-xl text-[#505451]">We understand digital products inside and out, <br /> and by integrating brand expression with product design, we create solutions that are as effective as they are engaging. Partnering with us means accessing deep digital design expertise and working with a passionate team that delivers top-notch quality.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl md:text-2xl font-semibold">Adding value, early and often</h3>
                            <p className="pr-4 text-lg md:text-xl text-[#505451]">We aim to add actual value early on and often for the people that interact with the products we design. <br /> We enable businesses to operate with agility in a fast-changing digital landscape through well-crafted design.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative py-40 md:py-60">
                    <img className="absolute top-10 right-20 md:right-64 rounded-[40px] w-60 md:w-96" src="https://framerusercontent.com/images/VyhWmyMZDrMvasvlRWYywa8NfOE.png?width=770&height=800" alt="" />
                    <img className="absolute bottom-0 right-14 md:right-60 w-24 md:w-32" src="https://framerusercontent.com/images/38oAYeqJpWmWgsYKBcHkYpWKTs4.png?width=310&height=308" alt="" />
                </div>
                <div className="w-full px-12 pb-16 pt-4 md:px-60 md:pb-24">
                    <div className="mx-auto max-w-[1460px]">
                        <h2 className="mb-8 text-left text-[2.1rem] font-semibold leading-[0.9] tracking-[-0.06em] text-[#171717] md:mb-10 md:text-[3rem]">
                            Good questions
                        </h2>

                        <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-1 md:gap-1">
                            {faqItems.map((item, index) => {
                                const isOpen = openQuestion === index;

                                return (
                                    <div
                                        key={item.question}
                                        className={`overflow-hidden rounded-[28px] bg-[#f1eee7] ${
                                            isOpen ? "shadow-[inset_0_0_0_1px_rgba(23,23,23,0.04)]" : ""
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                                            aria-expanded={isOpen}
                                            className="flex w-full items-center justify-between gap-2 px-6 py-2 text-left md:px-8 md:py-4"
                                        >
                                            <p className="flex-1 text-left text-[1.05rem] font-medium leading-[1.15] tracking-[-0.03em] text-[#171717] md:text-[1.2rem] md:leading-[1.08] md:tracking-[-0.05em]">
                                                {item.question}
                                            </p>
                                            <span
                                                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center text-xl text-[#171717] transition-transform duration-200 md:h-8 md:w-8 md:text-2xl ${
                                                    isOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                            >
                                                ▾
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="px-6 pb-6 md:px-8 md:pb-8">
                                                <p className="text-left text-sm leading-[1.7] text-[#505451] md:text-[1.05rem]">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex py-10">
                        <Link className="bg-black px-6 py-2 text-white text-lg font-bold rounded-3xl">Go to FAQ</Link>
                    </div>
                </div>
            </div>
            <MenuBox />
            <Footer />
        </div>
    );
}
