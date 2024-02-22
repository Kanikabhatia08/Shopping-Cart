import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="max-w-[80%]">

      <div className="flex gap-[10%]">

        <div className="">
          <img src={item.image} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <h1>{item.description}</h1>
          <div className="flex justify-between mt-3">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <FaTrash />

            </div>
          </div>

        </div>


      </div>
      <hr className="my-4 bg-gray-800 p-[1px]"/>

    </div>
  );
};

export default CartItem;
