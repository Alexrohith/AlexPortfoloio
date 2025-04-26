
import { Activity, Component, HomeIcon, Mail, Package, ScrollText, SunMoon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { useTheme } from "@/components/ThemeProvider";

const data = [
  {
    title: "Home",
    icon: <HomeIcon className="h-full w-full" />,
    href: "/",
  },
  {
    title: "About",
    icon: <Component className="h-full w-full" />,
    href: "/about",
  },
  {
    title: "Skills",
    icon: <Package className="h-full w-full" />,
    href: "/skills",
  },
  {
    title: "Projects",
    icon: <Activity className="h-full w-full" />,
    href: "#projects",
  },
  {
    title: "Timeline",
    icon: <ScrollText className="h-full w-full" />,
    href: "#timeline",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full" />,
    href: "#contact",
  },
];

export function NavigationDock() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // If we're not on the home page and trying to access a section, go home first
      if (window.location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <div key={idx} onClick={() => handleNavigation(item.href)}>
            <DockItem className="group relative aspect-square rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 dark:bg-black/20 dark:hover:bg-black/40">
              <DockLabel>{item.title}</DockLabel>
              <DockIcon className="text-neutral-600 dark:text-neutral-300">
                {item.icon}
              </DockIcon>
            </DockItem>
          </div>
        ))}
        <DockItem 
          className="group relative aspect-square rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 dark:bg-black/20 dark:hover:bg-black/40 cursor-pointer" 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <DockLabel>Theme</DockLabel>
          <DockIcon className="text-neutral-600 dark:text-neutral-300">
            <SunMoon className="h-full w-full" />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}
