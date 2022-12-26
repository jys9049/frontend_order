import React, { useState } from 'react';
import styled from './Menu.module.scss'
import { AiOutlineDown } from 'react-icons/ai';
import { menuItemTypes } from '../../types/types';


interface types {
  item: menuItemTypes;
  category: string;
  handleOrderClick: (category: string, id: number) => void
}

const MenuItem = ({ item, category, handleOrderClick }: types) => {

  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className={styled.menuItem}>
        <div className={styled.menuImg}>
          <img src={require('../../assets/americano.jpg')} alt="이미지" />
        </div>
        <div className={styled.iteminfoWrap}>
          <span className={styled.itemName}>{item.menuName}</span>
          <span className={showDetail ? `${styled.itemdesc} ${styled.showDetail}` : styled.itemDesc}>{item.description}</span>
          <span className={styled.itemPrice}>{item.price.toLocaleString()}원</span>
          {showDetail &&
            <button className={styled.orderBtn} onClick={() => handleOrderClick(category, item.menuId)}>주문하기</button>
            // <button className={styled.orderBtn}>주문하기</button>
          }
        </div>
        <div onClick={() => setShowDetail(!showDetail)}><AiOutlineDown className={showDetail ? styled.open : styled.close} /></div>
      </div>
    </>
  );
};

export default MenuItem;