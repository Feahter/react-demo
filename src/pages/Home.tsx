import React,{FC} from 'react';
import Navbar from '../components/Navbar/';
import {Button} from 'antd';

const getPath=()=>{
    console.log('window: ', window);
}
const Home:FC=()=>(
<div>
    home
    <Button onClick={getPath}>test</Button>
    <Navbar/>
</div>
)
export default Home