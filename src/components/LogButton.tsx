import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LogIn } from "lucide-react"
import { authClient } from "@/lib/auth-client"

export function LogButton() {
    const handleLogin = async () => {
        authClient.signIn.social({provider: "github"});
    };

  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button variant="outline"><LogIn /> Se connecter</Button>} />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Se connecter</DialogTitle>
            <DialogDescription>
              Cliquer sur le bouton ci-dessous pour vous connecter à votre compte.
            </DialogDescription>
          </DialogHeader>
          <Button 
            onClick={handleLogin}
            variant="secondary" 
            size="lg" 
            className="w-full mb-5"
          >
            <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github-light.svg" alt="logo" className="mr-2 h-4 w-4" />
            Connecter avec GitHub
          </Button>
        </DialogContent>
      </form>
    </Dialog>
  )
}
