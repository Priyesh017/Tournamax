import RemoveBtn from "./RemoveBtn";
import PopupU from "@/components/PopUpU";

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const data = await res.json();
    return data; // Ensure we return the entire data object
  } catch (error) {
    console.log("Error loading topics: ", error);
    return null; // Return null in case of error
  }
};

export default async function TopicsList() {
  const data = await getTopics();

  // If data is null or topics is not found, return a fallback UI
  if (!data || !data.topics) {
    return <div className="text-center text-white">No topics available.</div>;
  }

  const { topics } = data;

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start rounded"
        >
          <div>
            <h2 className="font-bold text-2xl text-gray-300 italic">
              {t.title}
            </h2>
            <div className="text-gray-300 mt-2">{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <PopupU id={t._id} /> {/* Pass the id to PopupU */}
          </div>
        </div>
      ))}
    </>
  );
}
