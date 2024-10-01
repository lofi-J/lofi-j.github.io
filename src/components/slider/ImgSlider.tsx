import Slider from "react-slick";
import {css} from "@emotion/react";
import {NextSliderArrow, PrevSliderArrow} from "./CustomSliderArrow.tsx";
import useTheme from "../../hooks/useTheme.ts";


interface ImgSliderProps {
  slideImgs: string[],
  slidesToShow?: number,
  slidesToScroll?: number,
  speed?: number,
  autoPlaySpeed?: number,
  isAutoPlay?: boolean,
  isInfinite?: boolean,
}

export default function ImgSlider(
  {slideImgs, slidesToShow = 1, slidesToScroll = 1, speed = 1, autoPlaySpeed = 3, isAutoPlay = false, isInfinite = false}: ImgSliderProps) {
  
  const {theme} = useTheme();
  const settings = {
    dots: false,
    infinite: isInfinite,
    autoplay: isAutoPlay,
    speed: speed * 1000,
    autoplaySpeed: autoPlaySpeed * 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: <NextSliderArrow theme={theme} />,
    prevArrow: <PrevSliderArrow theme={theme} />,
  };
  
  return (
    <div css={main}>
      <Slider {...settings}>
        {slideImgs.map((imgPath, i) => (
          <img css={img} key={`${imgPath}-${i}`} src={`/assets/presentation/${imgPath}`} alt={imgPath} />
        ))}
      </Slider>
    </div>
  );
}

const main = css`
  width: 100%;
  .slick-list {
    display: flex;
    overflow: hidden;
  }
  .slick-slider {
    position: relative;
  }
  .slick-slide > div {
    display: flex;
    justify-content: center;
    border-radius: 12px;
  }
  .slick-track {
    display: flex;
  }
  .slick-arrow {
    z-index: 2;
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .slick-next {
    right: -3rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .slick-prev {
    left: -3rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const img = css`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
`;