import { Outlet } from "react-router-dom";

function Root() {
  return (
    <main className="root-main">
        <Outlet />
    </main>
  );
}

export default Root;
