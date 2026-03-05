import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen p-5">
            <h2 className="text-lg font-bold">Admin Panel</h2>
            <ul>
                <li><a href="/dashboard" className="block py-2 hover:bg-gray-700">Dashboard</a></li>
                <li><a href="/meditation-programs" className="block py-2 hover:bg-gray-700">Meditation Programs</a></li>
                <li><a href="/sessions" className="block py-2 hover:bg-gray-700">Sessions</a></li>
                <li><a href="/users" className="block py-2 hover:bg-gray-700">Users</a></li>
                <li><a href="/subscriptions" className="block py-2 hover:bg-gray-700">Subscriptions</a></li>
                <li><a href="/categories" className="block py-2 hover:bg-gray-700">Categories</a></li>
                <li><a href="/blogs" className="block py-2 hover:bg-gray-700">Blogs</a></li>
                <li><a href="/analytics" className="block py-2 hover:bg-gray-700">Analytics</a></li>
                <li><a href="/settings" className="block py-2 hover:bg-gray-700">Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;