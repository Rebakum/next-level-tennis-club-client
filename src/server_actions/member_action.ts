/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
// get all members

export const getAllMemberFromDb = async () => {
    const res = await fetch("http://localhost:5000/api/members", {
        cache: "no-store",
    });
    const data = await res.json()

    return data;
}

export const getSingleMemberUsingId = async (id: string) => {
    const res = await fetch(
        `http://localhost:5000/api/members/${id}`,
        {
            cache: "no-store",
        }
    );
    return res.json()
}

// update member data
export const updateMemberData = async (id: string, data: any) => {
    const res = await fetch(`http://localhost:5000/api/members/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json()
}

// create new member
export const createNewMember = async (data: any) => {
    const res = await fetch("http://localhost:5000/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    return res.json()
}

