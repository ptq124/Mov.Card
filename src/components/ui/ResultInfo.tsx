import styled from 'styled-components'
import LiveTv from '../common/LiveTv'
import Netflix from '../platform/Netflix'
import Watcha from '../platform/Watcha'
import Youtube from '../platform/Youtube'
import Wavve from '../platform/Wavve'
import Tving from '../platform/Tving'
import Disneyplus from '../platform/Disneyplus'
import { ResultType } from '../../pages/Result'

interface ResultProps {
  data: ResultType
  index: number
}

export default function ResultInfo({ data, index }: ResultProps) {
  const {
    title,
    movie_rate,
    runnig_time,
    movie_genre,
    open_date,
    plot,
    platform,
  } = data
  return (
    <>
      {index === 0 && (
        <InfoPage>
          <Rate>{movie_rate}</Rate>
          <Title>{title}</Title>
          <MovieInfo>
            <Info>{runnig_time}</Info>
            <Info>|</Info>
            <Info>{movie_genre}</Info>
            <Info>|</Info>
            <Info>{open_date}</Info>
          </MovieInfo>
          <Plot>{plot}</Plot>
          <PlatFormBox>
            <PlatFormIcon>
              <LiveTv />
              <PlatFormText>PlatForm</PlatFormText>
            </PlatFormIcon>
            <Plat>
              {platform.map((item, index) => (
                <PlatForm key={index}>
                  {item === '넷플릭스' && <Netflix />}
                  {item === '왓챠' && <Watcha />}
                  {item === '유튜브' && <Youtube />}
                  {item === '웨이브' && <Wavve />}
                  {item === '티빙' && <Tving />}
                  {item === '디즈니플러스' && <Disneyplus />}
                </PlatForm>
              ))}
            </Plat>
          </PlatFormBox>
        </InfoPage>
      )}
    </>
  )
}

const InfoPage = styled.article`
  width: 45%;
  height: 77%;

  padding-left: 4%;
  padding-right: 4%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`
const Rate = styled.div`
  height: 2.1rem;
  width: 2.1rem;

  background-color: #595a64;
  border-radius: 46px;

  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  @media screen and (max-width: 768px) {
    height: 1.8rem;
    width: 1.8rem;
  }
`
const Title = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;

  height: 14%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  height: 11%;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
const Info = styled.span`
  letter-spacing: 0.13rem;
  margin-right: 3%;
  @media screen and (max-width: 768px) {
    margin-right: 2%;
  }
`
const Plot = styled.div`
  height: 45%;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    max-height: 110px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
`
const PlatFormBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 23%;
`
const PlatFormIcon = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  padding-bottom: 5%;
`
const PlatFormText = styled.span`
  margin-left: 3%;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
const PlatForm = styled.div`
  margin-right: 3%;
`
const Plat = styled.div`
  display: flex;
`
