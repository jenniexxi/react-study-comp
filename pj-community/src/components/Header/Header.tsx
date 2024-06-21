import { Link } from "react-router-dom";
import * as S from "./Header.style";

function Header() {
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
          <Link to="/">로그인</Link>
          <img src="/resources/images/img-user-profile.png" />
        </S.Container_login>
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
