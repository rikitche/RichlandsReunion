// import PageHeader from "./page-header";
// import NavBar from "./nav-bar";
// import WildcatBackground from "./wildcat-background";

// type PageProps = {
//   children?: React.ReactNode;
// };
// export default function Page({ children }: PageProps) {
//   return (
//     <main className="relative h-full w-full">
//       <PageHeader />
//       <NavBar />
//       <div className="w-full h-1 bg-rich-gold" />
//       <div className="w-full h-2 bg-rich-blue" />
//       <WildcatBackground />
//       {children}
//     </main>
//   );
// }

import PageHeader from "./page-header";
import NavBar from "./nav-bar";

type PageProps = {
  children?: React.ReactNode;
};
export default function Page({ children }: PageProps) {
  return (
    <main
      className="relative min-h-screen h-full w-full bg-fixed bg-center bg-cover bg-blend-overlay bg-gray-900"
      style={{
        backgroundImage: "url('/Richlands-Wildcat-Icon.png')",
      }}
    >
      <NavBar />
      {children}
    </main>
  );
}
