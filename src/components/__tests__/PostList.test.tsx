import { render } from "@testing-library/react-native";
import { PostList } from "../PostList";
import { PostType } from "@/src/models/Post";

describe("PostList component", () => {
  it("should render a list of posts when data is available", () => {
    const postData = {
      data: {
        children: [
          {
            kind: "t3",
            data: {
              id: "1",
              created: 1633024800,
              thumbnail: "https://example.com/thumbnail1.jpg",
              title: "Post 1",
              author: "Author 1",
              score: 100,
              num_comments: 10,
              permalink: "/r/example/1",
            },
          },
          {
            kind: "t3",
            data: {
              id: "2",
              created: 1633024801,
              thumbnail: "https://example.com/thumbnail2.jpg",
              title: "Post 2",
              author: "Author 2",
              score: 200,
              num_comments: 20,
              permalink: "/r/example/2",
            },
          },
        ],
      },
    };

    jest.mock("../../hooks/usePosts", () => ({
      usePosts: jest.fn(() => ({
        data: postData,
        isLoading: false,
        refetch: jest.fn(),
      })),
    }));

    const { getByText } = render(<PostList postType={PostType.New} />);

    expect(getByText("Post 1")).toBeTruthy();
    expect(getByText("Post 2")).toBeTruthy();
  });

  it("should handle empty post data gracefully", () => {
    jest.mock("../hooks/usePosts", () => ({
      usePosts: jest.fn(() => ({
        data: { data: { children: [] } },
        isLoading: false,
        refetch: jest.fn(),
      })),
    }));

    const { getByText } = render(<PostList postType={PostType.New} />);

    expect(getByText("No posts available")).toBeTruthy();
  });
});
