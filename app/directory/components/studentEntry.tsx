import { Student } from "@/hooks/types";

type StudentEntryProps = {
  student: Student;
};
export default function StudentEntry({ student }: StudentEntryProps) {
  return (
    <div className="relative group text-charcoal cursor-pointer font-serif font-semibold">
      {/* Name */}
      <span>
        {student.firstName} {student.lastName}
      </span>

      {/* Superlative */}
      {student.superlative && (
        <div
          className="
            absolute left-1/2 -translate-x-1/2 mt-1
            hidden group-hover:block
            bg-rich-gold text-white text-xs px-2 py-1 rounded-md
            whitespace-nowrap
            z-10
            shadow-lg
          "
        >
          {student.superlative}
        </div>
      )}
    </div>
  );
}
