import React from "react";
import { Link } from "@inertiajs/react";

const isAlat = (alats) => {
    return alats.map((data, i) => {
        return (
            <div
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                key={i}
            >
                <Link href={route("dashboard.detail", data.id_alat)}>
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
                    </article>
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
