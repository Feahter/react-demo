import {packQuery } from '../utils';
let {fetch}=window
interface params{
  url:string,
  method:string,
  data:Object
}

export const http = async(o:params)=>{
  let{url,method,data}=o
  let str=packQuery(data)
  console.log('str: ', str);
  let res= await fetch(url)
  return res
}