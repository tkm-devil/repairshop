import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-hero bg-cover bg-center min-h-screen">
      <main className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="text-white flex flex-col gap-6 p-12 rounded-xl bg-black/80 w-4/5 sm:max-w-96 max-auto sm:text-2xl"> 
          <h1 className="text-4xl font-bold">Dan&apos;s Computer<br/>Repair Shop</h1>
          <address>
            555 Gateway Lane<br/>
            Kansas City, KS 55555
          </address>
          <p>
            Open Monday to Saturday<br/>
            9:00 AM to 5:00 PM
          </p>
          <Link href="tel:555-555-5555" className="hover:underline">
            555-555-5555
          </Link>
        </div>
      </main>
    </div>
  );
}
