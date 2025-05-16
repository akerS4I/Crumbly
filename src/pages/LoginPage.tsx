import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Link to="/">
          <Button className="mb-6 w-full">Вернуться на главную</Button>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
