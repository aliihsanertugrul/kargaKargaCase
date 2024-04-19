"use client";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { useDrag } from 'react-dnd'

const TaskItem = ({ flagsData, task, setOpenModal, setChosenTask }) => {

const type="2"
    const [{ opacity }, drag] = useDrag(
        () => ({
          type,
          item: task,
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
          }),
        }),
        [task, type],
      )

  return (
    <div>
      <button
      style={{ opacity }}
        ref={drag}
        type="button"
        onClick={() => {
          setChosenTask(task);
          setOpenModal(true);
        }}
        className="block text-left w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 space-y-3"
      >
        <h5 className="text-xs font-medium text-orange-600">{task?.name}</h5>
        <p className="text-sm text-gri4">{task?.description}</p>
        <p className="flex items-center gap-1">
          <Image src="/images/calendar.svg" width={16} height={16} />
          <span className="text-xs text-gri3">
            {task ? moment(task.startDate).format("ll") : ""} -{" "}
            {task ? moment(task.endDate).format("ll") : ""}
          </span>
        </p>
        <div className="flex items-center space-x-1">
          <Image src="/images/rectangle.svg" width={10} height={10} />
          {flagsData.map((flagItem) => (
            <>
              <span className="text-xs text-gri3" key={flagItem.id}>
                {flagItem.id === task?.flagId ? flagItem.name : null}
              </span>
            </>
          ))}
          <span>
            {task.flagId == 5 ? (
              <Image
                key={task.id}
                src="/images/flagNeutral.svg"
                width={16}
                height={16}
              />
            ) : task.flagId == 4 ? (
              <Image
                key={task.id}
                src="/images/flagStandart.svg"
                width={16}
                height={16}
              />
            ) : task.flagId == 3 ? (
              <Image
                key={task.id}
                src="/images/flagLow.svg"
                width={16}
                height={16}
              />
            ) : task.flagId == 2 ? (
              <Image
                key={task.id}
                src="/images/flagMedium.svg"
                width={16}
                height={16}
              />
            ) : task.flagId == 1 ? (
              <Image
                key={task.id}
                src="/images/flagHigh.svg"
                width={16}
                height={16}
              />
            ) : (
              ""
            )}
          </span>
        </div>
      </button>
    </div>
  );
};

export default TaskItem;
