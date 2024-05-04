import Link from "next/link";
import { useRouter } from "next/router";

const Card2 = (props) => {
    console.log(props);

    return (
        <>
            <div className="flex flex-col items-center justify-center h-full w-full p-20">
                <h1 className="text-3xl text-blue-500">This is a second Card page</h1>
                <Link href="/dashboard/Cards">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full underline">Return</button>
                </Link>
            </div>
        </>
    )
}
export default Card2;