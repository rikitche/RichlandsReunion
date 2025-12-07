import Page from "@/components/page";
import StudentEntry from "./components/studentEntry";
import Footer from "@/components/custom-footer";
import { StudentList } from "./components/studentList";

export default function DirectoryPage() {
  const students = StudentList;

  return (
    <Page authRequired>
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 text-center pt-5 pb-5 font-bold leading-tight bg-rich-blue text-balance">
        Richlands High School | Class of 2013
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-7 mb-7">
        {students.map((student) => (
          <StudentEntry student={student} key={student.id} />
        ))}
      </div>
      <Footer />
    </Page>
  );
}
