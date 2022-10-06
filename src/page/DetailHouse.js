import React from 'react';
import styled from "styled-components";
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import PoolIcon from '@mui/icons-material/Pool';
import WifiIcon from '@mui/icons-material/Wifi';
import WaterIcon from '@mui/icons-material/Water';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LuggageIcon from '@mui/icons-material/Luggage';
import CribIcon from '@mui/icons-material/Crib';
import IronIcon from '@mui/icons-material/Iron';
import RadarIcon from '@mui/icons-material/Radar';
import Starting from "../component/StarRating/StarRating"
import Avatar from '@mui/material/Avatar';
import SecurityIcon from '@mui/icons-material/Security';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Clendar1 from "../component/Clendar/Clendar1";
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import ErrorIcon from '@mui/icons-material/Error';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InputTakeRoom from '../component/InputTimeBookHouse/InputTakeRoom';
import InputPayRoom from '../component/InputTimeBookHouse/InputPayRoom';
import ChooseTypeCustomer from '../component/Dropdown/ChooseTypeCustomer';

const Wrapper = styled.div`
  width: 100%;
  height: 385vh;
  display: flex;
`


const DivLeft = styled.div`
  width: 20%;
`

const DivCenter = styled.div`
  width: 60%;
`

const DivTop = styled.div`
  margin: 2rem 0 1rem 0;
`
const DivTitle = styled.div`
`
const Title = styled.p`
  font-size: 27px;
  font-weight: 500;
  margin-bottom: 1rem;

`
const Detail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between
`

const DivDetailLeft = styled.div`
  width: 60%;
  display: flex;
  gap: 10px;
`

const DivStar = styled.div`
  display: flex;
  gap: 5px
`

const Star = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`

const Comment = styled.div`
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    cursor: pointer
  }
`

const DivOwner = styled.div`
`
const DivPlace = styled.div`
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    cursor: pointer
  }
`

const DivDetailRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`

const Share = styled.div`
  text-decoration: underline;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:hover {
    cursor: pointer;
    background-color: #FFF8F6;
    border-radius: 4px;
  }
`
const Save = styled.div`
  text-decoration: underline;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:hover {
    cursor: pointer;
    background-color: #FFF8F6;
    border-radius: 4px;
  }
`

const ContainerImg = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  margin-top: 2rem;
`


const DivImg = styled.div`
  width: 95%;
  height: 95%;
  margin: 5px;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;

  &:hover {
    background-color: #d52e2e;
    cursor: pointer;
  }
`

const ContainerImgRight = styled.div`
  width: 50%;
  height: 100%;
`

const DivImgRight = styled.div`
  width: 95%;
  height: 95%;
  margin: 5px;
`
const DivImgSmall = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`

const ImgSmallLeft = styled.img`
  width: 50%;
  height: 100%;

  &:hover {
    background-color: #262424;
    cursor: pointer;
  }
`
const ImgSmallRight = styled.img`
  width: 50%;
  height: 100%;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;

  &:hover {
    background-color: #262424;
    cursor: pointer;
  }
`
const DivBottom = styled.div`
  display: flex;
  width: 100%;
  height: 200vh;
`

const Information = styled.div`
  width: 70%;
  height: auto;
`
const DivOne = styled.div`
  margin: 2rem 0;
`
const Div11 = styled.div`
  font-size: 27px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`
const Div12 = styled.div`

`
const Div2 = styled.div`
  margin: 2rem 0;
`
const Div21 = styled.div`
  display: flex;
  gap: 10px;
`

const Div22 = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`
const Div23 = styled.div`

`
const Div3 = styled.div`
  margin: 2rem 0;
`
const Div31 = styled.img`
  width: 15%;
  margin: 1rem 0;
`
const Div32 = styled.div`

`
const Div33 = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`
const Div4 = styled.div`
  margin: 2rem 0;

`
const Div41 = styled.div`
  display: flex;
  align-items: center;

`
const H41 = styled.h4`
  display: flex;
  align-items: center;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

const Div42 = styled.div`

`
const Div43 = styled.div`
  font-weight: 500;
  margin: 1rem 0;

`
const Div44 = styled.div`
  font-weight: bold;
  margin: 1rem 0;
  text-decoration: underline;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`
const Div5 = styled.div`
  margin-bottom: 2rem;
`

const Div51 = styled.div`
  font-weight: bold;
  font-size: 27px;
  margin: 2rem 0;
`

const Div52 = styled.div`

`

const Img53 = styled.img`
  width: 320px;
  height: 210px;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`

const Div54 = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 1.3rem 0 0.7rem 0;
`

const Div55 = styled.div`
  font-weight: 370;
`

const Div6 = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`

const Div61 = styled.div`
  font-size: 27px;
  font-weight: 500;
  margin: 2rem 0 1.5rem 0;

`

const Div63 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const Div64 = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 10px;
`

const Div65 = styled.div`
  width: 30%;
  text-align: end;
  display: flex;
  align-items: center;
  gap: 10px;
`
const Div7 = styled.div`
  margin: 2rem 0;
`

const Div71 = styled.div`
  font-size: 27px;
  font-weight: 500;
  margin: 1rem 0;
`

const Div72 = styled.div`
  font-size: 20px;
  color: #7e7e5c;
  margin: 1rem 0;
`

const Div73 = styled.div`
  display: flex;
  width: 100%;
  padding-top:4rem;
`

const Div74 = styled.div`
  width: 50%;
  border: 1px solid #eae3e3;
  border-radius:5px;
`

const Div75 = styled.div`
  width: 50%;
  border: 1px solid #eae3e3;
  border-radius:5px;
`
const Div76 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const ButDelete = styled.button`
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  margin-top: 3rem;
  padding: 5px;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;

  &:hover {
    background-color: #e8e7e7;;
    cursor: pointer
  }
`

const BookRoom = styled.div`
  width: 30%;
  height: 200vh;
  position: relative;

`

const Book = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 10px;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5d6d6;
  box-shadow: 5px 8px #faf7f7;
`
const Content = styled.div`
  width: 95%;
  height: 95%;
`

const BookTitle = styled.div`
  display: flex;
  margin: 1.5rem 0;
`
const BookMoney = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  width: 50%;
`
const Rate = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 5px;
`
const RateStar = styled.span`
  font-weight: bold
`
const RateComment = styled.span`
  color: #7a7a7a;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

const TimeRoom = styled.span`
  width: 100%;
  height: 30%;
  border: 1px solid #b0b0b0;
`
const Room = styled.span`
  width: 100%;
  display: flex;
`

const TakeRoom = styled.span`
  width: 50%;
`
const PayRoom = styled.span`
  width: 50%;
`

const Customer = styled.span`
  width: 100%;
  margin-top:1rem;
  display: flex;
  justify-content: center;
`
const DivCustomer = styled.div`
`

const DivBottom2 = styled.div`
  width: 100%;
  height: 150vh;
  margin: 2rem 0 1.5rem 0;
`

const Div8 = styled.div`
  font-size: 1.5rem;
`

const Div81 = styled.div`
  display: flex;
  gap: 27px;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 1rem 0;
`

const Div82 = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`

const Div83 = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`

const Div84 = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.3rem;
  margin: 1rem 0;
`

const Div85 = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between
`

const Div86 = styled.div`
`

const Div87 = styled.div`
  display: flex;
  gap: 15px;
`

const Div88 = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`
const Div89 = styled.div`

`
const Div90 = styled.div`
  display: flex;
  gap: 15px;
`

const Div9 = styled.div``

const Div9all = styled.div`
  margin: 3rem 0;
`

const Div91 = styled.div`
  display: flex;
  gap: 10px;
  margin: 2rem 0 1rem 0;
`

const Div92 = styled.div`
  line-height: 1.5rem;
  &:hover{
    cursor:pointer;
  }
`

const Div93 = styled.div``

const Div94 = styled.div`
  font-weight: bold;
  margin-bottom: 0.2rem;
`

const Div95 = styled.div`
  color: rgba(40, 40, 40, 0.65)
`

const Div96 = styled.div`
  color: rgba(40, 40, 40)
`

const ButShowRate = styled.button`
  padding: 13px 25px;
  margin: 2rem 0;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #faf7f7 ;
  }
`

const Div10 = styled.div``

const Div101 = styled.div`
  display: flex;
  gap: 10px;
  margin: 2rem 0 1rem 0;
`

const Div102 = styled.div`
  line-height: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`

const Div103 = styled.div``

const Div104 = styled.div`
  font-weight: bold;
  margin-bottom: 0.2rem;
  font-size: 1.4rem;
`

const Div105 = styled.div`
  color: rgba(40, 40, 40, 0.65);
  font-size: 0.85rem;
`

const Div106 = styled.div`
  color: rgba(40, 40, 40, 0.65);
  display: flex;
  align-items: center;
  gap: 10px;
  color: #282c34;
`

const Div107 = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
`

const Div108 = styled.div`
  width: 50%;
`

const Div109 = styled.div`
  width: 50%;
  margin-left: 5%;
`

const ButContact = styled.button`
  padding: 13px 25px;
  border-radius: 8px;
  width: 50%;
  background-color: #ffffff;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #faf7f7;
  }
`
const Div111 = styled.div`
  display: flex;
  gap: 0.7rem;
  margin: 2rem 0;
`
const Div112 = styled.div`
  display: flex;
  align-items: center;
`
const Div113 = styled.div`
  font-size: 14px;
`

const Div13 = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0 0 0;
`

const Div131 = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const Div1311 = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 0;
`

const Div132 = styled.div`
  width: 33%
`

const Div133 = styled.div`
  width: 33%
`

const Div134 = styled.div`
  width: 33%
`

const Div135 = styled.div`
  width: 100%;
  display: flex;
`

const Div136 = styled.div`
  width: 33%
`

const Div137 = styled.div`
  font-size: 0.8rem;
  display: flex;
  gap: 10px;
  margin: 0.5rem;
`

const Div145 = styled.div`
  font-size: 0.8rem;
`

const DivRight = styled.div`
  width: 20%;
`

const Footter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`

const DivCenter2 = styled.div`
  width: 54%;
`

const Div15All = styled.div`
  width: 100%;
  display: flex;
`

const Div15 = styled.div`
  margin: 2rem 0;
  width: 25%;
`

const Div151 = styled.div`
  width: 25%;
  font-size: 1rem;
  font-weight: bold;
`

const Div152 = styled.div`
  margin: 1.5rem 0;
  &:hover{
    text-decoration:underline;
    cursor: pointer
  }
`

const Div16 = styled.div`
  display: flex;
  height: 40px;
  margin: 2rem 0;
`

const Div161 = styled.div`
  width: 40%;
  display: flex;
  font-size: 13px;
  gap: 10px
`

const Div162 = styled.div``

const Div163 = styled.div`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Div166 = styled.div`
  width: 20%;
`

const Div167 = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between
`

const Div168 = styled.div`
  display: flex;
  gap: 5px;
`

const Div169 = styled.div`
  font-weight: bold;

  &:hover {
    cursor: pointer;
    text-decoration: underline
  }
`

const Div170 = styled.div`
  display: flex;
  gap: 15px;
`

const DivIcon = styled.div`
  &:hover {
    cursor: pointer
  }
`

const DetailHouse = () => {
    return (
        <>
            <Wrapper>
                <DivLeft/>
                <DivCenter>
                    <DivTop>
                        <DivTitle>
                            <Title>Come enjoy our cozy waterfront house on the bay.</Title>
                            <Detail>
                                <DivDetailLeft>
                                    <DivStar>
                                        <Star>
                                            <span><StarIcon/></span>
                                            <span>4,97</span>

                                        </Star>
                                        <span>.</span>
                                        <Comment>29 đánh giá</Comment>
                                    </DivStar>
                                    <span>.</span>
                                    <DivOwner>Chủ nhà siêu cấp</DivOwner>
                                    <span>.</span>
                                    <DivPlace>Grand Marais, Michigan, Hoa Kỳ</DivPlace>
                                </DivDetailLeft>
                                <DivDetailRight>
                                    <Share>

                                    </Share>
                                    <Share>
                                        <span><IosShareIcon/></span>
                                        <span>Chia sẻ</span>
                                    </Share>

                                    <Save>
                                        <span><FavoriteBorderIcon/></span>
                                        <span>Lưu</span>
                                    </Save>
                                </DivDetailRight>
                            </Detail>
                        </DivTitle>
                        <ContainerImg>
                            <DivImg>
                                <Img
                                    src="https://a0.muscache.com/im/pictures/3453ac07-204b-412b-8c9d-4461394f4c6d.jpg?im_w=720"/>
                            </DivImg>
                            <ContainerImgRight>
                                <DivImgRight>
                                    <DivImgSmall>
                                        <ImgSmallLeft
                                            src="https://a0.muscache.com/im/pictures/dd4f79e4-112d-49dd-bb4c-246752d4d293.jpg?im_w=720"/>
                                        <ImgSmallRight
                                            src='https://a0.muscache.com/im/pictures/7a27b99a-9c99-45f2-9d8d-256542456c97.jpg?im_w=720'/>
                                    </DivImgSmall>
                                    <DivImgSmall>
                                        <ImgSmallLeft
                                            src='https://a0.muscache.com/im/pictures/88bc2dc6-6f5e-4596-8dae-9983031b9669.jpg?im_w=720'/>
                                        <ImgSmallRight
                                            src='https://a0.muscache.com/im/pictures/38c134a0-c8a4-4467-86ac-9d7f55fa4d3e.jpg?im_w=720'/>
                                    </DivImgSmall>
                                </DivImgRight>
                            </ContainerImgRight>
                        </ContainerImg>
                    </DivTop>
                    <DivBottom>
                        <Information>
                            <DivOne>
                                <Div11>Phòng riêng tại khu nghỉ dưỡng. Chủ nhà Shwe Inn Tha</Div11>
                                <Div12>
                                    <span>2 khách</span>
                                    <span>.</span>
                                    <span>1 phòng ngủ </span>
                                    <span>.</span>
                                    <span>1 giường</span>
                                    <span>.</span>
                                    <span>1 phòng tắm riêng</span>
                                </Div12>
                            </DivOne>
                            <hr/>
                            <Div2>
                                <Div21>
                                    <div><PoolIcon/></div>
                                    <Div22>Lặn ngụp</Div22>
                                </Div21>

                                <Div23>Đây là một trong số ít chỗ ở có bể bơi tại khu vực này.</Div23>
                            </Div2>
                            <hr/>
                            <Div3>
                                <Div31
                                    src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"/>
                                <Div32>Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin
                                    nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình
                                    nhận phòng.</Div32>
                                <Div33>Tìm hiểu thêm</Div33>
                            </Div3>
                            <hr/>
                            <Div4>
                                <Div41>
                                    <span><GTranslateIcon/></span>
                                    <span>Một số thông tin đã được dịch tự động.</span>
                                    <H41>Hiển thị ngôn ngữ gốc</H41>
                                </Div41>
                                <Div42>Shwe Inn Tha Floating Resort cung cấp các phòng có điều hòa không khí theo phong
                                    cách mộc mạc với ban công riêng và tầm nhìn ra Hồ Inle. Có Wi-Fi miễn phí. Khu nghỉ
                                    dưỡng rất đẹp và thân thiện với vị trí hoàn hảo để tham quan trong khu vực. Dịch vụ
                                    rất tốt và nhân viên rất thân thiện.</Div42>
                                <Div43>Chỗ ở ...</Div43>
                                <Div44><span>Hiển thị thêm</span> <span><KeyboardArrowRightIcon/></span></Div44>
                            </Div4>
                            <hr/>
                            <Div5>
                                <Div51>Nơi bạn sẽ ngủ nghỉ</Div51>
                                <Div52>
                                    <Img53
                                        src="https://a0.muscache.com/im/pictures/d4896988-6e6a-4c90-b03b-855008f119f8.jpg?im_w=720"/>
                                    <Div54>Phòng ngủ</Div54>
                                    <Div55>1 giường đôi</Div55>
                                </Div52>
                            </Div5>
                            <hr/>
                            <Div6>
                                <Div61>Nơi này có những gì cho bạn</Div61>

                                <Div63>
                                    <Div64>
                                        <span><WaterIcon/></span>
                                        <span>Lối ra hồ</span>
                                    </Div64>
                                    <Div65>
                                        <span><WifiIcon/></span>
                                        <span>Wi-fi</span>
                                    </Div65>
                                </Div63>

                                <Div63>
                                    <Div64>
                                        <span><ScubaDivingIcon/></span>
                                        <span>Bể bơi</span>
                                    </Div64>
                                    <Div65>
                                        <span><LocalLaundryServiceIcon/></span>
                                        <span>Máy giặt</span>
                                    </Div65>
                                </Div63>

                                <Div63>
                                    <Div64>
                                        <span><IronIcon/></span>
                                        <span>Máy sấy quần áo</span>
                                    </Div64>
                                    <Div65>
                                        <span><AcUnitIcon/></span>
                                        <span>Điều hòa nhiệt độ</span>
                                    </Div65>
                                </Div63>

                                <Div63>
                                    <Div64>
                                        <span><LuggageIcon/></span>
                                        <span>Cho phép gửi hành lý</span>
                                    </Div64>
                                    <Div65>
                                        <span><CribIcon/></span>
                                        <span>Cũi</span>
                                    </Div65>
                                </Div63>

                                <Div63>
                                    <Div64>
                                        <span><WaterIcon/></span>
                                        <span>Máy phát hiện khí CO</span>
                                    </Div64>
                                    <Div65>
                                        <span><RadarIcon/></span>
                                        <span>Máy báo khói</span>
                                    </Div65>
                                </Div63>

                            </Div6>
                            <hr/>

                            <Div7>
                                <Div71>31 đêm tại Nyaungshwe</Div71>
                                <Div72>7 thg 10 2022  -> 7 thg 11 2022</Div72>
                                <Div73>
                                    <Div74>
                                        <Clendar1/>
                                    </Div74>
                                    <Div75>
                                        <Clendar1/>
                                    </Div75>
                                </Div73>
                                <Div76>
                                    <ButDelete><span style={{textDecoration: 'underline'}}>Xóa ngày</span></ButDelete>
                                </Div76>
                            </Div7>
                        </Information>
                        <BookRoom>
                            <Book>
                                <Content>
                                    <BookTitle>
                                        <BookMoney>
                                            $75 - $68 <span style={{fontSize: "14px"}}>đêm</span>
                                        </BookMoney>
                                        <Rate>
                                            <span><StarIcon/></span>
                                            <RateStar> 4 </RateStar>
                                            <span>.</span>
                                            <RateComment>7 đánh giá</RateComment>
                                        </Rate>
                                    </BookTitle>
                                    <TimeRoom>
                                        <Room>

                                            <TakeRoom>
                                                <InputTakeRoom/>
                                            </TakeRoom>
                                            <PayRoom>
                                                <InputPayRoom/>
                                            </PayRoom>
                                         </Room>
                                        <Customer>
                                            <DivCustomer><ChooseTypeCustomer/></DivCustomer>
                                        </Customer>
                                        <Customer>
                                            <DivCustomer>
                                                <ButShowRate>Kiểm tra tình trạng còn phòng không</ButShowRate>
                                            </DivCustomer>
                                        </Customer>


                                    </TimeRoom>

                                </Content>
                            </Book>
                        </BookRoom>
                    </DivBottom>
                    <hr/>
                    <DivBottom2>
                        <Div8>
                            <Div81>
                                <Div82>
                                    <div><StarIcon/></div>
                                    <div>4</div>
                                </Div82>
                                <span>.</span>
                                <Div83>
                                    7 đánh giá
                                </Div83>
                            </Div81>

                            <Div84>
                                <Div85>
                                    <Div86>Mức độ sạch sẽ</Div86>
                                    <Div87><span><Starting/></span><span>  4</span></Div87>
                                </Div85>
                                <Div88></Div88>
                                <Div88>
                                    <Div89>Độ chính xác</Div89>
                                    <Div90><span><Starting/></span><span>  4</span></Div90>
                                </Div88>
                            </Div84>

                            <Div84>
                                <Div85>
                                    <Div86>Giao tiếp</Div86>
                                    <Div87><span><Starting/></span><span>  4</span></Div87>
                                </Div85>
                                <Div88></Div88>
                                <Div88>
                                    <Div89>Vị trí</Div89>
                                    <Div90><span><Starting/></span><span>  4</span></Div90>
                                </Div88>
                            </Div84>

                            <Div84>
                                <Div85>
                                    <Div86>Nhận phòng</Div86>
                                    <Div87><span><Starting/></span><span>  4</span></Div87>
                                </Div85>
                                <Div88></Div88>
                                <Div88>
                                    <Div89>Giá trị</Div89>
                                    <Div90><span><Starting/></span><span>  4</span></Div90>
                                </Div88>
                            </Div84>
                        </Div8>
                        <Div9all>
                            <Div9>
                                <Div91>
                                    <Div92>
                                        <Avatar alt="Dung Dăng"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSerBrc9nznoC0yoYrz2MDwK2Kpp4wIlSPnfW7EOYHGVfZg_lWpY-Wo5gzjkAN5-i-vMY&usqp=CAU"/>
                                    </Div92>
                                    <Div93>
                                        <Div94>Cécile</Div94>
                                        <Div95>tháng 3 năm 2020</Div95>
                                    </Div93>
                                </Div91>

                                <Div96>
                                    Chúng tôi khuyên bạn nên chọn khu nghỉ dưỡng này. Nhóm rất chu đáo, mỉm cười và rất
                                    chu đáo.
                                    Nơi đây đẹp, đặc biệt, sự thay đổi về cảnh quan được đảm bảo
                                </Div96>
                            </Div9>

                            <Div9>
                                <Div91>
                                    <Div92>
                                        <Avatar alt="Dung Dăng"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSerBrc9nznoC0yoYrz2MDwK2Kpp4wIlSPnfW7EOYHGVfZg_lWpY-Wo5gzjkAN5-i-vMY&usqp=CAU"/>
                                    </Div92>
                                    <Div93>
                                        <Div94>Cécile</Div94>
                                        <Div95>tháng 3 năm 2020</Div95>
                                    </Div93>
                                </Div91>

                                <Div96>
                                    Chúng tôi khuyên bạn nên chọn khu nghỉ dưỡng này. Nhóm rất chu đáo, mỉm cười và rất
                                    chu đáo.
                                    Nơi đây đẹp, đặc biệt, sự thay đổi về cảnh quan được đảm bảo
                                </Div96>
                            </Div9>
                            <Div9>
                                <Div91>
                                    <Div92>
                                        <Avatar alt="Dung Dăng"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSerBrc9nznoC0yoYrz2MDwK2Kpp4wIlSPnfW7EOYHGVfZg_lWpY-Wo5gzjkAN5-i-vMY&usqp=CAU"/>
                                    </Div92>
                                    <Div93>
                                        <Div94>Cécile</Div94>
                                        <Div95>tháng 3 năm 2020</Div95>
                                    </Div93>
                                </Div91>

                                <Div96>
                                    Chúng tôi khuyên bạn nên chọn khu nghỉ dưỡng này. Nhóm rất chu đáo, mỉm cười và rất
                                    chu đáo.
                                    Nơi đây đẹp, đặc biệt, sự thay đổi về cảnh quan được đảm bảo
                                </Div96>
                            </Div9>

                            <ButShowRate>
                                Hiển thị tất cả 7 đánh giá
                            </ButShowRate>
                        </Div9all>
                        <hr/>
                        <Div10>
                            <Div101>
                                <Div102>
                                    <Avatar alt="Dung Dăng"
                                            src="https://a0.muscache.com/im/pictures/user/830c93fd-6360-4a5c-9dc8-04abb7e216de.jpg?im_w=240"/>
                                </Div102>
                                <Div103>
                                    <Div104>Chủ nhà Shwe Inn Tha</Div104>
                                    <Div105>Đã tham gia vào tháng 12 năm 2018</Div105>
                                </Div103>
                            </Div101>

                            <Div106>
                                <span><StarIcon/></span>
                                <span>7 đánh giá</span>
                            </Div106>

                            <Div107>
                                <Div108>
                                    Trong Hồ Inle yên bình, Shwe Inn Tha Floating Resort cung cấp các phòng có điều hòa
                                    không khí theo phong cách mộc mạc với ban công riêng và tầm nhìn ra Hồ Inle. Có
                                    Wi-Fi miễn phí.…
                                </Div108>
                                <Div109>
                                    <ButContact>
                                        Liên hệ với chủ nhà
                                    </ButContact>
                                    <Div111>
                                        <Div112><SecurityIcon/></Div112>
                                        <Div113>Để bảo vệ khoản thanh toán của bạn, tuyệt đối không chuyển tiền hoặc
                                            liên lạc bên ngoài trang web hoặc ứng dụng Airbnb.</Div113>
                                    </Div111>
                                </Div109>
                            </Div107>
                        </Div10>
                        <hr/>
                        <Div13>
                            <Div131>Những điều cần biết</Div131>

                            <Div1311>
                                <Div132>Nội quy nhà</Div132>
                                <Div133>Y tế và an toàn</Div133>
                                <Div134>Chính sách hủy</Div134>
                            </Div1311>

                            <Div135>
                                <Div136>
                                    <Div137>
                                        <div><WatchLaterIcon/></div>
                                        <div>Nhận phòng: 14:00 - 00:00</div>
                                    </Div137>

                                    <Div137>
                                        <div><WatchLaterIcon/></div>
                                        <div>Trả phòng: 12:00</div>
                                    </Div137>

                                    <Div137>
                                        <div><PetsIcon/></div>
                                        <div>Không thú cưng</div>
                                    </Div137>

                                    <Div137>
                                        <div><SmokingRoomsIcon/></div>
                                        <div>Cho phép hút thuốc</div>
                                    </Div137>

                                </Div136>

                                <Div136>
                                    <Div137>
                                        <div><TipsAndUpdatesIcon/></div>
                                        <div>Các biện pháp an toàn trong đại dịch COVID-19 của Airbnb được áp dụng</div>
                                    </Div137>
                                    <Div137>
                                        <div><ErrorIcon/></div>
                                        <div>Không có máy phát hiện khí CO</div>
                                    </Div137>
                                    <Div137>
                                        <div><ErrorIcon/></div>
                                        <div>Không có máy báo khói</div>
                                    </Div137>

                                    <Div145>
                                        <Div44><span>Hiển thị thêm</span> <span><KeyboardArrowRightIcon/></span></Div44>
                                    </Div145>
                                </Div136>

                                <Div136>
                                    <Div137>
                                        <div></div>
                                        <div>Hoàn tiền một phần: Nhận tiền hoàn lại cho tất cả các đêm cách thời điểm
                                            bạn hủy 24 giờ trở lên. Không được hoàn tiền phí dịch vụ hoặc chi phí cho
                                            các đêm bạn đã ở.
                                        </div>
                                    </Div137>
                                    <Div137>
                                        <div></div>
                                        <div>Hãy đọc toàn bộ chính sách hủy của Chủ nhà/Người tổ chức được áp dụng ngay
                                            cả khi bạn hủy vì ốm bệnh hoặc gián đoạn do dịch COVID-19.
                                        </div>
                                    </Div137>
                                    <Div137>
                                        <div><ErrorIcon/></div>
                                        <div>Không có máy báo khói</div>
                                    </Div137>

                                    <Div145>
                                        <Div44><span>Hiển thị thêm</span> <span><KeyboardArrowRightIcon/></span></Div44>
                                    </Div145>
                                </Div136>
                            </Div135>
                        </Div13>
                    </DivBottom2>
                </DivCenter>
                <DivRight/>
            </Wrapper>
            <hr/>
            <Footter>
                <DivLeft/>
                <DivCenter2>
                    <Div15All>
                        <Div15>
                            <Div151>Hỗ trợ</Div151>
                            <Div152>Trung tâm trợ giúp</Div152>
                            <Div152>AirCover</Div152>
                            <Div152>Thông tin an toàn</Div152>
                            <Div152>Hỗ trợ người khuyết tật</Div152>
                            <Div152>Các tùy chọn hủy</Div152>
                            <Div152>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</Div152>
                            <Div152>Báo cáo lo ngại của hàng xóm</Div152>
                        </Div15>
                        <Div15>
                            <Div151>Cộng đồng</Div151>
                            <Div152>Airbnb.org: nhà ở cứu trợ</Div152>
                            <Div152>Hỗ trợ dân tị nạn Afghanistan</Div152>
                            <Div152>Chống phân biệt đối xử</Div152>
                        </Div15>
                        <Div15>
                            <Div151>Đón tiếp khách</Div151>
                            <Div152>TThử đón tiếp khách</Div152>
                            <Div152>AirCover cho Chủ nhà</Div152>
                            <Div152>Xem tài nguyên đón tiếp khách</Div152>
                            <Div152>Truy cập diễn đàn cộng đồng</Div152>
                            <Div152>Đón tiếp khách có trách nhiệm</Div152>

                        </Div15>
                        <Div15>
                            <Div151>Airbnb</Div151>
                            <Div152>Trang tin tức</Div152>
                            <Div152>Tìm hiểu các tính năng mới</Div152>
                            <Div152>Thư ngỏ từ các nhà sáng lập</Div152>
                            <Div152>Cơ hội nghề nghiệp</Div152>
                            <Div152>Nhà đầu tư</Div152>
                        </Div15>
                    </Div15All>
                    <hr/>

                    <Div16>
                        <Div161>
                            <Div162>© 2022 Airbnb, Inc.</Div162>
                            <span>.</span>
                            <Div163>Quyền riêng tư</Div163>
                            <span>.</span>
                            <Div163>Điều khoản</Div163>
                            <span>.</span>
                            <Div163>Sơ đồ trang web</Div163>
                        </Div161>

                        <Div166></Div166>

                        <Div167>
                            <Div168>
                                <DivIcon> <LanguageIcon/></DivIcon>
                                <Div169>Tiếng Việt (VN)</Div169>
                            </Div168>

                            <Div168>
                                <DivIcon> <AttachMoneyIcon/></DivIcon>
                                <Div169>USD</Div169>
                            </Div168>

                            <Div170>
                                <DivIcon> <FacebookIcon/></DivIcon>
                                <DivIcon> <TwitterIcon/></DivIcon>
                                <DivIcon><InstagramIcon/></DivIcon>
                            </Div170>
                        </Div167>
                    </Div16>
                </DivCenter2>

                <DivRight/>
            </Footter>
        </>
    );
};

export default DetailHouse;