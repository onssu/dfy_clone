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
      <H1>쇼케이스</H1>
      <Navigator>
        <a>프로젝트 의뢰</a>
        <a>채용정보</a>
      </Navigator>
      {/* section start */}
      <Section>
        <Background>
          <img src={bg} />
        </Background>
        {/* title */}
        <TitleWrap>
          <SubTitle>프로젝트 - 현대백화점</SubTitle>
          <Title>
            트렌드 플랫폼으로 전환한
            <strong>더현대 서울</strong>
          </Title>
          <Mores>프로젝트 보기</Mores>
        </TitleWrap>
      </Section>
      {/* section end & page */}
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

const Section = styled.div``;

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

  strong {
    white-space: nowrap;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
  }
`;

const Mores = styled.p`
  font-size: 12px;
`;

const Paging = styled.div``;

const CurrentPage = styled.span``;

const TotalPage = styled.span``;

export default Home;
