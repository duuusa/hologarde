import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-6">
        <Image 
          src="/logo_hologarde.png" 
          alt="me" 
          width={100} 
          height={100}
          className="backdrop-blur-sm	rounded-full"
        />
        <h1 className="text-center text-5xl tracking-tight max-w-3xl font-semibold text-white">In maintenance.</h1>
        <p className="ml-4 text-gray-200 text-xl text-center">The team is currently working hard on the new website. Stay tuned.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <span className="px-4 py-3 flex justify-center items-center gap-2 rounded-full bg-white opacity-40 hover:bg-white hover:opacity-100">
          <a href="https://www.linkedin.com/company/hologarde/" target="_blank">linkedin</a>
          <RxArrowTopRight/>
        </span>
      </div>
    </main>
  );
}
