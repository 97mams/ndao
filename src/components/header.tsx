
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function Header(props:{ session?: any }) {

  return (
    <div className="w-full h-15 flex items-center gap-4 justify-end px-4">
      <div className="flex gap-2 justify-around items-center">
        {props.session == undefined ? (
          <Button variant={"secondary"} size={"sm"}>
            Se connecter
          </Button>
        ) : (
          <Button variant={"secondary"} size={"sm"}>
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        )}
      </div>
    </div>
  );
}
