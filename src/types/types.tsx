export interface cartType {
  // id: number,
  product: menuTypes,
  count: number
}

export interface userType {
  id: number,
  nickName: string,
}

export interface reviewType {
  id: number,
  userInfo: userType,
  time: string,
  content: string,
}

export interface myReviewType {
  id: number,
  storeName: string,
  userInfo: userType,
  time: string,
  content: string,
  presidentContent: {
    time: string,
    content: string,
  },
}

export interface orderType {
  orderProduct: cartType[],
  totalPrice: number,
  orderStatus: boolean,
}

export interface menuTypes {
  id: number,
  name: string,
  desc: string,
  price: number;
  scope: number;
  category: string;
}

export interface tableNumTypes {
  id: string,
  storeName: string,
  tableNum: number,
}

export interface orderNumTypes {
  id: string,
  storeName: string,
}

export interface paymentType {
  id: number,
  date: string,
  storeName: string,
  menu: {
    menuName: string,
    count: number,
    price: number,
  }[],
  totalPrice: number,
}