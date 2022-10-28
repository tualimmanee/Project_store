import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  materialItems: null,
  cartShow: false,
  cartItems: cartInfo,
  Rnum3: null,
};
