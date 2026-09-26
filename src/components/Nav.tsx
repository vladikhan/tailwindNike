import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { TbShoppingBag } from "react-icons/tb"
import NikeLogo from "../assets/nike-logo.svg?react"

interface Route {
  label: string;
  isActive?: boolean;
  lightText?: boolean;
}

const ROUTES: Route[] = [
  { label: "Home", isActive: true },
  { label: "About" },
  { label: "Services" },
  { label: "Pricing", lightText: true },
  { label: "Contact", lightText: true },
];

interface NavProps {
  onClickShoppingBtn: () => void;
}

export function Nav({ onClickShoppingBtn }: NavProps) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>

      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        aria-label="Toggle menu"
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div className={`${!isMobileMenuShown && "hidden"} w-full lg:block lg:w-auto`}>
        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent lg:dark:text-white">
          {ROUTES.map((route) => (
            <li
              key={route.label}
              className={`cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${
                route.isActive
                  ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                  : "hover:bg-gray-100"
              } ${route.lightText ? "lg:text-white" : ""}`}
            >
              <a href="#" onClick={(e) => e.preventDefault()}>
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart button */}
      <button
        onClick={onClickShoppingBtn}
        aria-label="Open cart"
        className="btn-press-anim fixed bottom-4 left-4 sm:bottom-6 sm:left-6 lg:static lg:mr-8 lg:bottom-auto lg:left-auto"
      >
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </button>
    </nav>
  );
}
