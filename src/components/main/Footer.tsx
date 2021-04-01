import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  const menu = [
    {
      link: "https://naver.com",
      text: "프로젝트",
    },
    {
      link: "https://naver.com",
      text: "프로젝트",
    },
    {
      link: "https://naver.com",
      text: "프로젝트",
    },
    {
      link: "https://naver.com",
      text: "프로젝트",
    },
  ];

  return (
    <Container>
      <MenuWrap>
        <Menus>
          <ul>
            {menu.map((obj: any, index: number) => (
              <li key={index}>
                <a href={obj.link}>{obj.text}</a>
              </li>
            ))}
          </ul>
        </Menus>

        <CopyRight>
          <p>
            <span>© DFY Inc.</span>
            <span>DEFY THE CURRENT™</span>" All rights reserved. "
          </p>
        </CopyRight>
      </MenuWrap>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  height: 196px;
  position: relative;
  bottom: 0;
  z-index: 4;
  overflow: hidden;
  background: transparent;
`;

const MenuWrap = styled.div`
  padding-top: 100px;
  padding-left: 30.9%;
`;

const Menus = styled.nav`
  overflow: hidden;
  margin-left: -12px;
  li {
    float: left;

    a {
      padding: 6px 12px 6px 13px;
      font-family: "YoonGothicPro770";
      font-size: 11px;
      line-height: 1.64;
      font-weight: normal;
    }
  }
`;

const CopyRight = styled.div`
  margin-top: 16px;
  p {
    font-family: "Replica-Bold";
    font-size: 12px;
    line-height: 18px;
    span {
      display: inline-block;
    }
  }
`;

export default Footer;
