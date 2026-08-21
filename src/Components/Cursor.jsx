import gsap from "gsap"
import { useEffect } from "react"

export default function Cursor() {

    useEffect(() => {

        const cursor = document.querySelector("#cursor")

        const handleMouseMove = (event) => {

            const { clientX, clientY } = event

            const element = document.elementFromPoint(
                clientX,
                clientY
            )
            const menu = element?.closest("#menu")
            const logo = element?.closest("#logo")

            const shouldInvert = element?.closest(
                "img, video, p, h1, h2, h3, h4, span"
            )

            const shouldScale = shouldInvert || menu || logo

            gsap.to(cursor, {
                x: clientX - 20,
                y: clientY - 20,
                scale: shouldScale ? 2 : 1,
                duration: 0.2,
                ease: "power2.out",
                overwrite: true
            })

            const webLogo = document.querySelector("#logo")

            if (shouldInvert || webLogo) {
                cursor.classList.add("bg-white")
                cursor.classList.add("mix-blend-difference")
                cursor.classList.remove("bg-black")
            } else {
                cursor.classList.add("bg-black")
                cursor.classList.remove("bg-white")
                cursor.classList.remove("mix-blend-difference")
            }

            const menuBox = document.querySelector("#menuBox")

            if (menuBox) {
                cursor.classList.add("bg-white")
                cursor.classList.add("mix-blend-difference")
                cursor.classList.remove("bg-black")
            }
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }

    }, [])

    return (
        <div
            id="cursor"
            className="
                hidden
                md:block
                fixed
                top-0
                left-0
                w-[40px]
                h-[40px]
                rounded-full
                z-[999999]
                pointer-events-none
                bg-black
            "
        />
    )
}