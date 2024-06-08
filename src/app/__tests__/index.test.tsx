import React, { ReactNode } from "react";
import {
  render,
  fireEvent,
  renderHook,
  waitFor,
} from "@testing-library/react-native";
import HomeScreen from "../index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePosts } from "@/src/hooks/usePosts";
import { PostType } from "@/src/models/Post";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("<HomeScreen />", () => {
  it("Loading state is displayed when fetching data", () => {
    const { result } = renderHook(() => usePosts({ postType: PostType.New }), {
      wrapper,
    });

    expect(result.current.isLoading).toBe(true);
    // await waitFor(() => {
    //   return result.current.isSuccess;
    // });

    // expect(result.current).toEqual({
    //   data: { data: { children: [] } },
    // });
  });

  it("renders the tab buttons correctly", async () => {
    const { result } = renderHook(() => usePosts({ postType: PostType.New }), {
      wrapper,
    });
    const { getByText } = render(<HomeScreen />);

    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(getByText("New")).toBeTruthy();
    expect(getByText("Top")).toBeTruthy();
    expect(getByText("Popular")).toBeTruthy();
    expect(getByText("Hot")).toBeTruthy();
  });

  it("changes the active tab when a button is pressed", () => {
    const clientQueryClient = new QueryClient();
    const { getByText } = render(
      <QueryClientProvider client={clientQueryClient}>
        <HomeScreen />
      </QueryClientProvider>
    );
    const topButton = getByText("Top");
    fireEvent.press(topButton);
    expect(topButton.props.style[1].backgroundColor).toBe("#FFFFFF");
    expect(topButton.props.style[0].color).toBe("#007BFF");
  });
});
