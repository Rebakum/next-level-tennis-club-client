import { getSingleMemberUsingId } from "@/server_actions/member_action";
import Link from "next/link";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const page = async ({ params }: any) => {
  const memberParams = await params;
  const member = await getSingleMemberUsingId(memberParams?.id)


  return (
    <div className="max-w-xl mx-auto px-4 py-10 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">{member.name}</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Email:</span> {member.email}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Phone:</span> {member.phone}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Membership Type:</span>{" "}
        {member.membershipType}
      </p>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <Link href={`/dashboard/members/update/${member._id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Update Member
          </button>
        </Link>
        <Link href={`/dashboard/members/delete/${member._id}`}>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Delete Member
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
