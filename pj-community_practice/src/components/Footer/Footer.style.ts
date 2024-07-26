import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  width: 100%;
  margin: 0 auto;
`;

export const BannerWrapper = styled.div`
  background-color: #2770fc;
`;

export const BannerArea = styled.div`
  width: 768px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  img {
    width: 43px;
    height: 43px;
    border-radius: 10px;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
`;

export const TextLink = styled(Link)`
  font-size: 14px;
  color: #fff;
`;

export const FooterWrapper = styled.div`
  padding-top: 40px;
`;

export const FooterArea = styled.div`
  width: 768px;
  margin: 0 auto;
`;

export const FooterMenu = styled.div`
  margin: 40px 0 16px;
  p {
    color: #5b6072;
    font-weight: bold;
    margin-bottom: 8px;
  }
  ul {
    display: flex;
    gap: 20px;
    li {
      a {
        display: block;
        color: #5b6072;
        strong {
          font-weight: bold;
        }
      }
    }
  }
`;

export const AddressBox = styled.div`
  padding-bottom: 100px;
`;

export const AddressList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 4px;
  li {
    display: flex;
    font-size: 12px;
    color: #7e8292;
    gap: 4px;
    span {
      font-weight: bold;
    }
    p {
    }
  }
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 4px;
  li {
    display: flex;
    font-size: 12px;
    color: #7e8292;
    gap: 4px;
    span {
      font-weight: bold;
    }
    p {
    }
  }
`;

export const Address = styled.address`
  font-size: 12px;
  color: #7e8292;
  margin-top: 16px;
`;
