import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

function Register() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Card className="w-[350px] mx-2">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input id="username" placeholder="Username" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button>Sign up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;
