import React,{FC} from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', 
      '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',
    ],
  })
  interface iconType{
      type:string
  }
const Icon:FC<iconType>=({type})=>(
    <IconFont type={type}></IconFont>
)
export default Icon