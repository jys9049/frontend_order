import React from 'react';
import styled from './Mypage.module.scss'
import { AiOutlineAudit, AiOutlineCreditCard, AiOutlineFileSearch, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
//AiOutlineAudit = 개인정보 수정
//AiOutlineCreditCard = 결제 내역 조회
//AiOutlineFileSearch = 내가 작성한 리뷰
//AiOutlineLock = 비밀번호 변경
const Mypage = () => {
  return (
    <div className={styled.mypageContainer}>
      <div className={styled.mainTitle}>
        <span><h3>JYS9049</h3>님</span>
        <span>환영합니다!</span>
      </div>
      <div className={styled.mypageMenuListGroup}>
        <Link to='/mypayment'>
          <div className={styled.mypageMenu}>
            <AiOutlineCreditCard /><span>결제 내역</span>
          </div>
        </Link>
        <Link to='/mypayment'>
          <div className={styled.mypageMenu}>
            <AiOutlineFileSearch /><span>내가 쓴 리뷰</span>
          </div>
        </Link>
        <Link to='/mypayment'>
          <div className={styled.mypageMenu}>
            <AiOutlineAudit /><span>닉네임 변경</span>
          </div>
        </Link>
        <Link to='/mypayment'>
          <div className={styled.mypageMenu}>
            <AiOutlineLock /><span>비밀번호 변경</span>
          </div>
        </Link>
      </div>
      <div className={styled.myapgeLinkGroup}>
        <span>
          <Link to={'/'}>
            회원탈퇴
          </Link>
        </span>
        <span className={styled.bar}>|</span>
        <span>
          <Link to={'/'}>
            로그아웃
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Mypage;