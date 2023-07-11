import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/navbar.css";
import "../styles/home.css";
import "../styles/sliderhomerecruit.css";
import "../styles/game.css";
import "../styles/sliderscreenshot.css";
import "../styles/besidefooter.css";
import "../styles/about.css";
import "../styles/boxicons.css";
import "../styles/reskin.css";
import "../styles/contact.css";
import "../styles/terms.css";
import "../styles/privacy.css";
import "../styles/recruit.css";
import "../styles/sliderabout.css";
import "../styles/sliderevent.css";
import "aos/dist/aos.css";
import AOS, { AosOptions } from "aos";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import "../styles/solitaire.css";
import "../styles/basic.css";
import "../styles/jd.css";
import "../styles/sidebar-admin.css";
import "../styles/admin-jd.css";

export default function App({ Component, pageProps }: AppProps) {
  setTimeout(function () {
    AOS.refresh();
  }, 100);

  useEffect(() => {
    initAOS({
      duration: 800,
      easing: "ease-out",
      once: false,
      delay: 100,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  function initAOS(options?: AosOptions) {
    AOS.init(options);
    AOS.refreshHard();
  }

  return (
    <>
      <NextSeo
        canonical="https://gametamin.site"
        openGraph={{
          url: "https://gametamin.site",
          title: "Vjctory",
          description:
            "Welcome to our game introduction page! Immerse yourself in the thrilling world of gaming with our exciting collection of games. From action-packed adventures to mind-bending puzzles, we have something for every gamer out there. Join us and experience the joy of gaming like never before. Let the games begin!",
        }}

        //hiện title và descrip khi share qua các nền tảng khác
      />
      <Component {...pageProps} />
    </>
  );
}
