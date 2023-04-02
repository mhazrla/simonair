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
                    </div>
                </Link>
            </div>
        );
    });
};

const noAlat = () => {
    return <div>Saat ini belum ada alat yang tersedia</div>;
};

const AlatList = ({ alats }) => {
    return alats ? isAlat(alats) : noAlat();
};

export default AlatList;
