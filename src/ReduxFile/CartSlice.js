import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const initialState={
    cartitem:[],
    amount:0,
    total:[]
}

const CartSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{
       additem(state,action){
          state.amount=state.amount+1;
          let FilterCartitem=state.cartitem.find(item=>item?.card?.info?.id===action?.payload?.card?.info?.id);

          FilterCartitem? (FilterCartitem.amount = FilterCartitem.amount+1):state.cartitem.push({...action.payload, amount:1})
         
       }
       ,
       increase(state,action){
            let Findindex=state.cartitem.findIndex(item=>item?.card?.info?.id===action?.payload?.card?.info?.id);
            state.cartitem[Findindex].amount==15? state.cartitem[Findindex].amount=15 :state.cartitem[Findindex].amount+=1


       },
       decrease(state,action){
            
                let Findindex=state.cartitem.findIndex(item=>item?.card?.info?.id===action?.payload?.card?.info?.id);

                state.cartitem[Findindex].amount==0? state.cartitem[Findindex].amount=0 :state.cartitem[Findindex].amount-=1
                state.total=state.amount*state.cartitem[Findindex].card?.info?.price/100

                if( state.cartitem[Findindex].amount==0 &&  state.cartitem[Findindex]?.card?.info?.id===action?.payload?.card?.info?.id){

                    state.cartitem=state.cartitem.filter(item=>item?.card?.info?.id != action?.payload?.card?.info?.id)
                    state.amount--
                }
               
       }
       ,
       clearitem:(state)=>{
           state.cartitem.length=0;
            state.amount=0;
       }
    }
})
export const {additem,clearitem,increase,decrease}=CartSlice.actions
export default CartSlice.reducer;