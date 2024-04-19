"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Spacer from '@/helpers/spacer';
import BoardCard from './boardCard';
import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'

const BoardsCardSlider = ({boardsData, flagsData})=> {
  // console.log("boardsData",boardsData)
  return (
    <div>
      <h2 className='text-karga-renk text-2xl font-semibold mb-9'>Frontend Case</h2>
     
      <DndProvider backend={HTML5Backend}>
      <Swiper
      
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        
        
        920: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1250: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
      {
        boardsData?.map((item)=>(
          <SwiperSlide key={item.id}>
            <BoardCard {...item} flagsData={flagsData}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
				</DndProvider>
     
      
    </div>
  )
}

export default BoardsCardSlider