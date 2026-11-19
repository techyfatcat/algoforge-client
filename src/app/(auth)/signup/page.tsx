
import { Suspense } from "react";
import AuthCard from "@/src/components/auth/AuthCard";
import AuthLayout from "@/src/components/auth/AuthLayout";

export default function SignupPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<div>Loading signup...</div>}>
        <AuthCard mode="signup" />
      </Suspense>
    </AuthLayout>
  );
}
