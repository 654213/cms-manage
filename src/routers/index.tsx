import React, { lazy, Suspense } from 'react'
import App from "App";
// import List from 'pages/List'
// import Edit from 'pages/Edit'
// import Means from 'pages/Means'
// import Login from 'Login'
// import Register from "Register";
import Loading from 'components/Loading'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//定义每一项数组的接口
interface IRoute {
  path: string,
  component: React.FC,
  children?: IRoute[] //?:代表是否有子路由
}
const router_arr: IRoute[] = [
  { path: "/", component: App, children: [
    { path: "list", component: lazy( () => import("pages/List"))},
    { path: "edit", component: lazy( () => import("pages/Edit"))},
    { path: "means", component: lazy( () => import("pages/Means"))},
  ]},
  { path: "/login", component: lazy( () => import("Login"))},
  { path: "/register", component: lazy( () => import("Register"))},
  
]
const MyRouter = () => (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {
            router_arr.map( (item,index) => {
              return (
                item.children ?
                //有子路由
                <Route key={index} path={ item.path} element={<item.component/>}>
                  {
                    item.children.map( (e,i) => (
                      <Route key={i} path={ e.path} element={<e.component/>}></Route>
                    ))
                  }
                </Route>
                :
                //没有子路由
                <Route key={index} path={ item.path} element={<item.component/>}></Route>
              )
            })
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
    
)

export default MyRouter;