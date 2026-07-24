import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth.functions";
import { LogOut } from "lucide-react";

export async function Header({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  console.log(session?.user)
  return (
    <div className="w-full h-15 flex items-center gap-4 justify-end px-4">
      <div className="flex gap-2 justify-around items-center">
        {children}
        <Button>
          <LogOut className="ml-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
