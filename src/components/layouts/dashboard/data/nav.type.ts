import { Route } from "next";

export type NavIcon =
  | "Leaf"
  | "Heart"
  | "Users"
  | "Mail"
  | "Phone"
  | "ShoppingBag"
  | "Calendar"
  | "BookOpen"
  | "Sparkles"
  | "MessageCircle"
  | "Info"
  | "Home"
  | "User"
  | "Package"
  | "Settings";

export type NavSubItem = {
  name: string;
  href: Route;
};

export type NavItem = {
  name: string;
  icon: NavIcon;
  href?: Route;
  subitems?: NavSubItem[];
  isIncomplete?: boolean;
};

export type NavGroup = {
  name: string;
  items: NavItem[];
};