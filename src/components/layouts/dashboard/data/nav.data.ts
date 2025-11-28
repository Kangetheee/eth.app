import { NavGroup } from "./nav.type";

export const navGroups: NavGroup[] = [
  {
    name: "Navigation",
    items: [
      {
        name: "Home",
        icon: "Home",
        href: "/",
      },
      {
        name: "About Us",
        icon: "Heart",
        href: "/about",
      },
      {
        name: "Services",
        icon: "Sparkles",
        href: "/services",
      },
      {
        name: "Products",
        icon: "Package",
        href: "/products",
      },
      {
        name: "Contact",
        icon: "MessageCircle",
        href: "/contact",
      },
    ],
  },
];