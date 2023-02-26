import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Default({ auth, children, errors, title }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-primary">
            <Navbar auth={auth} errors={errors} child={children} />
            <Head title={title} />
        </div>
    );
}
