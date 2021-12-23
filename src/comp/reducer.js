export const initialState = {
    basket: [],
    search_result: [],
};
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            const { id, quantity } = action.item;

            let alreadyInCart = false

            state.basket.forEach(x => {
                if (x.id == id) {
                    alreadyInCart = true
                }
            })
            if (alreadyInCart) {
                alert('product is')
                return {
                    ...state,
                    basket: [...state.basket,]
                }
            } else {
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                }
            }


        case "REMOVE_TO_BASKET":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.item.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.log('uckkkk')
            }
            return {
                ...state,
                basket: newBasket,
            }


        case "ADD_QUANTITY":
            return {
                ...state,
                basket: state.basket.map(product =>
                    product.id === action.item.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product,
                ),
            };


        case "SUB_QUANTITY":
            return {
                ...state,
                basket: state.basket.map(product =>
                    product.id === action.item.id
                        ? {
                            ...product,
                            quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                        }
                        : product,
                ),
            };
            case "SEARCH_BAR_RESULT":
                return{
                    ...state,
                    search_result: [...state.search_result, action.item]


                }
        default:
            return state;
    }
};
export default reducer;
