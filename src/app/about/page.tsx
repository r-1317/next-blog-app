"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Page: React.FC = () => {
  return (
    <main>
      <div className="mb-5 text-2xl font-bold">About</div>

      <div
        className={twMerge(
          "mx-auto mb-5 w-full md:w-2/3",
          "flex justify-center"
        )}
      >
        <Image
          src="/images/avatar.png"
          alt="Example Image"
          width={350}
          height={350}
          priority
          className="rounded-full border-4 border-slate-500 p-1.5"
        />
      </div>
      <div className="text-center">
        <span className="font-bold">名前: </span>
        r1317
      </div>
      <div className="text-center">
        <span className="font-bold">GitHub: </span>
        <a
          href="github.com/r-1317"
          className="text-blue-500"
        >
          github.com/r-1317
        </a>
      </div>
      <div className="text-center">
        <span className="font-bold">ポートフォリオ: </span>
        <a
          href="https://r-1317.github.io/portfolio/"
          className="text-blue-500"
        >
          https://r-1317.github.io/portfolio/
        </a>
      </div>
    </main>
  );
};

export default Page;