import { useCookies } from "react-cookie";
import * as S from "./Header.style";
import { USER_COOKIE_KEY } from "../../constant/constant";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // @ts-expect-error
  const [userCookie, setUserCookie, removeUserCookie] = useCookies([
    USER_COOKIE_KEY,
  ]);

  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserCookie(USER_COOKIE_KEY);
    navigate("/");
  };

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
        <S.UserInfo>
          user 1<S.LogOut onClick={handleLogout}>로그아웃</S.LogOut>
        </S.UserInfo>
      </S.HeaderInfo>
    </S.HeaderWrap>
  );
};

export default Header;
