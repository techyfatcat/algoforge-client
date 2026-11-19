
import { Suspense } from "react";
import AssessmentPage from "./AssessmentPage";

export default function Page({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex h-dvh items-center justify-center">
          Loading assessment...
        </div>
      }
    >
      <AssessmentPage params={params} />
    </Suspense>
  );
}
