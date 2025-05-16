import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, updateQuantity, clearCart } from "@/store/cartSlice";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const getPriceNumber = (price: string) =>
    parseInt(price.replace(/\D/g, ""), 10);

  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + getPriceNumber(item.price.toLocaleString()) * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-2xl mx-auto ">
      <Link to="/">
        <Button className="mb-6">Вернуться на главную</Button>
      </Link>
      <h2 className="text-2xl font-semibold mb-4">Корзина</h2>

      {cart.length === 0 ? (
        <p className="text-muted-foreground">Корзина пуста.</p>
      ) : (
        <div className="space-y-4 ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-accent p-4 rounded-md transition-all hover:scale-[1.03]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="font-medium">
                    {item.price.toLocaleString() + " сум"}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              <Button
                variant="destructive"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Удалить
              </Button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-semibold">
              Всего товаров: {totalItems}
            </span>
            <Button variant="secondary" onClick={() => dispatch(clearCart())} className="bg-red-950">
              Очистить корзину
            </Button>
          </div>
          <p className="font-semibold">Общая цена: {totalPrice}</p>
          <Button className="mb-16">Заказать</Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
