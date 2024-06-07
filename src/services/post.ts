import { AxiosError, api } from "../constants/api";
import { PostResponse, PostType } from "../models/Post";

const getPosts = async (type: PostType) => {
  try {
    const { data } = await api.get<PostResponse>(
      type === PostType.Popular ? "" : type
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getPosts, AxiosError };
