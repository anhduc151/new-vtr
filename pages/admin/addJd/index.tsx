import Header from "../../../componentsAdmin/Header";
import Navbar from "../../../componentsAdmin/Sidebar";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";

export interface AddJdProps {}

export default function AddJd(props: AddJdProps) {
  const router = useRouter();
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const checkAuth = localStorage.getItem("token");
    if (!checkAuth) {
      router.push("/admin");
    } else setStatus(false);
  }, [router]);

  const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
  ];

  const onFinish = async (values: any) => {
    try {
      await addDoc(collection(db, "jd"), {
        ...values,
      });
      alert("New added success!");
      router.push("/admin/allJd");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Header />
      {status ? (
        <Fragment />
      ) : (
        <main>
          <div className="jd_container">
            <Navbar />
            <div className="jd_content">
              <h2 className="alljd_h2">Add JD</h2>
              <Form
                style={{ width: 1000 }}
                layout="vertical"
                onFinish={onFinish}
              >
                <Form.Item
                  label={<span className="label-white">Job position</span>}
                  name="position"
                  rules={[
                    { required: true, message: "Please input Job positon!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={<span className="label-white">Job description</span>}
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please input Job description!",
                    },
                  ]}
                >
                  <QuillNoSSRWrapper
                    modules={modules}
                    formats={formats}
                    theme="snow"
                  />
                </Form.Item>

                <Form.Item style={{ alignItems: "center" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="addjd_submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
