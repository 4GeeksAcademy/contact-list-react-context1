import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone || !email || !address) {
            alert("No puedes dejar campos vacíos");
            return;
        }
        actions.postContacto(name, phone, email, address);
        navigate("/");
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white border-3 border-blue-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Contact</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-1">Address</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Save
                        </button>
                        <Link to="/" className="text-blue-500 hover:underline">Or back to contact</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
