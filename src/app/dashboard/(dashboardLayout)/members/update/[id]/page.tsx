"use client";

import React, { use, useEffect } from "react";

import { useRouter } from "next/navigation";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: any) {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const id: any = use(params);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "Regular",
  });
  useEffect(() => {
    const fetchMember = async () => {
      const res = await fetch(`http://localhost:5000/api/members/${id}`);
      const data = await res.json();
      setFormData(data);
    };
    fetchMember();
  }, [id]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/members/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
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
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Update Member</h1>
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
    </div>
  );
}
