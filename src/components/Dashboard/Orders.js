import React from 'react'

const Orders = () => {
    return (
        <div class="max-w-md">
            <table class="table-fixed w-full my-20">
            <thead>
                <tr>
                <th class="px-4 py-2">Order ID</th>
                <th class="px-4 py-2">Order Name</th>
                <th class="px-4 py-2">Sold</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border px-4 py-2">1</td>
                <td class="border px-4 py-2">Laptop</td>
                <td class="border px-4 py-2">858</td>
                </tr>
                <tr class="bg-gray-100">
                <td class="border px-4 py-2">2</td>
                <td class="border px-4 py-2">Monitor</td>
                <td class="border px-4 py-2">112</td>
                </tr>
                <tr>
                <td class="border px-4 py-2">3</td>
                <td class="border px-4 py-2">Mouse</td>
                <td class="border px-4 py-2">1,280</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Orders
