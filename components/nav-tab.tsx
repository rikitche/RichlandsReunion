import { Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";

type TabProps = {
  title: string;
  destination?: string;
};

export default function NavTab({ title, destination }: TabProps) {
  const pathname = usePathname();
  const active = pathname === destination;
  const selectedClass = active
    ? "flex items-center h-full px-5 bg-grey-500 border-t-4 border-rich-blue cursor-pointer"
    : "flex items-center h-full px-5 hover:border-t-4 border-rich-gold cursor-pointer";

  return (
    <div className={selectedClass}>
      <Typography
        {...({} as any)}
        as="a"
        href={destination || "#"}
        variant="medium"
        className="p-1 font-pretty text-rich-gold text-lg"
      >
        {title}
      </Typography>
    </div>
  );
}
