import LogoutButton from "@/features/auth/components/logout-button";

import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

export default async function Home() {
  await requireAuth();
  const data = await caller.getUsers();
  console.log(data);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Protected Page
        <p>{JSON.stringify(data)}</p>
        {data && <LogoutButton />}
      </main>
    </div>
  );
}
