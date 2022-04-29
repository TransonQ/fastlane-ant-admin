import { Button } from "antd"
import ButtonGroup from "antd/lib/button/button-group"
import React from "react"
import { useNavigate } from "react-router-dom"

const Child = () => {
  const navigate = useNavigate()
  return (
    <ButtonGroup>
      <Button onClick={() => navigate(-1)}>回退上一页</Button>
      <Button onClick={() => navigate(`/login`)}>去登录页</Button>
    </ButtonGroup>
  )
}

export default Child
