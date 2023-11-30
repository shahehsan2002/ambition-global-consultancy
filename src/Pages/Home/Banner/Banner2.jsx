import { useState } from 'react';
import img6 from '../../../assets/images/banner1.jpg';

const Banner2 = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Perform search operations based on searchQuery
        // This could involve filtering posts, fetching search results, etc.
    };

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img6})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    {/* Header content */}
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    
                    <div className="flex justify-center items-center mb-8">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="border border-gray-300 px-3 py-2 rounded-md mr-2 focus:outline-none"
                        />
                        <button className="btn btn-primary">Search</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner2;
