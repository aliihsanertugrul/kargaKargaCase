"use server";

import {
  convertFormDataToJson,
  getYupErrors,
  response,
} from "@/helpers/form-validation";

// import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";
import { deleteTask, postTask, putTask } from "@/services/board-service";

const FormSchema = Yup.object({
  name: Yup.string().min(2, "At least 2 characters.").required("Required"),
  description: Yup.string()
    .email("It must be email address")
    .required("Required"),
  boardId: Yup.string().required("Required"),
  flagId: Yup.string().required("Required"),
  startDate: Yup.date().required("Required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "Must be later than start date")
    .required("Required"),
});

export const createNewTaskAction = async (prevState, formData) => {
  const fields = convertFormDataToJson(formData);
  const payload={
    ...fields,
    boardId:Number(fields.boardId),
    flagId:Number(fields.flagId),
  
  }
console.log("******", payload)
  try {
    FormSchema.validateSync(fields, { abortEarly: false });

    const res = await postTask(payload);
    const data = await res.json();
    console.log("posttask", data);
    if (!res.ok) {
      return response(false, data?.message, data?.validations);
    }
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return getYupErrors(err.inner);
    }
    // satir eklendi
    throw err;
  }
  revalidatePath("/dashboard");
  redirect(
    `/dashboard?msg=${encodeURI("New task has been created")}`
  );
};

export const updateNewTaskAction = async (payload,code) => {

console.log("******", payload)
  try {
    
    const res = await putTask(payload,code);
    const data = await res.json();
    console.log("posttask", data);
    if (!res.ok) {
      return response(false, data?.message, data?.validations);
    }
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return getYupErrors(err.inner);
    }
    // satir eklendi
    throw err;
  }
  revalidatePath("/dashboard");
  redirect(
    `/dashboard?msg=${encodeURI("Task has been updated")}`
  );
};

export const deleteTaskAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteTask(id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/dashboard");
	redirect(`/dashboard?msg=${encodeURI("Task has been deleted.")}`);
};
