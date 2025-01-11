import Header from "@/components/Header"
import Link from "next/link"


const page = () => {
  return (
    <div className="flex flex-col justify-between py-10">
    <div className="flex flex-col gap-3">
        <Header name='Create Product' show={true} link='/auth-1' />
        </div>
            <Link href={'/auth-2'} className="btn-navigate">Continue</Link>
        </div>
  )
}

export default page