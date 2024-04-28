import LoginForm from "@/app/components/auth/LoginForm";
import Link from "next/link";

export const metadata = {
    title: "User",
    description: "User Page"
}

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <LoginForm />
        </div>
    );
}