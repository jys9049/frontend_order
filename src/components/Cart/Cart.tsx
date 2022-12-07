import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { cartStore, cartType, orderStore, orderType } from '../../store/store';
import styled from './Cart.module.scss'
import CartList from './CartList';

const Cart = () => {

  const [cartList, setCartList] = useRecoilState<cartType[]>(cartStore)
  const [orderList, setOrderList] = useRecoilState<orderType[]>(orderStore)
  const [totalPrice, setTotalPrice] = useState(0)


  // 계산하기 버튼 클릭 시 주문내역에 카트에 있는 아이템들과 총 결제금액 추가
  const handleClick = () => {
    const item = { orderProduct: cartList, totalPrice: totalPrice }
    setOrderList([...orderList, item])
    setCartList([])
  }

  useEffect(() => {
    // 카트 리스트 안에 있는 아이템 총 합 계산
    if (cartList.length !== 0) {
      let price = cartList.map(item => (item.product.price * item.count))
      setTotalPrice(price.reduce((acc, cur) => acc + cur))
    } else {
      setTotalPrice(0)
    }

    console.log(cartList)
  }, [cartList])

  return (
    <div className={styled.cartContainer}>
      <div className={styled.orderCinfirmArea}>
        <div className={styled.titleArea}>
          <h1 className={styled.cartTitle}>
            주문 확인
          </h1>
        </div>
        <div className={styled.cartListArea}>
          {cartList.length === 0 ? <div className={styled.noCart}>주문 내역이 없습니다.</div> :
            <CartList cartList={cartList} setCartList={setCartList} />
          }
        </div>
        <div className={styled.totalPriceArea}>
          <p>총 금액 : {totalPrice.toLocaleString()}</p>
        </div>
        <div>
          <button className={cartList.length === 0 ? styled.emptyList : styled.paymentBtn} disabled={cartList.length === 0} onClick={handleClick}>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;