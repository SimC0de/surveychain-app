import Link from "next/link";
import WalletBase from "../feature/WalletBase";

export default function Header() {
  const navBtns = [
    {
      text: "Browse Survey",
      id: "survey-nav",
      href: "/",
    },
    {
      text: "Create Survey",
      id: "create-nav",
      href: "/",
    },
    {
      text: "Dashboard",
      id: "dash-nav",
      href: "/",
    },
  ];
  return (
    <>
      <header className="w-full flex items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <img src="next.svg" />
          <h1>Title Website</h1>
        </div>
        <nav>
          <ul className="flex gap-5 items-center">
            {navBtns.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.href}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
            <WalletBase/>
        </div>
      </header>
    </>
  );
}
