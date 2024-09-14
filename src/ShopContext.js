import React, { createContext } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const discountData = {
    1: 15, // £15 discount for 1 item
    2: 20, // £20 discount for 2 items
    3: 25, // £25 discount for 3 items
    4: 25, // £25 discount for 4 items
    5: 30, // £30 discount for 5 items
  };

  return (
    <ShopContext.Provider value={discountData}>{children}</ShopContext.Provider>
  );
};
