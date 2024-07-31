import * as S from "./BoardDetail.style";
// import dayjs from "dayjs";

const BoardDetail = () => {
  

  return (
    <>
      <S.BoardContainer>
        <S.BoardCategory>커뮤니티 &gt; 꿀팁자랑</S.BoardCategory>
        <S.BoardInfo>
          <img src="" />
          <S.InfoBox>
            <S.InfoTop>
              {/* detailInfo?.name
                detailInfo 뒤에 ? 붙이는 이유는, detailInfo 에 값이 있는지 없는지 모르기 때문에
                ? 써서 optional 처리 해준다.
                ? 는 예외처리를 해준거고, 이거 대신 로딩으로 구분해줄 수도 있다.
                보통은 로딩으로 처리를 해준다.
              */}
              <span>이름</span>
              <img src="../public/resources/images/img_badge_battery.png" />
            </S.InfoTop>
            <S.InfoBottom>
              <span>
                {/* {dayjs(detailInfo?.createtime).format("YYYY.MM.DD a hh:mm")} */}
                날짜
              </span>
              <span>조회수 100</span>
            </S.InfoBottom>
          </S.InfoBox>
        </S.BoardInfo>
          <S.BtnBox>
            <S.BtnUpdate>수정</S.BtnUpdate>
            <S.BtnDelete>삭제</S.BtnDelete>
          </S.BtnBox>
        <S.BoardContents>
          <S.Title>타이틀 제목</S.Title>
          <p>
            내용 : 
            <br />
            paytype: 1,2,3 중에 하나 노출
            <br />
            store: ""
            <br />
            유저 id & 이름 : ""
          </p>
        </S.BoardContents>
      </S.BoardContainer>
    </>
  );
};

export default BoardDetail;
