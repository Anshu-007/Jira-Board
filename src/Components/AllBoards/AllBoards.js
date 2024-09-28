// import React from 'react';
import {
  Layout,
  Avatar,
  Row,
  Col,
  Button,
  Typography,
  Tabs,
  Card,
  Space,
} from "antd";
import {
  EditOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
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
  const [bars , setBars] = useState([])
  const boardId = getPath()
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
  }, []);
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
                    <Card style={{width:"300px" , padding: "10px"}}>
                        <Meta title={board.name}/>
                        <hr/>

                        <div style={{width:"100%"}}>
                            {
                                board.statusBar.split(",").map((value)=>{
                                    return <div>{value}</div>
                                })
                            }
                        </div>   
                        <div>
                            <Button type="primary">Delete</Button>
                        </div>  
                    </Card>
          );
        })}
      </div>
      <Footer style={{ textAlign: "center" }}>Jira 2024 created by you</Footer>
    </Layout>
  );
};

export default AllBoards;
