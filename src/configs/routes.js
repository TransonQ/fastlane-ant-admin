import Child from "@/pages/Child"
import { Home } from "@/pages/Home"
import { Suspense } from "react"

// const Child = lazy(() => import("@/pages/Child")); // 懒加载必须默认导出

// react-router v6 迁移: 之前写法是 component 现在的写法是 element
export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/child",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Child />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <Home />,
  },
]
