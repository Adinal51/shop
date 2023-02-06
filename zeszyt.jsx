useEffect(() => {
  async function fetchPosts() {
    const response = await fetch(URL);
    const resData = await response.json();
    setPosts(resData.posts);
  }
}, []);

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/books", element: <Books /> },
]);

<RouterProvider router={router} />;

export function action(data) {
  data.request;
  fetch("url", {
    method: "Post",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

