"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import AddNewTask from "./addNewTask";
import moment from "moment";
import { IoClose } from "react-icons/io5";
import TaskCard from "./taskCard";
import { useDrop } from "react-dnd";
import { updateNewTaskAction } from "@/actions/newTask-action";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState } from "react-dom";


const BoardCard = ({ name, tasks, id, flagsData }) => {
  const [show, setShow] = useState(false);
  

  const handleShow = (e) => {
    e.preventDefault();

    setShow(!show);
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "2",
    drop:async (item) => {
      if(item.id !== id){
        const body = {
          name: item.name,
          description: item.description,
          boardId: id,
          flagId: item.flagId,
          startDate: item.startDate,
          endDate: item.endDate,
        };
        await updateNewTaskAction(body,item.code)
        console.log(item);
        console.log(id);
        console.log("dropped");
      }
      
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  let backgroundColor = "";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <>
      <div
        ref={drop}
        style={{ backgroundColor }}
        className="w-[319px] min-h-[720px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-4  border-b-2 h-14">
          <div className="flex gap-2">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              {name}
            </h5>
            <div className=" flex items-center justify-center rounded-full w-5 h-5 text-karga-renk bg-blue-100 p-1 text-sm ring-2">
              {tasks?.length}
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            {!show ? (
              <GoPlus onClick={(e) => handleShow(e)} size={24} />
            ) : (
              <IoClose onClick={(e) => handleShow(e)} size={24} />
            )}
          </a>
        </div>

        {tasks.length > 0 && !show ? (
          <TaskCard tasks={tasks} flagsData={flagsData} />
        ) : (
          <>
            <div>
              <AddNewTask show={show} setShow={setShow} boardId={id} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BoardCard;
