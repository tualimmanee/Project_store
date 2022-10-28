export const actionType = {
    SET_USER: "SET_USER",
    SET_MATERIAL_ITEMS: "SET_MATERIAL_ITEMS",
    SET_CART_SHOW: "SET_CART_SHOW",
    SET_CARTITEMS: "SET_CARTITEMS",
    SET_RNUM3: "SET_RNUM3",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionType.SET_MATERIAL_ITEMS:
            return {
                ...state,
                materialItems: action.materialItems,
            };

        case actionType.SET_CART_SHOW:
            return {
                ...state,
                cartShow: action.cartShow,
            };

        case actionType.SET_CARTITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
            };

        case actionType.SET_RNUM3:
            return {
                ...state,
                Rnum3: action.Rnum3,
            };

        default:
            return state;
    }
};

export default reducer;