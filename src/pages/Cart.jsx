import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  //when the cart changes, calculates the total amount of the cart
  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="max-w-6xl justify-center mx-auto my-14">
  {
    cart.length > 0  ? 
    (<div className="flex">
      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col gap-y-[50%] ">

        <div>
          <div className="text-green-600 font-semibold text-2xl">YOUR CART</div>
          <div className="text-green-600 font-bold text-5xl">SUMMARY</div>
          <p className="text-lg font-semibold">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold">Total Amount: ${totalAmount}</p>
          <button className="bg-green-600 my-2 text-white text-xl font-semibold py-2 w-full rounded-md">
            CheckOut Now
          </button>
        </div>

      </div>
    </div>) 
    : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
