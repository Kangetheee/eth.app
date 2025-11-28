'use client'

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { HTMLAttributes, useState } from "react";

import { 
  ChevronDown, 
  Home, 
  Heart, 
  Users, 
  Mail, 
  Phone, 
  ShoppingBag, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  MessageCircle, 
  Info, 
  User, 
  Package, 
  Settings,
  Leaf
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Collapse from "@/components/ui/collapse";
import { cn } from "@/lib/utils";

import { NavIcon, NavItem as NavItemType } from "./data/nav.type";

const IconObject: Record<NavIcon, LucideIcon> = {
  Home,
  Heart,
  Users,
  Mail,
  Phone,
  ShoppingBag,
  Calendar,
  BookOpen,
  Sparkles,
  MessageCircle,
  Info,
  User,
  Package,
  Settings,
  Leaf,
};

type Props = {
  onClose?: () => void;
  navItem: NavItemType;
};

export default function NavItem({ navItem, onClose }: Props) {
  const { name, icon, href, subitems } = navItem;
  const Icon = IconObject[icon];

  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen((state) => !state);
  const params = useParams();
  const pathname = usePathname();
  const link =
    !subitems && href ? (params.id ? `${href}/${params.id}` : href) : undefined;
  const isActive = link
    ? pathname === link
    : subitems && subitems.length > 0
      ? subitems?.some((subitem) => pathname.startsWith(subitem.href))
      : false;

  const titleClassName: HTMLAttributes<HTMLDivElement>["className"] = cn(
    "group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    "hover:bg-sage-100 hover:text-sage-800 active:bg-sage-200 text-sage-700",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500",
    isActive &&
      "bg-sage-600 text-white hover:bg-sage-700 hover:text-white"
  );

  return (
    <button
      className="w-full"
      onClick={subitems && subitems.length > 0 ? onToggle : undefined}
      type="button"
      tabIndex={subitems && subitems.length > 0 ? 0 : undefined}
    >
      {!subitems && href ? (
        <Link
          href={href}
          className={cn(titleClassName, "no-underline")}
          onClick={() => onClose?.()}
        >
          <Icon className="mr-2 size-4 transition-colors" />
          <span className="truncate">{name}</span>
        </Link>
      ) : (
        <div className={titleClassName}>
          <Icon className="mr-2 size-4 transition-colors" />
          <span className="truncate">{name}</span>
          {subitems && subitems.length > 0 && (
            <ChevronDown
              className={cn(
                "ml-auto h-4 w-4 shrink-0 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          )}
        </div>
      )}

      <Collapse in={isOpen} animateOpacity style={{ marginTop: 0 }}>
        <div className="relative mt-1 space-y-1 px-6">
          {/* Vertical line connector */}
          <div className="absolute bottom-4 left-3 top-0 w-px bg-sage-300" />

          {subitems?.map((item) => (
            <Link
              className={cn(
                "flex items-center gap-2 rounded-md py-2 pl-0 text-sm text-sage-600 transition-colors",
                "hover:text-sage-800 no-underline",
                pathname === item.href && "font-medium text-sage-800"
              )}
              href={item.href}
              key={item.name}
              onClick={() => onClose?.()}
            >
              <div
                className={cn(
                  "relative h-1.5 w-1.5 rounded-full bg-sage-400",
                  pathname === item.href && "bg-sage-600"
                )}
              />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </Collapse>
    </button>
  );
}