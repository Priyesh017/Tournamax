import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <h1 className="text-center text-gray-400 text-4xl">
        Welcome to my Next.js project!
      </h1>
      <div className="flex flex-col items-center mt-40 gap-10">
        <Link href="/todoList">
          <button className="text-violet-700 py-2 px-4 rounded border-2 border-violet-700 hover:bg-violet-700 hover:text-white">
            Here is my To-Do List
          </button>
        </Link>
        <Link href="/reactLeaflet">
          <button className="text-violet-700 py-2 px-4 rounded border-2 border-violet-700 hover:bg-violet-700 hover:text-white">
            Here is my React-Leaflet
          </button>
        </Link>
      </div>
    </div>
  );
}
