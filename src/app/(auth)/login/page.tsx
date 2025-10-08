import ErrorBoundary from "@/app/components/ErrorBoundary";
import SignIn from "@/app/lib/SignIn";

export default async function Home() {
  return (
    <ErrorBoundary>
      <SignIn />
    </ErrorBoundary>
  );
}
