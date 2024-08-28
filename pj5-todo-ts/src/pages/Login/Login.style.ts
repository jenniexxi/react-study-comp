import { Link } from "react-router-dom";
import styled from "styled-components";

export const LgoinWrap = styled.div`
  width: 100%;
  max-width: 768px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
`;

export const LoginForm = styled.form`
  width: 360px;
  margin: 50px auto 0;
  ul {
    text-align: left;
    padding-bottom: 20px;
    li {
      margin-bottom: 10px;
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
        margin-bottom: 10px;
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
    margin-top: 10px;
  }
`;

export const DescText = styled(Link)`
  color: ${({ theme }) => theme.lightversion.fontSecondary};
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.lightversion.fontSecondary};
  }
`;

export const ErrorMsg = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.lightversion.error};
  margin-top: -5px;
  padding-bottom: 2px;
`;

