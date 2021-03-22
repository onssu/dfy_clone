import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="wrap">
        <div className="ci">
          <a href="/seoul/">
            <svg className="logo-full"></svg>
            <svg className="logo-abbr"></svg>
          </a>
        </div>

        <figure className="smile-img">
          <a href="/seoul/careers/">
            <img
              src="//cdn.dfy.co.kr/images/showcase_hiring_smile.svg"
              alt=""
            />
          </a>
        </figure>

        <div className="max-area max-width">
          <p className="title">Hello</p>
        </div>

        <div className="hamburger">
          <a href="#menu" className="o-hamburger">
            <span className="lineH"></span>
            <span className="wordM">
              <span className="a">M</span>
            </span>
            <span className="wordE">
              <span className="a">E</span>
            </span>
            <span className="wordN">
              <span className="a">N</span>
            </span>
            <span className="wordU">
              <span className="a">U</span>
            </span>
            <span className="lineV"></span>
          </a>
        </div>

        <nav>
          <div className="gnb"></div>
          <ul className="lnb"></ul>
        </nav>

        <div className="util">
          <span>DEFY THE CURRENT™</span>
        </div>
      </div>

      <div className="gnb-box"></div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  transform: translate3d(0, 0, 0);
  z-index: 999;
  width: 100%;
  height: 1px;
  overflow: visible;

  .wrap {
    position: fixed;
    width: 100%;
    height: auto;

    .title {
      color: #fff;
      left: 30.93%;
      top: 11px;
      position: absolute;
      left: 30.9%;
      top: 38px;
      font-family: "Circular-Bold";
      font-size: 12px;
      line-height: 18px;
      text-transform: uppercase;
      transition: opacity 0.25s;
    }

    nav {
      left: 19.1%;
      padding-top: 17.4vh;
      display: none;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      /* z-index: 9; */
      top: 0;
      left: 30%;
      padding-top: 15vh;
      font-family: "Circular-Medium";
      box-sizing: border-box;
      -webkit-transition: opacity 0.3s linear;
      -ms-transition: opacity 0.3s linear;
      transition: opacity 0.3s linear;
    }

    .hamburger {
      position: fixed;
      z-index: 10;
      top: 43px;
      left: 93%;
      overflow: visible;

      .o-hamburger {
        color: #fff;
        border-color: #fff;
        background-color: transparent;
        position: relative;
        left: 0;
        top: 0;
        display: block;
        width: 40px;
        height: 40px;
        overflow: visible;
        border: 2px solid #212121;
        box-sizing: border-box;
        cursor: pointer;
        -webkit-transition: background 0.3s linear;
        transition: background 0.3s linear;

        span {
          position: absolute;
        }
        .wordM .a {
          left: 7%;
          top: 6%;
        }
        .wordE .a {
          right: 1%;
          top: 6%;

          &:after {
            content: "I";
          }
        }
        .wordN .a {
          left: 6%;
          bottom: 2%;
        }
        .wordU .a {
          right: 1%;
          bottom: 2%;
        }

        .word span.a {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          opacity: 1;
          text-align: center;
        }
      }
    }
  }

  .gnb-box {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    background-color: transparent;
    border: 0 solid #f4f4e7;
    box-sizing: border-box;
    -webkit-transition: border 0.3s ease-in, background 0s linear;
    transition: border 0.3s ease-in, background 0s linear;
  }
`;

export default Header;
