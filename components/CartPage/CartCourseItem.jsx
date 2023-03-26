import React from 'react'
import formatPrice from '../../utils/formatPrice';
import { useCart } from '../context/cart-context';

const CartCourseItem = ({course}) => {
  const { id, title, instructor,image, description1, mode, modeIcon, module, moduleIcon1, student, studentIcon, rating, price, priceIcon, quantity } = course;
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } = useCart();
  const formattedPrice = formatPrice(price);

  const handleIncreaseQuantity = () => {
    increaseProductQuantity(course);
  }

  const handleDecreaseQuantity = () => {
    decreaseProductQuantity(course)
  }

  const handleRemoveFromCart = () => {
    removeProduct(course)
  }

  return (
    <li className="flex flex-col pb-3">
      <div className="flex flex-row space-x-4 py-4">
        <div className="w-16 h-16 bg-violet relative overflow-hidden cursor-pointer z-0 border border-gray-500">
          <span
            className='overflow-hidden w-full h-full'
          >
            <img
              alt="Course Image"
              src={'/images/imgCourse01.png'}
              decoding="async"
              data-nimg="intrinsic"
              className="w-full h-full object-cover"
            />
          </span>
        </div>

        <div className="flex-1 flex flex-col text-base">
          <span className="font-medium capitalize text-[18px]">{title}</span>

          <div className="flex items-center">
            <div className="text-sm font-semibold text-gray-600 inline-flex items-center justify-center">
              By {instructor}
            </div>
            
          </div>
          <div className="flex items-center">
            <div className="text-sm font-semibold text-gray-600 inline-flex items-center justify-center">
              Module: {module}
            </div>
            
          </div>
          
        </div>

        <div className="flex flex-col justify-between space-y-2 text-base items-center ">
          <span className='font-semibold'>${formattedPrice}</span>
        </div>
      </div>
      <div className="flex flex-row h-9">
        <button
          onClick={handleRemoveFromCart}
          className="flex w-12 items-center justify-center border border-[#eaeaea] p-1 text-[#333]  transition"
          >
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <label className="w-full border-accent-2 border ml-2">
          <input
            className="pointer-events-auto w-full h-full select-none bg-transparent px-4 outline-none"
            type="number"
            min={0}
            readOnly
            value={quantity}
          />
        </label>
        <button
          onClick={handleDecreaseQuantity}
          type="button"
          className="flex w-12 items-center justify-center border border-[#eaeaea] p-1 text-[#333]  transition disabled:cursor-not-allowed"
          style={{ marginLeft: "-1px" }}
          disabled={quantity < 2}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={handleIncreaseQuantity}
          type="button"
          className="flex w-12 items-center justify-center border border-[#eaeaea] p-1 text-[#333]  transition"
          style={{ marginLeft: "-1px" }}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5V19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </li>
  )
}

export default CartCourseItem