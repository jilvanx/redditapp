import { render } from "@testing-library/react-native";
import { OfflineBanner } from "../OfflineBanner";

describe("OfflineBanner component", () => {
  it("should render without network connection", () => {
    const { getByText } = render(<OfflineBanner />);
    expect(getByText("You are offline!")).toBeTruthy();
  });
});
