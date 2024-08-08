import * as S from "./BoardWrite.style";
import InfoAlram from "@resources/svg/infoalram";
import { IconAdd, ImgBoard1, ImgClose } from "@resources/images";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import WriteAPI from "@api/Write";

const BoardWrite = () => {
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [place, setPlace] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const changeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.currentTarget.value);
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("title:", title, "place:", place);

    if (!title) {
      setIsSubmit(true);
      return;
    }

    try {
      const getapi = await WriteAPI.sendWrite({
        title: title,
        content: textArea,
        paytype: "1",
        store: place,
        userseq: "1",
        type: "1",
        tab: "1",
      });

      if (getapi) {
        alert("새 글 등록 성공");
        navigate("/");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const changePlace = (event: ChangeEvent<HTMLInputElement>) => {
    setPlace(event.currentTarget.value);
  };

  return (
    <S.BoardWriteContainer>
      <S.BoardForm action="" onSubmit={submitForm}>
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
                onChange={changeTitle}
                type="text"
                placeholder="브랜드와 제품명을 적어주세요"
              />
            </div>
            {isSubmit && !title && (
              <S.MsgError>게시글 제목을 입력해주세요.</S.MsgError>
            )}
          </S.ContsArea>
          <S.ContsArea>
            <S.ContsTitle>구매처 및 할인내용</S.ContsTitle>
            <S.ContsBox>
              <S.itemBoxLeft>
                <input
                  onChange={changePlace}
                  type="text"
                  placeholder="예시) 쿠팡"
                />
              </S.itemBoxLeft>
              <S.itemBoxRight>
                <select name="" id="">
                  <option value="">결제할인 수단1</option>
                  <option value="">결제할인 수단2</option>
                  <option value="">결제할인 수단3</option>
                </select>
                <select name="" id="">
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
              <span>무이자할부</span>
              <span>카드사할인</span>
              <span>쿠폰</span>
              <span>포인트</span>
              <span>통신사</span>
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
                onChange={changeTextArea}
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
