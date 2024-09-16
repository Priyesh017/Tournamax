import Navbar from "./Navbar";
import TopicsList from "./TopicList";

export default function ToDo() {
  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-center text-3xl my-5 font-bold text-gray-300">
          Welcome to To-Do Keep!
        </h1>
        <Navbar />
        <TopicsList />
      </div>
    </>
  );
}
