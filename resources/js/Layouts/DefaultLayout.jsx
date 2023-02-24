import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Default({ auth, children, errors }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar auth={auth} errors={errors} />

            <main>{children}</main>
        </div>
    );
}
