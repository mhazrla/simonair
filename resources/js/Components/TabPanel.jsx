import React from "react";
import Gauge from "./Gauge";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "18/03/23",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "19/03/23",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "20/03/23",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "21/03/23",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "22/03/23",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "23/03/23",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
];

const Tabs = ({ color, sensor }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-4 lg:mx-0 -mt-3"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Data
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Graph
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words  w-full shadow-lg rounded">
                        <div className="px-4 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? "block" : "hidden"
                                    }
                                    id="link1"
                                >
                                    <div className="container my-12 mx-auto px-4 md:px-12">
                                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article className="overflow-hidden rounded-lg shadow-lg bg-cyan-100 ">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title font-bold text-2xl">
                                                            pH
                                                        </h2>
                                                        <div className="mt-6 -my-10">
                                                            <Gauge
                                                                value={
                                                                    sensor[0].ph
                                                                }
                                                                min={0}
                                                                max={1}
                                                            />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article className="overflow-hidden rounded-lg shadow-lg bg-cyan-100 ">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title font-bold text-2xl">
                                                            Suhu
                                                        </h2>
                                                        <div className="mt-6 -my-10">
                                                            <Gauge
                                                                value={
                                                                    sensor[0]
                                                                        .suhu
                                                                }
                                                                min={0}
                                                                max={1}
                                                            />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article className="overflow-hidden rounded-lg shadow-lg bg-cyan-100 ">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title font-bold text-2xl">
                                                            Amonia
                                                        </h2>
                                                        <div className="mt-6 -my-10">
                                                            <Gauge
                                                                value={
                                                                    sensor[0]
                                                                        .amonia
                                                                }
                                                                min={0}
                                                                max={1}
                                                            />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article className="overflow-hidden rounded-lg shadow-lg bg-cyan-100 ">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title font-bold text-2xl">
                                                            tss
                                                        </h2>
                                                        <div className="mt-6 -my-10">
                                                            <Gauge
                                                                value={
                                                                    sensor[0]
                                                                        .tss
                                                                }
                                                                min={0}
                                                                max={1}
                                                            />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article className="overflow-hidden rounded-lg shadow-lg bg-cyan-100 ">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title font-bold text-2xl">
                                                            TDS
                                                        </h2>
                                                        <div className="mt-6 -my-10">
                                                            <Gauge
                                                                value={
                                                                    sensor[0]
                                                                        .tds
                                                                }
                                                                min={0}
                                                                max={1}
                                                            />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article className="overflow-hidden rounded-lg shadow-lg bg-cyan-100 ">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title font-bold text-2xl">
                                                            Salinitas
                                                        </h2>
                                                        <div className="mt-6 -my-10">
                                                            <Gauge
                                                                value={
                                                                    sensor[0]
                                                                        .salinitas
                                                                }
                                                                min={0}
                                                                max={1}
                                                            />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? "block" : "hidden"
                                    }
                                    id="link2"
                                >
                                    <div className="py-12">
                                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                                <div className="p-6  text-fontPrimary ">
                                                    {/* Mobile Graph Start */}
                                                    <LineChart
                                                        className="block sm:hidden"
                                                        width={290}
                                                        height={290}
                                                        data={data}
                                                        margin={{
                                                            top: 5,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Line
                                                            type="monotone"
                                                            dataKey="pv"
                                                            stroke="#8884d8"
                                                            activeDot={{ r: 8 }}
                                                        />
                                                        <Line
                                                            type="monotone"
                                                            dataKey="uv"
                                                            stroke="#82ca9d"
                                                        />
                                                    </LineChart>
                                                    {/* Mobile Graph End */}

                                                    {/* Desktop Graph Start */}
                                                    <LineChart
                                                        className="hidden sm:block"
                                                        width={800}
                                                        height={400}
                                                        data={data}
                                                        margin={{
                                                            top: 5,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Line
                                                            type="monotone"
                                                            dataKey="pv"
                                                            stroke="#8884d8"
                                                            activeDot={{ r: 8 }}
                                                        />
                                                        <Line
                                                            type="monotone"
                                                            dataKey="uv"
                                                            stroke="#82ca9d"
                                                        />
                                                    </LineChart>
                                                    {/* Desktop Graph End */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender(props) {
    return (
        <>
            <Tabs color="red" sensor={props.sensor} />
        </>
    );
}
