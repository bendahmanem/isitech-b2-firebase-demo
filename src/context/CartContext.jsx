import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])

// Composant
export default function CartContextProvider({children}) {

    // remplacer ce hook par le hook useReducer
    const [myCart, setMyCart] = useState([])

    return <CartContext.Provider value={{myCart, setMyCart}}>
            {children}
    </CartContext.Provider>
}

