import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false, // This prevents the component from being rendered on the server
});

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
          Welcome to Indian Leaflet!
        </h1>
      </div>
      <div className="mx-auto p-4">
        <MapContainer />
      </div>
    </div>
  );
}
