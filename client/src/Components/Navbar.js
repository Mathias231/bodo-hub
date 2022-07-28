import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="flex justify-center space-x-4">
        <Link to="/" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"> Home </Link>
        <Link to="/Weather" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" > Vær </Link>
    </nav>
  )
}

export default Navbar