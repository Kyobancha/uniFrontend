import { Link, NavLink } from "react-router-dom"
import LoginModal from "./LoginModal"
import { useState } from "react"



function Navigation() {
    return (
        <div >
            <nav>
                <ul className="flex text-center bg-blue-400">
                    <li className="flex w-1/4 h-10">
                        <NavLink to="/" className="block w-full hover:bg-blue-300">Home</NavLink> |{" "}
                    </li>
                    <li className="flex w-1/4">
                        <NavLink to="/users" className="block w-full hover:bg-blue-300">Users</NavLink> |{" "}
                    </li>
                    <li className="flex w-1/4">
                        <NavLink to="/threads" className="block w-full hover:bg-blue-300">Threads</NavLink> |{" "}
                    </li>
                    <li className="flex w-1/4">
                        <NavLink to="/messages" className="block w-full hover:bg-blue-300">Messages</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation