import * as S from "./Header.style";

const Header = () => {
  return (
    <S.HeaderWrap>
      <div>캘린더</div>
      <S.HeaderInfo>
        <S.UserSelect>
          <span>유저선택</span>
          <select>
            <option value="user1">user1</option>
            <option value="user2">user2</option>
            <option value="user3">user3</option>
          </select>
        </S.UserSelect>
        <S.UserInfo>user 1</S.UserInfo>
      </S.HeaderInfo>
    </S.HeaderWrap>
  );
};

export default Header;
