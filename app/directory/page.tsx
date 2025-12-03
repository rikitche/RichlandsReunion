import Page from "@/components/page";
import StudentEntry from "./components/studentEntry";
import Footer from "@/components/custom-footer";

export default function DirectoryPage() {
  const students = [
    "John Doe",
    "Mary Sue",
    "Billy Bob",
    "Homer Simpson",
    "Peter Griffin",
  ];
  return (
    <Page authRequired>
      <h2 className="font-serif text-4xl md:text-5xl text-rich-gold mb-8 text-center mt-5">
        Richlands High School | Class of 2013
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-7 mb-7">
        {students.map((student, index) => (
          <StudentEntry key={index} fullName={student} />
        ))}
      </div>
      <Footer />
    </Page>
  );
}
