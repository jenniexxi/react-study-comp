import { ChangeEvent, FormEvent, useState } from "react";
import * as S from "./Join.style";
import { useNavigate } from "react-router-dom";
import UsersAPI from "../../api/UserInfo";

const _Join_form_before = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress1, setInputAddress1] = useState("");
  const [inputAddress2, setInputAddress2] = useState("");
  const [inputZipcode, setInputZipcode] = useState("");

  const navigate = useNavigate();

  const changeId = (event: ChangeEvent<HTMLInputElement>) => {
    setInputId(event.currentTarget.value);
  };

  const changePw = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPw(event.currentTarget.value);
  };

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputName(event.currentTarget.value);
  };

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.currentTarget.value);
  };

  const changeAddress1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputAddress1(event.currentTarget.value);
  };

  const changeAddress2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputAddress2(event.currentTarget.value);
  };

  const changeZipcode = (event: ChangeEvent<HTMLInputElement>) => {
    setInputZipcode(event.currentTarget.value);
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      userid: inputId,
      password: inputPw,
      username: inputName,
      email: inputEmail,
      address1: inputAddress1,
      address2: inputAddress2,
      zipcode: inputZipcode,
    };

    try {
      await UsersAPI.userJoin(user);

      alert("회원가입 성공");
      navigate("/");
    } catch (e) {
      console.log("회원가입에 실패했습니다:", e);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <S.JoinWrap>
        <h1>Join</h1>
        <S.JoinForm onSubmit={submitForm}>
          <ul>
            <li>
              <label>아이디</label>
              <input
                type="text"
                placeholder="id를 입력해주세요"
                onChange={changeId}
                value={inputId}
              />
            </li>
            <li>
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="password를 입력해주세요"
                onChange={changePw}
                value={inputPw}
              />
            </li>
            <li>
              <label>이름</label>
              <input
                type="text"
                placeholder="name을 입력해주세요"
                onChange={changeName}
                value={inputName}
              />
            </li>
            <li>
              <label>이메일</label>
              <input
                type="text"
                placeholder="email을 입력해주세요"
                onChange={changeEmail}
                value={inputEmail}
              />
            </li>
            <li>
              <label>주소1</label>
              <input
                type="text"
                placeholder="address1"
                onChange={changeAddress1}
                value={inputAddress1}
              />
            </li>
            <li>
              <label>주소2</label>
              <input
                type="text"
                placeholder="address2"
                onChange={changeAddress2}
                value={inputAddress2}
              />
            </li>
            <li>
              <label>우편번호</label>
              <input
                type="text"
                placeholder="zipcode"
                onChange={changeZipcode}
                value={inputZipcode}
              />
            </li>
          </ul>
          <button type="submit">회원가입</button>
        </S.JoinForm>
      </S.JoinWrap>
    </>
  );
};

export default _Join_form_before;
