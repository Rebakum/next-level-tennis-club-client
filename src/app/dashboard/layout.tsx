import Navber from "@/component/sheard/Navber";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navber />
      <section className="w-full mx-auto">{children}</section>
    </main>
  );
}
