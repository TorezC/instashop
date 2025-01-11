import Header from "@/components/Header"
import Link from "next/link"

const page = () => {
    return (
        <div className="flex flex-col justify-between py-10">
            <div className="flex flex-col gap-3">
                <Header name='Get Started' link='/auth-1' />
                <div className="flex items-center gap-2">
                    <span className="h-1 rounded-full w-full bg-[#8A226F]"></span>
                    <span className="h-1 rounded-full w-full bg-[#8A226F]"></span>
                    <span className="h-1 rounded-full w-full bg-[#0000001A]"></span>
                </div>
                <h1 className="font-medium text-3xl">Complete profile setup</h1>
                <p className="text-gray-500">Connect your socials for quick setup</p>

                <p className="text-gray-500">Or enter manually</p>
                <form className="flex flex-col gap-3">
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder="Full name" />
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder="Username" />
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder="Phone number" />
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder="Email" />
                </form>
            </div>
            <Link href={'/auth-3'} className="btn-navigate">Continue</Link>
        </div>
    )
}

export default page