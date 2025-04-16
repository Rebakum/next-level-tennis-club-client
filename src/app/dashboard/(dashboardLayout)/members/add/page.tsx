import AddMemberForm from "@/component/FormComponent/AddMemberForm";


export default async function AddMember() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600">Add Member</h1>
      <AddMemberForm />
    </div>
  );
}
