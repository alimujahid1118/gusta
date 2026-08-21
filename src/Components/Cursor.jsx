import gsap from "gsap"
import { useEffect } from "react"

export default function Cursor() {

    useEffect(() => {

        const cursor = document.querySelector("#cursor")

        const handleMouseMove = (event) => {

            const { clientX, clientY } = event

            gsap.to(cursor, {
                x: clientX - 20,
                y: clientY - 20,
                duration: 0.2,
                ease: "power2.out",
            })

            const element = document.elementFromPoint(
                clientX,
                clientY
            )

            const shouldInvert = element?.closest(
                "img, video, p, h1, h2, h3, h4"
            )

            if (shouldInvert) {
                cursor.classList.add("bg-white")
                cursor.classList.add("mix-blend-difference")
                cursor.classList.remove("bg-black")
            } else {
                cursor.classList.add("bg-black")
                cursor.classList.remove("bg-white")
                cursor.classList.remove("mix-blend-difference")
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