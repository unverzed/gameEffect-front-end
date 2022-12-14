import styled from "styled-components";

const UserPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(30px + 15px);
  gap: 15px;
  overflow-x: hidden;
  overflow-y: hidden;

  .icon {
    width: 104px;
    height: 104px;
    border: none;
    border-radius: 100%;
  }

  h1 {
    font-size: 30px;
    font-family: "Oswald";
    color: white;
    font-weight: 500;
  }

  h2 {
    font-size: 14px;
    font-family: "Poppins";
    color: white;
  }

  .recent {
    margin-left: 30px;
    font-size: 24px;
    font-family: "Poppins";
    font-weight: bold;
    color: white;
    width: 100%;
    @media (min-width: 900px) {
      font-size: 20px;
      margin-left: 50px;
      text-align: center;
    }
  }

  h3 {
    font-size: 24px;
    font-family: "Poppins";
    font-weight: bold;
    color: white;
    width: 100%;
    margin-left: 30px;

    @media (min-width: 900px) {
      font-size: 30px;
      text-align: center;
    }
  }

  h4 {
    font-family: "Poppins";
    font-weight: bold;
    color: white;
    width: 100%;
    font-size: 20px;
    @media (min-width: 900px) {
      font-size: 30px;
    }
  }

  h5 {
    text-align: center;
    color: white;
    font-weight: bold;
    overflow: hidden;
    white-space: pre-line;
    word-wrap: break-word;
    font-size: 13px;
    text-shadow: 0px 4px 4px rgb(24 2 2 / 25%);
  }

  .image {
    height: 143px;
    border-radius: 10px;
    width: 110px;
  }
`;

const Edit = styled.button`
  display: flex;
  border: none;
  width: 70px;
  height: 25px;
  background-color: #9aa9d8;
  border-radius: 100px;
  font-size: 15px;
  font-family: "Poppins";
  text-align: center;
  justify-content: center;
  color: black;
`;

const Form = styled.form`
  width: 200px;
  height: 130px;
  background-color: black;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  input {
    height: 40px;
    background-color: #9aa9d8;
    text-align: center;
    border: none;
    width: 200px;

    ::placeholder {
      color: black;
    }
  }

  button {
    margin-top: 10px;
    width: 80px;
    height: 20px;
    background-color: #ab69ac;
    border-radius: 10px;
    border: none;
    padding-bottom: 10px;
    text-align: center;
    font-weight: bold;
    color: white;
  }
`;

const Favorites = styled.div`
  display: flex;
  gap: 10px;
`;

const RecentActivities = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  padding-right: 30px;
  gap: 20px;

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .all {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .recent-image {
    border-radius: 10px;
    position: relative;
    width: 150px;
    height: 150px;
    bottom: 10px;
  }

  .card {
    background: rgb(171, 105, 172);
    background: linear-gradient(
      0deg,
      rgba(171, 105, 172, 1) 11%,
      rgba(154, 169, 216, 1) 90%
    );
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-wrap: break-word;
    height: 180px;
    width: 170px;
    position: static;
    margin-top: 10px;
    justify-content: flex-start;
  }

  .star-recent {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
  }

  .star {
    width: 30px;
    height: 25px;
    color: #f2f536;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  .cancel {
    background-color: beige;
    width: 70px;
    height: 20px;
    color: black;
  }
`;

export { UserPage, Edit, Form, Favorites, RecentActivities, Buttons };
