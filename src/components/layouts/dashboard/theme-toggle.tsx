"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            className="glass-card rounded-full w-10 h-10 hover:emerald-glass-strong transition-all duration-300"
          >
            {theme === "light" ? (
              <motion.div
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="h-[1.1rem] w-[1.1rem] text-amber-500" />
              </motion.div>
            ) : theme === "dark" ? (
              <motion.div
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: -90, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="h-[1.1rem] w-[1.1rem] text-blue-400" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Laptop className="h-[1.1rem] w-[1.1rem] text-emerald-500" />
              </motion.div>
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="glass-card border-emerald-200/20 dark:border-emerald-400/20"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 focus:bg-emerald-50/50 dark:focus:bg-emerald-900/20"
        >
          <Sun className="mr-2 h-4 w-4 text-amber-500" />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 focus:bg-emerald-50/50 dark:focus:bg-emerald-900/20"
        >
          <Moon className="mr-2 h-4 w-4 text-blue-400" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 focus:bg-emerald-50/50 dark:focus:bg-emerald-900/20"
        >
          <Laptop className="mr-2 h-4 w-4 text-emerald-500" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
