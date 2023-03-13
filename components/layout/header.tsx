import Link from "next/link";

export default function Header(props: any) {
	return (
		<div className="flex items-center justify-between h-full">
			<div className="my-auto">
				<Link href="/">
					<button className="font-semibold">دراي كلين الجامعه</button>
				</Link>
			</div>
			<h3 className="">اسم له تاريخ</h3>
		</div>
	);
}
