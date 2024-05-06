import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const initialState={
    cartitem:[],
    amount:0,
    total:0
}

const CartSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{
       additem(state,action){
          state.amount=state.amount+1;
          let FilterCartitem=state.cartitem.find(item=>item?.card?.info?.id===action?.payload?.card?.info?.id);

          FilterCartitem? (FilterCartitem.amount = FilterCartitem.amount+1):state.cartitem.push({...action.payload, amount:1})
         // state.total=state.amount * (FilterCartitem?.card?.info?.price/100 || 259)
         
       }
       ,
       increase(state,action){
            state.amount+=1
            let Findindex=state.cartitem.findIndex(item=>item?.card?.info?.id===action?.payload?.card?.info?.id);
            state.cartitem[Findindex].amount==15 ? state.cartitem[Findindex].amount=15 :state.cartitem[Findindex].amount +=1
           // state.total =state.amount*state.cartitem[Findindex]?.card?.info?.price/100 || 259 
           let total=0
           total=state.cartitem[Findindex].amount * state.cartitem?.card?.info?.price/100;


       },
       decrease(state,action){
                state.amount--
                let Findindex=state.cartitem.findIndex(item=>item?.card?.info?.id===action?.payload?.card?.info?.id);

                state.cartitem[Findindex].amount==0 ? state.cartitem[Findindex].amount=0 :state.cartitem[Findindex].amount-=1
                state.total =state.amount*state.cartitem[Findindex].card?.info?.price/100;

                if( state.cartitem[Findindex].amount==0 &&  state.cartitem[Findindex]?.card?.info?.id===action?.payload?.card?.info?.id){

                    state.cartitem=state.cartitem.filter(item=>item?.card?.info?.id != action?.payload?.card?.info?.id)
                    


                }
               
       }
       ,
       clearitem:(state)=>{
           state.cartitem.length=0;
            state.amount=0;
            state.total=0
       },
       totalfuc:(state)=>{
             let total=0
             state.cartitem.forEach(item=>
                  total+=item.amount *item?.card?.info?.price/100       

             )
            state.total=total;
       }
    }
})
export const {additem,clearitem,increase,decrease,totalfuc}=CartSlice.actions
export default CartSlice.reducer;