import { usePostQuery } from "../hooks/usePosts";

export default function ReactQuery() {
  const { data, isLoading, isError, error, refetch } = usePostQuery();

  console.log("데이터 테스트: ", data, isLoading);
  console.log("에러 테스트: ", isError, error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <main>
      <button
        onClick={() => refetch()}
        className="bg-red-500 p-1 text-white rounded-lg"
      >
        post리스트 다시 들고오기!
      </button>
      <div>
        {data?.map((item: any, idx: number) => (
          <div key={idx}>{item.title}</div>
        ))}
      </div>
    </main>
  );
}
