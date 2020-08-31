import React,{FC} from 'react';
import Navbar from '../components/Navbar/';
import {Button} from 'antd';

let params={
    c:'a'
}
const getPath=async()=>{
    let url='https://v1.hitokoto.cn'
    let urls=filterUrl(url,params)
    let res= await (await fetch(urls)).json()
    console.log('res: ', res);
}
const filterUrl=(url:string,params:any)=>{
    let str=`${url}?`
for(let x in params){
    str=`${str}${x}=${params[x]}&`
}
str=str.substr(0,str.length-1)
return str
}
const Home:FC=()=>(
<div>
    home
    <Button onClick={getPath}>test</Button>
    <Navbar/>
</div>
)
export default Home