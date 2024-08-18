import Navbar from "../../components/Navbar";
import TopicsList from "@/components/TopicList";

export default function ToDo() {
  return (
    <div>
      <div>
        <a
          href="/"
          className="ml-5 text-violet-700 py-2 px-4 rounded border-2 border-violet-700 hover:bg-violet-700 hover:text-white"
        >
          Home
        </a>
        <h1 className="text-center text-3xl my-5 font-bold text-gray-300">
          Welcome to To-Do Keep!
        </h1>
      </div>
      <div className="max-w-3xl mx-auto p-4">
        <Navbar />
        <TopicsList />
      </div>
    </div>
  );
}
