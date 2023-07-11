import Header from "../../../componentsAdmin/Header";
import Navbar from "../../../componentsAdmin/Sidebar";
import React, { Fragment, useEffect, useState } from "react";
import { db } from "../../../firebase.config";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { Button, Collapse } from "antd";

interface MyObjectType {
  id?: string;
  position?: string;
  description?: string;
}

export interface AllJdProps {}

export default function AllJd(props: AllJdProps) {
  const { Panel } = Collapse;
  const router = useRouter();
  const [status, setStatus] = useState(true);
  const [jdList, setJdList] = useState<MyObjectType[]>([]);

  useEffect(() => {
    const checkAuth = localStorage.getItem("token");
    if (!checkAuth) {
      router.push("/admin");
    } else setStatus(false);
  }, [router]);

  useEffect(() => {
    const q = query(collection(db, "jd"));
    onSnapshot(q, (querySnapshot) => {
      setJdList(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, [router]);

  const handleDeleteJd = async (data: any) => {
    if (
      window.confirm(`Do you want to delete JD named ${data.position} ?`) ===
      true
    ) {
      const taskDocRef = doc(db, "jd", data.id);
      try {
        await deleteDoc(taskDocRef);
        alert("Deleted successfully!");
      } catch (err) {
        alert(err);
      }
    }
  };

  const handleEditJd = (data: any) => {
    router.push(`/admin/allJd/${data.id}`);
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
              <h2 className="alljd_h2">All JD</h2>
              <Collapse accordion>
                {jdList.map((data) => (
                  <Panel
                    className="alljd_panel"
                    key={data.id ?? ""}
                    header={data.position}
                    extra={
                      <div className="alljd_button">
                        <Button
                          onClick={(e) => {
                            handleEditJd(data);
                            e.stopPropagation();
                          }}
                          className="alljd_buttons_edit"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={(e) => {
                            handleDeleteJd(data);
                            e.stopPropagation();
                          }}
                          className="alljd_buttons_delete"
                        >
                          Delete
                        </Button>
                      </div>
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.description ?? "",
                      }}
                    />
                  </Panel>
                ))}
              </Collapse>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
