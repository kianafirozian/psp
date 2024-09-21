"use client"
import { useQuery } from "react-query";

interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
    phone: string;
    website: string;
    company: string;

}

export default function List() {
    const { isLoading, error, data: items } = useQuery("users", () =>
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    )
    console.log('data', items)

    if (isLoading) return 'Loading ...'
    if (error) return 'An error has occurred: ' + error

    return (
        <div className="flex flex-col px-5 bg-gray-300 text-gray-800">
            {items.map((item: UserData) => (
                <div key={item.id} className="px-5">
                    <h1 className="text-2xl text-grey-400 pt-5">{item.name}</h1>
                    <h2 className="mt-1 text-sm" >{item.email}</h2>
                    <div className="text-right border-b-2 border-purple-400 border-dotted">
                        <h3>{item.username}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}