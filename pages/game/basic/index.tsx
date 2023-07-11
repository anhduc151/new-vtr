import React from "react";
import Navbar from "@/components/Navbar";
import SliderScreenShot from "@/components/Slidescreenshot";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import Image from "next/image";
import Besidefooter from "@/components/Besidefooter";
import logo_ios from "../../../public/images/logo-app-ios.png";
import logo_androi from "../../../public/images/logo-app-androi.png";
import slide1 from "../../../public/images/slideFeatureBasic4.png";
import slide2 from "../../../public/images/slideFeatureBasic5.png";
import slide3 from "../../../public/images/slideFeatureBasic6.png";
import slide4 from "../../../public/images/slideFeatureBasic7.png";
import reskinafterimg6 from "../../../public/images/reskin_profile6.png";
import reskinafterimg7 from "../../../public/images/reskin_profile7.png";
import reskinafterimg8 from "../../../public/images/reskin_profile8.png";
import reskinafterimg4 from "../../../public/images/reskin_profile4.png";
import reskinafterimg9 from "../../../public/images/reskin_profile9.png";
import gamespeopledogs from "../../../public/images/games_people_dogs.png";
import Link from "next/link";
import Layout from "@/components/LayoutSeo";

export interface BasicProps { }

export default function Basic(props: BasicProps) {
  return (
    <Layout
      title="Traffic Jam Cars Puzzle - Vjctory"
    >
      <main>
        <Navbar />
        <div className="container_reskin">
          <div className="reskin_header">
            <div
              className="reskin_header_content_left"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="header_content_left_title">
                <p>Discover Game You Will Love</p>
              </div>
              <div className="header_content_left_context">
                <p>
                  Read About Games <br /> That You Enjoy
                </p>
              </div>
              <div className="header_content_left_logoapp">
                <div className="logo_ios">
                  <Link href="https://apps.apple.com/vn/app/traffic-jam-cars-puzzle-2022/id1600852359">
                    <Image
                      src={logo_ios}
                      alt="icon ios"
                      className="logo_mobiles"
                    />
                  </Link>
                </div>
                <div className="logo_androi">
                  <Link href="https://play.google.com/store/apps/details?id=com.gametamin.trafficjamcarspuzzle">
                    <Image
                      src={logo_androi}
                      alt="iocn android"
                      className="logo_mobiles"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="reskin_header_content_right">
              <Image
                src={gamespeopledogs}
                alt="dogs"
                className="games_traffic_imgs"
                data-aos="fade-up"
                data-aos-duration="500"
              />
            </div>
          </div>

          <div className="reskin_after">
            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg6}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">PILOT</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg7}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">NURSE</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg8}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">POLICE</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg4}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">FIREMAN</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg9}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">WOKERMAN</h2>
              </div>
            </div>
          </div>

          <div className="solitaire_features">
            <div className="features_h1">
              <h1 className="features_h1_name">Screenshot</h1>
            </div>

            <div className="features_slider">
              <SliderScreenShot
                image1={slide1}
                image2={slide2}
                image3={slide3}
                image4={slide4}
              />
            </div>
          </div>

          <div className="solitaire_other">
            <div className="other-h1">
              <h1 className="other_h1_name">Other Games</h1>
            </div>

            <div className="other_slider">
              <SliderSoliraiteOther />
            </div>
          </div>
        </div>
        <Besidefooter />
      </main>
    </Layout>
  );
}
