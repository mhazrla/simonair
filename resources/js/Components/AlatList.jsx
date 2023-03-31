import React from "react";
import { Link } from "@inertiajs/react";

const isAlat = (alats) => {
    var counting = 1;
    return alats.map((data, i) => {
        return (
            <div
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
                key={i}
            >
                <Link href={route("dashboard.detail", data.id_alat)}>
                    <div className="card shadow-xl bg-dark-blue">
                        <div class="grid grid-rows-3 grid-flow-col rounded-lg">
                            <div class="row-span-3 bg-light-blue grid place-items-center rounded-l-lg text-white text-3xl font-bold ">
                                {counting++}
                            </div>
                            <div class="grid place-items-center row-span-2 col-span-2">
                                <p className="text-center text-2xl font-bold text-white drop-shadow-xl">
                                    {data.nama_alat}
                                </p>
                            </div>
                            <div class=" col-span-2 mb-2">
                                <div className="flex justify-between mx-4 font-light">
                                    <p className="text-white">Status :</p>
                                    <p className="text-white font-semibold">
                                        {data.status}
                                    </p>
                                </div>
                                <div className="flex justify-between mx-4 font-light">
                                    <p className="text-white">Time :</p>
                                    <p className="text-white font-semibold">
                                        time
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <figure>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                                alt="Album"
                                className="w-auto"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                New album is released!
                            </h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Listen
                                </button>
                            </div>
                        </div> */}
                    </div>

                    {/* <article className="overflow-hidden rounded-lg shadow-lg">
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
                                    {data.nama_alat}
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                {data.updated_at}
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
                                <p className="ml-2 text-sm">{data.status}</p>
                            </a>
                            <a
                                className="no-underline text-grey-darker hover:text-red-dark"
                                href="#"
                            >
                                <span className="block">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>
                    </article> */}
                </Link>
            </div>
        );
    });
};

const noAlat = () => {
    return <div>Saat ini belum ada berita tersedia</div>;
};

const AlatList = ({ alats }) => {
    return alats ? isAlat(alats) : noAlat();
};

export default AlatList;
