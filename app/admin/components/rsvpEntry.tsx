import { User } from "@/hooks/types";

type RsvpEntryProps = {
  user: User;
};
export default function RsvpEntry({ user }: RsvpEntryProps) {
  return <div>{user.email}</div>;
}
