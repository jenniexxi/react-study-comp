import * as S from "./Login.style";

const Login = () => {
  return (
    <>
      <S.LgoinWrap>
        <h1>Login</h1>
        <S.LoginForm>
          <ul>
            <li>
              <label>아이디</label>
              <input type="text" placeholder="ID" />
            </li>
            <li>
              <label>비밀번호</label>
              <input type="password" placeholder="password" />
            </li>
          </ul>
          <button type="submit">로그인</button>
        </S.LoginForm>
      </S.LgoinWrap>
    </>
  );
};

export default Login;
