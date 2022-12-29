import React, { Children } from "react";
import './Cart.css'
// export const Cart = (props) => {
//   // 打印看看接收到的 props 是什么结构
//   console.log('props: ', props); // props: {name: '法外狂徒张三'}
//   return <div className='cart'>{props.name}
//           {props.children}
//         </div>
// }
export const Cart = ({children}) => {
  // 打印看看接收到的 props 是什么结构
  console.log('props: ', children); // props: {name: '法外狂徒张三'}
  return <div className='cart'>{children}
          {children}
        </div>
}