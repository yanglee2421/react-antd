// Antd Imports
import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

export function InputPasswd() {
  return (
    <Form.Item
      name={"password"}
      rules={[
        { required: true, message: "Password is required!" },
        { type: "string", min: 5, max: 16, message: "8-16" },
      ]}
    >
      <Input.Password
        prefix={<LockOutlined></LockOutlined>}
        placeholder="Password"
      ></Input.Password>
    </Form.Item>
  );
}
