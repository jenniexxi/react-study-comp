import * as S from "./Join.style";
import { useNavigate } from "react-router-dom";
import UsersAPI, { UserJoin } from "../../api/UserInfo";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import PostCode, { Address } from "react-daum-postcode";
import Portal from "../../components/Portal";
import Modal from "../../components/Modal";

const Join = () => {
  const [showPostSearch, setShowPostSearch] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserJoin>();

  const submitForm: SubmitHandler<UserJoin> = async (data) => {
    try {
      await UsersAPI.userJoin(data);
      alert("회원가입 성공");
      navigate("/");
    } catch (e) {
      console.log("회원가입에 실패했습니다:", e);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const getAddressData = (data: Address) => {
    setValue("zipcode", data.zonecode);
    setValue("address1", data.roadAddress);
    setShowPostSearch(false);
  };

  return (
    <>
      <S.JoinWrap>
        <h1>Join</h1>
        <S.JoinForm onSubmit={handleSubmit(submitForm)}>
          <ul>
            <li>
              <label>아이디</label>
              <S.InputItem
                {...register("userid", {
                  required: { value: true, message: "id를 입력해주세요" },
                })}
                type="text"
                placeholder="id를 입력해주세요"
              />
              <S.ErrorMsg>{errors.userid?.message}</S.ErrorMsg>
            </li>
            <li>
              <label>비밀번호</label>
              <S.InputItem
                type="password"
                {...register("password", {
                  required: { value: true, message: "password를 입력해주세요" },
                })}
                placeholder="password를 입력해주세요"
              />
              <S.ErrorMsg>{errors.password?.message}</S.ErrorMsg>
            </li>
            <li>
              <label>이름</label>
              <S.InputItem
                type="text"
                {...register("username", {
                  required: { value: true, message: "name을 입력해주세요" },
                })}
                placeholder="name을 입력해주세요"
              />
              <S.ErrorMsg>{errors.username?.message}</S.ErrorMsg>
            </li>
            <li>
              <label>이메일</label>
              <S.InputItem
                type="text"
                {...register("email")}
                placeholder="email을 입력해주세요"
              />
            </li>
            <li>
              <label>주소</label>
              <S.AdressBox>
                <S.InputItem
                  type="text"
                  {...register("zipcode")}
                  placeholder="zipcode"
                  disabled
                />
                <button type="button" onClick={() => setShowPostSearch(true)}>
                  주소 검색
                </button>
              </S.AdressBox>
              <S.InputItem
                type="text"
                {...register("address1")}
                placeholder="address1"
                disabled
              />
              <S.InputItem
                type="text"
                {...register("address2")}
                placeholder="address2"
              />
            </li>
          </ul>
          <button type="submit">회원가입</button>
        </S.JoinForm>
        {showPostSearch && (
          <Portal>
            <Modal onClickBackDrop={() => setShowPostSearch(false)}>
              <PostCode onComplete={(data) => getAddressData(data)} />
            </Modal>
          </Portal>
        )}
      </S.JoinWrap>
    </>
  );
};

export default Join;
