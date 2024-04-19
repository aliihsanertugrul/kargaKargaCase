"use client"
import Image from "next/image";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import NewTaskForm from "./newTaskForm";

const AddNewTask = ({boardId,show,setShow}) => {
    
    

    const handleShow = (e) => {
        e.preventDefault();
        
        setShow(true)
    }
    
  return (
    <>
    {
        show ? <NewTaskForm boardId={boardId}/> : (<div className="flex items-center justify-center min-h-[720px]  group">
        <div className="relative" onClick={(e)=>handleShow(e)}>
          <Image
            className="cursor-pointer group-hover:opacity-100"
            src="/images/newTaskImg.svg"
            width={185}
            height={159}
          />
          <p className="flex w-full items-center justify-evenly absolute -bottom-10 -translate-x-1/2 left-1/2   text-2xl text-gri3 opacity-0 group-hover:opacity-100 cursor-pointer">
            <GoPlus /> New Task
          </p>
        </div>
      </div>)
    }
      
    </>
  );
};

export default AddNewTask;
