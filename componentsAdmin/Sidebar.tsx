import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";

export interface NavbarProps {}

export default function Navbar(props: NavbarProps) {
  const router = useRouter();

  const hanleLogout = () => {
    localStorage.clear();
    router.push("/");
  };
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_logo">
          <Image src={logo} alt="Logo" className="sidebar_logo_images" />
        </div>
        <ul className="sidebar_menu">
          <li
            className={
              router.pathname === "/admin/allJd" ? "active" : "li_custom"
            }
          >
            <Link href="/admin/allJd">All JD</Link>
          </li>
          <li
            className={
              router.pathname === "/admin/addJd" ? "active" : "li_custom"
            }
          >
            <Link href="/admin/addJd">Add JD</Link>
          </li>
          <li className="navbar_li li_custom">
            <button onClick={hanleLogout} className="sidebar_logout_button">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
