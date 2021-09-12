import { useContext } from "react";
import Modal from "../Ui/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

const Cart=(props)=>{
  const cartCtx =useContext(CartContext);
  const totalAmount=cartCtx.totalAmount.toFixed(2);
  const hasItems=cartCtx.items.length >0;
   const cartItemRemoveHandler=(id)=>{};

   const cartItemAddHandler=(item) => {
     cartCtx.addItem(item);
   };


const cartitems= (
  <ul className={classes['cart-items']}>
{cartCtx.items.map((item) => (
<CartItem
  key={item.id}
  name={item.name} 
  amount={item.amount}
   price={item.price}
  onRemove={cartItemRemoveHandler.bind(null,item.id)} 

   onAdd={cartItemAddHandler.bind(null,item)} 
   />




))}
</ul>
  
  
   

);
    return (
    <Modal>
     {cartitems}
    <div className={classes.total}>
    <span >Total amount</span>
    <span >{totalAmount}</span>
    <span></span>

      </div>
      <div className={classes.actions}>
       <button className={classes['button--alt']}  onClick={props.onClose}>close</button>
     {hasItems && <button  className={classes.button}>order</button>}

      </div>

    </Modal>

    )
} 
  export default Cart;
 

