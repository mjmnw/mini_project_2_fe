import React from "react";
import { useSelector } from "react-redux";

export default function TableAccount() {
    const userSelector = useSelector((state) => state.auth);

    function formatDate(birthdate) {
        const inputDate = new Date(birthdate);

        if (isNaN(inputDate.getTime())) {
            return "Invalid Date";
        }

        const year = inputDate.getFullYear();
        const month = String(inputDate.getMonth() + 1).padStart(2, "0");
        const day = String(inputDate.getDate()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg mb-20">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Username
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Full Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Birthdate
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Phone Number
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Address
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Gender
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Refferal Code
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase"
                                    >
                                        My Balance
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase"
                                    >
                                        My Points
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-3 text-sm text-center font-medium text-white whitespace-nowrap">
                                        {userSelector.username}
                                    </td>
                                    <td className="px-6 py-3 text-sm text-center font-medium text-white whitespace-nowrap">
                                        {userSelector.fullname}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        {userSelector.email}
                                    </td>
                                    <td className="px-6 py-3 text-sm text-center font-medium text-white whitespace-nowrap">
                                        {formatDate(userSelector.birthdate)}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        {userSelector.phone_number}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        {userSelector.address}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        {userSelector.gender}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        {userSelector.refferal_code}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        {userSelector.balance}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        {userSelector.point}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
