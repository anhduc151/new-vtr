import Header from "../../componentsAdmin/Header";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.config";

export default function Home() {
  const router = useRouter();
  const [status, setStatus] = useState(true);

  const onFinish = async (values: any) => {
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then((respon) => {
        const user = respon.user;
        user.getIdToken().then((idToken) => {
          localStorage.setItem("token", idToken);
          router.push("/admin/allJd");
        });
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  useEffect(() => {
    const checked = localStorage.getItem("token");
    if (checked) {
      router.push("/admin/allJd");
    } else setStatus(false);
  }, [router]);

  return (
    <div>
      <Header />
      {status ? (
        <Fragment />
      ) : (
        <main>
          <div className="jd_login">
            <Form
              layout="vertical"
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              className="jd_login_forms"
            >
              <h1 className="jd_login_forms_h1">Login</h1>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item className="jd_form_login_buttons">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="jd_button_login"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </main>
      )}
    </div>
  );
}
