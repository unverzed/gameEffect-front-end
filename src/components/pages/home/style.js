import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
  overflow-x: hidden;
  overflow-y: hidden;

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 20px;
    @media (min-width: 900px) {
      margin-left: calc(10px + 30px);
      font-size: 35px;
      margin-bottom: 15px;
    }
  }

  h4 {
    font-size: 40px;
    margin-left: calc(10px + 30px);
    color: white;
    font-weight: bold;
    font-size: 40px;
    margin-left: calc(10px + 30px);
    font-family: "poppins";
    margin-top: 10px;
  }

  .rpgs {
    margin-left: 20px;
    font-size: 25px;

    @media (min-width: 900px) {
      font-size: 25px;
      margin-left: calc(10px + 30px);
    }
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(99, 179, 182);
  background: linear-gradient(
    0deg,
    rgba(99, 179, 182, 1) 4%,
    rgba(106, 186, 190, 1) 41%,
    rgba(154, 231, 239, 1) 91%
  );
  width: 198.23px;
  height: 270px;
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  justify-content: flex-end;

  .link {
    text-decoration: none;
  }
  img {
    border-radius: 10px;
    margin-top: 10px;
    width: 160px;
    height: 200px;
    position: relative;
    z-index: 1;
    overflow: auto;
    position: absolute;
    top: -20px;
  }

  h2 {
    margin-top: 5px;
    padding-bottom: 5px;
    color: white;
    font-family: "Poppins";
    margin-bottom: 5px;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    text-shadow: 0px 4px 4px rgb(24 2 2 / 25%);
  }

  h3 {
    font-weight: bold;
    color: black;
    text-align: center;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;
const Cards = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  height: 100%;
  gap: 15px;
  margin-left: 20px;
  flex-direction: row;
  padding: 10px 0;
  @media (min-width: 900px) {
    margin-left: 30px;
  }

  a {
    text-decoration: none;
  }
`;

const Jrpgs = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 15px;
  width: 100%;
  height: 100%;
  flex-direction: row;
  margin-left: 20px;
  @media (min-width: 900px) {
    width: 50%;
    margin-left: 30px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 30px;
    width: 100%;
    height: 100%;
    flex-direction: row;
  }

  a {
    text-decoration: none;
  }

  img {
    border-radius: 10px;
    margin-top: 10px;
    width: 160px;
    height: 200px;
  }
`;

export { Div, Background, Cards, Jrpgs };
