import Navber from "@/component/sheard/Navber";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navber />
      <div className="min-h-screen w-full">{children}</div>
    </main>
  );
}
