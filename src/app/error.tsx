"use client";

const ErrorPage = ({
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-[family-name:var(--font-cormorant-garamond)] text-5xl font-light">
        Something went wrong
      </h1>
      <button
        onClick={reset}
        className="text-sm text-[var(--gold)] hover:underline underline-offset-4 cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
