import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 border-b-2 py-4">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl font-bold">SDATTA</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://i.ibb.co.com/7R9nVf9/logo.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;