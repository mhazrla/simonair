import React, { useState } from "react";
import { Link, Head, router } from "@inertiajs/react";

import Navbar from "@/Components/Navbar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Footer from "@/Components/Footer";
import swal from "sweetalert";

export default function Index(props) {
    console.log(props);
    const [values, setValues] = useState({
        nama_alat: "",
    });

    const errors = props.errors;

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);

        const formData = new FormData();

        for (let key in values) {
            formData.append(key, values[key]);
        }

        router.post(route("dashboard.store"), formData, {
            forceFormData: true,
            onSuccess: () => {
                swal("Good Job!", "Alat baru berhasil ditambahkan", "success");
            },
            onError: (errors) => {
                swal("Failed!", "Alat gagal ditambahkan", "error");
            },
        });
    };

    return (
        <DefaultLayout
            auth={props.auth}
            errors={props.errors}
            title={props.title}
        >
            <div className="py-12 ">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8 ">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={handleSubmit}
                        action="post"
                        encType="multipart/form-data"
                    >
                        <div className="form-control">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Search…"
                                    className="input input-bordered"
                                    id="nama_alat"
                                    name="nama_alat"
                                    onChange={handleChange}
                                    value={values.title}
                                />
                                {errors.nama_alat && (
                                    <div className="text-sm text-red-600">
                                        {errors.nama_alat}
                                    </div>
                                )}

                                <button className="btn btn-square">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6  text-fontPrimary text-xl font-bold">
                            List Aquarium
                        </div>
                    </div>
                </div>
            </div>

            {/* List Aquarium */}

            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <img
                                    alt="Placeholder"
                                    className="block h-auto w-full"
                                    src="https://picsum.photos/600/400/?random"
                                />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a
                                        className="no-underline hover:underline text-black"
                                        href="#"
                                    >
                                        Article Title
                                    </a>
                                </h1>
                                <p className="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a
                                    className="flex items-center no-underline hover:underline text-black"
                                    href="#"
                                >
                                    <img
                                        alt="Placeholder"
                                        className="block rounded-full"
                                        src="https://picsum.photos/32/32/?random"
                                    />
                                    <p className="ml-2 text-sm">Author Name</p>
                                </a>
                                <a
                                    className="no-underline text-grey-darker hover:text-red-dark"
                                    href="#"
                                >
                                    <span className="hidden">Like</span>
                                    <i className="fa fa-heart"></i>
                                </a>
                            </footer>
                        </article>
                    </div>

                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <img
                                    alt="Placeholder"
                                    className="block h-auto w-full"
                                    src="https://picsum.photos/600/400/?random"
                                />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a
                                        className="no-underline hover:underline text-black"
                                        href="#"
                                    >
                                        Article Title
                                    </a>
                                </h1>
                                <p className="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a
                                    className="flex items-center no-underline hover:underline text-black"
                                    href="#"
                                >
                                    <img
                                        alt="Placeholder"
                                        className="block rounded-full"
                                        src="https://picsum.photos/32/32/?random"
                                    />
                                    <p className="ml-2 text-sm">Author Name</p>
                                </a>
                                <a
                                    className="no-underline text-grey-darker hover:text-red-dark"
                                    href="#"
                                >
                                    <span className="hidden">Like</span>
                                    <i className="fa fa-heart"></i>
                                </a>
                            </footer>
                        </article>
                    </div>

                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <img
                                    alt="Placeholder"
                                    className="block h-auto w-full"
                                    src="https://picsum.photos/600/400/?random"
                                />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a
                                        className="no-underline hover:underline text-black"
                                        href="#"
                                    >
                                        Article Title
                                    </a>
                                </h1>
                                <p className="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a
                                    className="flex items-center no-underline hover:underline text-black"
                                    href="#"
                                >
                                    <img
                                        alt="Placeholder"
                                        className="block rounded-full"
                                        src="https://picsum.photos/32/32/?random"
                                    />
                                    <p className="ml-2 text-sm">Author Name</p>
                                </a>
                                <a
                                    className="no-underline text-grey-darker hover:text-red-dark"
                                    href="#"
                                >
                                    <span className="hidden">Like</span>
                                    <i className="fa fa-heart"></i>
                                </a>
                            </footer>
                        </article>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </DefaultLayout>
        //  <div>

        //     {props.tools
        //         ? props.tools.map((data, i) => {
        //               return <p key={i}>{data.alatId}</p>;
        //           })
        //         : "Belum ada daata"}
        // </div>
    );
}
