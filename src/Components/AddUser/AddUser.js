import { useState } from 'react'
import React  from 'react'
import { Modal,Input,Form, Button, Select } from 'antd'
import Password from 'antd/es/input/Password'
const AddUser = ({showCreateUserModal,handleCreateUserModal}) => {
const {user , setUser} = useState({
    Email : "",
    Password:"",
    Username : "",
    Role:""
})
 const submit = ()=>{}
return (
    <Modal title = "Create User" open={showCreateUserModal} onOk={handleCreateUserModal} onCancel={handleCreateUserModal} footer={null}>
      <Form onFinish={submit}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          {
            min: 3,
            message: 'Username must be at least 3 characters long!',
          },
        ]}
      >
        <Input placeholder="Enter your username" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            type: 'email',
            message: 'The input is not a valid email!',
          },
        ]}
      >

        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            min: 6,
            message: 'Password must be at least 6 characters long!',
          },
        ]}
      >
        <Input.Password placeholder="Enter your password" />

      </Form.Item>
      <Form.Item>
        <Select placeholder="Select Roles"></Select>
      </Form.Item>
      <Form.Item>
        <Button>Submit</Button>
        {" "}
        <Button>Cancel</Button>
      </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddUser