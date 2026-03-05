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
                    {/* Add dashboard components like KPI cards and charts here */}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;