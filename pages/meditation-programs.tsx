import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MeditationPrograms: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-5">
                    <h2 className="text-xl font-bold">Meditation Programs</h2>
                    {/* Add program management components here */}
                </main>
            </div>
        </div>
    );
};

export default MeditationPrograms;