import BoardsCardSlider from '@/components/dashboard/boardsSwiper'
import DashboardSidebar from '@/components/dashboard/dashboardSidebar'
import InputTask from '@/components/dashboard/newTaskForm'
import { getBoards, getFlags } from '@/services/board-service'
import React from 'react'

const DashboardPage = async() => {
  const getBoardsData =( await getBoards()).json();
  const getFlagsData =( await getFlags()).json();
  const [boardsData, flagsData] = await Promise.all( [getBoardsData, getFlagsData] )
   
  return (
    <>
    
  <BoardsCardSlider boardsData={boardsData.data} flagsData={flagsData.data}/>
  
    </>
  )
}

export default DashboardPage