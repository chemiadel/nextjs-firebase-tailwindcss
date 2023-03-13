/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
	const [todaysFormattedDate, setTodaysFormattedDate] = useState(
		new Date().toISOString().slice(0, 10)
	);
	const { register, watch, handleSubmit } = useForm();
	const [success, setSuccess] = useState(false);
	const [totalDayIncome, setTotalDayIncome] = useState(0);

	function calculateDayTotal() {
		const total =
			parseInt(watch("income") || 0) -
			parseInt(watch("expenses") || 0) -
			parseInt(watch("expensesBassem") || 0) -
			parseInt(watch("expensesEl7ag") || 0);
		console.log("total", total);
		setTotalDayIncome(total);
	}

	useEffect(() => {
		calculateDayTotal();
	}, [
		watch("income"),
		watch("expenses"),
		watch("expensesBassem"),
		watch("expensesEl7ag")
	]);

	function submitDayData(data: any) {
		console.log("Data", data);
	}
	return (
		<>
			<Head>
				<title>دراي كلين الجامعة</title>
			</Head>

			<main>
				<div className="container singlepage-container flex justify-content-center">
					<form
						className="w-full mt-5 bg-gray-200 p-4 my-5"
						onSubmit={handleSubmit(submitDayData)}
					>
						<h1 className="text-center text-2xl text-blue-700 underline mb-5">
							تسجيل ايراد يوم {todaysFormattedDate}!
						</h1>
						<div className="inputs-container flex flex-col w-full">
							<div className="relative">
								<input
									{...register("date")}
									value={`${todaysFormattedDate}`}
									required
									type="date"
									className="w-full max-w-[200px] p-2 text-2xl rounded-md my-2"
									placeholder="التاريخ"
								/>
							</div>
							<div className="relative">
								<input
									{...register("income")}
									required
									type="number"
									min="0"
									placeholder="اجمالي ايرادات اليوم"
									className="w-full max-w-[200px] p-2 text-2xl rounded-md my-2"
									inputMode="numeric"
								/>
							</div>
							<div className="relative">
								<input
									{...register("expenses")}
									required
									type="number"
									min="0"
									placeholder="اجمالي مصروفات اليوم"
									className="w-full max-w-[200px] p-2 text-2xl rounded-md my-2"
									inputMode="numeric"
								/>
							</div>
							<div className="relative">
								<input
									{...register("expensesEl7ag")}
									type="number"
									min="0"
									placeholder="مسحوبات الحج محمد"
									className="w-full max-w-[200px] p-2 text-2xl rounded-md my-2"
									inputMode="numeric"
								/>
							</div>
							<div className="relative">
								<input
									{...register("expensesBassem")}
									type="number"
									min="0"
									placeholder="مسحوبات باسم"
									className="w-full max-w-[200px] p-2 text-2xl rounded-md my-2"
									inputMode="numeric"
								/>
							</div>
							{watch("income") && watch("expenses") ? (
								<p className="text-xl font-semibold text-center">
									الإجمالي: {totalDayIncome}
								</p>
							) : null}

							<button className="py-4 px-10 focus:bg-blue-400 bg-blue-600 self-center text-center text-white font-black rounded-md my-4">
								ارســـال
							</button>
							{success ? (
								<p className="successMsg">
									تم إضافة اليوم بنجاح
								</p>
							) : null}
						</div>
					</form>
				</div>
			</main>
		</>
	);
};

export default Home;
