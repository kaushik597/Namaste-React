import { useDispatch, useSelector } from "react-redux"
import Itemlist from "./Itemlist"
import { clearCart } from "../utils/cartSlice"
const Cart=()=>{
    const dispatch = useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    }
    const cartData= useSelector((store)=>{return store.cart.items})
    console.log(cartData, "<----");
return (
    <div className="text-center p-4 m-4 font-bold">
        <h1 className="">Cart</h1>
        <div className="w-6/12 m-auto">
        {cartData.length!=0 ? <>
            <Itemlist list={cartData} />
        <button className="m-2 p-2 border border-black rounded-md bg-red-700 text-white " onClick={handleClear}>Clear cart</button>

        </>:<h1 className="text-red">Please order something and come here 😋</h1>}

        </div>
    </div>
)
}
export default Cart;