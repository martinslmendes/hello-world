import Banner from "../Banner";
import {Outlet} from "react-router-dom";

export default function AppLayout() {
    return (
        <main>
            <Banner/>
            <Outlet/>
        </main>
    );
}