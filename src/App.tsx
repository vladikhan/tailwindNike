import { useEffect, useState } from "react"
import { BiMoon, BiSun } from "react-icons/bi"
import { Cart } from "./components/Cart"
import { Nav } from "./components/Nav"
import { NewArrivalsSection } from "./components/NewArrivalsSection"
import { ShoeDetail } from "./components/ShoeDetail"
import { Sidebar } from "./components/Sidebar"
import { SHOE_LIST, type Shoe } from "./constants/index"

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState<Shoe>(SHOE_LIST[0]!);
  const [cartItems, setCartItems] = useState<{ product: Shoe; qty: number | null; size: number | null }[]>([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle(
      "dark",
      !window.document.documentElement.classList.contains("dark")
    );
  };

  const addToCart = (product: Shoe, qty: number | null, size: number | null) => {
    if (qty && size) {
      setCartItems((prev) => {
        const updatedCartItems = [...prev];
        const existingItemIndex = prev.findIndex(
          (item) => item.product.id === product.id,
        );
  
        if (existingItemIndex > -1) {
          const itemToUpdate = updatedCartItems[existingItemIndex];
          if (itemToUpdate) {
            itemToUpdate.qty = qty;
            itemToUpdate.size = size;
          }
        } else {
          updatedCartItems.push({ product, qty, size });
        }
  
        return updatedCartItems;
      });
    }
  };
  return (
    <div className="dark:bg-night animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection
        items={SHOE_LIST}
        onClickCard={setCurrentShoe}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} />
      </Sidebar>
      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}
