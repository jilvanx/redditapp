import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/post";
import { PostType } from "../models/Post";

type UsePostProps = {
  postType: PostType;
};

export const usePosts = ({ postType }: UsePostProps) => {
  return useQuery({
    queryKey: [postType],
    queryFn: async () => getPosts(postType),
  });
};
