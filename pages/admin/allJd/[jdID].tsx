import Header from "../../../componentsAdmin/Header";
import Navbar from "../../../componentsAdmin/Sidebar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
    Button,
    Form,
    Input,
} from 'antd';


import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import { doc, getDoc, updateDoc, DocumentData } from 'firebase/firestore';
import { db } from "../../../firebase.config"


export interface IJdJDProps {
    id?: string;
    position?: string,
    description?: string
}

export default function JdJD(props: IJdJDProps) {
    const router = useRouter()
    const [form] = Form.useForm();
    const jdId = router.query.jdID

    const [jdDetails, setJdDetails] = useState<DocumentData | undefined>()



    useEffect(() => {
        const getJd = async () => {
            const docRef = doc(db, 'jd', `${jdId}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                let data: DocumentData | undefined = docSnap.data();
                setJdDetails(data);
            } else {
                alert('No data found');
            }
        };
        getJd();
    }, [jdId]);

    const QuillNoSSRWrapper = dynamic(import('react-quill'), {
        ssr: false,
        loading: () => <p>Loading ...</p>,
    })
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
    }
    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        "align"
    ]
    const onFinish = async (e: any) => {
        const taskDocRef = doc(db, 'jd', `${jdId}`);
        try {
            await updateDoc(taskDocRef, e);
            alert('Update successfulg');
            router.push('/admin/allJd')
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        form.setFieldsValue(jdDetails);
    }, [jdDetails]);
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <h2>Add JD</h2>
                        <Form
                            style={{ width: 1000 }}
                            layout="vertical"
                            onFinish={onFinish}
                            form={form}
                        >
                            <Form.Item
                                label="Job position"
                                name="position"
                                rules={[{ required: true, message: 'Please input Job positon!' }]}

                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Job description"
                                name="description"
                                rules={[{ required: true, message: 'Please input Job description!' }]}
                            >
                                <QuillNoSSRWrapper
                                    modules={modules}
                                    formats={formats}
                                    theme="snow"
                                />
                            </Form.Item>

                            <Form.Item
                                style={{ alignItems: "center" }}
                            >
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Save
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </main>
        </div>
    );
}
