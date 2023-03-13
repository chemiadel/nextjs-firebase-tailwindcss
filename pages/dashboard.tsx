import React, { useState } from "react";

export default function Dashboard() {
	const [selectedMonthDays, setSelectedMonthDays] = useState([]);
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth() || "");
	const [allMonthIncome, setAllMonthIncome] = useState("");
	const [allMonthExpenses, setAllMonthExpenses] = useState("");
	const [totalEl7agExpenses, setTotalEl7agExpenses] = useState("");
	const [totalBassemExpenses, setTotalBassemExpenses] = useState("");
	const [totalMonthIncome, setTotalMonthIncome] = useState("");
	const [totalMonthExpenses, setTotalMonthExpenses] = useState("");

	return (
		<div>
			<main>
				<div className="container dashboard-container">
					<div className="dashboard-header">
						<h1 className="text-center text-xl w-full py-5 font-bold">
							ايرادات شهر {currentMonth}
						</h1>
					</div>
					<div className="applications-table overflow-x-auto">
						<table id="table">
							<thead>
								<tr className="text-xl">
									<th>تاريخ اليوم</th>
									<th>الايراد الكلي</th>
									<th>المصروفات الكليه</th>
									<th>مسحوبات الحج محمد</th>
									<th>مسحوبات باسم</th>
									<th>صافي مصروفات اليوم</th>
									<th>صافي ايرادات اليوم</th>
								</tr>
							</thead>
							<tbody>
								{selectedMonthDays.map(
									(eachDay: any, index) => (
										<tr key={index}>
											<td>{eachDay.date}</td>
											<td>
												{eachDay.income} <sub>ج.م</sub>
											</td>
											<td>
												{eachDay.expenses}{" "}
												<sub>ج.م</sub>
											</td>
											<td>
												{eachDay.expensesEl7ag}{" "}
												<sub>ج.م</sub>
											</td>
											<td>
												{eachDay.expensesBassem}{" "}
												<sub>ج.م</sub>
											</td>
											<td>
												{eachDay.total_day_expenses}{" "}
												<sub>ج.م</sub>
											</td>
											<td>
												{eachDay.total_day_income}{" "}
												<sub>ج.م</sub>
											</td>
										</tr>
									)
								)}
							</tbody>
							<br />
							<tr className="secondHead">
								<td>شهر</td>
								<td>إجمــالي ايرادات الشهر</td>
								<td>إجمــالي المصروفات</td>
								<td>اجمالي مسحويات الحاج</td>
								<td>اجمالي مسحويات باسم</td>
								<td>صافي مصروفات الشهر</td>
								<td>صافي ايرادات الشهر</td>
							</tr>
							<tr className="secondBody">
								<td>{currentMonth}</td>
								<td>
									{allMonthIncome} <sub>ج.م</sub>
								</td>
								<td>
									{allMonthExpenses}
									<sub>ج.م</sub>
								</td>
								<td>
									{totalEl7agExpenses} <sub>ج.م</sub>
								</td>
								<td>
									{totalBassemExpenses} <sub>ج.م</sub>
								</td>
								<td>
									{totalMonthExpenses} <sub>ج.م</sub>
								</td>
								<td>
									{totalMonthIncome} <sub>ج.م</sub>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</main>
		</div>
	);
}

function getCurrentMonth() {
	const date = new Date();
	var months = [
		"يناير",
		"فبراير",
		"مارس",
		"إبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	];
	var days = [
		"اﻷحد",
		"اﻷثنين",
		"الثلاثاء",
		"اﻷربعاء",
		"الخميس",
		"الجمعة",
		"السبت"
	];
	// var delDateString = days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear();
	const currentMonth = months[date.getMonth()];
	return currentMonth + ", " + date.getFullYear();
}
