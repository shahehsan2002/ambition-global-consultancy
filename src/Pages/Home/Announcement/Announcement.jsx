import { useEffect, useState } from "react";


export const Announcement = () => {
    const [announce, setAnnounce] = useState([]);

    useEffect(() => {
        fetch('https://discuss-dive-server.vercel.app/announcement')
            .then(res => res.json())
            .then(data => setAnnounce(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-8">
            {announce.map(announceS => (
                <div key={announceS._id} className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={announceS.authorImage} alt="Author" className="rounded-xl" />
                    </figure>
                    
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Author Name:{announceS.authorName}</h2>
                        <p>Title:{announceS.title}</p>
                        <p>Description : {announceS.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Announcement;
