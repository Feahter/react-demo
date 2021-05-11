/*
 * @Author: your name
 * @Date: 2021-05-11 17:56:26
 * @LastEditTime: 2021-05-11 18:47:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/react-demo/src/Store/DemoStore.ts
 */
import {makeAutoObservable} from 'mobx'
export interface DemoStoreTypes{
count:number;
increase:()=>void;
reduce:()=>void;
set:(val:number)=>void;
}
class DemoStore{
    constructor(){
        makeAutoObservable(this)
    }
count=0

increase(){
    this.count++
}
reduce(){
    this.count--
}
set(val:number){
    this.count=val
}
}

export default new DemoStore();


