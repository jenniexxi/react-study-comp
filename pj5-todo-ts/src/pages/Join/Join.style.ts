import styled from "styled-components";

export const JoinWrap = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
`;

export const JoinForm = styled.form`
  width: 360px;
  margin: 50px auto 0;
  ul {
    text-align: left;
    li {
      margin-bottom: 20px;
      label {
        display: block;
        margin-bottom: 10px;
        font-weight: 500;
      }
      input {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #d9d9d9;
        padding-left: 10px;
      }
    }
  }
  button {
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.lightversion.primary};
    font-size: 18px;
    color: #fff;
    margin-top: 20px;
  }
`;
