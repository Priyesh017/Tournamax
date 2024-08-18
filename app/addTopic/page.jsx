"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic({ onClose }) {
  // onClose is passed as a prop
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/todoList");
        router.refresh();
        onClose(); // Close the popup after successful submission
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl px-5 mx-auto">
      <h1 className="text-slate-300 font-bold text-2xl text-center mb-4">
        ADD
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-500 px-8 py-2 outline-none rounded"
          type="text"
          placeholder="Topic Title"
        />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="resize-none h-32 border border-slate-500 px-8 py-2 outline-none rounded"
          type="text"
          placeholder="Topic Description"
        />

        <button
          type="submit"
          className="w-1/2 text-violet-700 py-2 px-4 rounded border-2 border-violet-700 hover:bg-violet-700 hover:text-white"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
}
