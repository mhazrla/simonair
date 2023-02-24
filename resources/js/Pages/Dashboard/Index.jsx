import React from "react";
import { Link, Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";

export default function Index(props) {
    console.log(props);
    return (
        <div>
            <Head title={props.title} />
            <Navbar />

            {props.tools
                ? props.tools.map((data, i) => {
                      return <p key={i}>{data.alatId}</p>;
                  })
                : "Belum ada daata"}
        </div>
    );
}
