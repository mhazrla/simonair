import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Index(props) {
    console.log(props);
    return (
        <div>
            <Head title={props.title} />
            {props.tools
                ? props.tools.map((data, i) => {
                      return <p key={i}>{data.alatId}</p>;
                  })
                : "Belum ada daata"}
        </div>
    );
}
