import React from 'react'
import formatPrice from '../../utils/formatPrice'
import useCartTotal from '../context/cart-context/useCartTotal'

const CheckoutSummary = () => {
  const {total} = useCartTotal()

  const formattedSubtotal = formatPrice(total.subtotal);
  const formatTotal = formatPrice(total.totalPrice)
  
  const discountPrice =  formatTotal - formattedSubtotal
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'> Summary </h2>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <span className='font-medium text-base'>Original Price: </span>
          <span className='font-medium text-base'>${formatTotal}</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='font-medium text-base'>Discounts: </span>
          <span className='font-medium text-base'>-${discountPrice}</span>
        </div>

        <hr className='mt-2 mb-3' />

        <div className='flex items-center justify-between'>
          <span className='font-bold text-lg'>Total: </span>
          <span className='font-bold text-lg'>${formattedSubtotal}</span>
        </div>

      </div>

      <div className='mt-5 flex flex-col w-full pb-4'>
        <p className='text-gray-600 text-sm font-normal'>By completing your purchase you agree to these Terms of Service.</p>
        <button className='active:scale-[.98] transition h-14 mt-2 flex items-center justify-center bg-[#0070f4] font-semibold text-[18px]  text-white w-full outline-none'>
            Proceed
        </button>
      </div>
    </div>
  )
}

export default CheckoutSummary