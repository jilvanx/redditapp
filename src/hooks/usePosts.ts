import { useQuery } from "@tanstack/react-query";

import { PostType } from "../models/Post";
import { getPosts } from "../services/post";

type UsePostProps = {
  postType: PostType;
};

export const usePosts = ({ postType }: UsePostProps) => {
  return useQuery({
    queryKey: [postType],
    queryFn: async () => getPosts(postType),
  });
};
