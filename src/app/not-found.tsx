import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-[family-name:var(--font-cormorant-garamond)] text-5xl font-light">
        404
      </h1>
      <p className="font-[family-name:var(--font-dm-sans)] text-[var(--text-secondary)]">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm text-[var(--gold)] hover:underline underline-offset-4"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
