import React from 'react';
import CartItem from './CartItem';
import styled from './Cart.module.scss'
import { cartType } from '../../store/store';
import { SetterOrUpdater } from 'recoil';

interface types {
  cartList: cartType[],
  setCartList: SetterOrUpdater<cartType[]>
}

const CartList = ({ cartList, setCartList }: types) => {

  // 카트리스트에 있는 아이템 증가, 감소 기능
  const handleIncreaseHanlder = (id: number, operations: string) => {
    setCartList(item => {
      return item.map(obj => {
        if (obj.product.id === id) {
          if (operations === 'plus') {
            return { ...obj, 'count': obj.count + 1 }
          } else {
            return { ...obj, 'count': obj.count - 1 }
          }
        } else {
          return { ...obj };
        }
      })
    })
  }

  // 선택한 아이템 리스트에서 삭제
  const handleDeleteItem = (id: number) => {
    setCartList(cartList.filter(item => item.product.id !== id))
  }

  return (
    <div className={styled.cartList}>
      {cartList.map(cartItem => (
        <CartItem cartItem={cartItem} key={cartItem.product.id} handleIncreaseHanlder={handleIncreaseHanlder} handleDeleteItem={handleDeleteItem} />
      ))}
    </div>
  );
};

export default CartList;