import { useCartContext } from './CartContextProvider';

const useCartTotal = () => {
  const { total, setTotal } = useCartContext();

  const updateCartTotal = (products) => {
    const productQuantity = products.reduce(
      (sum, product) => {
        sum += product.quantity;
        return sum;
      },
      0
    );

    const subtotal = products.reduce((sum, product) => {
      if(productQuantity >= 1 && productQuantity < 5) {
        sum += product.price * product.quantity;
      } else if(productQuantity >= 5 && productQuantity < 10) {
        sum += 25 * product.quantity;
      } else if(productQuantity >= 10 && productQuantity < 25) {
        sum += 19 * product.quantity;
      } else if(productQuantity >= 25 && productQuantity < 50) {
        sum += 17 * product.quantity;
      } else if(productQuantity >= 50) {
        sum += 15 * product.quantity;
      }
      return sum;
    }, 0);

    const totalPrice = products.reduce((sum, product) => {
      sum += product.price * product.quantity;
      return sum
    }, 0)

    const installments = products.reduce(
      (greater, product) => {
        greater =
          product.installments > greater ? product.installments : greater;
        return greater;
      },
      0
    );

    const total = {
      productQuantity,
      installments,
      totalPrice,
      subtotal,
      currencyId: 'USD',
      currencyFormat: '$',
    };

    setTotal(total);
  };

  return {
    total,
    updateCartTotal,
  };
};

export default useCartTotal;
