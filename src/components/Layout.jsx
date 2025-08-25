import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="px-4 pt-6 pb-2 md:px-12 min-h-screen flex flex-col">
        <Header />
            <Outlet />
        <Footer />
        </div>
    )
}