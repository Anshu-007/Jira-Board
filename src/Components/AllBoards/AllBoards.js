// import React from 'react';
import {
  Layout,
  List,
  Avatar,
  Row,
  Col,
  Button,
  Typography,
  Tabs,
  Card,
  Space,
  message,
} from "antd";
import {
  EditOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  DeleteOutlined    
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { getPath } from "../../Utils/Utils";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
// import { Layout } from 'antd'
// import React from 'react'
const { Meta } = Card;

const AllBoards = () => {
  const [boards, setBoards] = useState([]);
  const [bars, setBars] = useState([]);
  const [isBoardDeleted , setIsBoardDeleted] = useState(false)
  const boardId = getPath();
  async function handleDeleteBoard(id){
    try{
        let response = await fetch(`http://localhost:8080/board/getBoard/${id}`,{method:"Delete"})

        if(response.ok) message.success("board deleted successfully")
            getAllBoardData();
        // console.log(result)
    } catch(error){
        console.log(error)
    }
  }
  async function getAllBoardData() {
    try {
      let boards = await fetch("http://localhost:8080/board/getAllBoards");
      let response = await boards.json();
      setBoards(response);
      console.log(response);

      // dispatch(allBoards(response))
    } catch (error) {
      console.log(error);
    }
  }
  //   async function getBoardData(){
  //       try{
  //           let data = await fetch(`http://localhost:8080/board/getBoard/${boardId}`);
  //           let response = await data.json();
  //           console.log(response,"HELLO");

  //     }catch(error){
  //         console.log(error)
  //     }
  //   }
  useEffect(() => {
    getAllBoardData();
    // getBoardData()
  },[]);
  return (
    <Layout>
      <Header style={{ color: "blue", font: "bold", textAlign: "center" }}>
        AllBoards
      </Header>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {boards.map((board) => {
          return (
            <Card
              style={{
                width: 400,
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              title={
                <Title level={3} style={{ margin: 0 }}>
                  {board.name}
                </Title>
              }
              extra={
                <Button
                  type="primary"
                  icon={<DeleteOutlined />}
                  danger
                  onClick={() =>handleDeleteBoard(board.id)}
                >
                  Delete
                </Button>
              }
              hoverable
            >
              <List
                dataSource={board.statusBar.split(",")}
                renderItem={(item) => <List.Item>{item}</List.Item>}
                bordered
                style={{ marginBottom: "16px" }}
              />
            </Card>
          );
        })}
      </div>
      <Footer style={{ textAlign: "center" }}>Jira 2024 created by you</Footer>
    </Layout>
  );
};

export default AllBoards;
