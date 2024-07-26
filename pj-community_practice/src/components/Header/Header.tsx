import { Link } from "react-router-dom";
import * as S from "./Header.style";
import { useEffect } from "react";
import UserAPI from "@api/User";
import { userInfoStore } from "@stores/userInfoStore";

function Header() {
  // const [userInfo, setUserInfo] = useState<userInfo>();
  const { userInfo, setUserInfoList } = userInfoStore();

  useEffect(() => {
    getUserInfos();
  }, []);

  const getUserInfos = async () => {
    try {
      const userInfo = await UserAPI.getUserInfo();
      // setUserInfo(userInfo);
      setUserInfoList(userInfo);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Container>
          <h1>
            <Link to="/">
              <img src="/resources/images/img-logo.png" />
            </Link>
          </h1>
          <S.Nav>
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/">팁글모아</Link>
              </li>
              <li>
                <Link to="/">카드찾기</Link>
              </li>
              <li>
                <Link to="/">쇼핑적립</Link>
              </li>
              <li>
                <Link to="/">상담방</Link>
              </li>
              <li>
                <Link to="/">서비스소개</Link>
              </li>
            </ul>
          </S.Nav>
        </S.Container>
        <S.Container_login>
          <Link to="/">{userInfo?.name}</Link>
          <img src={userInfo?.profileimage} />
        </S.Container_login>
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
