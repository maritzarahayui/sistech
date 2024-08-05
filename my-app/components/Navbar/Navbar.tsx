import Link from "next/link";

type MenuItem = {
  menu: string;
  url: string;
  sectionId?: string;
};

type NavbarProps = {
  items: MenuItem[];
  scrollToSection?: (id: string) => void;
};

function Navbar({ items, scrollToSection }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center h-16">
                <div className="flex items-center">
                    <div className="flex space-x-8">
                        {items.map((item) => (
                            <a
                            key={item.menu}
                            href={item.sectionId ? `#${item.sectionId}` : item.url}
                            onClick={(e) => {
                                e.preventDefault();
                                if (item.sectionId && scrollToSection) {
                                scrollToSection(item.sectionId);
                                }
                            }}
                            className="text-gray-900 hover:text-gray-700"
                            >
                            {item.menu}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
}

export type { MenuItem };
export { Navbar };
