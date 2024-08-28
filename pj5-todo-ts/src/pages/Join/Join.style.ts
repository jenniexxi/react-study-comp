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
      margin-bottom: 10px;
      label {
        display: block;
        margin-bottom: 10px;
        font-weight: 500;
      }
      input {
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
    margin-top: 20px;
  }
`;

export const InputItem = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
`;

export const AdressBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 280px;
  }
  button {
    width: 70px;
    height: 40px;
    border-radius: 5px;
    padding: 0;
    font-size: 14px;
    margin: 0 0 10px;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.lightversion.error};
  margin-top: -5px;
  padding-bottom: 2px;
`;