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
      <div className="max-width">
        <div className="max-area">
          <nav className="menus">
            <ul>
              {menu.map((obj: any, inx: number) => (
                <a key={inx} href={obj.link}>
                  {obj.text}
                </a>
              ))}
            </ul>
          </nav>
          <div className="copyright">
            <p>
              <span>© DFY Inc.</span>
              <span>DEFY THE CURRENT™</span>" All rights reserved. "
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  height: 160px;
  position: relative;
  bottom: 0;
  z-index: 4;
  overflow: hidden;
  background: transparent;

  .max-width {
    width: 100%;
    margin: 0 auto;

    .max-area {
      padding-top: 100px;
      padding-left: 30.9%;

      @media screen and (max-width: 768px) {
        padding-top: 62px;
        padding-left: 11.87%;
      }

      .menus {
        display: none;
        margin-left: -12px;
      }

      .copyright {
        width: 130px;
        margin-top: 16px;

        p {
          font-family: "Replica-Bold";
          font-size: 12px;
          line-height: 18px;

          span {
            display: inline-block;
          }
        }
      }
    }
  }
`;

export default Footer;
