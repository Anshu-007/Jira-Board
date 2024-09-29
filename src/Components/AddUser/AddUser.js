import { lazy, useState } from "react";
import React from "react";
import { Modal, Input, Form, Button, Select, message } from "antd";
import Password from "antd/es/input/Password";

const AddUser = ({ showCreateUserModal, handleCreateUserModal }) => {
  let [user, setUser] = useState({
    email: "",
    password: "jira@123",
    username: "",
    role: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRoleChange = (value) => {
    setUser({ ...user, Role: value });
  };

  const items = [
    { value: "Manager", label: "Manager" },
    { value: "Tester", label: "Tester" },
    { value: "Developer", label: "Developer" },
    { value: "Quality", label: "Quality" },
  ];
  const submit = async () => {
    try {
      let response = await fetch("localhost:8080/user/save", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user }),
      });
      if(response.ok) message.success("user created")
    } catch (error) {
            console.log(error)
  }
  };
  return (
    <Modal
      title="Create User"
      open={showCreateUserModal}
      onOk={handleCreateUserModal}
      onCancel={handleCreateUserModal}
      footer={null}
    >
      <Form onFinish={submit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              min: 3,
              message: "Username must be at least 3 characters long!",
            },
          ]}
        >
          <Input
            onChange={handleChange}
            name="username"
            value={user.username}
            placeholder="Enter your username"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "The input is not a valid email!",
            },
          ]}
        >
          <Input
            onChange={handleChange}
            name="email"
            value={user.email}
            placeholder="Enter your email"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters long!",
            },
          ]}
        >
          <Input.Password
            defaultValue={user.password}
            disabled
            placeholder="Enter your password"
          />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "please select the Role" }]}
        >
          <Select
            onChange={handleRoleChange}
            value={user.role}
            required
            placeholder="Select Roles"
            options={items}
          ></Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>{" "}
          <Button
            onClick={() => {
              handleCreateUserModal(false);
            }}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUser;
