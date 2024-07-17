// import { Link } from "react-router-dom";
import * as S from "./Footer.style";
import { IconTheSeen } from "@resources/images";
import { LogoFooter } from "@resources/svg";

function Footer() {
    return (
        <S.Footer>
            <S.BannerWrapper>
                <S.BannerArea>
                    <S.TextBox>
                        <img src={IconTheSeen} />
                        <p>오늘 가장 인기있는 소식을 받아보는 방법!</p>
                    </S.TextBox>
                    <S.TextLink to="/">지금 바로 확인하기 -&gt;</S.TextLink>
                </S.BannerArea>
            </S.BannerWrapper>
            <S.FooterWrapper>
                <S.FooterArea>
                    <LogoFooter />
                    <S.FooterMenu>
                        <p>(주)헥토이노베이션</p>
                        <ul>
                            <li><a href="">서비스 이용약관</a></li>
                            <li><a href=""><strong>개인(신용)정보처리방침</strong></a></li>
                            <li><a href="">금융소비자 보호</a></li>
                            <li><a href="">첮아오시는 길</a></li>
                        </ul>
                    </S.FooterMenu>
                    <S.AddressBox>
                        <S.AddressList>
                            <li>
                                <span>주소</span>
                                <p>서울특별시 강남구 테헤란로 34길 6 태광타워 12 13층</p>
                            </li>
                            <li>
                                <span>TEL</span>
                                <p>(02)929-4463</p>
                            </li>
                            <li>
                                <span>FAX</span>
                                <p>(02)929-4424</p>
                            </li>
                        </S.AddressList>
                        <S.InfoList>
                            <li>
                                <span>사업자등록번호</span>
                                <p>214-88-39117</p>
                            </li>
                            <li>
                                <span>통신판매업신고</span>
                                <p>2015-서울강남-00012</p>
                            </li>
                        </S.InfoList>
                        <S.Address>Copyright(C) Hecto Innovation Co., Ltd. All rights reserved.</S.Address>
                    </S.AddressBox>
                </S.FooterArea>
            </S.FooterWrapper>
        </S.Footer>
    )
}

export default Footer;