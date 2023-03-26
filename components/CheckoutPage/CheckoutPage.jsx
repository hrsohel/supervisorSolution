import React from 'react'
import CheckoutOrdersList from './CheckoutOrdersList'
import CheckoutSummary from './CheckoutSummary'

const CheckoutPage = ({data}) => {

  return (
    <div>
      <div className='max-w-5xl m-auto md:px-0 px-4'>
          <div className='grid grid-cols-12 gap-10 '>
         
            <div className='col-start-1 md:col-end-8 col-end-13'>
              <h1 className='text-4xl font-bold pt-12'>
                Checkout
              </h1>

              <h2 className='text-2xl font-semibold mb-4 pt-8'> Payment Method </h2>
              <div className='flex flex-col gap-2'>
                <table className='border border-[#b3b3b3] w-full text-sm text-left text-gray-900'>
                  <tr className='bg-white border-b  border-[#b3b3b3] px-4'>
                    <td className='w-full flex items-center gap-2 text-xl font-semibold px-4 py-1 cursor-pointer'>
                      <input className='' type="radio" id="stripe" name="payment_method" value="Stripe" />
                      <label className='w-full cursor-pointer' for="stripe">Stripe</label><br />
                    </td>
                  </tr>

                  <tr className='bg-white border-b border-[#b3b3b3]  px-4'>
                    <td className='w-full flex items-center gap-2 text-xl font-semibold px-4 py-1 cursor-pointer'>
                      <input className='' type="radio" id="paypal" name="payment_method" value="Paypal" />
                      <label className='w-full cursor-pointer' for="paypal">Paypal</label>
                    </td>
                  </tr>
                </table>
              </div>

              <h2 className='text-2xl font-semibold mb-4 mt-10'> Order </h2>
              <div>
                <CheckoutOrdersList />
              </div>
            </div>

            <div className='relative md:col-start-8 col-start-1 col-end-13  w-full md:min-h-screen min-h-fit'>
              <div className='md:pt-[120px] md:pl-12'>
                <CheckoutSummary />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CheckoutPage