import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Footer from "@/Components/Footer";
import TabsRender from "@/Components/TabPanel";

export default function Index(props) {
    return (
        <DefaultLayout
            auth={props.auth}
            errors={props.errors}
            title={props.title}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6  text-fontPrimary text-xl font-bold">
                            List Aquarium
                        </div>
                    </div>
                </div>
            </div>

            {/* List Aquarium */}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <TabsRender />
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </DefaultLayout>
    );
}
