function Navigation() {
    return (
        <div className="mb-5">
            <div className="flex space-between justify-between">
                <h3>Cool Forum</h3>
                <button>Login</button>
            </div>
            <nav>
                <ul className="flex space-between justify-between align-center">
                    <li className="hover:text-white"><a className="text-center">Home</a></li>
                    <li className="hover:text-white"><a>Users</a></li>
                    <li className="hover:text-white"><a>Threads</a></li>
                    <li className="hover:text-white"><a>Messages</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation