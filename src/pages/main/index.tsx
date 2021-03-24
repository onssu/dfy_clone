import React from "react";
import styled from "styled-components";
import loadable from "@loadable/component";
import Aos from "aos";
import "aos/dist/aos.css";

import hyundai from "common/image/showcase_hyundai-department.jpeg";
import loivie from "common/image/showcase_loivie.jpeg";
import ncsoft644 from "common/image/showcase_ncsoft644.jpeg";
import budspro from "common/image/showcase_samsung-galaxy-buds-pro.jpeg";
import galaxys21ultra from "common/image/showcase_samsung-galaxy-s21-ultra.jpeg";
import galaxys21 from "common/image/showcase_samsung-galaxy-s21.jpeg";

const Header = loadable(() => import("components/main/Header"));
const Footer = loadable(() => import("components/main/Footer"));
const PageNum = 6;
const ClientWidth = document.documentElement.clientWidth;
const ClientHeight = document.documentElement.clientHeight;

const Home: React.FC = () => {
  Aos.init();

  const showcase = [
    {
      img: hyundai,
      subtitle: "프로젝트 — 현대백화점",
      title: "트렌드 플랫폼으로 전환한",
      _title: "더현대 서울",
    },
    {
      img: loivie,
      subtitle: "프로젝트 — LOiViE",
      title: "Holistic Drop in a Moment",
      _title: "LOiViE",
    },
    {
      img: ncsoft644,
      subtitle: "프로젝트 — NCSOFT",
      title: "엔씨소프트의 캐릭터 전문 플랫폼 & 크리에이티브 스튜디오 644",
      _title: "NCSOFT",
    },
    {
      img: budspro,
      subtitle: "프로젝트 — 삼성전자",
      title: "갤럭시 버즈 프로를 소개합니다",
      _title: "Samsung Galaxy Buds Pro",
    },
    {
      img: galaxys21ultra,
      subtitle: "프로젝트 — 삼성전자",
      title: "디자인, 혁명적 변화의 시작",
      _title: "Samsung Galaxy S21 Ultra 5G",
    },
    {
      img: galaxys21,
      subtitle: "프로젝트 — 삼성전자",
      title: "세상이 주목할만한 혁신",
      _title: " Samsung Galaxy S21 | S21+ 5G",
    },
  ];

  return (
    <Container>
      <Header />
      <H1>쇼케이스</H1>
      <Navigator>
        <a>프로젝트 의뢰</a>
        <a>채용정보</a>
      </Navigator>
      {/* showcase section start */}
      <Showcase>
        {showcase.map((obj: any, index: number) => (
          <Section key={index}>
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
                </Title>
                <Mores>프로젝트 보기</Mores>
              </TitleWrap>
            </div>
          </Section>
        ))}
      </Showcase>
      {/* showcase section end & page */}
      <ScrollText>Scroll down</ScrollText>
      <Paging>
        <CurrentPage></CurrentPage>
        <TotalPage></TotalPage>
      </Paging>

      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const H1 = styled.h1`
  position: fixed;
  color: #fff;
  z-index: 11;
  left: 90.6%;
  top: 107px;
  transform: rotate(90deg);
  transform-origin: left top;
  -webkit-transform: rotate(90deg);
  -webkit-transform-origin: left top;
  -ms-transform: rotate(90deg);
  -ms-transform-origin: left top;
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
`;

const Showcase = styled.div`
  width: calc(${PageNum}px * ${ClientHeight}px);
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
  width: 50%;
  margin-left: 30.9%;
  bottom: 19.5%;
  z-index: 1;
  color: #fff;
`;

const SubTitle = styled.span`
  font-size: 12px;
`;

const Title = styled.h2`
  font-size: 42px;
  line-height: 1.62;
  opacity: 1;
  margin-left: 0%;
  z-index: 1;

  strong {
    white-space: nowrap;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
  }
`;

const Mores = styled.p`
  font-size: 12px;
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
`;

const Paging = styled.div``;

const CurrentPage = styled.span``;

const TotalPage = styled.span``;

export default Home;
