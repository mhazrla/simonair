import React from "react";

const Tabs = ({ color }) => {
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
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? "block" : "hidden"
                                    }
                                    id="link1"
                                >
                                    <div class="container my-12 mx-auto px-4 md:px-12">
                                        <div class="flex flex-wrap -mx-1 lg:-mx-4">
                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article class="overflow-hidden rounded-lg shadow-lg">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title ">
                                                            pH
                                                        </h2>
                                                        <img
                                                            alt="Placeholder"
                                                            class="block h-auto w-full rounded-lg my-4"
                                                            src="https://picsum.photos/600/400/?random"
                                                        />
                                                    </div>
                                                </article>
                                            </div>
                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article class="overflow-hidden rounded-lg shadow-lg">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title ">
                                                            pH
                                                        </h2>
                                                        <img
                                                            alt="Placeholder"
                                                            class="block h-auto w-full rounded-lg my-4"
                                                            src="https://picsum.photos/600/400/?random"
                                                        />
                                                    </div>
                                                </article>
                                            </div>
                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article class="overflow-hidden rounded-lg shadow-lg">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title ">
                                                            pH
                                                        </h2>
                                                        <img
                                                            alt="Placeholder"
                                                            class="block h-auto w-full rounded-lg my-4"
                                                            src="https://picsum.photos/600/400/?random"
                                                        />
                                                    </div>
                                                </article>
                                            </div>
                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article class="overflow-hidden rounded-lg shadow-lg">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title ">
                                                            pH
                                                        </h2>
                                                        <img
                                                            alt="Placeholder"
                                                            class="block h-auto w-full rounded-lg my-4"
                                                            src="https://picsum.photos/600/400/?random"
                                                        />
                                                    </div>
                                                </article>
                                            </div>
                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                                                <article class="overflow-hidden rounded-lg shadow-lg">
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title ">
                                                            pH
                                                        </h2>
                                                        <img
                                                            alt="Placeholder"
                                                            class="block h-auto w-full rounded-lg my-4"
                                                            src="https://picsum.photos/600/400/?random"
                                                        />
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                <article class="overflow-hidden rounded-lg shadow-lg">
                                                    <a href="#">
                                                        <img
                                                            alt="Placeholder"
                                                            class="block h-auto w-full"
                                                            src="https://picsum.photos/600/400/?random"
                                                        />
                                                    </a>

                                                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                                        <h1 class="text-lg">
                                                            <a
                                                                class="no-underline hover:underline text-black"
                                                                href="#"
                                                            >
                                                                Article Title
                                                            </a>
                                                        </h1>
                                                        <p class="text-grey-darker text-sm">
                                                            11/1/19
                                                        </p>
                                                    </header>

                                                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                                        <a
                                                            class="flex items-center no-underline hover:underline text-black"
                                                            href="#"
                                                        >
                                                            <img
                                                                alt="Placeholder"
                                                                class="block rounded-full"
                                                                src="https://picsum.photos/32/32/?random"
                                                            />
                                                            <p class="ml-2 text-sm">
                                                                Author Name
                                                            </p>
                                                        </a>
                                                        <a
                                                            class="no-underline text-grey-darker hover:text-red-dark"
                                                            href="#"
                                                        >
                                                            <span class="hidden">
                                                                Like
                                                            </span>
                                                            <i class="fa fa-heart"></i>
                                                        </a>
                                                    </footer>
                                                </article>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? "block" : "hidden"
                                    }
                                    id="link2"
                                >
                                    <p>
                                        Completely synergize resource taxing
                                        relationships via premier niche markets.
                                        Professionally cultivate one-to-one
                                        customer service with robust ideas.
                                        <br />
                                        <br />
                                        Dynamically innovate resource-leveling
                                        customer service for state of the art
                                        customer service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
    return (
        <>
            <Tabs color="red" />;
        </>
    );
}
