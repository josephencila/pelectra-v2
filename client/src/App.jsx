import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

      </Route>
    )
  )

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
