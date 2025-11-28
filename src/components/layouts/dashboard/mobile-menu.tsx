'use client'

import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { NavGroup } from "./data/nav.type";
import MainMenu from "./main-menu";

type Props = {
  navGroups: NavGroup[];
};

export default function MobileMenu({ navGroups }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="shrink-0 md:hidden bg-white/80 backdrop-blur-sm border-sage-200 hover:bg-sage-50 text-sage-700 hover:text-sage-800"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="isolate p-0 bg-white">
        <MainMenu
          className="relative -z-10"
          onClose={() => setOpen(false)}
          navGroups={navGroups}
        />
      </SheetContent>
    </Sheet>
  );
}