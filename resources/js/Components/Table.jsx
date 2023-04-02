import React from "react";
import DataTable from "react-data-table-component";

const isData = (log) => {
    const columns = [
        {
            name: "Waktu",
            selector: (row) => row.updated_at,
            sortable: true,
        },
        {
            name: "pH",
            selector: (row) => row.ph,
            sortable: true,
        },
        {
            name: "Suhu",
            selector: (row) => row.suhu,
            sortable: true,
        },
        {
            name: "Amonia",
            selector: (row) => row.amonia,
            sortable: true,
        },
        {
            name: "TSS",
            selector: (row) => row.tss,
            sortable: true,
        },
        {
            name: "TDS",
            selector: (row) => row.tds,
            sortable: true,
        },
        {
            name: "Salinitas",
            selector: (row) => row.salinitas,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
        },
    ];

    var data = log;

    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <DataTable
            title="Log Data"
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

// const isTable = ({ log, datas }) => {
//     var counter = 1;
//     console.log(typeof datas);
//     // Converts timestamp into Date Object
//     const dt = new Date(datas);

//     // Print the Date string
//     console.log(datas);
//     return (
//         <div>
//             <div className="flex flex-col">
//                 <div className="-m-1.5 overflow-x-auto">
//                     <div className="p-1.5 min-w-full inline-block align-middle">
//                         <div className="border rounded-lg divide-y divide-gray-200">
//                             <div className="py-3 px-4">
//                                 <div className="relative max-w-xs">
//                                     <label
//                                         htmlFor="hs-table-with-pagination-search"
//                                         className="sr-only"
//                                     >
//                                         Search
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="hs-table-with-pagination-search"
//                                         id="hs-table-with-pagination-search"
//                                         className="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
//                                         placeholder="Search for items"
//                                     />
//                                     <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
//                                         <svg
//                                             className="h-3.5 w-3.5 text-gray-400"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width={16}
//                                             height={16}
//                                             fill="currentColor"
//                                             viewBox="0 0 16 16"
//                                         >
//                                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="overflow-hidden">
//                                 <table className="min-w-full divide-y divide-gray-200 ">
//                                     <thead className="bg-gray-50 ">
//                                         <tr>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
//                                             >
//                                                 No
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
//                                             >
//                                                 Waktu
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
//                                             >
//                                                 pH
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
//                                             >
//                                                 Suhu
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
//                                             >
//                                                 Amonia
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
//                                             >
//                                                 TDS
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
//                                             >
//                                                 TSS
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
//                                             >
//                                                 Salinitas
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
//                                             >
//                                                 Status
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="divide-y divide-gray-200 ">
//                                         {log
//                                             ? log.map((data, i) => {
//                                                   return (
//                                                       <tr key={i}>
//                                                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
//                                                               {counter++}
//                                                           </td>
//                                                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
//                                                               {data.updated_at}
//                                                           </td>
//                                                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
//                                                               {data.ph}
//                                                           </td>
//                                                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
//                                                               {data.suhu}
//                                                           </td>
//                                                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
//                                                               {data.amonia}
//                                                           </td>
//                                                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
//                                                               {data.tds}
//                                                           </td>
//                                                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
//                                                               {data.tss}
//                                                           </td>
//                                                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
//                                                               {data.salinitas}
//                                                           </td>
//                                                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                                               <a
//                                                                   className="text-blue-500 hover:text-blue-700"
//                                                                   href="#"
//                                                               >
//                                                                   {data.status ==
//                                                                   0
//                                                                       ? "Kondisi air normal"
//                                                                       : "Kondisi air tidak normal"}
//                                                               </a>
//                                                           </td>
//                                                       </tr>
//                                                   );
//                                               })
//                                             : "Belum ada daata"}
//                                     </tbody>
//                                 </table>
//                             </div>
//                             <div className="py-1 px-4">
//                                 <nav className="flex items-center space-x-2">
//                                     <a
//                                         className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
//                                         href="#"
//                                     >
//                                         <span aria-hidden="true">«</span>
//                                         <span className="sr-only">
//                                             Previous
//                                         </span>
//                                     </a>
//                                     <a
//                                         className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
//                                         href="#"
//                                         aria-current="page"
//                                     >
//                                         1
//                                     </a>
//                                     <a
//                                         className="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
//                                         href="#"
//                                     >
//                                         2
//                                     </a>
//                                     <a
//                                         className="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
//                                         href="#"
//                                     >
//                                         3
//                                     </a>
//                                     <a
//                                         className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
//                                         href="#"
//                                     >
//                                         <span className="sr-only">Next</span>
//                                         <span aria-hidden="true">»</span>
//                                     </a>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Table;
