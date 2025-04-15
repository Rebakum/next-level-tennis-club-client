import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome to the Tennis Club
      </h1>
      <p className="text-gray-700 mt-4">
        Join our club and enjoy the best tennis experience.
      </p>
      <div className="mt-8">
        <Image
          src="https://media.istockphoto.com/id/2180238518/photo/relaxed-tennis-player-seated-on-blue-court-with-racquet-nearby.jpg?s=1024x1024&w=is&k=20&c=f8UGedvFWN0--ZvHtuo8lv7XK_Pr_nVFClOkR-h-PgY="
          alt="Tennis Court"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
}
