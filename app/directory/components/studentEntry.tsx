import { Student } from "@/hooks/types";

type StudentEntryProps = {
  student: Student;
};
export default function StudentEntry({ student }: StudentEntryProps) {
  return (
    <div className="relative group text-charcoal cursor-pointer font-serif font-semibold">
      {/* Image */}
      <div className="w-32 h-32 mx-auto mb-3 overflow-hidden rounded-full border-4 group-hover:border-rich-gold">
        <img
          src={student.imgSrc ? student.imgSrc : "/images/default-profile.png"}
          alt={`${student.firstName} ${student.lastName}`}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>

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
