import { useState } from "react";
import HeartIcon from "../../../resources/svg/heart";
import * as S from "../BoardList.style";
import CommentIcon from "../../../resources/svg/comment";
import dayjs from "dayjs";
import ViewIcon from "../../../resources/svg/view";

const List = () => {
  const [isLike, setIsLike] = useState(false);
  const targetDate = dayjs("2024-06-24 16:00:00");

  return (
    <S.ListContainer>
      <S.ListItemContainer>
        <S.LeftListBox>
          <S.UserInfo>
            <i></i>
            <span>닉네임</span>
            <img src="../public/resources/images/img_badge_battery.png" />
          </S.UserInfo>
          <S.ListConts>
            <h3>제목</h3>
            <p>
              작성한 글의 내용이 여기에 노출되는데, 내용이 길어져서 최대 두 줄을
              초과하는 경우는 제일 끝에 ellipsis 말줄임 처리를 부탁드려요...
            </p>
          </S.ListConts>
          <S.Reaction>
            <S.BoxItem>
              <S.IconBox
                style={{}}
                onClick={() => {
                  setIsLike(!isLike);
                }}
              >
                <HeartIcon color={isLike ? "#ff0000" : "#DADFE8"} />
              </S.IconBox>
              <S.Text>99%</S.Text>
            </S.BoxItem>
            <S.BoxItem>
              <S.IconBox style={{}}>
                <CommentIcon />
              </S.IconBox>
              <S.Text>23</S.Text>
            </S.BoxItem>
            <S.BoxItem>
              <S.IconBox className="IconBox">
                <ViewIcon />
              </S.IconBox>
              <S.Text>1,084</S.Text>
            </S.BoxItem>
          </S.Reaction>
        </S.LeftListBox>
        <S.RightListBox>
          <S.PostTime>{dayjs().diff(targetDate, "hour")}시간전</S.PostTime>
          <S.ImgConts src="../public/resources/images/img_conts.png" />
          <S.Category>
            <S.TypeFinance>재테크소통</S.TypeFinance>
          </S.Category>
        </S.RightListBox>
      </S.ListItemContainer>
    </S.ListContainer>
  );
};

export default List;
