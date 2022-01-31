// import React, { createContext, useContext } from "react";
// import { useProductReducer } from "./reducers";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: "",
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

// But in short, what we did here was create our own functionality to manage state 
// at a global level and make it available to all of our other components through a special <Provider> component.
