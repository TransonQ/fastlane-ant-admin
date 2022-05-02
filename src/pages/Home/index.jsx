import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <Button
        onClick={() =>
          navigate("/child", {
            state: { a: 1, b: 2 },
            // replace: true // 默认就是false:push; true:replace;
          })
        }
      >
        跳转到child
      </Button>
    </>
  );
};
