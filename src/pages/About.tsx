/*
 * @Author: your name
 * @Date: 2021-05-11 17:25:32
 * @LastEditTime: 2021-05-11 18:50:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/react-demo/src/pages/About.tsx
 */
import { Button, Input } from 'antd'
import React, { FC } from 'react'
import Navbar from '../components/Navbar'
import Store, { StoreTypes } from '../Store'
import {observer} from 'mobx-react';
interface Props {
  store: StoreTypes
}

const About: FC<Props> = ({ ...props }) => {
  let { store = Store } = props
const handleClick=()=>{
    store.DemoStore.increase();
}
const handleClick2=()=>{
    store.DemoStore.reduce();
}
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const { value } = e.target;
    let result=Number(value)
    console.log('result: ', result);
    store.DemoStore.set(result);
}
  return (
    <>
    <Input type="number" value={store.DemoStore.count?store.DemoStore.count:''} onChange={handleChange}></Input>
    <Button onClick={handleClick}>+</Button>
    <Button onClick={handleClick2}>-</Button>
      About
      <Navbar />
    </>
  )
}
export default observer(About)
