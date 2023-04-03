import React from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cartSlice'
const CardItems = ({ id, cover, name, price, quantity, totalPrice }) => {

  const dispatch = useDispatch()

  const incCartItems = () => {
    dispatch(cartActions.addToCart({id, name, price, cover}))
  }

  const descCartItems = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img">
            <img src={cover} alt='' />
            <button className='remove flexCenter'>
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor=''>Unit Price ${price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className="plus" onClick={incCartItems}>
                  <AiOutlinePlus />
                </button>
                <button className="num">
                  1{quantity}
                </button>
                <button className="minus" onClick={descCartItems}>
                  <AiOutlineMinus />
                </button>
              </div>
              <div className="priceTitle">
                ${totalPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardItems