import { ReactNode } from "react";

import LandingLayout from "@/components/layouts/dashboard/dashboard-layout";

type Props = Readonly<{ children: ReactNode }>;

export default function Layout({ children }: Props) {
  return (
    <LandingLayout>
      {children}
    </LandingLayout>
  );
}