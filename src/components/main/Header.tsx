import React from "react";
import styled from "styled-components";

const clientHeight = document.documentElement.clientHeight;

const Header: React.FC = () => {
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

  const lmenu = [
    {
      link: "https://naver.com",
      text: "인스타",
    },
    {
      link: "https://naver.com",
      text: "페북",
    },
    {
      link: "https://naver.com",
      text: "ㅇㅇ",
    },
    {
      link: "https://naver.com",
      text: "ㄴㄴ",
    },
  ];

  return (
    <Container>
      <Logo>
        <svg
          className="logo-full"
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="60"
          viewBox="0 0 344 115"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="#ffffff"
              d="M18.255 40.225H12.06l-.688-.692V9.08l.688-.692h6.194c9.634 0 13.074 4.845 13.074 15.918 0 11.074-3.44 15.919-13.074 15.919zM17.567.082H2.427l-.688.692v47.064l.688.692h15.14c17.203 0 23.396-8.997 23.396-24.224C40.963 9.08 34.77.082 17.567.082zm146.108 0h-4.817l-1.376.692-11.01 18.688h-1.376L134.086.774 132.71.082h-4.818l-.688.692v6.922l13.763 22.84v17.302l.688.692h8.258l.688-.692V30.536l13.762-22.84V.774l-.688-.692zm-72.27 0l-.688.692v47.064l.688.692h8.259l.688-.692V29.151l.688-.692h19.956l.688-.692v-6.922l-.688-.691H101.04l-.688-.692V9.08l.688-.692h21.332l.688-.692V.774l-.688-.692H91.405z"
            ></path>
            <path
              fill="#ffffff"
              fillOpacity=".12"
              d="M82.147 47.838v-6.92l-.688-.694h-22.71l-.687-.692V28.46l.688-.692h21.333l.688-.692v-6.922l-.688-.692H58.75l-.688-.692V9.08l.688-.693h22.709l.688-.691V.775l-.688-.693H49.116l-.688.693v47.063l.688.692h32.343l.688-.692zm243.722 17.725l-.23.23v1.385l.23.23h2.294l.229.232v5.997l.23.231h1.605l.23-.23V67.64l.228-.231h2.294l.23-.231v-1.384l-.23-.231h-7.11zm17.662 0h-2.064l-.23.23-2.064 5.307h-.23l-2.064-5.306-.23-.231h-2.064l-.229.23v7.844l.229.231h1.606l.23-.23v-3.461h.229l1.376 3.46.23.231h1.605l.229-.23 1.377-3.461h.229v3.46l.23.231h1.605l.23-.23v-7.844l-.23-.231zm-61.493.043l-.688.692v6.921l.688.692h13.763l.688.692v38.759l.689.691h8.257l.688-.691V74.603l.688-.692h13.763l.688-.692v-6.921l-.688-.692h-38.536zm-16.765 0l-.688.692v31.836h-.688l-18.58-31.836-1.375-.692h-9.634l-.688.692v47.064l.688.691h8.257l.689-.691V81.525h.688l18.58 31.837 1.375.691h9.635l.688-.691V66.298l-.688-.692h-8.259zm-73.171 0l-.688.692v47.064l.688.691h32.342l.688-.691v-6.922l-.688-.692h-22.709l-.688-.692V93.982l.688-.692h21.333l.688-.693v-6.92l-.688-.692h-21.333l-.688-.692v-9.69l.688-.692h22.709l.688-.692v-6.921l-.688-.692h-32.342zm-24.306 20.763H154.72l-.688-.692V74.603l.688-.692h13.075c4.129 0 6.88 1.384 6.88 6.229 0 4.845-2.751 6.229-6.88 6.229zm16.515-6.229c0-9.69-6.881-14.534-16.515-14.534h-22.709l-.688.692v47.064l.688.691h8.258l.688-.691V95.366l.688-.692h6.881l1.376.692 13.764 17.996 1.376.691h4.129l.688-.691v-6.922l-8.946-11.766v-.692c5.505-1.385 10.322-6.228 10.322-13.842zm-63.53 6.229h-13.075l-.688-.692V74.603l.688-.692h13.076c4.128 0 6.881 1.384 6.881 6.229 0 4.845-2.753 6.229-6.881 6.229zm16.516-6.229c0-9.69-6.882-14.534-16.515-14.534H98.073l-.688.692v47.064l.688.691h8.257l.688-.691V95.366l.688-.692h6.883l1.376.692 13.762 17.996 1.376.691h4.13l.687-.691v-6.922l-8.945-11.766v-.692c5.505-1.385 10.322-6.228 10.322-13.842zm-57.24-14.534l-.688.692v29.068c0 6.922-2.753 11.074-9.634 11.074s-9.774-4.152-9.774-11.074V66.298l-.69-.692h-8.256l-.688.692v29.068c0 12.459 7.021 19.38 19.408 19.38 12.386 0 19.268-6.921 19.268-19.38V66.298l-.689-.692h-8.257zm-56.66 7.613c5.505 0 8.946 2.076 10.322 6.23l.688.691h8.258l.688-.692c-1.377-8.997-8.946-14.534-19.957-14.534C8.258 64.914 0 75.294 0 89.829c0 14.534 8.258 24.916 23.396 24.916 11.01 0 18.58-5.537 19.957-15.226l-.688-.692h-8.258l-.688.692c-1.376 4.844-4.817 6.92-10.323 6.92-9.633 0-13.762-6.92-13.762-16.61 0-9.689 4.13-16.61 13.762-16.61zM288.276.082l-.687.693v47.063l.688.692h32.341l.688-.692v-6.92l-.688-.694h-22.708l-.688-.692V28.46l.688-.692h21.332l.688-.692v-6.922l-.688-.692h-21.332l-.688-.692V9.08l.688-.693h22.708l.688-.691V.775l-.688-.693h-32.341zm-18.107 0l-.688.693v17.994l-.688.692h-18.58l-.687-.692V.775l-.69-.693h-8.257l-.688.693v47.063l.688.692h8.258l.689-.692v-19.38l.688-.691h18.58l.687.692v19.379l.688.692h8.259l.688-.692V.775l-.688-.693h-8.259zm-76.61 0l-.688.693v6.92l.688.692h13.762l.688.693v38.758l.688.692h8.258l.688-.692V9.08l.688-.693h13.763l.688-.691V.775l-.688-.693H193.56z"
            ></path>
          </g>
        </svg>
      </Logo>
      <MobileLogo>
        <svg
          class="logo-abbr"
          width="61"
          height="16"
          viewBox="0 0 61 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.0981 0L44.2895 7.78372L49.5692 0H53.3333L45.902 10.5868V16H42.6773V10.6222L35.2279 0H39.0981ZM8.40718 0C13.7315 0 16.8974 2.31549 16.8974 7.99989C16.8974 13.6274 13.7945 15.9531 8.56625 15.9991L8.40718 15.9998H0V0H8.40718ZM33.7061 0V2.73766H22.5333V6.85705H33.0801V9.47236H22.5333V15.9998H19.3096V0H33.7061ZM8.27348 2.68904H3.22971V13.3107H8.27348C11.7732 13.3107 13.8814 11.7692 13.8814 7.99989C13.8814 4.23053 11.7732 2.68904 8.27348 2.68904Z"
            fill="#ffffff"
          ></path>
          <path
            d="M55.208 0.876712C54.6203 1.46575 54.3333 2.19178 54.3333 3.0274C54.3333 3.86301 54.6203 4.57534 55.208 5.13699C55.7957 5.71233 56.5064 6 57.3401 6C58.1738 6 58.8845 5.71233 59.4722 5.13699C60.0462 4.57534 60.3333 3.86301 60.3333 3.0137C60.3333 2.17808 60.0462 1.46575 59.4722 0.876712C58.8845 0.287671 58.1738 0 57.3401 0C56.5064 0 55.7957 0.287671 55.208 0.876712ZM55.5497 4.83562C55.1123 4.38356 54.8936 3.78082 54.8936 3.0274C54.8936 1.47945 55.8093 0.493151 57.3401 0.493151C58.8708 0.493151 59.7866 1.47945 59.7866 3.0137C59.7866 3.76712 59.5679 4.38356 59.1305 4.83562C58.6932 5.28767 58.0918 5.52055 57.3401 5.52055C56.5884 5.52055 55.987 5.28767 55.5497 4.83562ZM57.9141 3.34247C58.4198 3.23288 58.7342 2.84931 58.7342 2.34247C58.7342 1.75342 58.2558 1.38356 57.5451 1.38356H56.2057V4.46575H56.8344V3.38356H57.4221L58.0235 4.46575H58.8298L58.2558 3.65753L57.9141 3.34247ZM57.6544 1.94521C57.9415 1.94521 58.0918 2.08219 58.0918 2.34247C58.0918 2.64384 57.9551 2.79452 57.6818 2.79452H56.8344V1.94521H57.6544Z"
            fill="#ffffff"
          ></path>
        </svg>
      </MobileLogo>

      <MaxArea>
        <Title>HELLO</Title>
      </MaxArea>

      <Hamburger>
        <Ohamburger>
          <LineH />
          <WordM>
            <A>M</A>
          </WordM>
          <WordE>
            <A>E</A>
          </WordE>
          <WordN>
            <A>N</A>
          </WordN>
          <WordU>
            <A>U</A>
          </WordU>
          <LineV />
        </Ohamburger>
      </Hamburger>

      <Nav>
        <Gnb>
          {menu.map((obj: any, index: number) => (
            <a key={`menu-${index}`} href={obj.link}>
              <span>{obj.text}</span>
            </a>
          ))}
        </Gnb>
        <Lnb>
          <ul>
            {lmenu.map((obj: any, index: number) => (
              <li key={`sub-${index}`}>
                <a href={obj.link}>{obj.text}</a>
              </li>
            ))}
          </ul>
        </Lnb>
      </Nav>

      <Util>{/* <span>DEFY THE CURRENT™</span> */}</Util>
    </Container>
  );
};

const Container = styled.div`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: auto;
`;

const Logo = styled.a`
  top: 32px;
  left: 4.3%;
  width: 127.38px;
  height: 44px;
  z-index: 10;
  position: absolute;

  svg {
    width: 127.38px;
    height: 44px;
  }

  @media screen and (max-width: ${clientHeight}px) {
    display: none;
  }
`;

const MobileLogo = styled.a`
  display: block;
  width: 180.19px;
  height: 60px;
  top: 13px;
  left: 4.56%;

  @media screen and (min-width: ${clientHeight}px) {
    display: none;
  }
`;

const MaxArea = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.p`
  z-index: 10;
  position: absolute;
  color: #fff;
  top: 29px;
  left: 30.9%;
  line-height: 18px;
  text-transform: uppercase;
  transition: opacity 0.25s;

  @media screen and (max-width: ${clientHeight}px) {
    left: 30.93%;
    top: 11px;
  }
`;

const Hamburger = styled.div`
  position: fixed;
  z-index: 10;
  left: 91.8%;
  top: 43px;
  color: #fff;

  @media screen and (max-width: ${clientHeight}px) {
    left: auto;
    right: 4.4%;
    top: 25px;
  }
`;

const Ohamburger = styled.a`
  border-color: #fff;
  background-color: transparent;
  position: relative;
  left: 0;
  top: 0;
  display: block;
  width: 40px;
  height: 40px;
  overflow: visible;
  border: 2px solid #fff;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-transition: background 0.3s linear;
  transition: background 0.3s linear;
  &:hover {
    background-color: #212121;
  }
`;

const LineH = styled.span`
  position: absolute;
`;

const WordM = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 7%;
  top: 6%;
  text-align: center;
  vertical-align: middle;
  &:selected {
    opacity: 0;
  }
  &:after {
    opacity: 1;
    /* content: "H"; */
  }
`;

const WordE = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 1%;
  top: 6%;
  text-align: center;
  vertical-align: middle;
`;

const WordN = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 6%;
  bottom: 2%;
  text-align: center;
  vertical-align: middle;
`;

const WordU = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 1%;
  bottom: 2%;
  text-align: center;
  vertical-align: middle;
`;

const A = styled.span`
  font-size: 12px;
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  opacity: 1;
  text-align: center;
  vertical-align: middle;
`;

const LineV = styled.span`
  position: absolute;
`;

const Nav = styled.nav`
  display: none;
`;

const Gnb = styled.div`
  a {
    opacity: 0;
    left: -10%;
    font-size: 42px;
    line-height: 1.62;
    position: relative;
    display: block;
    span {
      font-size: inherit;
      color: #212121;
    }
  }
`;

const Lnb = styled.ul``;

const Util = styled.div``;

export default Header;
