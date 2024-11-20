import { Outlet } from "react-router-dom";
import NavBar from "./NavBar"

function Root() {
    return (
        <>
            <NavBar />
            <main className="root-main">
                <Outlet />
            </main>
        </>
    );
}

export default Root;
