import styled, { css } from "styled-components";

export const BoardListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const MainTabList = styled.div``;

export const TabWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #e5e9ef;
`;

export const TabWrapperIn = styled.div`
  width: 768px;
  margin: 0 auto;
  display: flex;
  gap: 16px;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #e5e9ef;
`;

export const CategoryWrapperIn = styled.div`
  width: 768px;
  margin: 0 auto;
  display: flex;
  gap: 8px;
  padding: 12px 0;
`;

export const CategoryTab = styled.div<{ selected: boolean }>`
  padding: 6.5px 12px;
  border-radius: 20px;
  cursor: pointer;
  ${(props) =>
    props.selected
      ? css`
          border: 1px solid #202434;
          background-color: #202434;
          color: #fff;
        `
      : css`
          background-color: #fff;
          border: 1px solid #e5e9ef;
        `};
`;

export const MainTabItem = styled.li<{ selected: boolean }>`
  color: ${(props) => (props.selected ? "#202434" : "#adb2c4")};
  font-weight: ${(props) => (props.selected ? "bold" : "500")};
  border-bottom: ${(props) =>
    props.selected ? "2px solid #202434" : "2px solid transparent"};
  font-size: 18px;
  height: 52px;
  line-height: 52px;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  max-width: 768px;
  margin: 40px auto 16px;
  input {
    width: 100%;
    height: 48px;
    background-color: #f4f6f8;
    border-radius: 16px;
    color: #728292;
    border: 1px solid #f4f6f8;
    padding-left: 35px;
    font-size: 16px;
  }
`;

export const ListContainer = styled.div`
  background-color: #f4f6f8;
  padding: 8px 0 232px;
`;

export const ListItemContainer = styled.div`
  background-color: #fff;
  display: flex;
  width: 768px;
  margin: 0 auto 8px;
  padding: 20px;
  gap: 80px;
  justify-content: space-between;
`;

// ListBox 를 공통으로 받는다고 생각하면 아래와 같이 할 수 있음
// export const ListBox = styled.div``;
// export const LeftListBox = styled(ListBox)``

export const LeftListBox = styled.div``;

export const RightListBox = styled.div`
  text-align: right;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  i {
    width: 28px;
    height: 28px;
    background-color: #f4f6f8;
    border-radius: 50%;
  }
`;

export const ListConts = styled.div`
  margin: 16px 0 23px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  p {
    line-height: 1.5;
  }
`;

export const Reaction = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const BoxItem = styled.div`
  display: flex;
  align-items: center;
`;

export const IconBox = styled.span`
  img {
  }
`;

export const Text = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #7e8292;
  margin-left: 3px;
`;

export const PostTime = styled.div`
  font-size: 12px;
  color: #7e8292;
`;

export const ImgConts = styled.img`
  margin: 21px 0 16px;
  width: 88px;
  height: 88px;
  border-radius: 12px;
`;

export const Category = styled.div``;

export const CategoryType = styled.div`
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  border-radius: 8px;
  text-align: center;
`;

export const TypeFinance = styled(CategoryType)`
  background-color: #e6f9f1;
  color: #11a064;
`;
