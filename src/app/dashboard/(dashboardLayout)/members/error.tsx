"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const error = ({ error, reset }: { error: any; reset: any }) => {
  return (
    <div className="flex justify-center items-center font-bold text-red-700">
      error occured!!!
      <p className="">{error.message}</p>
    </div>
  );
};
export default error;
