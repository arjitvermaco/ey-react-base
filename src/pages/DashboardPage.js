import React from "react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div>
      DashboardPage
      <Link to="/settings">Go To Settings</Link>
    </div>
  );
}
