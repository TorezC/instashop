import Header from "@/components/Header"
import Link from "next/link"

const page = () => {
    return (
        <div className="flex flex-col justify-between py-10 px-3">
            <div className="flex flex-col gap-3">
                <Header name='Get Started' link='/' />
                <div className="flex items-center gap-2">
                    <span className="h-1 rounded-full w-full bg-[#8A226F]"></span>
                    <span className="h-1 rounded-full w-full bg-[#0000001A]"></span>
                    <span className="h-1 rounded-full w-full bg-[#0000001A]"></span>
                </div>
                <h1 className="font-medium text-3xl">Enter your phone number or email to get started</h1>
                <p className="text-gray-500">We will send you a verification code for confirmation</p>

                <form >
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder="Enter phone number of email" />
                </form>
            </div>
            <Link href={'/auth-2'} className="btn-navigate">Continue</Link>
        </div>
    )
}

export default page