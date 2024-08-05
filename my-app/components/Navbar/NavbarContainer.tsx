import { Navbar } from "./Navbar";
import type { MenuItem } from "./Navbar";

const menuItems: MenuItem[] = [
    { menu: "Home", url: "/", sectionId: "home" },
    { menu: "About", url: "/", sectionId: "about" },
    { menu: "Courses", url: "/", sectionId: "courses" },
];

function NavbarContainer() {
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return <Navbar items={menuItems} scrollToSection={scrollToSection} />;
}

export { NavbarContainer };
