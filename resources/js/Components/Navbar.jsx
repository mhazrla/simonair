import { useState } from "react";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Sidebar from "./Sidebar";

const Navbar = ({ auth, child }) => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col drop-shadow-md shadow-lg ">
                    <div className="w-full navbar bg-primary">
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

                        <div className="flex-none ml-auto">
                            <div className="dropdown dropdown-end">
                                <button className="btn btn-ghost btn-circle">
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
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                            />
                                        </svg>
                                        <span className="badge badge-xs badge-primary indicator-item">
                                            10
                                        </span>
                                    </div>
                                </button>

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

                            {/* User photo start*/}
                            <div className="dropdown dropdown-end">
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        <label
                                            tabIndex={0}
                                            className="btn btn-ghost btn-circle avatar"
                                        >
                                            <div className="w-10 rounded-full">
                                                <img src="https://lh3.googleusercontent.com/a/AGNmyxbF0y5fzHdmaCr2QSWl1K9vFgdiddWYy9qbxp7Yww=s288" />
                                            </div>
                                        </label>
                                        <span className="hidden sm:block mx-3">
                                            {auth.user.name}
                                        </span>
                                    </button>
                                </span>

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
                            {/* User photo end*/}
                        </div>
                    </div>
                    {child}
                </div>

                <Sidebar />
            </div>
        </div>
    );
};

export default Navbar;
