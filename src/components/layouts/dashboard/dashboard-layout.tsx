"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import Footer from "./footer";
import Header from "./header";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function DashboardLayout({ children, className }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className={cn("flex-1", className)}>
        {children}
      </main>

      <Footer />
    </div>
  );
}