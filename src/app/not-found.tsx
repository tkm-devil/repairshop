import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4"> 
      <h2 className="text-2xl">Page Not Found</h2>
      <Image
        className="m-0 rounded-xl"
        src="/images/not-found.png"
        width={300}
        height={300}
        alt="Page Not Found"
        priority={true}
      />
      </div> 
    </div>
  );
}
