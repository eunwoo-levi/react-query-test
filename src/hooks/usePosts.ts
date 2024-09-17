import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// fetchPost 함수에서 postId를 매개변수로 받아서 URL을 동적으로 설정합니다.
const fetchPost = () => {
  return axios.get(`http://localhost:3004/posts/`);
};

// usePostQuery 훅을 정의하고 postId를 매개변수로 받아서 쿼리키와 fetch 함수를 설정합니다.
export const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost(), // postId를 fetchPost에 전달합니다.
    retry: 1,
    select: (data) => data.data,
    // staleTime: 10000, // 10초 동안 데이터가 신선하다고 간주됨
    // cacheTime: 10000, // 10초 동안 캐시 유지
    // refetchInterval: 3000, // 3초마다 자동으로 refetch
    // refetchOnMount: false, // 마운트 시 refetch 하지 않음
    // refetchOnWindowFocus: true, // 윈도우 포커스 시 refetch
    // enabled: true, // 기본값은 true, false로 설정하면 쿼리가 비활성화됨
  });
};
