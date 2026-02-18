import stanLogo from "/stan.svg";
import "./Header.css";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface HeaderProps {
  navItems?: NavItem[];
}

export default function Header({ navItems = [] }: HeaderProps) {
  const defaultNavItems: NavItem[] = [
    { label: "Home", href: "#", active: true },
    { label: "TV Shows", href: "#" },
    { label: "Movies", href: "#" },
  ];

  const items = navItems.length > 0 ? navItems : defaultNavItems;

  return (
    <header className="topbar">
      <a href="#" target="_blank" rel="noreferrer">
        <img src={stanLogo} className="logo" alt="Stan logo" />
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {items.map((item, idx) => (
          <a
            key={item.label}
            className={`nav-item ${idx === 0 ? " active" : ""}`}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
