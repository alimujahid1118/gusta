import gsap from "gsap";
import Footer from "../Components/Footer";
import Logo from "../Components/Logo";
import MenuBox from "../Components/MenuBox";
import { Link, useParams } from "react-router-dom";

export default function Work() {

    const { category } = useParams();
    const selected = category || "all";

    const handleClient1 = () => {
        gsap.to("#client1", {
            opacity: 1
        })
        gsap.to("#client2", {
            opacity: 0
        })
        gsap.to("#client3", {
            opacity: 0
        })
        gsap.to("#cc1", {
            backgroundColor: "white"
        })
        gsap.to("#cc2", {
            backgroundColor: "#9CA3AF"
        })
        gsap.to("#cc3", {
            backgroundColor: "#9CA3AF"
        })
    }

    const handleClient2 = () => {
        gsap.to("#client2", {
            opacity: 1
        })
        gsap.to("#client1", {
            opacity: 0
        })
        gsap.to("#client3", {
            opacity: 0
        })
        gsap.to("#cc2", {
            backgroundColor: "white"
        })
        gsap.to("#cc1", {
            backgroundColor: "#9CA3AF"
        })
        gsap.to("#cc3", {
            backgroundColor: "#9CA3AF"
        })
    }

    const handleClient3 = () => {
        gsap.to("#client3", {
            opacity: 1
        })
        gsap.to("#client1", {
            opacity: 0
        })
        gsap.to("#client2", {
            opacity: 0
        })
        gsap.to("#cc3", {
            backgroundColor: "white"
        })
        gsap.to("#cc2", {
            backgroundColor: "#9CA3AF"
        })
        gsap.to("#cc1", {
            backgroundColor: "#9CA3AF"
        })
    }

    const workData = [
        {
            type: "project",
            title: "Jeanologia",
            categories: ["Product", "Fashion"],
            description:
                "End-to-end software suite for sustainable denim design and manufacturing",
            mediaType: "video",
            image:
                "https://framerusercontent.com/assets/Py00ZrwZ0EZGP6Q4CS68uI.mp4",
            viewCase: true,
        },
        {
            type: "project",
            title: "Oria",
            categories: ["Product", "Brand", "Energy"],
            description:
                "Brand identity and product design for a smarter way to power your home",
            mediaType: "video",
            image:
                "https://framerusercontent.com/assets/eKyUB6C9K7bxBl9Ftxm79pHkkKM.mp4",
            viewCase: true,
        },
        {
            type: "project",
            title: "Nixfarma",
            categories: ["Product", "Pharmaceutical"],
            description:
                "Accessible, intelligent pharmacy management for pharmacists throughout Spain",
            mediaType: "image",
            image:
                "https://framerusercontent.com/images/pNWmvtzGxBYfK36LNtnBwyHuY.png?width=1080&height=1350",
            viewCase: true,
        },
        {
            type: "project",
            title: "Thanqs",
            categories: ["Product", "Brand", "Corporate services"],
            description:
                "Automated gifting platform that brightens someone’s day, increasing client and employee satisfaction",
            mediaType: "image",
            image: "https://framerusercontent.com/images/TYQg6twL2f5EUBoxrz83NwptAtU.png?width=1080&height=1350",
            viewCase: true,
        },
        {
            type: "project",
            title: "Moffatt & Nichol",
            categories: ["Product", "Infrastructure"],
            description:
                "Infrastructure inspection and operations platform for a global leader in ports and coastal engineering",
            mediaType: "image",
            image: "https://framerusercontent.com/images/3qAO21QtXYojHOUvteyS2RgKwTM.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "VPC Watch Co.",
            categories: ["Websites", "Luxury"],
            description:
                "Ecommerce redesign for a passion-driven independent watch brand",
            mediaType: "video",
            image: "https://framerusercontent.com/assets/ctQ2OmYqpehsTq6Smw7skn0rgE.mp4",
            viewCase: false,
        },
        {
            type: "project",
            title: "Agro4All",
            categories: ["Product", "Brand", "Agriculture"],
            description:
                "Centralized crop protection management for growers",
            mediaType: "image",
            image: "https://framerusercontent.com/images/FAnAMJQ2W6VrXA3WaYhTrfejpcE.png?width=1080&height=1350",
            viewCase: true,
        },
        {
            type: "project",
            title: "BMW",
            categories: ["Product", "Mobility"],
            description:
                "Imagining new concepts of mobility by ideating the driving experience of the future",
            mediaType: "image",
            image: "https://framerusercontent.com/images/UjAsx8rzqqv8cvTC6z4asSzqT4.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "CHILI publish",
            categories: ["Websites", "Brand", "Marketing technology"],
            description:
                "Brand expression and web design for a leader in document automation software",
            mediaType: "video",
            image: "https://framerusercontent.com/assets/rvsFijfvyssLNbo7ufzROVqHss.mp4",
            viewCase: false,
        },
        {
            type: "project",
            title: "NextPort",
            categories: ["Product", "Logistics and transportation"],
            description:
                "Preventing scheduling issues in ports through an AI-powered digital twin platform",
            mediaType: "image",
            image: "https://framerusercontent.com/images/z93f4DNVojAU1bhkhV9kUz0W4I8.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "DigiCare",
            categories: ["Websites", "Brand", "Health"],
            description:
                "Helping physiotherapists keep patients on track with their recovery, beyond the clinic walls",
            mediaType: "image",
            image: "https://framerusercontent.com/images/aLI2jgL1M78e5yYoaLGmEi5RnzI.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "Adri & Zoon",
            categories: ["Websites", "Food"],
            description:
                "Ecommerce redesign for one of the Netherlands’ leading seafood wholesalers, delivering fresh fish direct to restaurants",
            mediaType: "image",
            image: "https://framerusercontent.com/images/BLJaVDgHvLnmfoNOQxY2YvZEEsM.png?width=1080&height=1350",
            viewCase: false,
        },

        // CLIENT SECTION GOES HERE
        {
            type: "clients",
        },

        {
            type: "project",
            title: "Narmin",
            categories: ["Websites", "Brand", "Logistics and transportation"],
            description:
                "An immersive, illustration-driven website for last-mile delivery software that puts drivers first",
            mediaType: "video",
            image: "https://framerusercontent.com/assets/PP3GpQ2Q9RfK9mEZaPJN7eC4aA.mp4",
            viewCase: false,
        },
        {
            type: "project",
            title: "Facilitee",
            categories: ["Product", "Property management"],
            description:
                "Enhancing tenant satisfaction with streamlined property service management",
            mediaType: "image",
            image: "https://framerusercontent.com/images/hxhSooBxsekXF7RkkejkcYfuAOA.png?width=1080&height=1350",
            viewCase: true,
        },
        {
            type: "project",
            title: "Farmacia 10",
            categories: ["Brand", "Pharmaceutical"],
            description:
                "Event branding and launch campaign for Nixfarma's flagship pharmacy industry event",
            mediaType: "image",
            image: "https://framerusercontent.com/images/XqUYdK05g0PpgpnEiBSy6ffiY.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "Ferreteria Dols",
            categories: ["Websites", "Retail"],
            description:
                "Bold ecommerce redesign for a family-run Valencia hardware store with over 70 years of history",
            mediaType: "image",
            image: "https://framerusercontent.com/images/DydW41KB1zEX2Q720JJOEjKLuk.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "LALIGA",
            categories: ["Product", "Sports"],
            description:
                "New feature concepts and a unified design system for a multi-sport streaming platform",
            mediaType: "image",
            image: "https://framerusercontent.com/images/uw6q7IEf2bL8RCMwWrpMsv19Co.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "ValenciaportPCS",
            categories: ["Product", "Logistics and transportation"],
            description:
                "Port community system connecting carriers, customs, and terminals across one of Europe’s leading ports",
            mediaType: "image",
            image: "https://framerusercontent.com/images/67pm05zx1DPjstOUv29UcTn78k.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "Flow",
            categories: ["Websites", "Finance"],
            description:
                "Bold website design for a fintech platform that brings white-label banking to any software product",
            mediaType: "video",
            image: "https://framerusercontent.com/assets/xqWKXl0cpyRWReZInyNeSxf08.mp4",
            viewCase: false,
        },
        {
            type: "project",
            title: "DDI",
            categories: ["Websites", "Brand", "Education"],
            description:
                "Brand, website, and teaching for a UX/UI diploma at the UPV, Valencia’s leading technical university",
            mediaType: "video",
            image: "https://framerusercontent.com/assets/KaTuM4wzVRkQ1jkJHnaIPzAWDgc.mp4",
            viewCase: false,
        },
        {
            type: "project",
            title: "Idrica",
            categories: ["Product", "Water technology"],
            description:
                "Smarter water operations for utilities worldwide, through product design support on the Xylem Vue platform",
            mediaType: "image",
            image: "https://framerusercontent.com/images/UFmmNzgHwBweZUXPiVLWE79kgz8.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "Sycada",
            categories: ["Product", "Mobility"],
            description:
                "From a mindful driving app to enterprise fleet control, product design across an entire software ecosystem",
            mediaType: "image",
            image: "https://framerusercontent.com/images/5xptN6AOpbTApSaYygE9a9EVWyg.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "Alcopa",
            categories: ["Brand", "Finance"],
            description:
                "Marketing and report design for a Belgian family-owned investment firm active across Europe",
            mediaType: "video",
            image: "https://framerusercontent.com/assets/ls2JXYiYjdkULtCzlkluROvYlw.mp4",
            viewCase: false,
        },
        {
            type: "project",
            title: "Actuals",
            categories: ["Websites", "Finance"],
            description:
                "Newspaper-inspired website for a fintech platform providing financial infrastructure for high-volume digital companies",
            mediaType: "image",
            image: "https://framerusercontent.com/images/r3M1flDRz43r3RfY0GNpJmyx8kA.png?width=1080&height=1350",
            viewCase: false,
        },

        // TESTIMONIAL / CLIENT DEMO SECTION
        {
            type: "testimonial",
        },

        {
            type: "project",
            title: "En Temporada",
            categories: ["Websites", "Brand", "Food"],
            description:
                "Our initiative to help make a conscious decision on the fruit and vegetables we consume",
            mediaType: "image",
            image: "https://framerusercontent.com/images/zFhNtje9LOtkbipPOHGZVTrXDmk.png?width=1080&height=1350",
            viewCase: true,
        },
        {
            type: "project",
            title: "Talk to Loop",
            categories: ["Product", "Humanitarian"],
            description:
                "Giving aid recipients a safe voice in shaping the humanitarian services they receive",
            mediaType: "image",
            image: "https://framerusercontent.com/images/8cCDsPBXHk0ZyFSmOmA4owwOlo.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "DutchQargo",
            categories: ["Websites", "Logistics and transportation"],
            description:
                "Website design for a global freight forwarder that puts personal service above automation",
            mediaType: "image",
            image: "https://framerusercontent.com/images/g3NtIzInnanhprzYZ3733Mcfzo.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "ProximaRed",
            categories: ["Websites", "Energy"],
            description:
                "Helping business parks break free from grid congestion with local energy management software",
            mediaType: "image",
            image: "https://framerusercontent.com/images/jP9zQsZc7mf7xUeU2MnBS0kq34.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "LCM Digital",
            categories: ["Product", "Infrastructure"],
            description:
                "Lean planning and real-time control for large-scale construction projects through a collaborative enterprise platform",
            mediaType: "image",
            image: "https://framerusercontent.com/images/OPXYTK6wp8XSxLl2trzuyPuSadI.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "Fermax",
            categories: ["Product", "Smart home"],
            description:
                "Product design support for the mobile companion apps behind a global leader in intercom and smart home hardware",
            mediaType: "image",
            image: "https://framerusercontent.com/images/heo3E3OXhQ8G9QGzA0m4k82YUao.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "BIOagradables",
            categories: ["Websites", "Sustainability", "NGO"],
            description:
                "Valencia-based NGO keeping local beaches clean through volunteer action",
            mediaType: "video",
            image: "https://framerusercontent.com/assets/kRxvWk51d3Z8gKYX8WbFZC1EjHs.mp4",
            viewCase: false,
        },
        {
            type: "project",
            title: "CleverMobi",
            categories: ["Product", "Telecom"],
            description:
                "Streamlined business operations software for mobile virtual network operators",
            mediaType: "image",
            image: "https://framerusercontent.com/images/hoeJ1tSI4fpggJ9BMHznutJoXw.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "Frontify",
            categories: ["Websites", "Brand", "Marketing technology"],
            description:
                "Design support for a leading brand management platform",
            mediaType: "image",
            image: "https://framerusercontent.com/images/d8JAuM6EeePiQZJTHjCpIsMx8dA.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "Itegra",
            categories: ["Product", "Health"],
            description:
                "Clearer paths to recovery for sports club members, guided through every step of their treatment",
            mediaType: "image",
            image: "https://framerusercontent.com/images/x5UU8IoUFKqEyxl9x9h5hCPgg.png?width=1080&height=1350",
            viewCase: false,
        },
        {
            type: "project",
            title: "AI Zwei",
            categories: ["Product", "Brand", "AI"],
            description:
                "Brand identity and design system for a predictive AI analytics platform built for decision-makers",
            mediaType: "video",
            image: "https://framerusercontent.com/assets/c59Cfnmkil55rLu0NEymbuMxxw.mp4",
            viewCase: false,
        },
        {
            type: "project",
            title: "TIBA",
            categories: ["Product", "Logistics and transportation"],
            description:
                "Efficient logistics operations for one of Spain's leading freight and transport companies",
            mediaType: "image",
            image: "https://framerusercontent.com/images/Z3hzwMNFkRb4wNvvefOKlW0enV4.png?width=1080&height=1350",
            viewCase: false,
        },
    ];

    const filteredWork = workData.filter((item) => {

        // Keep clients/testimonials
        if (item.type !== "project") {
            return true;
        }

        // Show everything on /work/all
        if (selected === "all") {
            return true;
        }

        // Show only projects containing selected category
        return item.categories.some(
            (itemCategory) =>
                itemCategory.toLowerCase() === selected.toLowerCase()
        );
    });

    return (
        <div className="bg-black">
            <Logo />
            <div className="bg-black flex flex-col pt-64">
                <div className="flex flex-col pl-6 pr-4">

                    {/* Mobile */}
                    <div className="relative md:hidden">
                        <img className="w-24 absolute -top-32" src="https://framerusercontent.com/images/viOXIcA6MMf7J0dbDkC8tQeCbg.png?width=231&height=268" alt="" />
                        <h1 className="text-white text-4xl font-semibold">Digital design for forward-thinking businesses and people.</h1>
                    </div>
                    {/* Desktop */}
                    <div className="hidden md:grid md:items-end grid-cols-[96px_1fr] gap-x-4">
                        <img
                            className="w-24 row-span-1 self-end"
                            src="https://framerusercontent.com/images/viOXIcA6MMf7J0dbDkC8tQeCbg.png?width=231&height=268"
                            alt=""
                        />

                        <h1 className="text-white text-4xl font-semibold">
                            Digital design for forward-thinking
                        </h1>

                        <div />

                        <h1 className="text-white text-4xl font-semibold col-span-2">
                            businesses and people.
                        </h1>
                    </div>

                    <div className="flex flex-row gap-2 py-8">
                        <Link
                            to="/work/all"
                            className={`rounded-lg font-semibold text-lg px-5 py-2 ${
                                selected === "all"
                                    ? "bg-white text-black rounded-[90px] flex items-center gap-1"
                                    : "bg-[#424341] text-white"
                            }`}
                        >
                            {
                                selected === "all" && (
                                    <i className="fi fi-rr-check text-sm mt-1"></i>
                                )
                            }
                            <p>All</p>
                        </Link>

                        <Link
                            to="/work/product"
                            className={`rounded-lg font-semibold text-lg px-5 py-2 ${
                                selected === "product"
                                    ? "bg-white text-black rounded-[90px] flex items-center gap-1"
                                    : "bg-[#424341] text-white"
                            }`}
                        >
                            {
                                selected === "product" && (
                                    <i className="fi fi-rr-check text-sm mt-1"></i>
                                )
                            }
                            <p>Product</p>
                        </Link>

                        <Link
                            to="/work/websites"
                            className={`rounded-lg font-semibold text-lg px-5 py-2 ${
                                selected === "websites"
                                    ? "bg-white text-black rounded-[90px] flex items-center gap-1"
                                    : "bg-[#424341] text-white"
                            }`}
                        >
                            {
                                selected === "websites" && (
                                    <i className="fi fi-rr-check text-sm mt-1"></i>
                                )
                            }
                            <p>Websites</p>
                        </Link>

                        <Link
                            to="/work/brand"
                            className={`rounded-lg font-semibold text-lg px-5 py-2 ${
                                selected === "brand"
                                    ? "bg-white text-black rounded-[90px] flex items-center gap-1"
                                    : "bg-[#424341] text-white"
                            }`}
                        >
                            {
                                selected === "brand" && (
                                    <i className="fi fi-rr-check text-sm mt-1"></i>
                                )
                            }
                            <p>Brand</p>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 text-white md:grid-cols-2 gap-x-8 gap-y-16 px-8 py-10 md:px-12">

                    {filteredWork.map((item, index) => {

                        // Client/demo section
                        if (item.type === "clients") {
                            return (
                                <div
                                    key={index}
                                    className="col-span-1 md:col-span-2"
                                >
                                    {/* client demo */}
                                    {/* <ClientDemo /> */}
                                </div>
                            );
                        }

                        // Testimonial/client demo section
                        if (item.type === "testimonial") {
                            return (
                                <div
                                    key={index}
                                    className="col-span-1 md:col-span-2"
                                >
                                    {/* testimonial */}
                                    <div className="flex flex-col px-40 py-40">
                                        <div className="flex flex-col min-h-[100px] relative justify-center items-center">
                                            <div id="client1" className="absolute inset-0 flex flex-col items-center justify-center text-3xl">
                                                <p>Hello</p>
                                                <p>Bhai jaan</p>
                                            </div>
                                            <div id="client2" className="absolute inset-0 opacity-0 flex flex-col items-center justify-center text-3xl">
                                                <p>Hello</p>
                                                <p>Ayan jaan</p>
                                            </div>
                                            <div id="client3" className="absolute inset-0 opacity-0 flex flex-col items-center justify-center text-3xl">
                                                <p>Bye</p>
                                                <p>Ayan jaan</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4 mt-6 items-center justify-center">
                                            <p id="cc1" onClick={handleClient1} className="bg-white p-1 rounded-full"></p>
                                            <p id="cc2" onClick={handleClient2} className="bg-gray-400 p-1 rounded-full"></p>
                                            <p id="cc3" onClick={handleClient3} className="bg-gray-400 p-1 rounded-full"></p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        // Normal project
                        return (
                            <div
                                key={item.title}
                                className="flex flex-col gap-6"
                            >
                                <div className="relative w-full rounded-3xl overflow-hidden">

                                    <div className="absolute z-10 left-4 top-3 flex gap-2">
                                        {item.categories.map((category) => (
                                            <button
                                                key={category}
                                                className="text-white text-sm font-semibold bg-gray-500/50 backdrop-blur-sm rounded-md px-4 py-2"
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    {item.mediaType === "video" ? (
                                        <video
                                            className="w-full h-[500px] aspect-[4/3] object-cover rounded-3xl"
                                            loop
                                            autoPlay
                                            muted
                                            playsInline
                                            src={item.image}
                                        />
                                    ) : (
                                        <img
                                            className="w-full h-[500px] aspect-[4/3] object-cover rounded-3xl"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    )}
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="font-semibold text-2xl">
                                            {item.title}
                                        </h2>

                                        <p className="text-xl text-[#717470]">
                                            {item.description}
                                        </p>
                                    </div>

                                    {item.viewCase && (
                                        <Link className="flex items-center gap-3">
                                            <p className="text-xl font-semibold">
                                                View Case
                                            </p>

                                            <p className="text-3xl">
                                                {`>`}
                                            </p>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
            <div className="flex items-center md:py-12 justify-center">
                <div className="bg-[#fff1d6] flex flex-col md:flex-row md:max-w-[700px] md:rounded-[40px] gap-6 px-6 py-8">
                    <img className="rounded-3xl aspect-[1230/1140] md:w-[250px] md:h-[400px]" src="https://framerusercontent.com/images/3zyamXyTfM5BPKATYuvuk6LsJ8E.jpg?width=1230&height=1440" alt="" />
                    <div className="flex flex-col items-start md:relative md:py-6 gap-4 md:gap-6">
                        <h1 className="text-4xl font-semibold">What we do</h1>
                        <p className="text-xl md:text-2xl text-[#505451] pr-6">Our expertise lies in designing useful digital products, websites, and brands that resonate for forward-thinking businesses. We leverage our eye for detail, a strong understanding of technology, and a mind for strategic execution to provide a lasting value and drive results.</p>
                        <Link className="bg-black text-white text-lg font-bold rounded-3xl text-center px-6 py-2">Our services</Link>
                        <img className="hidden md:block md:absolute md:w-36 md:-bottom-14 md:-right-10" src="https://framerusercontent.com/images/3Tt8VxUA3BMBPBv6x4PYbUq2ec.png?width=600&height=504" alt="" />
                    </div>
                </div>
            </div>
            <MenuBox />
            <Footer />
        </div>
    )
}