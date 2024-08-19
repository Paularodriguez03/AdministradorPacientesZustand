import React from "react";

export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center bg-red-600 my-4 text-white">{children}</p>
  );
}
