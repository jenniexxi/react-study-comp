import * as S from "./BoardWrite.style";
import InfoAlram from "@resources/svg/infoalram";
import { IconAdd, ImgBoard1, ImgClose } from "@resources/images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WriteAPI from "@api/Write";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

const tags = ["무이자할부", "카드사할인", "쿠폰", "포인트", "통신사"];

type FormData = {
  title: string;
  store: string;
  paytype: string;
  type: string;
  content: string;
};

const BoardWrite = () => {
  // const [title, setTitle] = useState("");
  // const [textArea, setTextArea] = useState("");
  // const [place, setPlace] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    // setValue,
    formState: { errors },
  } = useForm<FormData>();

  // 기존 방식과 다른 이유는 body 로 해서 묶어서 가져왔으니
  // 여기로 가져올 때는 뿌려줘야함
  // but, FormData 형식과 이름을 맞췄으니 그대로 가져오면 된다.
  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      console.log(data);
      return WriteAPI.sendWrite({
        ...data, userseq:'1', tab:'1'}
      );
    },
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {
      alert("글쓰기 실패");
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
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
                {...register("title", {
                  minLength: {
                    value: 4,
                    message: "4자이상 입력해주세요",
                  },
                  required: { value: true, message: "제목은 필수 값입니다." },
                  maxLength: {
                    value: 20,
                    message: "20자 이내로 입력하세요",
                  },
                })}
                type="text"
                placeholder="브랜드와 제품명을 적어주세요"
              />
            </div>
            {errors.title && (
              <S.MsgError>{errors.title.message}</S.MsgError>
            )}
          </S.ContsArea>
          <S.ContsArea>
            <S.ContsTitle>구매처 및 할인내용</S.ContsTitle>
            <S.ContsBox>
              <S.itemBoxLeft>
                <input
                  {...register("store", {
                    required: "구매처(1,2,3)는 필수 값입니다.",
                  })}
                  type="text"
                  placeholder="예시) 쿠팡"
                />
                {errors.title && (
                  <S.MsgError>{errors.title.message}</S.MsgError>
                )}
              </S.itemBoxLeft>
              <S.itemBoxRight>
                <select id="" {...register("paytype")}>
                  <option value="">결제할인 수단1</option>
                  <option value="">결제할인 수단2</option>
                  <option value="">결제할인 수단3</option>
                </select>
                <select id="" {...register("type")}>
                  <option value="">총 할인율 0%</option>
                  <option value="">총 할인율 10%</option>
                  <option value="">총 할인율 20%</option>
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
              {tags.map((tag) => (
                <span
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  style={{
                    backgroundColor: activeTags.includes(tag)
                      ? "d1e7dd"
                      : "transparent",
                  }}
                >
                  {tag}
                </span>
              ))}
              {/* <span>무이자할부</span>
              <span>카드사할인</span>
              <span>쿠폰</span>
              <span>포인트</span>
              <span>통신사</span> */}
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
                {...register("content")}
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
