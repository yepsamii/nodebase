import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex p-16 w-full justify-center items-center min-h-screen">
      <div className="w-full flex flex-col gap-4 item-center max-w-sm">
        <Link
          href={"/"}
          className="flex gap-2 items-center font-medium"
        >
          <Image
            src={"/logos/logo.svg"}
            alt="Nodebase"
            height={24}
            width={24}
          />
          Nodebase
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
