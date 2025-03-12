import { useState } from "react";
import { subMonths, addMonths } from "date-fns";

const groupDatesByWeek = (startDay, endDay) => {
    const weeks     = [];
    let currentWeek = [];
    let currentDate = new Date(startDay);

    while (currentDate <= endDay) {
        currentWeek.push(new Date(currentDate));

        if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }

    return weeks;
    };

    const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const year  = date.getFullYear();
    const month = date.getMonth();

    const firstMonth = new Date(year, month, 1);
    const startDay   = new Date(firstMonth);
    startDay.setDate(startDay.getDate() - startDay.getDay());

    const lastDayOfMonth = new Date(year, month + 1, 0);
    const endDay         = new Date(lastDayOfMonth);
    endDay.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

    const weeks = groupDatesByWeek(startDay, endDay);

    return (
        <div>
        <div>
            <button onClick={() => setDate(subMonths(date, 1))}>이전 달</button>
            <span>{year}년 {month + 1}월</span>
            <button onClick={() => setDate(addMonths(date, 1))}>다음 달</button>
        </div>
        <table>
            <thead>
            <tr>
                <th>일</th>
                <th>월</th>
                <th>화</th>
                <th>수</th>
                <th>목</th>
                <th>금</th>
                <th>토</th>
            </tr>
            </thead>
            <tbody>
            {weeks.map((week, i) => (
                <tr key={i}>
                {week.map((day, j) => (
                    <td key={j} >
                    {day.getDate()}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

export default Calendar;
