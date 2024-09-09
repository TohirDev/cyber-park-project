import { FormWrapper } from "@/components/Form/FormWrapper";
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
import { Label } from "@/components/ui/label";
import { useLogin } from "./useLogin";

function Login() {
  const { form, onSubmit } = useLogin();
  return (
    <FormWrapper methods={form} onSubmit={onSubmit}>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Card className="w-[350px] mx-2">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  {...form.register("username")}
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...form.register("password")}
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Sign in</Button>
          </CardFooter>
        </Card>
      </div>
    </FormWrapper>
  );
}

export default Login;
