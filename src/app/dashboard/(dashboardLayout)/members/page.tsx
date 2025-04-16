import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function Members() {
  try {
    const res = await fetch("http://localhost:5000/api/members", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch members: ${res.status}`);
    }

    const members = await res.json();

    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Club Members
        </h1>
        <ul className="space-y-4">
          {members.map((member: any) => (
            <li
              key={member._id}
              className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-all"
            >
              <Link
                href={`/dashboard/members/${member._id}`}
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {member.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching members:", error);
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Failed to load members.
      </div>
    );
  }
}
