export interface cartType {
  // id: number,
  product: menuTypes;
  count: number;
}

export interface starType {
  id: number;
  scope: number;
}

export interface userType {
  id: number;
  nickName: string;
}

export interface reviewType {
  id: number;
  userInfo: userType;
  time: string;
  content: string;
}

export interface myReviewType {
  id: number;
  storeName: string;
  orderMenu: string[];
  userInfo: userType;
  time: string;
  content: string;
  presidentContent: {
    time: string;
    content: string;
  };
}

export interface orderType {
  orderProduct: cartType[];
  totalPrice: number;
  orderStatus: boolean;
}

export interface menuTypes {
  id: number;
  name: string;
  desc: string;
  price: number;
  scope: number;
  category: string;
}

export interface tableNumTypes {
  id: string;
  storeName: string;
  tableNum: number;
}

export interface orderNumTypes {
  id: string;
  storeName: string;
}

export interface paymentType {
  id: number;
  createdAt: string;
  store: {
    storeId: number;
    name: string;
    location: string;
  };
  orderMenus: {
    count: number;
    id: number;
    menu: {
      categoryName: string;
      description: string;
      imageUrl: string;
      menuId: number;
      name: string;
      price: number;
      storeId: number | null;
    };
    totalPrice: number;
  }[];
  totalPrice: number;
}

export interface loginType {
  token: string;
  email: string;
}
