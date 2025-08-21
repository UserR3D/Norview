import SignIn from "@/app/lib/SignIn";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import AppError from "./error";

export default async function Home() {
  return (
    <ErrorBoundary fallback={<AppError />}>
      <SignIn />
    </ErrorBoundary>
  );
}
