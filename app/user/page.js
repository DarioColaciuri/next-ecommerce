import Link from "next/link";
import Button from "../components/ui/Button"

export const metadata = {
    title: "User",
    description: "User Page"
}

export default function User() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="container">
                <form className="flex flex-col items-center">
                    <label className="mb-2 text-white">Name</label>
                    <input type="text" className="mb-4 px-2 py-1 border rounded" />
                    <label className="mb-2 text-white">Password</label>
                    <input type="password" className="mb-4 px-2 py-1 border rounded" />
                    <Button className="mb-5">Login</Button>
                </form>
                <p className="text-white text-center">Dont have any account yet? <Link href="/user/register" className="text-white bg-black rounded-2xl p-2">Register</Link></p>
                
            </div>
        </div>
    );
}