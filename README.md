# News Brief

A sophisticated single-page HTML news aggregation application that collects, curates, and presents news from 88+ RSS feeds with intelligent AI-powered content processing and balanced multiple category selection.

## 🚀 Features

### Core Functionality
- **Multi-Source RSS Aggregation**: Fetches news from 88+ verified RSS feeds across 18 categories
- **AI-Powered Content Processing**: Intelligent summarization using Google Gemini or OpenAI GPT models
- **Text-to-Speech Integration**: Google Cloud Text-to-Speech for article audio generation
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Single HTML File**: Complete application in one portable file

### News Categories
- **General News**: The New York Times, CNN, NPR, CBS News, Associated Press
- **Technology**: TechCrunch, WIRED, The Verge, CNET, Ars Technica, Gizmodo
- **Business**: Wall Street Journal, Forbes, Reuters Business, Bloomberg, MarketWatch
- **Sports**: ESPN, CBS Sports, Yahoo Sports, Sports Illustrated, NBC Sports
- **Science**: Live Science, Space.com, Scientific American, Nature, ScienceDaily
- **Health**: WebMD, Mayo Clinic, Healthline, Medical News Today
- **Entertainment**: Entertainment Weekly, Variety, Rolling Stone, TMZ, Hollywood Reporter
- **Politics**: Politico, The Hill, Washington Post Politics, NPR Politics, CNN Politics
- **World News**: BBC World, Al Jazeera, The Guardian World, Reuters World News
- **Environment**: Environmental Defense Fund, Sierra Club, Greenpeace, Earth Island Journal
- **Education**: Education Week, Inside Higher Ed, Chronicle of Higher Education
- **Lifestyle**: Lifehacker, Apartment Therapy, The Spruce, Better Homes & Gardens
- **Food & Cooking**: Serious Eats, Allrecipes, Food Network, Bon Appétit
- **Travel**: Condé Nast Traveler, Travel + Leisure, Nomadic Matt
- **Personal Finance**: NerdWallet, The Motley Fool, Money Under 30
- **Gaming**: IGN, GameSpot, Polygon, Kotaku, PC Gamer
- **Podcasts**: This American Life, Radiolab, Freakonomics Radio
- **Local News**: ZIP code-based Google News integration with major city newspapers

### AI Content Processing
- **Multiple AI Providers**: Support for Google Gemini and OpenAI GPT models
- **Content Summarization**: Brief, medium, or detailed summaries
- **Breaking News Detection**: Automatic identification and prioritization
- **Content Rewriting**: AI-powered article rewriting in multiple styles
- **Custom Prompts**: User-defined AI processing instructions
- **Duplicate Detection**: Intelligent filtering of similar articles

### User Interface Features
- **Multiple Category Selection**: Balanced article distribution across selected categories
- **Professional AI Summaries**: Single paragraph summaries with customizable prompts
- **View Modes**: Row and grid layout options
- **Article Index**: Quick navigation to specific articles
- **Source Filtering**: Filter articles by news source
- **Image Integration**: Article thumbnails with responsive layout
- **Real-time Status**: Loading indicators and progress tracking

### Audio Features
- **Individual Article Audio**: Generate speech for specific articles
- **Batch Audio Generation**: Create audio for all articles
- **Audio Controls**: Play, pause, and sequential playback
- **Voice Selection**: Multiple voice options for text-to-speech

### Data Management
- **OPML Support**: Import custom RSS feed collections
- **Settings Persistence**: Local storage of user preferences
- **Export Options**: Download newsletters in various formats
- **Content Filtering**: Block terms and customize content
- **Local News Integration**: ZIP code-based location news fetching

### Advanced Features
- **Multi-Proxy Support**: Robust RSS fetching with fallback mechanisms
- **Error Handling**: Comprehensive error management and user feedback
- **Performance Optimization**: Parallel processing and efficient data handling
- **Mobile Optimization**: Touch-friendly interface and responsive design

## 🛠 Setup & Configuration

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for RSS feeds and AI services

### API Key Configuration
1. **Google Gemini API** (Recommended):
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Generate a new API key
   - Enter in Settings → AI Provider Configuration

2. **OpenAI API** (Alternative):
   - Visit [OpenAI API Keys](https://platform.openai.com/api-keys)
   - Generate a new API key
   - Enter in Settings → AI Provider Configuration

3. **Google Cloud Text-to-Speech** (Optional):
   - Enable the Text-to-Speech API in Google Cloud Console
   - Use the same API key as Gemini

### Quick Start
1. Download the `index.html` file
2. Open in any modern web browser
3. Configure AI API keys in Settings
4. Optional: Set your ZIP code for local news in Settings
5. Select news categories and generate your first brief

## 📖 Usage Guide

### Basic Usage
1. **Select Categories**: Choose one or multiple news categories
2. **Generate Brief**: Click category buttons or use "Generate News from Selected Categories"
3. **Browse Articles**: Read AI-generated summaries with source links
4. **Audio Playback**: Generate and listen to article audio
5. **Filter & Sort**: Use source filters and view options

### Advanced Usage
1. **Custom OPML**: Upload your own RSS feed collections
2. **AI Customization**: Configure AI provider, style, and prompts
3. **Content Filtering**: Block specific terms or sources
4. **Export Options**: Download newsletters for sharing

### Local News Configuration
1. **Set ZIP Code**: Enter your ZIP code in Settings → Local News Configuration
2. **Select Local News**: Choose "Local News" category to fetch location-based articles
3. **Automatic Integration**: System fetches from Google News and major city newspapers
4. **Location Detection**: ZIP codes are automatically converted to city/state for better results

### Category Refresh System
- After generating articles, use the blue "Refresh with different categories" section
- Select multiple categories for combined news coverage
- Use "Clear Selection" to reset category choices

## 🔧 Technical Details

### Architecture
- **Frontend**: Vanilla JavaScript, HTML5, CSS3 with Tailwind CSS
- **RSS Processing**: Multi-proxy CORS handling with fallback mechanisms
- **AI Integration**: RESTful API calls to Gemini/OpenAI services
- **Audio Generation**: Google Cloud Text-to-Speech API integration
- **Data Storage**: Browser localStorage for settings and preferences

### Performance Features
- **Parallel Processing**: Concurrent RSS feed fetching
- **Smart Caching**: Efficient data management and storage
- **Error Recovery**: Robust fallback mechanisms for failed requests
- **Progressive Loading**: Incremental content display
- **Mobile Optimization**: Responsive design and touch interactions

### Security & Privacy
- **Client-Side Processing**: All data processing occurs in the browser
- **Secure API Calls**: HTTPS-only communication with external services
- **No Data Collection**: No user data is stored or transmitted
- **Local Storage Only**: All settings remain on the user's device

## 🎛 Configuration Options

### AI Settings
- **Provider Selection**: Choose between Gemini and OpenAI
- **Processing Style**: Professional (default), conversational, analytical, or simple
- **Content Length**: Brief, medium, or detailed summaries
- **Custom Prompts**: User-defined AI processing instructions with default "Write ONE paragraph summary"

### Display Settings
- **View Mode**: Row or grid layout
- **Source Information**: Show/hide source details
- **Category Tags**: Display article categories
- **Breaking News**: Highlight urgent stories

### Content Filtering
- **Blocked Terms**: Filter out unwanted content
- **Source Selection**: Choose specific news sources
- **Date Range**: Filter by publication date
- **Duplicate Handling**: Automatic similar article removal

## 📱 Mobile Support

- **Responsive Layout**: Optimized for all screen sizes
- **Touch Controls**: Finger-friendly buttons and navigation
- **Mobile-First Design**: Prioritized mobile user experience
- **Adaptive Images**: Proper image scaling and positioning

## 🔄 RSS Feed Management

### Default Feeds (88+ sources)
The application includes curated, verified RSS feeds across all major news categories, ensuring reliable content delivery with balanced multiple category selection.

### Custom OPML Import
- Upload OPML files to add custom RSS feeds
- Automatically categorizes feeds by OPML structure
- Overwrites default feeds when custom OPML is loaded
- Clear custom feeds to restore defaults

## 🚨 Troubleshooting

### Common Issues
1. **No Articles Loading**: Check internet connection and API keys
2. **AI Processing Fails**: Verify API key configuration
3. **Audio Not Working**: Ensure Google Cloud TTS is enabled
4. **RSS Feeds Failing**: Most feeds use rate limiting; this is normal

### Error Messages
- **API Configuration Required**: Add AI provider API keys in settings
- **Network Issues**: Check internet connection
- **Rate Limiting**: Some feeds may be temporarily unavailable

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📞 Support

For support and questions, please open an issue on the GitHub repository.

---

**News Brief** - Your intelligent news aggregation companion