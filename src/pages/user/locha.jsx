import React, { useState } from 'react';
import axios from 'axios';

const GenerateIdComponent = () => {
    const [key, setKey] = useState('order');
    const [prefix, setPrefix] = useState('od');
    const [length, setLength] = useState(4);
    const [generatedIds, setGeneratedIds] = useState([]); // Store all generated IDs

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
                <label>
                    Key:
                    <input
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Prefix:
                    <input
                        type="text"
                        value={prefix}
                        onChange={(e) => setPrefix(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Length:
                    <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </label>
                <br />
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
