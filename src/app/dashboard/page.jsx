import DashboardSidebar from '@/components/dashboard/dashboardSidebar'
import { getBoards, getFlags } from '@/services/board-service'
import React from 'react'

const DashboardPage = async() => {
    const res=await getBoards()
    const boards=await res.json()
    const resFlags=await getFlags()
    const flags=await resFlags.json()
    // console.log("boards***",flags);
  return (
    <>
    <DashboardSidebar/>
    <div className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus architecto, hic repudiandae facilis, laboriosam deserunt temporibus sint neque eos illo officia a quod maxime, id magnam! Tempora eveniet alias placeat ex. Porro asperiores rem quia eos magni, ipsam tempora! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus error accusantium velit, deserunt dignissimos similique corrupti soluta distinctio vero modi quasi autem ab eum in. Itaque, facere id pariatur harum nihil quibusdam iste ullam? Totam laudantium repellat, eos adipisci nulla possimus. Blanditiis quasi cupiditate earum inventore excepturi tempore modi quo debitis! Voluptatibus in ea libero consectetur nulla molestiae officiis quos recusandae sunt sint magnam repellat a, illum unde error eos iure nemo, soluta id natus explicabo dolores magni tempore! Fugit ipsum architecto sunt illo nulla modi accusantium, distinctio omnis porro. In, nostrum facere! Veniam impedit quae illum laborum qui consectetur.</div>
    </>
  )
}

export default DashboardPage