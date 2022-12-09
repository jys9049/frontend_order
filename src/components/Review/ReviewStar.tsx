import React, { useState } from 'react';
import styled from './Review.module.scss'
import { AiOutlineDown, AiFillStar } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { orderStore } from '../../store/store';
import { useParams } from 'react-router-dom';
import ReviewStarItem from './ReviewStarItem';


const ReviewStar = () => {
  const param = useParams()
  const idx = Number(param.orderId) - 1

  const [orderList, setOrderList] = useRecoilState(orderStore)
  const [showMore, setShowMore] = useState(false)

  return (
    <div className={styled.alignRight}>
      <span className={styled.starTitle} onClick={() => setShowMore(!showMore)}>
        내가 주문한 메뉴 별점주기
        <AiOutlineDown className={showMore ? styled.open : styled.close} />
      </span>
      {showMore ?
        <>
          <div className={styled.starContainer}>
            {orderList[idx].orderProduct.map(item => (
              <ReviewStarItem item={item} />
            ))}
          </div>
          <button>별점주기</button>
        </> : null
      }
    </div>
  );
};

export default ReviewStar;