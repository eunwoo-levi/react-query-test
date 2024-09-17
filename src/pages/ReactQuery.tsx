import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ReactQuery() {
  const fetchPost = () => {
    return axios.get("http://localhost:3004/posts");
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
    retry: 1,
    select: (data) => {
      return data.data;
    },
  });

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
      {data.map((item: any, idx: number) => (
        <div key={idx}>{item.title}</div>
      ))}
    </main>
  );
}
