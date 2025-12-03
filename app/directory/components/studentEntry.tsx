type StudentEntryProps = {
  firstName?: string;
  lastName?: string;
  fullName?: string;
};
export default function StudentEntry({
  firstName,
  lastName,
  fullName,
}: StudentEntryProps) {
  return <div className="text-rich-gold">{fullName}</div>;
}
