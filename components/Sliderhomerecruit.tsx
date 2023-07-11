import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from "../public/images/sliderhome_img1.png";
import sliderimg2 from "../public/images/sliderhome_img2.png";
import sliderimg3 from "../public/images/sliderhome_img3.png";
import Image from "next/image";
import Link from "next/link";
import { db } from "../firebase.config";
import {
  collection,
  query,
  onSnapshot
} from "firebase/firestore";
import { useRouter } from "next/router";

export interface ISliderHomeRecruitProps {
  id?: any,
  position?: any,
}

export default function SliderHomeRecruit(props: ISliderHomeRecruitProps) {
  const router = useRouter()
  // const [activeSlide, setActiveSlide] = useState<number>(0);
  const [jdList, setJdList] = useState<ISliderHomeRecruitProps[]>([]);



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



  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: true,
          autoplay: true,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0",
          autoplay: true,
          slidesToShow: 1,
        },
      },
    ],
    // afterChange: (current: number) => {
    //   if (current === slides.length - 1) {
    //     setActiveSlide(0);
    //   } else {
    //     setActiveSlide(current + 1);
    //   }
    // },
  };
  const imgs = [sliderimg1, sliderimg2, sliderimg3]
  const slideList = jdList.map(data => ({
    urlImg: imgs[Math.floor(Math.random() * 3)],
    nameRecruit: data.position,
    id: data.id,
  }))


  return (
    <div>
      <Slider {...settings} className="Slider_home">
        {slideList.map((data) => (
          <div
            key={data.id}
            className='slider-slide'
          >
            <div
              className='sliderhomerecruit'
            >
              <div
                className='sliderhomerecruit_imgs'
              >
                <Image
                  src={data.urlImg}
                  alt="slide"
                  className="sliderhomerecruit_images"
                />
              </div>
              <div
                className='sliderhomerecruit_box'
              >
                <div className="sliderhomerecuit_box_1">
                  <Link href={`/recruit/${data.id}`}>
                    <h4 className="sliderhomerecruit_box1_h4">{data.nameRecruit}</h4>
                  </Link>
                  <Link href={`/recruit/${data.id}`}><p className="sliderhomerecruit_box1_p">JD here</p></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
