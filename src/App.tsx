import { useReducer, useState } from "react"
import { BiMoon, BiSun } from "react-icons/bi"
import { Cart } from "./components/Cart"
import { Nav } from "./components/Nav"
import { NewArrivalsSection } from "./components/NewArrivalsSection"
import { ShoeDetail } from "./components/ShoeDetail"
import { Sidebar } from "./components/Sidebar"
import { SHOE_LIST, type Shoe } from "./constants/index"
import { useDarkMode } from "./hooks/useDarkMode"
import { cartReducer } from "./reducers/cartReducer"

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]!);
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const addToCart = (product: Shoe, qty: number | undefined, size: number | undefined) => {
    if (qty !== undefined && size !== undefined) {
      dispatch({ type: "ADD", product, qty, size });
    }
  };

  const removeFromCart = (productId: Shoe["id"]) => {
    dispatch({ type: "REMOVE", productId });
  };

  const updateQty = (productId: Shoe["id"], qty: number) => {
    dispatch({ type: "UPDATE_QTY", productId, qty });
  };

  const updateSize = (productId: Shoe["id"], size: number) => {
    dispatch({ type: "UPDATE_SIZE", productId, size });
  };

  return (
    <div className={`${isDarkMode ? "dark:bg-night" : ""} animate-fadeIn p-10 xl:px-24`}>
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
        <Cart
          cartItems={cartItems}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
          onUpdateSize={updateSize}
        />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
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
