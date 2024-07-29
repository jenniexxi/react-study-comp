import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoardContainer = styled.div`
  padding: 40px 0 80px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

export const BoardCategory = styled.div``;

export const BoardInfo = styled.div`
  padding: 22px 0 40px;
  display: flex;
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const InfoBox = styled.div``;

export const InfoTop = styled.div`
  margin-bottom: 1.5px;
  img {
    vertical-align: middle;
    margin-left: 4px;
  }
`;

export const InfoBottom = styled.div`
  span {
    font-size: 10px;
    color: #7e8292;
  }
`;

export const BoardContents = styled.div`
  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  z-index: 100;
  padding-top: 100px;
`;

export const BtnBox = styled.div`
  text-align: right;
  margin-bottom: 12px;
  a, button {
    display: inline-block;
    width: 52px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    cursor: pointer;
    text-align: center;
  }
`;

export const BtnUpdate = styled(Link)`
  border: 1px solid ${({ theme }) => theme.lightversion.primary};
  background-color: ${({ theme }) => theme.lightversion.background};
  margin-right: 3px;
  color: ${({ theme }) => theme.lightversion.fontPrimary};
`;

export const BtnDelete = styled.button`
  border: 1px solid ${({ theme }) => theme.lightversion.background};
  background-color: ${({ theme }) => theme.lightversion.primary};
  color: ${({ theme }) => theme.lightversion.background};
`;
