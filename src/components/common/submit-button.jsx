"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ title="Submit", icon = null, variant="bg-blue-700"}) => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className={`w-full text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${variant}`}
			disabled={pending }
		>
			{pending ? (
				<div
					className="animate-pulse"
					role="status"
				>
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<>
					{icon} {title}
				</>
			)}
		</button>
	);
};

export default SubmitButton;
