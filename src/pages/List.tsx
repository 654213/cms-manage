import React from 'react'
import { Table, Button } from 'antd'
const columns = [
  {
    title: '文章标题',
    dataIndex: 'title',
    width:'60%'
  },
  {
    title: '发布时间',
    dataIndex: 'time',
    width: '20%'
  },
  {
    title: '操作',
    dataIndex: 'action'
  },
];
//操作标题与副标题的组件
const TitleComp = () => (
  <>
    <div>标题标题标题标题标题标题</div>
    <p style={{color: '#999'}}>副标题副标题副标题副标题副标题副标题副标题副标题</p>
  </>
)
//操作按钮的组件
const ActionBtn = () => (
  <>
    <Button type="primary" style={{marginRight: '20px'}}>编辑</Button>
    <Button type="primary" danger>删除</Button>
  </>
)
interface IData {
  key: number;
  title: React.ReactNode;
  time: string;
  action: React.ReactNode;
}
const data:IData[] = [];
for ( let i = 0; i < 46; i++){
  data.push({
    key: i,
    title: <TitleComp />,
    time: '2022-6-7',
    action: <ActionBtn/>
  })
}
export default function List() {
  return <Table showHeader={false} columns={ columns } dataSource={ data }></Table>
}
