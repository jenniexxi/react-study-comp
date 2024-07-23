import styled from "styled-components";

export const BoardWriteContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const BoardForm = styled.form``;

export const TopTitleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #f4f6f8;
  padding: 54px 0 10px;
`;

export const TopTitleArea = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const BoardCategory = styled.div`
  font-weight: 500;
  margin-bottom: 14px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  button {
    font-weight: bold;
    color: #fff;
    width: 80px;
    height: 40px;
    background-color: #adb2c4;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const ContsWrapper = styled.div`
  padding: 40px 20px 64px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  input {
    width: 100%;
    border-radius: 12px;
    background-color: #f4f6f8;
    font-size: 16px;
    padding-left: 16px;
    border: none;
  }
`;

export const StyleCommon = styled.div`
  margin-bottom: 56px;
`;

export const ContsArea = styled(StyleCommon)`
  div {
    input {
      height: 60px;
    }
  }
`;

export const ContsTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ContsBox = styled.div`
  margin-bottom: 8px;
`;

export const itemBoxLeft = styled.div`
  margin-bottom: 8px;
`;

export const itemBoxRight = styled.div`
  select {
    width: 100%;
    max-width: 360px;
    background-color: #f4f6f8;
    border-radius: 12px;
    height: 60px;
    font-size: 16px;
    color: #5b6072;
    padding-left: 16px;
    &:first-child {
      margin-right: 8px;
    }
  }
`;

export const ContsDesc = styled.p`
  color: #7e8292;
  padding-top: 8px;
  i {
  }
  span {
    font-weight: bold;
  }
`;
export const TagItem = styled.div`
  span {
    display: inline-block;
    padding: 9px 15px 7px 15px;
    border: 1px solid #e5e9ef;
    border-radius: 20px;
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const TextAreaBox = styled.div`
  width: 100%;
  height: 267px;
  border-radius: 12px;
  background-color: #f4f6f8;
  padding: 20px;
  overflow-y: auto;
  position: relative;
`;

export const ContsTextArea = styled.textarea`
  border: none;
  font-size: 16px;
  width: 100%;
  height: 200px;
  background-color: #f4f6f8;
`;

export const CountBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 12px;
`;

export const BeforeText = styled.span``;

export const AfterText = styled.span`
  color: ${({ theme }) => theme.lightversion.fontSecondary};
`;

export const ImageItemList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  li {
    width: 96px;
    height: 96px;
    border-radius: 16px;
    border: 1px solid #e5e9ef;
    position: relative;
    display: flex;
    align-items: center;
    button {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 24px;
      height: 24px;
      background: transparent;
      padding: 0;
      cursor: pointer;
    }
  }
`;

export const ImageDetail = styled.img`
  object-fit: contain;
`;

export const IconInfo = styled.i`
  vertical-align: middle;
  margin-right: 2.5px;
`;

export const ImageAddBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageAdd = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 20px;
    height: 21px;
    margin-right: 3px;
  }
  span {
    height: 21px;
    line-height: 25px;
    color: ${({ theme }) => theme.lightversion.primary};
  }
`;

export const ImageCount = styled.div`
  font-size: 12px;
`;

export const BeforeCount = styled.span`
  color: ${({ theme }) => theme.lightversion.primary};
`;

export const AfterCount = styled.span`
  color: ${({ theme }) => theme.lightversion.fontSecondary};
`;

export const MsgError = styled.p`
  color: ${({ theme }) => theme.lightversion.error};
  font-size: 11px;
  margin: 8px 0 0 5px;
`;
