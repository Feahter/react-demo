import React, { FC } from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import Icon from '../Icon/'
import './style.less'
interface routeItem {
  path: string
  name: string
  meta: metaType
}
interface metaType {
  title: string, 
  icon: string
}

let list: Array<routeItem> = [
  {
    path: '/Home',
    name: 'Home',
    meta: {
      title: '首页',
      icon:'icon-javascript'
    },
  },
  {
    path: '/About',
    name: 'About',
    meta: {
      title: '关于',
      icon:'icon-java'

    },
  },
  {
    path: '/Core',
    name: 'Core',
    meta: {
      title: '核心',
      icon:'icon-python'
    },
  },
]
const Navbar: FC = () => (
  <Row justify="space-between" align="middle" className="nav-box">
    {list.map((item, index) => (
      <Col flex={1} key={index} className="nav-item">
        <Link to={item.path}>
          <div>
            <Icon type={item.meta.icon}></Icon>
          </div>
          {item.name}
        </Link>
      </Col>
    ))}
  </Row>
)
export default Navbar
