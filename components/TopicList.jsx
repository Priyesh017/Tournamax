import RemoveBtn from "./RemoveBtn";
import PopupU from "@/components/PopUpU";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

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
