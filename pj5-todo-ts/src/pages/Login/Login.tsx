import * as S from "./Login.style";
import UsersAPI, { UserLogin } from "../../api/UserInfo";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>();

  const submitForm: SubmitHandler<UserLogin> = async (data) => {
    try {
      await UsersAPI.userLogin(data);
      alert("로그인 성공");
      navigate("/todo");
    } catch (e) {
      console.log("로그인에 실패했습니다:", e);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };


  return (
    <>
      <S.LgoinWrap>
        <h1>Login</h1>
        <S.LoginForm onSubmit={handleSubmit(submitForm)}>
          <ul>
            <li>
              <label>아이디</label>
              <input
                {...register("userid", { required: "id를 입력해주세요" })}
                type="text"
                placeholder="id를 입력해주세요"
              />
              <S.ErrorMsg>{errors.userid?.message}</S.ErrorMsg>
            </li>
            <li>
              <label>비밀번호</label>
              <input
                {...register("userpassword", {
                  required: "password를 입력해주세요",
                })}
                type="password"
                placeholder="password를 입력해주세요"
              />
              <S.ErrorMsg>{errors.userpassword?.message}</S.ErrorMsg>
            </li>
          </ul>
          <S.DescText to="/join">아직 회원이 아니신가요?</S.DescText>
          <button type="submit">로그인</button>
        </S.LoginForm>
      </S.LgoinWrap>
    </>
  );
};

export default Login;
