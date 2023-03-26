import React from 'react'
import formatPrice from '../../utils/formatPrice'

const CheckoutOrderItem = ({course}) => {
  const formattedPrice = formatPrice(course.price)
  return (
    <div>
      <div className="flex flex-row space-x-4 py-4">
        <div className="w-12 h-12 bg-violet relative overflow-hidden cursor-pointer z-0 border border-gray-500">
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
          <span className="font-medium capitalize text-sm">{course.title}</span>
        </div>

        <div className="flex flex-col justify-between space-y-2 text-base items-center ">
          <span className='font-medium'>${formattedPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutOrderItem