import { DoorOpen } from "lucide-react";
import Link from "next/link";

const page = () => {
	return (
		<div className="grid justify-center content-center gap-8 h-screen text-center">
			<h1 className="text-[2rem]">Not Authorized To Access This Page</h1>
			<Link
				href={"/"}
				className="flex justify-center text-[#dda83a] text-center items-center gap-4 text-[2rem]"
			>
				Go Back to Home <DoorOpen size={50} />
			</Link>
		</div>
	);
};

export default page;