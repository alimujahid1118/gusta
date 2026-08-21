import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link id="logo" to={"/"} className="flex fixed cursor-none z-40 top-8 left-8">
            <img className="w-16 shadow-2xl rounded-full" src="/gusta-logo.avif" alt="Website logo" />
        </Link>
    )
}