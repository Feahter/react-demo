/*
 * @Author: your name
 * @Date: 2021-05-11 17:43:37
 * @LastEditTime: 2021-05-11 18:36:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/react-demo/src/Store/index.tsx
 */

import DemoStore, { DemoStoreTypes } from './DemoStore';
export interface StoreTypes {
  DemoStore: DemoStoreTypes;
};

const Store={DemoStore}

export default Store
