const Navbar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col drop-shadow-md shadow-lg">
                    <div className="w-full navbar bg-white">
                        <div className="flex-none lg:hidden">
                            <label
                                htmlFor="my-drawer-3"
                                className="btn btn-square btn-ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>

                        <div className="flex-1"></div>

                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle"
                                >
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">
                                            8
                                        </span>
                                    </div>
                                </label>
                                <div
                                    tabIndex={0}
                                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                                >
                                    <div className="card-body">
                                        <span className="font-bold text-lg">
                                            8 Items
                                        </span>
                                        <span className="text-info">
                                            Subtotal: $999
                                        </span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">
                                                View cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    Content
                </div>

                <div className="drawer-side border-r">
                    <label
                        htmlFor="my-drawer-3"
                        className="drawer-overlay"
                    ></label>

                    <ul className="menu p-4 w-80 bg-base-100">
                        <li>
                            <a
                                href="https://flowbite.com/"
                                class="flex items-center pl-2.5 mb-5"
                            >
                                <img
                                    src="https://flowbite.com/docs/images/logo.svg"
                                    class="h-6 mr-3 sm:h-7"
                                    alt="Flowbite Logo"
                                />
                                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                    SIMONAIR
                                </span>
                            </a>
                        </li>

                        <li>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                Dashboard
                            </a>
                        </li>

                        <li>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>

                                <div
                                    tabIndex={0}
                                    className="collapse collapse-arrow"
                                >
                                    <div className="collapse-title mr-28 ml-[-12px]">
                                        Log Data
                                    </div>
                                    <div className="collapse-content">
                                        <p>Aquarium 1</p>
                                        <p>Aquarium 2</p>
                                        <p>Aquarium 3</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
