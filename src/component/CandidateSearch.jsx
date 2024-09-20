// CandidateSearch.js
import React, { useState } from 'react';

const CandidateSearch = () => {
    const [location, setLocation] = useState('');
    const [role, setRole] = useState('');
    const [candidates, setCandidates] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Simulate fetching candidates based on location and role
        setCandidates([
            { name: 'John Doe', location: 'New York', role: 'Software Engineer' },
            { name: 'Jane Smith', location: 'San Francisco', role: 'Product Manager' }
        ]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Search Candidates</h2>
                <form onSubmit={handleSearch}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
                        <input 
                            className="w-full px-4 py-2 border rounded" 
                            type="text" 
                            id="location" 
                            placeholder="Enter location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="role">Job Role</label>
                        <input 
                            className="w-full px-4 py-2 border rounded" 
                            type="text" 
                            id="role" 
                            placeholder="Enter job role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Search
                    </button>
                </form>
            </div>

            <div className="mt-10 max-w-lg mx-auto">
                <h3 className="text-xl font-bold mb-4">Candidates</h3>
                <ul>
                    {candidates.length > 0 ? candidates.map((candidate, index) => (
                        <li key={index} className="bg-white p-4 mb-4 rounded shadow-md">
                            <p><strong>Name:</strong> {candidate.name}</p>
                            <p><strong>Location:</strong> {candidate.location}</p>
                            <p><strong>Role:</strong> {candidate.role}</p>
                        </li>
                    )) : (
                        <p className="text-center text-gray-500">No candidates found</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CandidateSearch;
