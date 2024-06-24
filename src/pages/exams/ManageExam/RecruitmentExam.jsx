// import React, { useMemo } from "react";
// import {
//   useTable,
//   useSortBy,
//   useGlobalFilter,
//   usePagination,
// } from "react-table";
// import Card from "@/components/ui/Card";
// import Icon from "@/components/ui/Icon";
// import Dropdown from "@/components/ui/Dropdown";
// import GlobalFilter from "../../table/react-tables/GlobalFilter";
// import { advancedTableRecruitmentExam } from "@/constant/table-data";

// const actions = [
//   {
//     name: "view",
//     icon: "heroicons-outline:eye",
//   },
//   {
//     name: "edit",
//     icon: "heroicons:pencil-square",
//   },
//   {
//     name: "Pages",
//     icon: "heroicons:pencil-circle-dot",
//   },
// ];

// const COLUMNS = [
//   {
//     Header: "Id",
//     accessor: "id",
//     Cell: ({ cell: { value } }) => <span>{value}</span>,
//   },
//   {
//     Header: "FullName",
//     accessor: "fullname",
//     Cell: ({ cell: { value } }) => (
//       <div>
//         <span className="inline-flex items-center">
//           <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
//             {value.name}
//           </span>
//         </span>
//       </div>
//     ),
//   },
//   {
//     Header: "ShortName",
//     accessor: "shortname",
//     Cell: ({ cell: { value } }) => (
//       <div>
//         <span className="inline-flex items-center">
//           <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
//             {value.name}
//           </span>
//         </span>
//       </div>
//     ),
//   },
//   {
//     Header: "LastModified",
//     accessor: "lastmodified",
//     Cell: ({ cell: { value } }) => <span>{value}</span>,
//   },
//   {
//     Header: "status",
//     accessor: "status",
//     Cell: ({ cell: { value } }) => (
//       <span className="block w-full">
//         <span
//           className={`inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
//             value === "Live" ? "text-success-500 bg-success-500" : ""
//           } ${value === "Draft" ? "text-warning-500 bg-warning-500" : ""}
//           }`}
//         >
//           {value}
//         </span>
//       </span>
//     ),
//   },
//   {
//     Header: "action",
//     accessor: "action",
//     Cell: ({ row }) => (
//       <Dropdown
//         classMenuItems="right-0 w-[140px] top-[110%]"
//         label={
//           <span className="text-xl text-center block w-full">
//             <Icon icon="heroicons-outline:dots-vertical" />
//           </span>
//         }
//       >
//         <div className="divide-y divide-slate-100 dark:divide-slate-800">
//           {actions.map((item, i) => (
//             <div
//               key={i}
//               className={`${
//                 item.name === "Pages"
//                   ? "bg-success-500 text-success-500 bg-opacity-30 hover:bg-opacity-100 hover:text-white"
//                   : "hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50"
//               } w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex space-x-2 items-center rtl:space-x-reverse`}
//             >
//               <span className="text-base">
//                 <Icon icon={item.icon} />
//               </span>
//               <span>{item.name}</span>
//             </div>
//           ))}
//         </div>
//       </Dropdown>
//     ),
//   },
// ];

// const RecruitmentExam = () => {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => advancedTableRecruitmentExam, []);

//   const tableInstance = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//     pageOptions,
//     state,
//     gotoPage,
//     setGlobalFilter,
//     prepareRow,
//   } = tableInstance;

//   const { globalFilter, pageIndex } = state;

//   return (
//     <Card>
//       <div className="md:flex justify-between items-center mb-6">
//         {/* <h4 className="card-title text-slate-900 dark:text-white">Recruitment Exam Table</h4> */}
//         <div>
//           <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
//         </div>
//       </div>
//       <div className="overflow-x-auto -mx-6">
//         <div className="inline-block min-w-full align-middle">
//           <div className="overflow-hidden">
//             <table
//               className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
//               {...getTableProps()}
//             >
//               <thead className="border-t border-slate-100 dark:border-slate-800">
//                 {headerGroups.map((headerGroup) => (
//                   <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column) => (
//                       <th
//                         {...column.getHeaderProps(
//                           column.getSortByToggleProps()
//                         )}
//                         scope="col"
//                         className="table-th"
//                       >
//                         {column.render("Header")}
//                         <span>
//                           {column.isSorted
//                             ? column.isSortedDesc
//                               ? " 🔽"
//                               : " 🔼"
//                             : ""}
//                         </span>
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody
//                 className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
//                 {...getTableBodyProps()}
//               >
//                 {page.map((row) => {
//                   prepareRow(row);
//                   return (
//                     <tr {...row.getRowProps()}>
//                       {row.cells.map((cell) => (
//                         <td {...cell.getCellProps()} className="table-td">
//                           {cell.render("Cell")}
//                         </td>
//                       ))}
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center">
//         <div className="flex items-center space-x-3 rtl:space-x-reverse">
//           <span className="flex space-x-2 rtl:space-x-reverse items-center">
//             <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
//               Showing
//             </span>
//             <span>
//               <input
//                 type="number"
//                 className="form-control py-2"
//                 defaultValue={pageIndex + 1}
//                 onChange={(e) => {
//                   const pageNumber = e.target.value
//                     ? Number(e.target.value) - 1
//                     : 0;
//                   gotoPage(pageNumber);
//                 }}
//                 style={{ width: "50px" }}
//               />
//             </span>
//           </span>
//           <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
//             entries {pageIndex + 1} of {pageOptions.length}
//           </span>
//         </div>
//         <ul className="flex items-center space-x-3 rtl:space-x-reverse">
//           <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
//             <button
//               className={`${
//                 !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               onClick={() => previousPage()}
//               disabled={!canPreviousPage}
//             >
//               <Icon icon="heroicons-outline:chevron-left" />
//             </button>
//           </li>
//           {pageOptions.map((pageIdx) => (
//             <li key={pageIdx}>
//               <button
//                 aria-current="page"
//                 className={`${
//                   pageIdx === pageIndex
//                     ? "bg-slate-900 dark:bg-slate-600 dark:text-slate-200 text-white font-medium"
//                     : "bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900 font-normal"
//                 } text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
//                 onClick={() => gotoPage(pageIdx)}
//               >
//                 {pageIdx + 1}
//               </button>
//             </li>
//           ))}
//           <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
//             <button
//               className={`${
//                 !canNextPage ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               onClick={() => nextPage()}
//               disabled={!canNextPage}
//             >
//               <Icon icon="heroicons-outline:chevron-right" />
//             </button>
//           </li>
//         </ul>
//       </div>
//     </Card>
//   );
// };

// export default RecruitmentExam;
