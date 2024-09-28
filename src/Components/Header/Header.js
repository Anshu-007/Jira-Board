import React from 'react'
import "./header.css"
import logoimage from "../../Assets/jira-logo-png.png"
import { Avatar,Dropdown,Space, Typography} from 'antd'
import {UserOutlined,DownOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
    const items  = [



        {
            key : "1",
            label : "My Profile",
            extra : <UserOutlined/>
        },
        {
            type: "divider"
        },
        {
            key : "2",
            label: "My boards"
        },
        {
            key : "3",
            label : "dummy"
        }
    
    ];
    const onClick = ({key})=>{
        if(key === '1'){
            navigate("/home/Profile")
        }else if(key === '2'){
            navigate("/home/AllBoards")
        }
    }
  return (
    <header className='header-cont'>
        <div className='logo'>
            <img src={logoimage} alt="" />

        </div>
        <div className='heading'>J I R A</div>
        <Dropdown menu={{items , onClick}} className='profile'>
            <Space>
                <Typography.Text>name</Typography.Text>
                <Avatar size={50}  icon={<UserOutlined/>}/>
                <DownOutlined/>
            </Space>
        </Dropdown>
    </header>
  )
}

export default Header