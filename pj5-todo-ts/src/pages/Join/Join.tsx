import * as S from "./Join.style";

const Join = () => {
  return (
    <>
      <S.JoinWrap>
        <h1>Join</h1>
        <S.JoinForm>
          <ul>
            <li>
              <label>아이디</label>
              <input type="text" placeholder="id" />
            </li>
            <li>
              <label>비밀번호</label>
              <input type="password" placeholder="password" />
            </li>
            <li>
              <label>이름</label>
              <input type="text" placeholder="name" />
            </li>
            <li>
              <label>이메일</label>
              <input type="text" placeholder="email" />
            </li>
            <li>
              <label>주소1</label>
              <input type="text" placeholder="address1" />
            </li>
            <li>
              <label>주소2</label>
              <input type="text" placeholder="address2" />
            </li>
            <li>
              <label>우편번호</label>
              <input type="text" placeholder="zipcode" />
            </li>
          </ul>
          <button type="submit">회원가입</button>
        </S.JoinForm>
      </S.JoinWrap>
    </>
  );
};

export default Join;
