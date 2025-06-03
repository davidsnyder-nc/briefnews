const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static('.'));

// Gemini API proxy endpoint
app.post('/api/gemini', async (req, res) => {
    try {
        const { prompt, maxTokens, temperature, apiKey } = req.body;
        
        // Use environment variable if available, otherwise use provided key
        const actualApiKey = process.env.GEMINI_API_KEY || apiKey;
        
        if (!actualApiKey) {
            return res.status(400).json({ error: 'Gemini API key not configured' });
        }

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${actualApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    maxOutputTokens: maxTokens,
                    temperature: temperature
                }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API Error:', response.status, errorText);
            return res.status(response.status).json({ error: `Gemini API Error: ${response.status}` });
        }

        const data = await response.json();
        const content = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        
        res.json({ content });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});