import { Button } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  return <Button onClick={() => navigate(`/`)}>去首页</Button>
}

export default Login
