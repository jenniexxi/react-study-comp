import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 768px;
  height: 80px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const UserSelect = styled.div`
  margin-right: 30px;
  span {
    font-size: 16px;
    font-weight: 500;
    margin-right: 10px;
  }
  select {
    width: 100px;
    height: 36px;
    border-radius: 3px;
    border: 1px solid #ccc;
    padding-left: 5px;
    font-size: 16px;
  }
`;
export const UserInfo = styled.div`
  font-weight: bold;
`;

export const LogOut = styled.button`
  margin-left: 20px;
  border: 1px solid #ccc;
  font-size: 14px;
`;
