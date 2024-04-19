"use client";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Dropdown, Modal } from "flowbite-react";
import { usePathname } from "next/navigation";
import { deleteTaskAction } from "@/actions/newTask-action";
import { swalAlert, swalConfirm } from "@/helpers/swal";

import TaskItem from "./taskItem";

const TaskCard = ({ tasks, flagsData }) => {
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);
  const [chosenTask, setChosenTask] = useState(null);
  const handleDeleteTask = async() => {
    const res = await swalConfirm("Are you sure to delete");
		if (!res.isConfirmed) return;

		try {
			 await deleteTaskAction(chosenTask?.code);
             setOpenModal(false)
		} catch (err) {
			console.log(err);
			swalAlert(err.message, "error");
		}
  }
  
 
  return (
    <div className="space-y-3 cursor-pointer">
      {tasks.map((task, index) => (
        <TaskItem flagsData={flagsData} task={task} key={index} setChosenTask={setChosenTask} setOpenModal={setOpenModal}/>
      ))}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <div className="flex items-center justify-between min-w-full">
            <div className="flex items-center justify-start space-x-1 mt-2 ">
              <Image src="/images/detailHomeImg.svg" width={20} height={20} />
              <Image src="/images/chevronRight.svg" width={16} height={16} />
              <span className="text-sm text-gri4">{pathname}</span>
              <Image src="/images/chevronRight.svg" width={16} height={16} />
              <span className="text-sm text-karga2 font-semibold">
                Frontend Case
              </span>
            </div>
            <div className="ml-5">
              <Dropdown label="..." inline>
                <Dropdown.Item onClick={handleDeleteTask} ><span className="hover:bg-red-500 hover:text-white px-2 py-1 rounded-sm">Delete Task</span></Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-12 ">
            <div className="flex items-center justify-end">
              <div className="text-sm text-gri4 border p-2 max-w-[350px] rounded-md text-center">
                {chosenTask ? moment(chosenTask.startDate).format("ll") : ""} -{" "}
                {chosenTask ? moment(chosenTask.endDate).format("ll") : ""}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-start gap-5">
                <Image
                  className="animate-pulse"
                  src="/images/circleIcon.svg"
                  width={16}
                  height={16}
                />
                <p className="text-2xl font-bold text-gri4">
                  {chosenTask?.name}
                </p>
              </div>
              <div className="text-sm text-gri3 font-medium">
                ID: #{chosenTask?.id}
              </div>
            </div>

            <div className="max-w-[350px] flex items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-sm text-gri4">Task Status</h2>
                <p className="text-sm ">Open</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h2 className="text-sm text-gri4">Assingment</h2>
                <p className="text-sm">{chosenTask?.description}</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h2 className="text-sm text-gri4">Priotry</h2>
                <span>
                  {" "}
                  {chosenTask?.flagId == 5 ? (
                    <Image
                      src="/images/flagNeutral.svg"
                      width={16}
                      height={16}
                    />
                  ) : chosenTask?.flagId == 4 ? (
                    <Image
                      src="/images/flagStandart.svg"
                      width={16}
                      height={16}
                    />
                  ) : chosenTask?.flagId == 3 ? (
                    <Image src="/images/flagLow.svg" width={16} height={16} />
                  ) : chosenTask?.flagId == 2 ? (
                    <Image
                      src="/images/flagMedium.svg"
                      width={16}
                      height={16}
                    />
                  ) : chosenTask?.flagId == 1 ? (
                    <Image src="/images/flagHigh.svg" width={16} height={16} />
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-sm text-gri4 mb-2">Description</h2>
              <p className="text-xs text-gri4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                eius? Architecto debitis fuga voluptatum non eveniet ut at dolor
                ea expedita eligendi velit nam consequatur fugit distinctio,
                suscipit ipsam vitae.
              </p>
            </div>
          </div>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};

export default TaskCard;
