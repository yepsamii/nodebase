import RegisterForm from "@/features/auth/components/register-form";
import { requireUnAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireUnAuth();

  return (
    <div className="flex p-16 w-full justify-center items-center min-h-screen">

      <RegisterForm />
    </div>
  );
};

export default Page;
