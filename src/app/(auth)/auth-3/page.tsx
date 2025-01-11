import Header from "@/components/Header"
import Link from "next/link"
import profile from '../../../../public/images/profile.svg'
import Image from "next/image"

const page = () => {
    return (
        <div className="flex flex-col justify-between my-10">
            <div className="flex flex-col gap-3">
                <Header name='Get Started' link='/auth-1' />
                <div className="flex items-center gap-2">
                    <span className="h-1 rounded-full w-full bg-[#8A226F]"></span>
                    <span className="h-1 rounded-full w-full bg-[#8A226F]"></span>
                    <span className="h-1 rounded-full w-full bg-[#8A226F]"></span>
                </div>
                <div className="border border-gray-400 flex justify-center items-center">
                    <Image
                        className="text-center"
                        src={profile}
                        alt="profile"
                    />
                </div>
                {/* <h1 className="font-medium text-3xl">Complete profile setup</h1>
                <p className="text-gray-500">Connect your socials for quick setup</p>

                <p className="text-gray-500">Or enter manually</p> */}
                <form className="flex flex-col gap-3">
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder="Store name" />
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder="Store tag name" />
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder=" Store phone number" />
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder="Store email" />
                    <input type="text" className=" rounded-md border-gray-400 p-2 w-full border" placeholder="Category" />
                </form>
            </div>
            <Link href={'/create-product'} className="btn-navigate">Continue</Link>
        </div>
    )
}

export default page