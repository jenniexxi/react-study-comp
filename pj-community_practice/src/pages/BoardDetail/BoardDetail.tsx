import { useParams } from "react-router-dom";
import * as S from "./BoardDetail.style";
import { useEffect, useState } from "react";
import { getDetail, ListContentsDetail } from "@api/api";
import dayjs from "dayjs";
import { userInfoStore } from "@stores/userInfoStore";

const BoardDetail = () => {
  const { id } = useParams();
  const [detailInfo, setDetailInfo] = useState<ListContentsDetail>();
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = userInfoStore();

  useEffect(() => {
    getDetailInfo();
  }, []);

  const getDetailInfo = async () => {
    if (!id) return;

    try {
      const result = await getDetail(id);
      setIsLoading(false);
      setDetailInfo(result);
    } catch(e) {
      console.log("error", e);
    }
  }

  if (isLoading) {
    return <S.LoadingBox>Loading...</S.LoadingBox>;
  }

  return ( 
    <>
      <S.BoardContainer>
        <S.BoardCategory>커뮤니티 &gt; 꿀팁자랑</S.BoardCategory>
        <S.BoardInfo>
          <img src={detailInfo?.profileimage} />
          <S.InfoBox>
            <S.InfoTop>
              {/* detailInfo?.name
                detailInfo 뒤에 ? 붙이는 이유는, detailInfo 에 값이 있는지 없는지 모르기 때문에
                ? 써서 optional 처리 해준다.
                ? 는 예외처리를 해준거고, 이거 대신 로딩으로 구분해줄 수도 있다.
                보통은 로딩으로 처리를 해준다.
              */}
              <span>{detailInfo?.name}</span>
              <img src="../public/resources/images/img_badge_battery.png" />
            </S.InfoTop>
            <S.InfoBottom>
              <span>
                {dayjs(detailInfo?.createtime).format("YYYY.MM.DD a hh:mm")}
              </span>
              <span>조회수 {detailInfo?.viewer}</span>
            </S.InfoBottom>
          </S.InfoBox>
        </S.BoardInfo>
        <S.BtnBox>
          <S.BtnUpdate>수정</S.BtnUpdate>
          <S.BtnDelete>삭제</S.BtnDelete>
        </S.BtnBox>
        <S.BoardContents>
          <S.Title>{detailInfo?.title}</S.Title>
          <p>
            내용 : {detailInfo?.content}
            <br />
            paytype: {detailInfo?.paytype}
            <br />
            store: {detailInfo?.store}
            <br />
            유저 id & 이름 : {userInfo?.userid} & {userInfo?.name}
          </p>
        </S.BoardContents>
      </S.BoardContainer>
    </>
  );
};

export default BoardDetail;
