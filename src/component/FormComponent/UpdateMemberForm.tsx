/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { updateMemberData } from "@/server_actions/member_action";
import { useRouter } from "next/navigation";
import { useState } from "react";


const UpdateMemberForm = ({ id, member }: { id: string, member: any }) => {
    const router = useRouter();


    const [formData, setFormData] = useState({
        name: member?.name,
        email: member?.email,
        phone: member?.phone,
        membershipType: member?.membershipType,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await updateMemberData(id, formData)
            if (res) {
                alert("Member updated successfully!");
                router.push(`/dashboard/members/${id}`);
            } else {
                alert("Failed to update member.");
            }
        } catch (error) {
            console.error("Error updating member:", error);
            alert("Something went wrong. Please try again.");
        }
    };
    return (

        <form
            onSubmit={handleUpdate}
            className="w-full max-w-md p-6 bg-gray-50 rounded shadow-md flex flex-col gap-4"
        >
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border border-gray-500 p-2 rounded"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-gray-500 p-2 rounded"
                required
            />
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border border-gray-500 p-2 rounded"
                required
            />
            <select
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                className="border border-gray-500 p-2 rounded"
            >
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
            </select>

            <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
                Update
            </button>
        </form>

    );
};

export default UpdateMemberForm;