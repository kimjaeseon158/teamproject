import React, { useState } from "react";

const Option = () => {
  const [records, setRecords] = useState([]);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [workTime, setWorkTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !location || !workTime) return;

    const newRecord = { date, location, workTime };
    setRecords([...records, newRecord]);

    setDate("");
    setLocation("");
    setWorkTime("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">작업 기록</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="업체/장소"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="작업 시간"
          value={workTime}
          onChange={(e) => setWorkTime(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          추가
        </button>
      </form>

      <ul className="mt-5">
        {records.map((record, index) => (
          <li key={index} className="p-2 border-b">
            {record.date} | {record.location} | {record.workTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Option;
