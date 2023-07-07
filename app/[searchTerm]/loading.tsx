import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <main className="bg-slate-200 mx-auto max-w-lg p-1 min-h-screen">
      <h2 className="m-4 text-2xl font-bold">Loading...</h2>
    </main>
  );
}
