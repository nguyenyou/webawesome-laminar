import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <Link href="/docs/button" className="font-medium underline">
        Get Started
      </Link>
    </div>
  );
}
