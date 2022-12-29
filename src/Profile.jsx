import React from "react";
export const Profile = ({name}) => {
  // 打印看看接收到的 props 是什么结构
  console.log('props: ', name); // props: {name: '法外狂徒张三'}
  return (
    <div>{name}</div>
  )
}