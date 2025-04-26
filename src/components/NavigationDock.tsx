
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from "lucide-react";
import { Link } from "react-router-dom";
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

  return (
    <div className="fixed bottom-4 left-1/2 max-w-full -translate-x-1/2 z-50">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <Link key={idx} to={item.href}>
            <DockItem className="group relative">
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
        <DockItem 
          className="group relative cursor-pointer" 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <DockLabel>Theme</DockLabel>
          <DockIcon>
            <SunMoon className="h-full w-full" />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}
