import { SignupForm } from "@/components/signup-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Link to="/">
          <Button className="mb-6 w-full">Вернуться на главную</Button>
        </Link>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
