import * as S from "./BoardWrite.style";
import InfoAlram from "@resources/svg/infoalram";
import { IconAdd, ImgBoard1, ImgClose } from "@resources/images";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import WriteAPI from "@api/Write";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const tags = ["무이자할부", "카드사할인", "쿠폰", "포인트", "통신사"];

type FormData = {
  boardTitle: string;
  placeTitle: string;
  selectTitle1: string;
  selectTitle2: string;
  TextareaTitle: string;
};

const BoardWrite = () => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<FormData>();

  // mutation 사용
  const mutation = useMutation({
    mutationFn: (data: FormData) =>
      WriteAPI.sendWrite(
        data.boardTitle,
        data.TextareaTitle,
        data.selectTitle1,
        data.placeTitle,
        "1",
        data.selectTitle2,
        "1"
      ),
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {
      alert("글쓰기 실패");
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    //react hook form
    // data 를 가지고 데이터를 받기까지 등록하고, 그걸 다 거친 데이터를 react hook form이 준거다.
    // post 쓴글을 서버에 저장 =>
    mutation.mutate(data);
  };

  const handleTagClick = (tag: string) => {
    setActiveTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <S.BoardWriteContainer>
      <S.BoardForm action="" onSubmit={handleSubmit(onSubmit)}>
        <S.TopTitleWrapper>
          <S.TopTitleArea>
            <S.BoardCategory>커뮤니티 &gt; 꿀팁자랑</S.BoardCategory>
            <S.TitleBox>
              <h2>✏️ 게시글 작성하기</h2>
              <button type="submit">작성 완료</button>
            </S.TitleBox>
          </S.TopTitleArea>
        </S.TopTitleWrapper>
        <S.ContsWrapper>
          <S.ContsArea>
            <S.ContsTitle>게시글 제목</S.ContsTitle>
            <div>
              <input
                {...register("boardTitle", {
                  minLength: {
                    value: 4,
                    message: "4자이상 입력해주세요",
                  },
                  required: { value: true, message: "제목은 필수 값입니다." },
                  maxLength: {
                    value: 20,
                    message: "20자 이내로 입력하세요",
                  },
                  // pattern: {
                  //   value: RegExp(
                  //     "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                  //   ),
                  //   message: "이메일 형식이 아닙니다.",
                  // },
                })}
                type="text"
                placeholder="브랜드와 제품명을 적어주세요"
              />
            </div>
            {errors.boardTitle && (
              <S.MsgError>{errors.boardTitle.message}</S.MsgError>
            )}
          </S.ContsArea>
          <S.ContsArea>
            <S.ContsTitle>구매처 및 할인내용</S.ContsTitle>
            <S.ContsBox>
              <S.itemBoxLeft>
                <input
                  type="text"
                  {...register("placeTitle", {
                    required: "구매처(1,2,3)는 필수 값입니다.",
                  })}
                  placeholder="예시) 쿠팡"
                />
                {errors.placeTitle && (
                  <S.MsgError>{errors.placeTitle.message}</S.MsgError>
                )}
              </S.itemBoxLeft>
              <S.itemBoxRight>
                <select id="" {...register("selectTitle1")}>
                  <option value="1">결제할인 수단1</option>
                  <option value="2">결제할인 수단2</option>
                  <option value="3">결제할인 수단3</option>
                </select>
                <select id="" {...register("selectTitle2")}>
                  <option value="1">총 할인율 0%</option>
                  <option value="2">총 할인율 10%</option>
                  <option value="3">총 할인율 20%</option>
                </select>
              </S.itemBoxRight>
            </S.ContsBox>
            <S.ContsDesc>
              <S.IconInfo>
                <InfoAlram />
              </S.IconInfo>
              간편결제 할인 수단은 <span>모두 적용 가능</span>을 선택해주세요!
            </S.ContsDesc>
          </S.ContsArea>
          <S.ContsArea>
            <S.ContsTitle>할인 받은 유형</S.ContsTitle>
            <S.TagItem>
              {/* <span>무이자할부</span>
              <span>카드사할인</span>
              <span>쿠폰</span>
              <span>포인트</span>
              <span>통신사</span> */}
              {tags.map((tag) => (
                <span
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  style={{
                    backgroundColor: activeTags.includes(tag)
                      ? "#d1e7dd"
                      : "transparent",
                  }}
                >
                  {tag}
                </span>
              ))}
            </S.TagItem>
            <S.ContsDesc>
              <S.IconInfo>
                <InfoAlram />
              </S.IconInfo>
              할인 받은 유형은 <span>중복 선택이 가능해요!</span>
            </S.ContsDesc>
          </S.ContsArea>
          <S.ContsArea>
            <S.ContsTitle>자세한 설명</S.ContsTitle>
            <S.TextAreaBox>
              <S.ContsTextArea
                {...register("TextareaTitle")}
                name=""
                id=""
                placeholder="윰탱구리님, 어떤 혜택을 받으셨나요?"
              ></S.ContsTextArea>
              <S.CountBox>
                <S.BeforeText>0</S.BeforeText>
                <S.AfterText> / 2,000</S.AfterText>
              </S.CountBox>
            </S.TextAreaBox>
          </S.ContsArea>
          <S.ContsArea>
            <S.ContsTitle>이미지 첨부</S.ContsTitle>
            <S.ImageItemList>
              <li>
                <S.ImageDetail src={ImgBoard1} />
                <button type="button" aria-label="삭제">
                  <img src={ImgClose} />
                </button>
              </li>
              <li>
                <S.ImageDetail src={ImgBoard1} />
                <button type="button" aria-label="삭제">
                  <img src={ImgClose} />
                </button>
              </li>
              <li>
                <S.ImageDetail src={ImgBoard1} />
                <button type="button" aria-label="삭제">
                  <img src={ImgClose} />
                </button>
              </li>
              <li>
                <S.ImageDetail src={ImgBoard1} />
                <button type="button" aria-label="삭제">
                  <img src={ImgClose} />
                </button>
              </li>
              <li>
                <S.ImageDetail src={ImgBoard1} />
                <button type="button" aria-label="삭제">
                  <img src={ImgClose} />
                </button>
              </li>
            </S.ImageItemList>
            <S.ImageAddBox>
              <S.ImageAdd>
                <img src={IconAdd} />
                <span>이미지 첨부하기</span>
              </S.ImageAdd>
              <S.ImageCount>
                <S.BeforeCount>5</S.BeforeCount>
                <S.AfterCount>/5</S.AfterCount>
              </S.ImageCount>
            </S.ImageAddBox>
          </S.ContsArea>
        </S.ContsWrapper>
      </S.BoardForm>
    </S.BoardWriteContainer>
  );
};

export default BoardWrite;
