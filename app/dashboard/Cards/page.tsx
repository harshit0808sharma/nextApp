'use client';
import Link from "next/link";
import { useState } from "react";

const Card1 = () => {
    const [detail, setDetail] = useState({
        firstName: '',
        lastName: '',
    })
    const handleChange = (event : any) =>{
        const {value, name} = event.target;
        setDetail((pv)=>{
            return{
                ...pv,
                [name]: value
            }
        })
    }

    // const handleClick = () =>{
    //     // router.push({
    //     //     pathname: '/dashboard/Card2',
    //     //     query: {
    //     //         firstName: detail.firstName,
    //     //         lastName: detail.lastName,
    //     //     }
    //     // })

    //     window.location.href('localhost:3000');
    // }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full w-full p-20">
                <div className="flex flex-col bg-gray-200 h-auto w-80 gap-4 p-8 rounded-lg shadow-md">
                    <h1 className="font-bold text-center text-3xl">Form</h1>
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" className="p-2 rounded-lg" name="firstName" value={detail?.firstName} onChange={handleChange}/>
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name"className="p-2 rounded-lg" name="lastName" value={detail?.lastName} onChange={handleChange}/>
                    <Link href={`/dashboard/Card2/${detail.firstName}/${detail.lastName}`} className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full">Click</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Card1;
