import UpdateMemberForm from "@/component/FormComponent/UpdateMemberForm";
import { getSingleMemberUsingId } from "@/server_actions/member_action";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const { id } = await params;
  const member = await getSingleMemberUsingId(id);


  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Update Member</h1>
      <UpdateMemberForm member={member} id={id} />
    </div>
  );
}
