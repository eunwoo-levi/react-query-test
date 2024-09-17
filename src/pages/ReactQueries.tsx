import { useQueries } from "@tanstack/react-query";
import axios from "axios";

export default function ReactQueriesPage() {
  const ids = [1, 2, 3, 4];

  const fetchPostDetail = (id: number) => {
    return axios.get(`http://localhost:3004/posts/${id}`);
  };

  const result = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),

    combine: (results) => {
      return {
        data: results.map((result) => result.data?.data),
      };
    },
  });

  console.log("결과", result);

  return (
    <main>
      <div>{}</div>
    </main>
  );
}
