import useFetch from "./components/UseFetch";

function App() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading)
    return (
      <div className="flex flex-wrap gap-2 justify-between">
        <p className="bg-gray-400 h-[200px] w-[200px]"></p>
        <p className="bg-gray-400 h-[200px] w-[200px]"></p>
        <p className="bg-gray-400 h-[200px] w-[200px]"></p>
        <p className="bg-gray-400 h-[200px] w-[200px]"></p>
        <p className="bg-gray-400 h-[200px] w-[200px]"></p>
        <p className="bg-gray-400 h-[200px] w-[200px]"></p>
      </div>
    );

  return (
    <div>
      <h1 className="text-center text-[2rem] tracking-[4px] py-4">
        Fetched Posts
      </h1>
      <ul className="flex gap-[10px]  flex-wrap justify-between p-4 shadow">
        {data.map((post) => (
          <li
            key={post.id}
            className="w-[calc(100%/3-10px)] bg-gray-200 rounded-md p-4 "
          >
            <strong className="text-black">{post.title}</strong>
            <p className="text-black">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
