import React,{ useEffect, useRef, useState } from 'react'
import emptyImg from '../../assets/img/empty.svg'
import style from './todolist.module.css'
import Item from '../items/item';
export const Todolist = ({getData,data}) => {
  const contentRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(data.length === 0);
  }, [data]);
  const contentStyle = {
    all: 'unset',
    backgroundImage: `url(${emptyImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px',
    display: 'block',
  };
  return (
    <>
      <div  id="content"
      ref={contentRef}
      className={style.content}
      style={isEmpty ? contentStyle : {}}>
        {
          data.map((item)=>{
            return <Item key={item.id} title={item.title} id={item.id} getData={getData} createdTime={item.time} />
          })
        }
      </div>  
    </> 
  )
}

