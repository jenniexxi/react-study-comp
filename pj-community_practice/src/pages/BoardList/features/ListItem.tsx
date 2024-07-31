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

const ListItem = () => {
  return (
    <S.ListContainer>
      <S.ListItemContainer>
        <S.ListItemLink to={`/detail/${item.boardid}`}>
          <S.LeftListBox>
            <S.UserInfo>
              <i>
                <img src=""/>
              </i>
              <span>name 이름</span>
              <img src="../public/resources/images/img_badge_battery.png" />
            </S.UserInfo>
            <S.ListConts>
              <h3>타이틀</h3>
              <EllipsisText line={2} text={item.content} />
              {/* <p>{item.content}</p> */}
              {/* <p>{item.content > 2 ? ${item.content} : ${item.content}...}</p> */}
            </S.ListConts>
            <S.Reaction>
              <S.BoxItem>
                <S.IconBox />
                  <HeartIcon />
                </S.IconBox>
                <S.Text>100%</S.Text>
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
                <S.Text>뷰어 viewer</S.Text>
              </S.BoxItem>
            </S.Reaction>
          </S.LeftListBox>
          <S.RightListBox>
            <S.PostTime></S.PostTime>
            <S.ImgConts src="../public/resources/images/img_conts.png" />
            <S.Category>
              <S.TypeFinance>
                꿀팀 자랑, 재테크소통
              </S.TypeFinance>
            </S.Category>
          </S.RightListBox>
        </S.ListItemLink>
      </S.ListItemContainer>
    </S.ListContainer>
  );
};

export default ListItem;
