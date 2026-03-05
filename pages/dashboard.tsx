import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-5">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded shadow-md">
                            <h3>Total Users</h3>
                            <p className="text-2xl font-bold">1,234</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-md">
                            <h3>Active Subscribers</h3>
                            <p className="text-2xl font-bold">567</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-md">
                            <h3>Total Revenue</h3>
                            <p className="text-2xl font-bold">$12,345</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-md">
                            <h3>Total Meditation Sessions</h3>
                            <p className="text-2xl font-bold">456</p>
                        </div>
                    </div>
                    <div className="mt-6">  
                        <h3 className="text-lg font-semibold">Recent Activity</h3>
                        <ul className="list-disc pl-5">
                            <li>User X started a session.</li>
                            <li>User Y subscribed to Premium Plan.</li>
                            <li>User Z completed their first meditation.</li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;