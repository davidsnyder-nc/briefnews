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
- **270+ RSS Feed Sources** - Aggregates news from verified, trusted sources
- **AI-Powered Summaries** - Uses Google Gemini or OpenAI to generate intelligent article summaries
- **Multi-Category Support** - Technology, Business, Sports, Science, Health, Entertainment, and more
- **Breaking News Detection** - Automatically prioritizes urgent news stories
- **Smart Filtering** - Block unwanted terms and filter by source or category

### Advanced Capabilities
- **Custom Newsletter Generation** - Export professionally formatted newsletters with unique SVG icons
- **Source Filtering** - View articles from specific news sources only
- **Load More Articles** - Fetch additional unique content without duplicates
- **AI Rewrite Mode** - Transform articles into polished, engaging stories
- **Custom AI Prompts** - Personalize how AI processes your news content
- **Multiple Export Options** - Copy text, integrate with NotebookLM, or download HTML

### User Experience
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Row/Grid View Modes** - Choose your preferred article layout
- **Toast Notifications** - Non-intrusive feedback for all actions
- **OPML Support** - Import custom RSS feed collections
- **Persistent Settings** - All preferences saved locally

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

**OpenAI (Alternative)**
- Visit [OpenAI Platform](https://platform.openai.com/api-keys)
- Generate an API key
- Select OpenAI in Settings and add your key

## 📖 How to Use

### Basic Usage
1. **Select Categories**: Choose from 15+ news categories or select multiple for a custom mix
2. **Generate Newsletter**: Click any category button to fetch and process articles
3. **Filter Content**: Use source filter buttons to view articles from specific news outlets
4. **Load More**: Click "Load More Articles" for additional unique content

### Advanced Features
- **AI Rewrite Mode**: Enable in Settings for completely rewritten articles instead of summaries
- **Custom Prompts**: Modify the AI prompt template to change how articles are processed
- **Newsletter Export**: Generate professional newsletters with custom SVG icons for each article
- **Blocked Terms**: Add keywords to automatically filter out unwanted content

### Newsletter Generation
1. Generate articles using any method
2. Click "Generate Newsletter" in the header
3. Choose from three export options:
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
- **Custom Prompts**: Full control over AI processing instructions
- **Error Handling**: Graceful fallbacks when AI services are unavailable

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

### Troubleshooting
1. **Clear browser cache** if experiencing issues
2. **Check browser console** for detailed error messages
3. **Verify API keys** are valid and have sufficient quota
4. **Test with default feeds** before using custom OPML files

---

<div align="center">

**Built with ❤️ for news enthusiasts who value quality, curation, and customization**

[Report Bug](https://github.com/user/repo/issues) • [Request Feature](https://github.com/user/repo/issues) • [Documentation](https://github.com/user/repo/wiki)

</div>