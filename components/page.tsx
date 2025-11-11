import NavBar from "./nav-bar";

type PageProps = {
  children?: React.ReactNode;
};
export default function Page({ children }: PageProps) {
  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black -z-10" />
      <main
        className="relative min-h-screen h-full w-full bg-fixed bg-center bg-cover bg-blend-overlay bg-gray-900"
        style={{
          backgroundImage: "url('/wildcat-2.png')",
        }}
      >
        <NavBar />
        {children}
      </main>
    </div>
  );
}
