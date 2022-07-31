import { fireEvent, screen,render, waitFor } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { QueryClient, QueryClientProvider } from "react-query";

const middlewares: any[] = [];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {
    currentUser: {
      id: 34,
      email: "vincentowuor1@gmail.com",
      first_name: "vincent",
      last_name: "owuor",
    },
    isAuthenticated: false,
  },
};
const store = mockStore(initialState);
const queryClient = new QueryClient();

describe("TopBar Test", () => {
  test("TopBar should be on th dispaly window", async() => {
    const { getByRole } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    );
    const topbar: any = getByRole("topbar");
    expect(topbar).toBeInTheDocument()
  });
  test("TopBar should contain project title", async() => {
    const { getByRole } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    );
    const topBar: any = getByRole("app-title");
    expect(topBar).toBeInTheDocument()
  });
  test("Project title should read 'DEEZER'", async() => {
    const { getByText } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    );
    const topBar: any = getByText("DEEZER");
    expect(topBar).toBeInTheDocument()
  });
  test("Project title should have a home link'", async() => {
    const { getByRole } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    );
    const topBar: any = getByRole("home-link");
    expect(topBar).toBeInTheDocument()
  });
  test("Renders search dialog on search bar click", async() => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    );
    const searchInputNode: any = getByLabelText("search");
    expect(searchInputNode.value).toMatch("");
    fireEvent.click(screen.getByTestId('search'))
    await waitFor(() => screen.getByRole('search-box'))
    expect(screen.getByRole('search-box')).toBeInTheDocument()
  });
  test("Search dialog should allow text input", async() => {
    const { getByTestId } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    );
    fireEvent.click(screen.getByTestId('search'))
    const searchInputNode: any = getByTestId("search-artist-input");
    expect(searchInputNode?.value).toMatch("");
    fireEvent.change(searchInputNode, { target: { value: "a" } });
    expect(searchInputNode.value).toMatch("a");
  });
});
