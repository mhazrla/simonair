import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import DefaultLayout from "@/Layouts/DefaultLayout";

export default function Index(props) {
    return (
        <DefaultLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title={props.title} />
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
