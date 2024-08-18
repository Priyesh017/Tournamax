"use client";

import { useEffect, useState } from "react";
import EditTopicForm from "@/components/EditTopicForm";

const fetchTopicById = async (id) => {
  try {
    const res = await fetch(`/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching topic:", error);
  }
};

export default function EditTopic({ id, onClose }) {
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const loadTopic = async () => {
      const data = await fetchTopicById(id);
      if (data && data.topic) {
        setTopic(data.topic);
      } else {
        console.error("Topic data not found");
      }
    };

    loadTopic();
  }, [id]);

  if (!topic) return <div className="text-slate-300">Loading...</div>;

  return (
    <EditTopicForm
      id={id}
      title={topic.title}
      description={topic.description}
      onClose={onClose}
    />
  );
}
