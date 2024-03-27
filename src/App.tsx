import { NavLink, Outlet } from 'react-router-dom';


function App() {
  const uriList = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/profile",
      label: "Profile",
    },
    {
      path: "/tnx-details",
      label: "Tnx Details",
    },
  ]
  return (
    <>
      <h1>Learn Tanstack</h1>
      <ul>
        {uriList.map(({ path, label }) => (
          <li key={path} style={{ margin: '10px 0' }}>
            <NavLink to={path} style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "red" : "black"
            })}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet></Outlet>
    </>
  );
}

export default App;
