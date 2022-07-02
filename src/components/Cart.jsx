import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import Button from "../components/Button";

const ProductCart = ({ image, name, category, price }) => {
  return (
    <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
      <img className="rounded-lg h-80 w-24" src={image} alt="" />
      <div>
        <p className="font-semibold ">{name}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
          {category}
        </p>
        <div className="flex gap-4 mt-2 items-center">
          <p className="font-semibold text-lg">{price}</p>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { currentColor, handleClose } = useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={() => handleClose()}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          {cartData.map((item, index) => (
            <ProductCart
              key={index}
              image={item.image}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
        <div className="mt-3 mb-3 p-4 ml-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5 p-4 ml-4">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
