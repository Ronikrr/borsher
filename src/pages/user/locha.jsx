import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GenerateIdComponent = () => {
    const [key, setKey] = useState('order');
    const [prefix, setPrefix] = useState('od');
    const [length, setLength] = useState(4);
    const [generatedIds, setGeneratedIds] = useState([]); // Store all generated IDs

    // Fetch previously generated IDs from the server when the component mounts
    useEffect(() => {
        const fetchGeneratedIds = async () => {
            try {
                const response = await axios.get('http://localhost:9000/get-ids');
                const ids = response.data.ids.map(item => item.value);
                setGeneratedIds(ids);
            } catch (error) {
                console.error('Error fetching IDs:', error);
            }
        };

        fetchGeneratedIds();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/generate-id', {
                key,
                prefix,
                length,
            });

            // Append the new ID to the array of generated IDs
            setGeneratedIds((prevIds) => [...prevIds, response.data.id]);
        } catch (error) {
            console.error('Error generating ID:', error);
        }
    };

    return (
        <div>
            <h1>Generate IDs</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Generate ID</button>
            </form>

            <div>
                <h2>Generated IDs:</h2>
                <ul>
                    {generatedIds.map((id, index) => (
                        <li key={index}>{id}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GenerateIdComponent;
