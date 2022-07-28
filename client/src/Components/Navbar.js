import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav class="flex justify-center space-x-4">
      <div>
        <Link to="/" class="font-medium px-5 py-2 text-lg text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"> Home </Link>
        <Link to="/Weather" class="font-medium px-5 py-2 text-lg text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" > Vær </Link>
      </div>
    </nav>
  )
}

export default Navbar