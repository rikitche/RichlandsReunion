import { User } from "@/hooks/types";
import { useEditUser } from "@/hooks/useEditUser";

type RsvpEntryProps = {
  user: User;
  show: boolean;
  onChange: () => void;
};
export default function RsvpEntry({ user, show, onChange }: RsvpEntryProps) {
  const { editUser, loading } = useEditUser();

  const modifyValidation = async (state: boolean) => {
    await editUser(user.email, { validated: state });
    onChange();
  };

  return (
    show && (
      <div className="p-4 border-2 border-rich-gold rounded-lg bg-white/60 hover:shadow-lg transition-shadow flex items-center justify-between gap-4">
        {/* Left: user info */}
        <div>
          <p className="text-sm text-black font-bold">
            {user.lastName}, {user.firstName}
          </p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>

        {/* Right: actions */}
        {user.validated == false && (
          <div className="flex gap-2">
            <button
              className="px-3 py-1 text-xs font-semibold rounded-md bg-green-600 text-white hover:bg-green-700 transition cursor-pointer"
              onClick={() => modifyValidation(true)}
              disabled={loading}
            >
              {loading ? "Loading..." : "Accept"}
            </button>
          </div>
        )}
        {user.validated == true && (
          <div className="flex gap-2">
            <button
              className="px-3 py-1 text-xs font-semibold rounded-md bg-red-600 text-white hover:bg-red-700 transition cursor-pointer"
              onClick={() => modifyValidation(false)}
              disabled={loading}
            >
              {loading ? "Loading..." : "Remove"}
            </button>
          </div>
        )}
      </div>
    )
  );
}
