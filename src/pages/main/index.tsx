import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loadable from "@loadable/component";
import ReactPageScroller from "react-page-scroller";
import { throttle } from "throttle-typescript";
import Aos from "aos";
import "aos/dist/aos.css";

import hyundai from "common/image/showcase_hyundai-department.jpeg";
import loivie from "common/image/showcase_loivie.jpeg";
import ncsoft644 from "common/image/showcase_ncsoft644.jpeg";
import budspro from "common/image/showcase_samsung-galaxy-buds-pro.jpeg";
import galaxys21ultra from "common/image/showcase_samsung-galaxy-s21-ultra.jpeg";
import galaxys21 from "common/image/showcase_samsung-galaxy-s21.jpeg";
import { dir } from "node:console";

const Header = loadable(() => import("components/main/Header"));
const Footer = loadable(() => import("components/main/Footer"));
const PageNum = 6;
const clientHeight = document.documentElement.clientHeight;

const Home: React.FC = () => {
  Aos.init();

  const scrollFn = () => {
    window.scrollTo({
      top: clientHeight * page,
      left: 0,
      behavior: "smooth",
    });
  };

  let page = 0;

  const changePage = (direction: any) => {
    console.log(direction);
    if (direction > 0 && page < PageNum) {
      page += 1;
      scrollFn();
    } else if (direction < 0 && page > 0) {
      page -= 1;
      scrollFn();
    }
  };

  const wheelFn = (event) => {
    changePage(event.deltaY);
  };

  const onWheelThrottled = React.useMemo(() => throttle(wheelFn, 1000), []);

  const ShowcaseArray = [
    {
      page: 1,
      img: hyundai,
      subtitle: "프로젝트 — 현대백화점",
      title: "트렌드 플랫폼으로 전환한",
      _title: "더현대 서울",
    },
    {
      page: 2,
      img: loivie,
      subtitle: "프로젝트 — LOiViE",
      title: "Holistic Drop in a Moment",
      _title: "LOiViE",
    },
    {
      page: 3,
      img: ncsoft644,
      subtitle: "프로젝트 — NCSOFT",
      title: "엔씨소프트의 캐릭터 전문 플랫폼 & 크리에이티브 스튜디오 644",
      _title: "NCSOFT",
    },
    {
      page: 4,
      img: budspro,
      subtitle: "프로젝트 — 삼성전자",
      title: "갤럭시 버즈 프로를 소개합니다",
      _title: "Samsung Galaxy Buds Pro",
    },
    {
      page: 5,
      img: galaxys21ultra,
      subtitle: "프로젝트 — 삼성전자",
      title: "디자인, 혁명적 변화의 시작",
      _title: "Samsung Galaxy S21 Ultra 5G",
    },
    {
      page: 6,
      img: galaxys21,
      subtitle: "프로젝트 — 삼성전자",
      title: "세상이 주목할만한 혁신",
      _title: " Samsung Galaxy S21 | S21+ 5G",
    },
  ];

  return (
    <Container onWheel={onWheelThrottled}>
      <Header />
      <H1>쇼케이스</H1>
      <Navigator>
        <a>프로젝트 의뢰</a>
        <a>채용정보</a>
      </Navigator>
      {/* showcase */}
      <Showcase>
        {ShowcaseArray.map((obj: any, index: number) => (
          <Wrap key={index}>
            <Section>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <Mask />
                <Background>
                  <img src={obj.img} />
                </Background>
                <TitleWrap>
                  <SubTitle>{obj.subtitle}</SubTitle>
                  <Title>
                    {obj.title}
                    <strong>{obj._title}</strong>
                    {obj.page}
                  </Title>
                  <Mores>프로젝트 보기</Mores>
                </TitleWrap>
              </div>
            </Section>
            {/* page */}
            <ScrollText>Scroll down</ScrollText>
            <Paging>
              <CurrentArea>
                <CurrentPage>{obj.page}</CurrentPage>
              </CurrentArea>
              <TotalArea>
                /<TotalPage>{PageNum}</TotalPage>
              </TotalArea>
            </Paging>
          </Wrap>
        ))}
      </Showcase>

      {/* Control Button */}
      <ControlArea>
        <Control>
          <PreBtn>
            <img
              src="//cdn.dfy.co.kr/images/ic-navi-up-white.svg"
              alt=""
              tabindex=""
            />
          </PreBtn>
          <NextBtn>
            <img
              src="//cdn.dfy.co.kr/images/ic-navi-down-white.svg"
              alt=""
              tabindex=""
            />
          </NextBtn>
        </Control>
      </ControlArea>

      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const H1 = styled.h1`
  font-size: 18px;
  position: fixed;
  color: #fff;
  z-index: 11;
  left: 90.6%;
  top: 107px;
  height: 40px;
  margin-left: 40px;
  line-height: 40px;
  white-space: nowrap;
  text-align: left;
  transform: rotate(90deg);
  transform-origin: left top;
  -webkit-transform: rotate(90deg);
  -webkit-transform-origin: left top;
  -ms-transform: rotate(90deg);
  -ms-transform-origin: left top;
  @media screen and (max-width: ${clientHeight}px) {
    display: none;
  }
`;

const Navigator = styled.nav`
  z-index: 11;
  position: fixed;
  top: 29%;
  transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  a {
    display: inline-block;
    overflow: hidden;
    position: relative;
    margin: 0 12px;
    padding-bottom: 5px;
    color: #fff;
  }
  @media screen and (max-width: ${clientHeight}px) {
    display: none;
  }
`;

const Wrap = styled.div``;

const Showcase = styled.div`
  width: calc(${PageNum}px * ${clientHeight}px);
`;

const Section = styled.div``;

const Mask = styled.span`
  opacity: 0.11;
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: #000;
`;

const Background = styled.div`
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const TitleWrap = styled.a`
  display: block;
  position: absolute;
  height: 270px;
  width: 50%;
  margin-left: 30.9%;
  bottom: 19.5%;
  z-index: 1;
  color: #fff;
  @media screen and (max-width: ${clientHeight}px) {
    width: 69%;
    height: auto;
    margin-left: 19%;
    bottom: 12.6%;
  }
`;

const SubTitle = styled.span`
  font-size: 12px;
`;

const Title = styled.h2`
  font-size: 4.5vw;
  line-height: 1.62;
  opacity: 1;
  margin-left: 0%;
  z-index: 1;

  strong {
    white-space: nowrap;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
  }

  @media screen and (max-width: ${clientHeight}px) {
    font-size: 28px;
  }
`;

const Mores = styled.p`
  font-size: 11px;
`;

const ScrollText = styled.p`
  margin-bottom: 0px;
  right: -11px;
  bottom: 16.54%;
  position: fixed;
  z-index: 11;
  bottom: 6.4%;
  right: 3.5%;
  width: 66px;
  height: 18px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  transform: rotate(-270deg);
  -webkit-transform: rotate(-270deg);
  -ms-transform: rotate(-270deg);

  @media screen and (max-width: ${clientHeight}px) {
    right: -11px;
    bottom: 16.54%;
  }
`;

const Paging = styled.div`
  margin-bottom: 0px;
  overflow: hidden;
  position: fixed;
  z-index: 11;
  right: 11.71875%;
  bottom: 2.7%;
  height: 65px;
  width: 70px;
  font-size: 18px;
  font-family: "Circular-Medium";
  color: #fff;
`;

const CurrentArea = styled.span`
  top: 6px;
  height: 54px;
  overflow: hidden;
  position: absolute;
  right: 25%;
`;

const CurrentPage = styled.span`
  margin-top: 0px;
  font-size: 54px;
  display: absolute;
  vertical-align: bottom;
`;

const TotalArea = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const TotalPage = styled.span``;

const ControlArea = styled.div`
  margin-bottom: 0px;
  position: fixed;
  bottom: 4.2%;
  z-index: 11;
  width: 100%;
  height: 38px;
  @media screen and (max-width: ${clientHeight}px) {
    bottom: 2.6%;
    height: 22px;
  }
`;

const Control = styled.div`
  position: absolute;
  left: 30.9%;
  margin-left: -50px;
`;

const PreBtn = styled.button`
  width: 24px;
  height: 24px;
  img {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
  }
`;

const NextBtn = styled.button``;

export default Home;
