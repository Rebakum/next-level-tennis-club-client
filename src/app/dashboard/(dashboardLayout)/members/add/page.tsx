"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddMember() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "Regular",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    console.log(formData);
    e.preventDefault();
    await fetch("http://localhost:5000/api/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    router.push("/dashboard/members");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600">Add Member</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-4 w-4/12 flex  flex-col gap-4 p-6 bg-gray-50 rounded-sm shadow-md"
      >
        <input
          type="text"
          name="name"
          className="border border-gray-500 p-1 rounded-sm"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          className="border border-gray-500 p-1 rounded-sm"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="phone"
          className="border border-gray-500 p-1 rounded-sm"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <select
          name="membershipType"
          value={formData.membershipType}
          onChange={handleChange}
          className="border border-gray-500 p-1 rounded-sm"
        >
          <option
            value="Regular"
            className="border border-gray-500 p-1 rounded-sm"
          >
            Regular
          </option>
          <option
            value="Premium"
            className="border border-gray-500 p-1 rounded-sm"
          >
            Premium
          </option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Member
        </button>
      </form>
    </div>
  );
}
