import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Analytics: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-5">
                    <h2 className="text-xl font-bold">Analytics</h2>
                    {/* Add analytics components here */}
                </main>
            </div>
        </div>
    );
};

export default Analytics;