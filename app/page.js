import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        fill
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
        placeholder="blur"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 font-normal tracking-tight text-8xl text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="px-8 py-6 text-lg font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </>
  );
}
