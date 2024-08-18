"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description, onClose }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [error, setError] = useState(null); // State to handle error messages

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state on submit

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, description: newDescription }),
      });

      if (!res.ok) {
        // Extract and throw detailed error message
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update topic");
      }

      // Refresh the router and close the popup
      router.refresh();
      onClose(); // Close the popup after successful update
    } catch (error) {
      console.error("Error updating topic:", error);
      setError(error.message); // Set error message to display
    }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-slate-300 font-bold text-2xl text-center mb-4">
        UPDATE
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border border-slate-500 px-8 py-2 outline-none rounded"
          type="text"
          placeholder="Topic Title"
          required
        />
        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="resize-none h-32 border border-slate-500 px-4 py-2 outline-none rounded"
          placeholder="Topic Description"
          required
        />
        {error && <p className="text-red-500 text-center">{error}</p>}

        <button
          type="submit"
          className="w-1/2 text-violet-700 py-2 px-4 rounded border-2 border-violet-700 hover:bg-violet-700 hover:text-white"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
}
