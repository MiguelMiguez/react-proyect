import React, { useState, useEffect } from 'react';
import './Cart.css';
import { db } from '../../services/config';
import { collection, addDoc } from "firebase/firestore";

const Cart = ({ cartItems, clearCart, removeFromCart, sumarContador, restarContador }) => {
  const handleClearCart = () => {
    clearCart();
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const [counters, setCounters] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const sumarContadorLocal = (itemId) => {
    sumarContador(itemId);
    setCounters((prevCounters) => ({
      ...prevCounters,
      [itemId]: prevCounters[itemId] + 1,
    }));
  };

  const restarContadorLocal = (itemId) => {
    restarContador(itemId);
    if (counters[itemId] > 1) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [itemId]: prevCounters[itemId] - 1,
      }));
    }
  };

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfimacion, setEmailConfirmacion] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");
  const [tuVariableDeTotal, setTuVariableDeTotal] = useState(0);

  const calcularTotalCarrito = () => {
    return cartItems.reduce((total, item) => total + item.price * counters[item.id], 0);
  };

  useEffect(() => {
    setCounters((prevCounters) => {
      const updatedCounters = { ...prevCounters };

      cartItems.forEach((item) => {
        if (updatedCounters[item.id] === undefined) {
          updatedCounters[item.id] = 1;
        }
      });

      return updatedCounters;
    });

    setTuVariableDeTotal(calcularTotalCarrito());
  }, [cartItems]);

  const manejadorSubmit = async (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfimacion) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (email !== emailConfimacion) {
      setError("Los emails no coinciden");
      return;
    }

    const totalCarrito = calcularTotalCarrito();

    const orden = {
      items: cartItems.map((product) => ({
        id: product.id,
        nombre: product.name,
        cantidad: counters[product.id],
      })),
      total: totalCarrito,
      fecha: new Date().toISOString(), 
      nombre,
      apellido,
      telefono,
      email,
    };

    const hasUndefinedOrNull = Object.values(orden).some(value => value === undefined || value === null);

    if (hasUndefinedOrNull || orden.items.some(item => Object.values(item).some(value => value === undefined || value === null))) {
      console.error("Error: valores undefined o nulos en el objeto orden", orden);
      return;
    }

    console.log("Contenido de orden:", orden);

    try {
      const docRef = await addDoc(collection(db, "orders"), orden);
      console.log("Orden creada con ID: ", docRef.id);
      setOrdenId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden: ", error);
      setError("No se pudo crear la orden");
    }
  };

  return (
    <div className='Cart'>
      <div className='CartButton'>
        <h2 className='CartTitle'>Tu carrito</h2>
        <button onClick={handleClearCart} className='ClearCartButton'>
          Vaciar Carrito
        </button>
        <p className='ValueProduct'>Valor total del carrito: ${tuVariableDeTotal}</p>
      </div>
      {cartItems.length === 0 ? (
        <div>
          <p className='ValueProduct'>El carrito está vacío 😞</p>
        </div>
      ) : (
        <div className='CartItems'>
          {cartItems.map((item) => (
            <div key={item.id} className='CartItem'>
              <img className='ImgItem' src={item.image} alt={item.name} />
              <p className='CartInfo'>{item.description}</p>
              <p className='CartInfo'>{`$${item.price}`}</p>
              <div>
                <button onClick={() => restarContadorLocal(item.id)} className='BtnQuantity'>
                  -
                </button>
                <p>{counters[item.id]}</p>
                <button onClick={() => sumarContadorLocal(item.id)} className='BtnQuantity'>
                  +
                </button>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)} className='RemoveItemButton'>
                ❌
              </button>
            </div>
          ))}
        </div>
      )}

      <div >
        <form onSubmit={manejadorSubmit}>
          <div className='FormBuy'>
              <div className='InputForm'>
                <label htmlFor=""> Nombre </label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className='InputForm'>
                <label htmlFor=""> Apellido </label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} />
              </div>
              <div className='InputForm'>
                <label htmlFor=""> Telefono </label>
                <input type="text" onChange={(e) => setTelefono(e.target.value)} />
              </div>
              <div className='InputForm'>
                <label htmlFor=""> Email </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='InputForm'>
                <label htmlFor=""> Email Confirmación </label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
              </div>
          </div>
          <div>
            {error && <p style={{ color: "red" }}> {error} </p>}
            <button className='OrderBtn' type="submit"> Finalizar Orden </button>
            {ordenId && (
              <strong>¡Gracias por su compra! Tu número de orden es: {ordenId} </strong>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
