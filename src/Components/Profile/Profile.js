import React from "react";
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

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const Profile = () => {
  return (
    <Layout>
      <Header>
        <Row style={{ marginTop: "75px" }} align={"middle"} gutter={16}>
          <Col>
            <Avatar size={100} icon={<UserOutlined />} />
          </Col>
          <Col>
            <Title level={2}>Name</Title>
            <Space>
              <Button icon={<EditOutlined />}>Edit Profile</Button>
              <Button icon={<SettingOutlined />}>Settings</Button>
              <Button type="primary" danger icon={<LogoutOutlined />}>
                Logout
              </Button>
            </Space>
          </Col>
        </Row>
        
      </Header>
      <Content style={{height:"400px"}}></Content>
      <Footer style={{textAlign:"center"}}>
            Jira 2024 created by you
      </Footer>
    </Layout>
  );
};
export default Profile;
