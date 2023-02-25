import React from "react";

export default function Sidebar() {
    return (
        <div className="drawer-side border-r">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

            <ul className="menu p-4 w-80 bg-base-100">
                <li>
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center pl-2.5 mb-5"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-6 mr-3 sm:h-7"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
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

                        <div tabIndex={0} className="collapse collapse-arrow">
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
    );
}
