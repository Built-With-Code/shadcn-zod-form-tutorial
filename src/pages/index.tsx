import SignupForm from "@/components/SignupForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-4/5 max-w-5xl">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Signup</h1>
          <p className="text-sm text-neutral-500">
            Already have an account?{" "}
            <Link href="#" className="underline underline-offset-4">
              Login
            </Link>
          </p>
        </div>
        <SignupForm />
      </section>
    </main>
  );
}
