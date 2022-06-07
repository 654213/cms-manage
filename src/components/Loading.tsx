import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import './less/loading.less'
export default function Loading() {
  return (
    <div className='loading'>
        <LoadingOutlined style={{color: "#40a900", fontSize: "80px"}}/>
    </div>
  )
}
