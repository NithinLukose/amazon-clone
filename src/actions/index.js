export const ADD_TO_BASKET = "ADD_TO_BASKET"
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET"
export const DELETE_FROM_BASKET = "DELETE_FROM_BASKET"
export const SET_USER = "SET_USER"


export const addToBasket = (data) => ({
    type:ADD_TO_BASKET,
    payload:data
})

export const removeFromBasket = (data) => ({
    type:REMOVE_FROM_BASKET,
    payload:data
})

export const deleteItemFromBasket = (data) => ({
    type:DELETE_FROM_BASKET,
    payload:data
})

export const setUser = (data) => ({
    type:SET_USER,
    payload:data
})