import React from "react";
export const List = ({ list, setList }) => {
  // // 点击 x 的回调函数
  // const handleDelete = (i) => () => {
  //   setList((prevList) => {
  //     return prevList.filter((_, index) => index !== i)
  //   })
  // }

  return (
    <ul className='item'>
      {list.map((s, i) => {
        return (
          <li key={i} className='li'>
            {s}
            <span
              className='delete'
              // onClick={handleDelete(i)}
              onClick={() =>
                setList((list) => list.filter((_, index) => index !== i))
              }
            >
              x
            </span>
          </li>
        )
      })}
    </ul>
  )
}