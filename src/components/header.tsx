
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { LogButton } from "./LogButton.tsx";

export function Header(props:{ session?: any }) {
  console.log("Header session:", props.session);
  return (
    <div className="w-full h-15 flex border-b-2 border-accent items-center gap-4 justify-end px-4">
      <div className="flex gap-2 justify-around items-center">
       { props.session ? (
        <div>
          <Button variant="outline">{props.session?.user?.name}</Button>
          <Button onClick={() => authClient.signOut()} variant="outline"><LogOut /> Se déconnecter</Button>
        </div>
        ) : (
          <LogButton />
       )}
      </div>
    </div>
  );
}
