# News Brief

<div align="center">

![News Brief Screenshot](https://raw.githubusercontent.com/user/repo/main/screenshot.svg)

**AI-powered news aggregation with intelligent filtering and custom newsletter generation**

[![HTML](https://img.shields.io/badge/HTML-5-orange?style=flat-square&logo=html5)](https://html.spec.whatwg.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)](https://www.ecma-international.org/ecma-262/)
[![CSS](https://img.shields.io/badge/CSS-3-blue?style=flat-square&logo=css3)](https://www.w3.org/Style/CSS/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

</div>

## 🚀 Features

### Core Functionality
- **139+ RSS Feed Sources** - Aggregates news from verified, trusted sources
- **AI-Powered Summaries** - Uses Google Gemini or OpenAI to generate intelligent article summaries
- **Multi-Category Support** - Technology, Business, Sports, Science, Health, Entertainment, and more
- **Breaking News Detection** - Automatically prioritizes urgent news stories
- **Smart Filtering** - Block unwanted terms and filter by source or category
- **Witty Loading Messages** - 20+ random humorous loading messages for better user experience

### Advanced Capabilities
- **Numbered Article System** - Articles displayed with numbers instead of icons for easy navigation
- **Clickable Article Index** - Quick navigation to specific articles with truncated titles
- **Google Text-to-Speech** - Convert articles to audio using Google's male voice (en-US-Standard-D)
- **Audio Newsletter** - Listen to entire newsletter with play/pause controls and sequential playback
- **Custom Newsletter Generation** - Export professionally formatted newsletters 
- **Source Filtering** - View articles from specific news sources only
- **Load More Articles** - Fetch additional unique content without duplicates
- **AI Rewrite Mode** - Transform articles into polished, engaging stories
- **Custom AI Prompts** - Personalize how AI processes your news content
- **Multiple Export Options** - Copy text, integrate with NotebookLM, or download HTML

### User Experience
- **Larger Loading Spinner** - Enhanced visibility during content loading
- **Progressive UI** - Category dropdown and controls appear only after articles load
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Row/Grid View Modes** - Choose your preferred article layout
- **Toast Notifications** - Non-intrusive feedback for all actions
- **OPML Support** - Import custom RSS feed collections
- **Persistent Settings** - All preferences saved locally
- **Article Highlighting** - Smooth scrolling with visual highlighting when using index navigation

## 🎯 Quick Start

1. **Download the HTML file** or clone this repository
2. **Open `index.html`** in any modern web browser
3. **Configure AI provider** in Settings (Gemini API key recommended)
4. **Select news categories** and generate your personalized news digest

### Getting API Keys

**Google Gemini (Recommended)**
- Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
- Create a free API key
- Add it in Settings → AI Provider Configuration
- **Note**: The same API key is used for both Gemini AI and Google Text-to-Speech features

**OpenAI (Alternative)**
- Visit [OpenAI Platform](https://platform.openai.com/api-keys)
- Generate an API key
- Select OpenAI in Settings and add your key

## 📖 How to Use

### Basic Usage
1. **Select Categories**: Choose from 15+ news categories or select multiple for a custom mix
2. **Generate Newsletter**: Click any category button to fetch and process articles
3. **Navigate Articles**: Use the clickable article index at the top to jump to specific stories
4. **Filter Content**: Use source filter buttons to view articles from specific news outlets
5. **Load More**: Click "Load More Articles" for additional unique content

### Audio Features
1. **Generate with Audio**: After articles load, click "Generate with Audio" button
2. **Individual Playback**: Use play buttons on each article to listen to specific stories
3. **Sequential Playback**: Use "Play All" to listen to the entire newsletter sequentially
4. **Audio Controls**: Pause, resume, or stop audio playback at any time

### Advanced Features
- **Article Index Navigation**: Click numbered articles in the index for smooth scrolling with highlighting
- **AI Rewrite Mode**: Enable in Settings for completely rewritten articles instead of summaries
- **Custom Prompts**: Modify the AI prompt template to change how articles are processed
- **Newsletter Export**: Generate professional newsletters with numbered articles
- **Blocked Terms**: Add keywords to automatically filter out unwanted content

### Newsletter Generation
1. Generate articles using any method
2. Choose from newsletter options:
   - **Refresh**: Update articles with current settings
   - **Generate with Audio**: Add Text-to-Speech capabilities to articles
3. Export options available:
   - **Copy Text**: Plain text for pasting elsewhere
   - **Copy & Open NotebookLM**: Automatic integration with Google's NotebookLM
   - **Download HTML**: Professional newsletter that opens in a new tab

## 🛠 Technical Details

### Architecture
- **Single HTML File**: Entire application contained in one file for maximum portability
- **Client-Side Processing**: No server required, runs entirely in the browser
- **Local Storage**: Settings and preferences persist between sessions
- **RSS Parsing**: Native XML parsing with CORS proxy handling

### Supported News Sources
- **General News**: NYT, CNN, Reuters, BBC, NPR, Associated Press
- **Technology**: TechCrunch, WIRED, The Verge, Ars Technica, Engadget
- **Business**: Bloomberg, Forbes, MarketWatch, Financial Times
- **Sports**: ESPN, Sports Illustrated, Bleacher Report
- **Science**: Scientific American, Nature, New Scientist
- **And 250+ more verified sources across all categories**

### AI Integration
- **Google Gemini 1.5 Flash**: Primary AI provider for speed and accuracy
- **OpenAI GPT-4**: Alternative option with proven reliability
- **Google Text-to-Speech**: Convert articles to audio using en-US-Standard-D (cheapest male voice)
- **Custom Prompts**: Full control over AI processing instructions
- **Error Handling**: Graceful fallbacks when AI services are unavailable

### Audio Features
- **MP3 Audio Generation**: High-quality audio synthesis from article content
- **Sequential Playback**: Automatic progression through entire newsletter
- **Individual Controls**: Play/pause buttons for each article
- **Audio Management**: Global play all and stop all functionality
- **Blob URL Handling**: Efficient audio streaming without external dependencies

## 🔧 Customization

### Adding Custom RSS Feeds
1. Create an OPML file with your preferred feeds
2. Upload via Settings → RSS Feeds (OPML)
3. Or edit the `DEFAULT_OPML` constant in the code

### Modifying AI Behavior
- **Writing Style**: Choose from Professional, Conversational, Analytical, or Simple
- **Custom Prompts**: Use `{article.title}` and `{article.description}` placeholders
- **Rewrite Mode**: Enable for complete article transformation vs. summarization

### Styling and Layout
- Built with Tailwind CSS for easy customization
- Modify CSS classes to change colors, spacing, and layout
- Responsive design adapts to all screen sizes

## 📱 Browser Compatibility

- **Chrome/Chromium**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile Browsers**: Responsive design works on all devices

## 🔒 Privacy & Security

- **No Data Collection**: All processing happens locally in your browser
- **API Keys**: Stored securely in browser local storage
- **No Tracking**: No analytics, cookies, or external tracking
- **Open Source**: Full transparency with readable code

## 🤝 Contributing

This project is designed as a single-file application for maximum simplicity and portability. Contributions are welcome for:

- Adding new verified RSS feed sources
- Improving AI prompt templates
- Enhancing the user interface
- Bug fixes and performance optimizations

## 📄 License

MIT License - feel free to use, modify, and distribute as needed.

## 🆘 Support

### Common Issues
- **No articles loading**: Check your internet connection and RSS feed availability
- **AI not working**: Verify your API key is correctly configured in Settings
- **Settings not saving**: Ensure local storage is enabled in your browser
- **Audio not generating**: Confirm Google API key is set and has Text-to-Speech API enabled
- **Article index not showing**: Wait for articles to fully load before expecting navigation features

### Troubleshooting
1. **Clear browser cache** if experiencing issues
2. **Check browser console** for detailed error messages
3. **Verify API keys** are valid and have sufficient quota for both AI and TTS services
4. **Test with default feeds** before using custom OPML files
5. **Audio issues**: Ensure browser supports HTML5 audio and check API quotas
6. **Progressive loading**: Category controls appear only after successful article generation

---

<div align="center">

**Built with ❤️ for news enthusiasts who value quality, curation, and customization**

[Report Bug](https://github.com/user/repo/issues) • [Request Feature](https://github.com/user/repo/issues) • [Documentation](https://github.com/user/repo/wiki)

</div>