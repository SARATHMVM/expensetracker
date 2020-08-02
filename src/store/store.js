import update from 'immutability-helper';

const initialState = {
    startDate: new Date(),
    tripData: [
        {
        name : "Food",
        value : ["Groceries", "Veggies", "Milk"]
        },
        {
        name : "Living",
        value : ["cottage", "dulux room", "single bed"]
        },
        {
        name : "Clothing",
        value: ["Ethnic", "sports", "causuals"]
        }
        ],
    selectCategory: "",
    selectSubCategory: "",
    priceValue: "",
    mockdbValue: []
}

const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case "SETDATE":
            return {
                    ...state,
                    startDate: action.value
                }
        case "UPDATECATEGORY":
            return{
                ...state,
                selectCategory: action.value
            }
        case "UPDATESUBCATEGORY":
            return{
                ...state,
                selectSubCategory: action.value
            }
        case "UPDATEPRICE":
            return{
                ...state,
                priceValue: action.value
            }
        case "UPDATEDB":
            return {
                ...state,
                mockdbValue: [
                    action.value,
                    ...state.mockdbValue
                ]
            }
           /* return update(...state,
                {$push: action.value}) */
           /*  return [
                ...state.slice(0, action.index),
                action.value,
                ...state.slice(action.index)
                ] */
            default: 
            return state;
    }
}
export default reducer

