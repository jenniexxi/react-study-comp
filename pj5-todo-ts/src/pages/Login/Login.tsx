import * as S from "./Login.style";
import UsersAPI, { UserLogin } from "../../api/UserInfo";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { USER_COOKIE_KEY } from "../../constant/constant";
import { useEffect } from "react";

const Login = () => {
  const [userCookie, setUserCookie] = useCookies([USER_COOKIE_KEY]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>();

  // 처음에 들어왔을 때 쿠키값이 있는지 확인해야하니 useEffect
  useEffect(() => {
    console.log(userCookie.user);
    if (userCookie.user) {
      navigate("/todo");
    }
  }, []);

  const submitForm: SubmitHandler<UserLogin> = async (data) => {
    try {
      const loginUser = await UsersAPI.userLogin(data);
      alert("로그인 성공");
      navigate("/todo");
      handleCookie(loginUser.id);
    } catch (e) {
      console.log("로그인에 실패했습니다:", e);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleCookie = (userId: string) => {
    setUserCookie(USER_COOKIE_KEY, userId);
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
