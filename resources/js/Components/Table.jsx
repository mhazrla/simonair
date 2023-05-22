import React from "react";
import DataTable from "react-data-table-component";

const isData = (log) => {
    function convertArrayOfObjectsToCSV(array) {
        let result;

        const columnDelimiter = ",";
        const lineDelimiter = "\n";
        const keys = Object.keys(log[0]);

        result = "";
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach((item) => {
            let ctr = 0;
            keys.forEach((key) => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    function downloadCSV(array) {
        const link = document.createElement("a");
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;
        const currDate = new Date().toLocaleDateString();
        const currTime = new Date().toLocaleTimeString();

        const filename = `${log[0].nama_alat} ${currDate} ${currTime}`;

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute("href", encodeURI(csv));
        link.setAttribute("download", filename);
        link.click();
    }

    const columns = [
        {
            name: "Waktu",
            selector: (row) => row.created_at,
            sortable: true,
        },
        {
            name: "pH",
            selector: (row) => row.ph,
        },
        {
            name: "Suhu",
            selector: (row) => row.suhu,
        },
        {
            name: "Amonia",
            selector: (row) => row.amonia,
        },
        {
            name: "TSS",
            selector: (row) => row.tss,
        },
        {
            name: "TDS",
            selector: (row) => row.tds,
        },
        {
            name: "Salinitas",
            selector: (row) => row.salinitas,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
        },
    ];

    const Export = ({ onExport }) => (
        <div className="mx-5 my-auto">
            <div className="hidden xl:block">
                <button
                    className="btn btn-primary btn-sm"
                    onClick={(e) => onExport(e.target.value)}
                >
                    Export
                </button>
            </div>

            <div className="block xl:hidden">
                <button
                    className="btn btn-primary btn-sm"
                    onClick={(e) => onExport(e.target.value)}
                >
                    <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g id="Interface / Download">
                                {" "}
                                <path
                                    id="Vector"
                                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                                    stroke="#fff"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>{" "}
                            </g>{" "}
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );

    const actionsMemo = React.useMemo(
        () => <Export onExport={() => downloadCSV(log)} />,
        []
    );

    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(log);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <DataTable
            actions={actionsMemo}
            columns={columns}
            data={rows}
            progressPending={pending}
            pagination
            highlightOnHover
            pointerOnHover
        />
    );
};

const noData = () => {
    return <div>Saat ini belum ada data yang tersedia</div>;
};

const Table = ({ log }) => {
    return log ? isData(log) : noData;
};

export default Table;
