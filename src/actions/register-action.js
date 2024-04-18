"use server";

import { convertFormDataToJson, getYupErrors, response } from "@/helpers/form-validation";
import { register } from "@/services/auth-service";
import { swalToast } from "@/helpers/swal";
// import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
    fullName:Yup.string()
        .min(2,"At least 2 characters.")
        .required("Required"),    
    email:Yup.string()
        .email("It must be email address")
        .required("Required"),
    password: Yup.string()
        .required("Required"),
   
});

export const registerAction = async (prevState, formData) =>{

    const fields = convertFormDataToJson(formData)

    try {
        FormSchema.validateSync(fields, { abortEarly:false });

        const res = await register(fields);
        const data = await res.json();
        console.log("registerdata",data);
        if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

    } catch (err) {
        if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}
        // satir eklendi
		throw (err);
    }
    revalidatePath("/login");
	redirect(`/login?msg=${encodeURI("You are successfully registered.")}`);
}