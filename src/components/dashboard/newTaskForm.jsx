"use client"
import React from "react";
import SubmitButton from "../common/submit-button";
import { useFormState } from "react-dom";
import { createNewTaskAction } from "@/actions/newTask-action";
import { initialResponse } from "@/helpers/form-validation";


const NewTaskForm = ({boardId}) => {
    const [state, dispatch] = useFormState(
        createNewTaskAction,
        initialResponse
      );
  return (
    <>
      <div className="w-full mb-2  p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-2" action={dispatch} noValidate>
          <input type="hidden" name="boardId" value={`${boardId}`}/>
          <h5 className="text-md font-semibold text-gray-900 dark:text-white">
           New Task
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-xs font-medium text-gray-900 dark:text-white"
            >
              Task name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-1 text-xs font-medium text-gray-900 dark:text-white"
            >
              Assignee
            </label>
            <input
              type="mail"
              name="description"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="assignee@mail.com"
            />
          </div>

          <div>
            <label
              htmlFor="startDate"
              className="block mb-1 text-xs font-medium text-gray-900 dark:text-white"
            >
              Start Time
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
             
            />
          </div>

          <div>
            <label
              htmlFor="endDate"
              className="block mb-1 text-xs font-medium text-gray-900 dark:text-white"
            >
              End Time
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div>
            <select
              id="flagId"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="flagId"
            >
              <option selected disabled>
                Choose a priority
              </option>
              <option value="1">High Priority</option>
              <option value="2">Medium Priority</option>
              <option value="3">Low Priority</option>
              <option value="4">Standart Priority</option>
              <option value="5">Neutral Priority</option>
            </select>
          </div>

          <div className="text-center pt-3">
            <SubmitButton
              title="Add new task"
              width="w-full"
              variant="bg-karga-renk"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTaskForm;
