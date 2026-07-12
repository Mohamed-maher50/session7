"use client";
import UserForm, { formValuesTypes } from "@/components/UserForm";

export default function Home() {
  const onSubmit = (values: formValuesTypes) => {};
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-6 p-8">
      <UserForm onSubmit={onSubmit} />
    </main>
  );
}
