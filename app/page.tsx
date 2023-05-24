'use client'

import { useState } from "react";

export default function Home() {
  const roles = [
    {id: "1", value:"coder", text: "Coder"},
    {id: "2", value:"marketer", text: "Marketer"},
    {id: "3", value:"writer", text: "Writer"}
  ]
  const prompt = "I want you to act as a "
  const [selectValue, setSelectValue] = useState("coder");
  const onChange = (event: any) => {
    const value = event.target.value;
    setSelectValue(value);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <label className="label">
        <span className="label-text">Act as?</span>
      </label>
      <select className="select select-primary w-full max-w-xs mb-3" defaultValue="Coder" onChange={(e)=>onChange(e)}>
        {roles.map(role => (
            <option key={role.id} value={role.value}>
              {role.text}
            </option>
          ))}
      </select>
      <textarea className="textarea textarea-primary w-full mb-3" placeholder="My prompt ..." value={prompt+selectValue} readOnly></textarea>
      <button className="btn btn-primary" onClick={() => {navigator.clipboard.writeText(prompt+selectValue)}}>Copy</button>
    </main>
  )
}
