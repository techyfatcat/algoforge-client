
import { Suspense } from "react";
import AuthCard from "@/src/components/auth/AuthCard";
import AuthLayout from "@/src/components/auth/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<div>Loading login...</div>}>
        <AuthCard mode="login" />
      </Suspense>
    </AuthLayout>
  );
}
