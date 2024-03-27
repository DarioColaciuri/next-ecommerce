"use client"
import Button from "./components/ui/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()
    return (
            <main className="container m-auto ">
                <h1 className="text-4xl font-bold">Page Not Found</h1>
                <Button onClick={() => router.push("/")}>Go Home</Button>
            </main>
    )
}