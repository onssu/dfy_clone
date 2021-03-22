import React from "react";
import styled from "styled-components";
import loadable from "@loadable/component";
import bg from "common/image/showcase_hyundai-department.jpeg";

const Header = loadable(() => import("components/main/Header"));
const Footer = loadable(() => import("components/main/Footer"));

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="o-background"></div>

      <div className="wrap">
        <h1 className="h1">쇼케이스</h1>
        <div className="contentsShowcase">
          <article className="showcase-wrap">
            <div className="showcase-navi">
              <nav className="navigator">
                <a href="./contact/">프로젝트 의뢰</a>
                <a href="./careers/">채용정보</a>
              </nav>
            </div>
            <section className="sectionFirst">
              <div className="section-body">
                <a href="./work/" className="title">
                  <span className="subtitle">프로젝트 — 현대백화점</span>
                  <h2>
                    트렌드 플랫폼으로 전환한
                    <br />
                    <strong>더 현대 서울</strong>
                  </h2>
                  <p className="mores">프로젝트 보기</p>
                </a>
              </div>

              <figure>
                <span className="mask"></span>
                <div className="o-imgLoaded">
                  <img
                    src={bg}
                    width="1920"
                    height="1920"
                    data-bgcolor="#dcdcdc"
                    alt="hyundai-department"
                    className="showedLoaded"
                  />
                </div>
              </figure>
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;

  .o-background {
    height: 600px;
    position: absolute;
    top: 0;
    z-index: -2;
    width: 100%;
    overflow: hidden;
  }

  .wrap {
    position: relative;
    height: auto;
    overflow: visible;

    .h1 {
      color: #fff;
      -webkit-transition: color 0.4s;
      transition: color 0.4s;
    }

    .contentsShowcase {
      position: relative;
      width: 100%;
      height: auto;
      overflow: hidden;

      .showcase-wrap {
        position: relative;

        .showcase-navi {
          position: fixed;
          z-index: 11;
          left: 4.5%;
          top: 29%;
          width: 217px;

          .navigator {
            left: -68px;
            display: none;
            position: absolute;
            left: -90px;
            transform: rotate(270deg);
            -webkit-transform: rotate(270deg);
            -ms-transform: rotate(270deg);

            a {
              transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
              -ms-transition: transform 0.7s ease-in-out,
                opacity 0.7s ease-in-out;
              font-size: 11px;
              font-family: "YoonGothicPro770";
              opacity: 1;
              transform: translate(0, 0);
              -ms-transform: translate(0, 0);
              -webkit-transform: translate(0, 0);
              display: inline-block;
              overflow: hidden;
              position: relative;
              margin: 0 12px;
              padding-bottom: 5px;
              color: #fff;
            }

            a:first-of-type {
              transition-delay: 0.1s;
              -ms-transition-delay: 0.1s;
            }
          }
        }

        .sectionFirst {
          opacity: 1;
          visibility: visible;
          background: transparent;
          z-index: 10;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;

          .section-body {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 3;
            will-change: clip;

            .title {
              height: auto;
              margin-left: 19%;
              bottom: 12.6%;
              width: 69%;
              display: block;
              position: absolute;
              z-index: 1;
              color: #fff;

              .subtitle {
                font-size: 12px;
                font-family: "YoonGothicPro770";
                display: block;
                margin-bottom: 8px;
              }

              h2 {
                opacity: 1;
                margin-left: 0%;
                color: transparent;
                -webkit-text-stroke: 1px #fff;
                font-size: 28px;
                line-height: 1.64;
                font-family: "YoonGothicPro770";
                width: 100%;
                color: #fff;

                strong {
                  white-space: nowrap;
                  color: transparent;
                }
              }

              .mores {
                opacity: 0.7;
                margin-left: 0%;
              }
            }
          }

          .o-imgLoaded {
            background-color: transparent;
            width: 100vw;
            height: 100vw;
            margin-left: 0px;
            margin-top: -1vw;

            @media screen and (max-width: 100vh) {
              width: 100vh;
              height: 100vh;
              margin-left: calc (100vh / 100vw * -100%);
              margin-top: 0px;
            }

            .showedLoaded {
              display: block;
              width: 100% !important;
              height: auto !important;
              position: relative;
            }
          }
        }
      }
    }
  }
`;

export default Home;
