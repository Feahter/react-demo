/*
 * @Author: your name
 * @Date: 2021-05-11 17:50:40
 * @LastEditTime: 2021-05-11 18:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/react-demo/src/Store/mobxStore.ts
 */
import {makeAutoObservable} from 'mobx';

class MobxStore {
    constructor(){
        makeAutoObservable(this);
    }
}

export default MobxStore;