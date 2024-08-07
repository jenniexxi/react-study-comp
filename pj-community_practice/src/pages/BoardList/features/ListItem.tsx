import { useState } from "react";
import * as S from "../BoardList.style";
// import CommentIcon from "@resources/svg/comment";
// import ViewIcon from "@resources/svg/view";
// import HeartIcon from "@resources/svg/heart";
import { CommentIcon, HeartIcon, ViewIcon } from "@resources/svg";
import dayjs from "dayjs";
import { List } from "@api/api";
import EllipsisText from "@components/EllipsisText";
// import { Link } from "react-router-dom";

type Props = {
  item: List;
};

const ListItem = ({ item }: Props) => {
  const [isLike, setIsLike] = useState(false);

  const changeDays = (): string => {
    const diffTimeHours = dayjs().diff(item.createtime, "hour");
    const diffTimeMonths = dayjs().diff(item.createtime, "month");

    if (diffTimeMonths >= 1) {
      return `${diffTimeMonths}달 전`;
    } else if (diffTimeHours >= 24) {
      return `${Math.floor(diffTimeHours / 24)}일 전`;
    } else {
      return `${diffTimeHours}시간 전`;
    }
  };

  return (
    <S.ListContainer>
      <S.ListItemContainer>
        <S.ListItemLink to={`/detail/${item.boardid}`}>
          <S.LeftListBox>
            <S.UserInfo>
              <i>
                <img src={item.profileimage} />
              </i>
              <span>{item.name}</span>
              <img src="../public/resources/images/img_badge_battery.png" />
            </S.UserInfo>
            <S.ListConts>
              <h3>{item.title}</h3>
              <EllipsisText line={2} text={item.content} />
              {/* <p>{item.content}</p> */}
              {/* <p>{item.content > 2 ? ${item.content} : ${item.content}...}</p> */}
            </S.ListConts>
            <S.Reaction>
              <S.BoxItem>
                <S.IconBox
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLike(!isLike);
                  }}
                >
                  <HeartIcon color={isLike ? "#ff0000" : "#DADFE8"} />
                </S.IconBox>
                <S.Text>{item.like}</S.Text>
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
                <S.Text>{item.viewer}</S.Text>
              </S.BoxItem>
            </S.Reaction>
          </S.LeftListBox>
          <S.RightListBox>
            <S.PostTime>{changeDays()}</S.PostTime>
            <S.ImgConts src="../public/resources/images/img_conts.png" />
            <S.Category>
              <S.TypeFinance>
                {item.type === "1" ? "꿀팁자랑" : "재테크소통"}
              </S.TypeFinance>
            </S.Category>
          </S.RightListBox>
        </S.ListItemLink>
      </S.ListItemContainer>
    </S.ListContainer>
  );
};

export default ListItem;
