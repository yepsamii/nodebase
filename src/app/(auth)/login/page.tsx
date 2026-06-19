import LoginForm from "@/features/auth/components/login-form";
import { requireUnAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireUnAuth();
  return (
    <div className="flex p-16 w-full justify-center items-center min-h-screen">
      <LoginForm />
    </div>
  );
};

export default Page;
