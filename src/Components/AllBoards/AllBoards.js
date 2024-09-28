// import React from 'react';
import { Layout, Avatar, Row, Col, Button, Typography, Tabs, Card, Space } from 'antd';
import { EditOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';




const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
// import { Layout } from 'antd'
// import React from 'react'



const AllBoards = () => {
    const [boards,setBoards] = useState([]);
    async function getBoardData() {
        try {
          let boards = await fetch("http://localhost:8080/board/getAllBoards");
          let response = await boards.json();
          setBoards(response);
          console.log(response)
          
          // dispatch(allBoards(response))
  
          
        } catch (error) {
          console.log( error);
        }
      }
      useEffect(()=>{
        getBoardData();
      },[])
  return (
    <Layout>
        <Header style={{color : "blue",font:"bold",textAlign:"center", }}>
          AllBoards
        </Header>
        <Content style={{padding:"20px"}}>
            {
                boards.map((board)=>{
                    return <Card style={{marginTop:"10px"}} title={board.name}></Card>
                })
            }
        </Content>
        <Footer style={{textAlign:"center"}}>
            Jira 2024 created by you
        </Footer>
    </Layout>
  )
}

export default AllBoards