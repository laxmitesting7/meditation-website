import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Sessions: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-5">
                    <h2 className="text-xl font-bold">Sessions</h2>
                    {/* Add session management components here */}
                </main>
            </div>
        </div>
    );
};

export default Sessions;