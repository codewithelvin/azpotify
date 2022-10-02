import React from 'react';
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import { genres } from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';

export default function GenreSelector({ genreListId }) {
  const dispatch = useDispatch();

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={10}
      freeMode
      centeredSlides
      //   centeredSlidesBounds
      modules={[FreeMode]}
      className="mt-2"
    >
      {genres?.map((genre) => (
        <SwiperSlide
          key={genre.title}
          style={{ width: '10%', height: 'auto' }}
          className=" rounded-full animate-slideright cursor-ew-resize"
          onClick={() => dispatch(selectGenreListId(genre.value))}
        >
          <div
            className={`bg-gray-600 border-solid border-2 border-gray-400 hover:bg-gray-400 rounded-lg text-center cursor-pointer  text-white select-none ${
              genreListId === genre.value && 'bg-gray-400 text-black'
            }`}
          >
            <span className="text-base">{genre.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
