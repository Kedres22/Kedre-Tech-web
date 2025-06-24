// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const sideNav = document.getElementById('sideNav');
const menuBtn = document.getElementById('menuBtn');
const closeNavBtn = document.getElementById('closeNavBtn');
const themeToggle = document.getElementById('themeToggle');
const mainContent = document.getElementById('mainContent');
const pageSections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');
const bottomNavLinks = document.querySelectorAll('.bottom-nav .nav-link');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.getElementById('searchInput');
const fabBtn = document.getElementById('fabBtn');
const fabMenu = document.getElementById('fabMenu');
const fabOptions = document.querySelectorAll('.fab-option');
const contactForm = document.getElementById('contactForm');
const commentInput = document.getElementById('commentInput');
const postCommentBtn = document.getElementById('postCommentBtn');
const commentsList = document.getElementById('commentsList');
const filterBtns = document.querySelectorAll('.filter-btn');
const phoneReviewsContainer = document.getElementById('phoneReviewsContainer');
const comparePhonesBtn = document.getElementById('comparePhonesBtn');
const compareModal = document.getElementById('compareModal');
const closeCompareModal = document.getElementById('closeCompareModal');
const cancelCompare = document.getElementById('cancelCompare');
const confirmCompare = document.getElementById('confirmCompare');
const comparePhone1 = document.getElementById('comparePhone1');
const comparePhone2 = document.getElementById('comparePhone2');
const compareResults = document.getElementById('compareResults');
const sortPhones = document.getElementById('sortPhones');
const aiTechContainer = document.getElementById('aiTechContainer');
const aiCatBtns = document.querySelectorAll('.ai-cat-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const runCodeBtn = document.getElementById('runCodeBtn');
const codeEditor = document.getElementById('codeEditor');
const codeOutput = document.getElementById('codeOutput');
const clearEditorBtn = document.getElementById('clearEditorBtn');
const languageSelect = document.getElementById('languageSelect');
const solutionSearch = document.getElementById('solutionSearch');
const solutionCategory = document.getElementById('solutionCategory');
const solutionsContainer = document.getElementById('solutionsContainer');
const newsContainer = document.getElementById('newsContainer');
const newsSource = document.getElementById('newsSource');
const newsTimeframe = document.getElementById('newsTimeframe');
const prevNewsPage = document.getElementById('prevNewsPage');
const nextNewsPage = document.getElementById('nextNewsPage');
const newsPageIndicator = document.getElementById('newsPageIndicator');
const videoContainer = document.getElementById('videoContainer');
const videoCategory = document.getElementById('videoCategory');
const videoDuration = document.getElementById('videoDuration');
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotModal = document.getElementById('chatbotModal');
const closeChatbotModal = document.getElementById('closeChatbotModal');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');
const userPrefsBtn = document.getElementById('userPrefsBtn');
const userPrefsPanel = document.getElementById('userPrefsPanel');
const closePrefsBtn = document.getElementById('closePrefsBtn');
const savePrefsBtn = document.getElementById('savePrefsBtn');
const recTabs = document.querySelectorAll('.rec-tab');
const recContents = document.querySelectorAll('.recommendation-content');
const phoneCount = document.getElementById('phoneCount');
const articleCount = document.getElementById('articleCount');
const tutorialCount = document.getElementById('tutorialCount');
const solutionCount = document.getElementById('solutionCount');
const stars = document.querySelectorAll('.star');

// App Data
let comments = JSON.parse(localStorage.getItem('comments')) || [];
let currentTheme = localStorage.getItem('theme')) || 'light';
let userPrefs = JSON.parse(localStorage.getItem('userPrefs')) || {
    showRatings: true,
    showImages: true,
    darkReader: false,
    newsAlerts: false,
    reviewAlerts: false,
    saveHistory: true,
    saveComments: true
};
let currentNewsPage = 1;
let newsPerPage = 6;
let totalNewsPages = 1;
let selectedRating = 0;
let compareData = {
    phone1: null,
    phone2: null
};

// Sample Data (in a real app, this would come from an API)
const phoneReviews = [
    {
        id: 1,
        title: "iPhone 15 Pro Max",
        image: "images/phone1.jpg",
        rating: 4.8,
        price: "$1,099",
        category: "flagship",
        brand: "Apple",
        releaseDate: "2023-09-22",
        specs: {
            display: "6.7\" Super Retina XDR",
            processor: "A17 Pro",
            ram: "8GB",
            storage: "256GB/512GB/1TB",
            camera: "Triple 48MP + 12MP + 12MP",
            battery: "4422 mAh",
            os: "iOS 17"
        },
        pros: ["Excellent camera system", "Powerful A17 Pro chip", "Premium titanium design", "USB-C finally added", "Best video recording"],
        cons: ["Very expensive", "Still has a notch", "Battery life could be better", "Limited customization"],
        review: "The iPhone 15 Pro Max represents Apple's best effort yet, with a titanium design, powerful new chip, and finally USB-C. The camera system is industry-leading, especially for video, but the high price will be prohibitive for many."
    },
    {
        id: 2,
        title: "Samsung Galaxy S23 Ultra",
        image: "images/phone2.jpg",
        rating: 4.7,
        price: "$1,199",
        category: "flagship",
        brand: "Samsung",
        releaseDate: "2023-02-17",
        specs: {
            display: "6.8\" Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: "256GB/512GB/1TB",
            camera: "Quad 200MP + 12MP + 10MP + 10MP",
            battery: "5000 mAh",
            os: "Android 13 (One UI 5.1)"
        },
        pros: ["Best display on any phone", "Incredible 200MP camera", "S Pen included", "Excellent battery life", "Powerful performance"],
        cons: ["Very large and heavy", "Expensive", "One UI has learning curve", "Slow charging compared to competitors"],
        review: "The Galaxy S23 Ultra is Samsung's most capable phone yet, with an incredible 200MP camera, built-in S Pen, and the best display on any smartphone. It's big, powerful, and packed with features, though its size won't suit everyone."
    },
    {
        id: 3,
        title: "Google Pixel 7 Pro",
        image: "images/phone3.jpg",
        rating: 4.5,
        price: "$899",
        category: "flagship",
        brand: "Google",
        releaseDate: "2022-10-13",
        specs: {
            display: "6.7\" LTPO OLED",
            processor: "Google Tensor G2",
            ram: "12GB",
            storage: "128GB/256GB/512GB",
            camera: "Triple 50MP + 12MP + 48MP",
            battery: "5000 mAh",
            os: "Android 13"
        },
        pros: ["Best Android software experience", "Excellent computational photography", "Great value for a flagship", "Frequent feature drops", "Clean design"],
        cons: ["Tensor chip not as powerful as competitors", "Limited storage options", "No telephoto lens", "Face unlock not as secure as Face ID"],
        review: "The Pixel 7 Pro offers the best pure Android experience with Google's excellent computational photography. While the Tensor chip isn't as powerful as Apple or Qualcomm's best, the overall package is compelling at this price point."
    },
    {
        id: 4,
        title: "OnePlus 11",
        image: "images/phone4.jpg",
        rating: 4.3,
        price: "$699",
        category: "midrange",
        brand: "OnePlus",
        releaseDate: "2023-01-09",
        specs: {
            display: "6.7\" Fluid AMOLED",
            processor: "Snapdragon 8 Gen 2",
            ram: "8GB/16GB",
            storage: "128GB/256GB",
            camera: "Triple 50MP + 48MP + 32MP",
            battery: "5000 mAh",
            os: "Android 13 (OxygenOS)"
        },
        pros: ["Excellent performance for price", "Fast charging (100W)", "Smooth 120Hz display", "Good camera system", "Alert slider"],
        cons: ["No wireless charging", "No IP rating", "OxygenOS has changed from original vision", "No telephoto lens"],
        review: "The OnePlus 11 offers flagship-level performance at a mid-range price, with a great display and super-fast charging. The lack of wireless charging and IP rating are notable omissions, but this is still a great value proposition."
    },
    {
        id: 5,
        title: "Xiaomi Redmi Note 12 Pro",
        image: "images/phone5.jpg",
        rating: 4.0,
        price: "$299",
        category: "budget",
        brand: "Xiaomi",
        releaseDate: "2023-03-03",
        specs: {
            display: "6.67\" AMOLED",
            processor: "MediaTek Dimensity 1080",
            ram: "6GB/8GB",
            storage: "128GB/256GB",
            camera: "Triple 50MP + 8MP + 2MP",
            battery: "5000 mAh",
            os: "Android 12 (MIUI 14)"
        },
        pros: ["Excellent value", "Great AMOLED display", "Good main camera", "Long battery life", "Fast charging (67W)"],
        cons: ["MIUI has ads", "Performance just okay for gaming", "Plastic build", "Ultrawide and macro cameras are weak"],
        review: "The Redmi Note 12 Pro offers incredible value with its AMOLED display and decent camera system. While performance isn't flagship level and the software has ads, it's hard to beat at this price point."
    }
];

const aiTechArticles = [
    {
        id: 1,
        title: "The Future of AI in Healthcare",
        image: "images/ai1.jpg",
        date: "2023-05-15",
        author: "Dr. Sarah Chen",
        category: "ai",
        excerpt: "Exploring how artificial intelligence is revolutionizing diagnostics and patient care.",
        content: `
            <h3>Introduction</h3>
            <p>Artificial Intelligence is transforming healthcare in unprecedented ways. From diagnostic tools to personalized treatment plans, AI is enabling medical professionals to provide better care more efficiently.</p>
            
            <h3>Current Applications</h3>
            <ul>
                <li><strong>Medical Imaging:</strong> AI algorithms can analyze X-rays, MRIs, and CT scans with accuracy rivaling human radiologists.</li>
                <li><strong>Drug Discovery:</strong> Machine learning models are significantly reducing the time and cost of developing new medications.</li>
                <li><strong>Predictive Analytics:</strong> Hospitals are using AI to predict patient deterioration and prevent adverse events.</li>
                <li><strong>Virtual Health Assistants:</strong> AI-powered chatbots provide 24/7 patient support and triage.</li>
            </ul>
            
            <h3>Future Prospects</h3>
            <p>In the coming decade, we expect to see:</p>
            <ul>
                <li>AI-powered robotic surgeons performing complex procedures with superhuman precision</li>
                <li>Wearable devices that continuously monitor health and predict issues before symptoms appear</li>
                <li>Personalized medicine tailored to an individual's genetic makeup and lifestyle</li>
                <li>AI systems that can discover new disease correlations humans might miss</li>
            </ul>
            
            <h3>Challenges</h3>
            <p>Despite the promise, significant challenges remain:</p>
            <ul>
                <li>Data privacy concerns with sensitive health information</li>
                <li>Need for extensive clinical validation of AI tools</li>
                <li>Integration with existing healthcare systems</li>
                <li>Ensuring algorithms are free from bias</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>AI in healthcare represents one of the most promising applications of this technology, with potential to save millions of lives and reduce healthcare costs globally. However, careful implementation and regulation will be crucial to realizing its full potential while maintaining patient trust.</p>
        `,
        tags: ["AI", "Healthcare", "Machine Learning", "Medicine"]
    },
    {
        id: 2,
        title: "Understanding GPT-4: Capabilities and Limitations",
        image: "images/ai2.jpg",
        date: "2023-04-28",
        author: "Mark Johnson",
        category: "ai",
        excerpt: "A deep dive into OpenAI's latest language model and what it means for the future of AI.",
        content: `
            <h3>Introduction to GPT-4</h3>
            <p>GPT-4 represents a significant leap forward in large language model capabilities. With improved reasoning, creativity, and the ability to process both text and images, it pushes the boundaries of what AI can achieve.</p>
            
            <h3>Key Improvements Over GPT-3.5</h3>
            <ul>
                <li><strong>Multimodal Input:</strong> Can process both text and images (though only text output is currently available)</li>
                <li><strong>Improved Accuracy:</strong> 40% more likely to produce factual responses than GPT-3.5</li>
                <li><strong>Longer Context:</strong> Can remember and process up to 32,000 tokens (about 25,000 words)</li>
                <li><strong>Better Creativity:</strong> Excels at creative writing, poetry, and technical writing</li>
                <li><strong>Steerability:</strong> Developers can better prescribe style and task via system messages</li>
            </ul>
            
            <h3>Real-World Applications</h3>
            <p>GPT-4 is being used in various industries:</p>
            <ul>
                <li><strong>Education:</strong> Personalized tutoring and automatic grading systems</li>
                <li><strong>Customer Service:</strong> More sophisticated chatbots that can handle complex queries</li>
                <li><strong>Content Creation:</strong> Assisting writers, generating marketing copy, and more</li>
                <li><strong>Programming:</strong> Advanced code generation and debugging assistance</li>
                <li><strong>Legal:</strong> Document analysis and preliminary legal research</li>
            </ul>
            
            <h3>Limitations and Concerns</h3>
            <p>Despite its capabilities, GPT-4 has important limitations:</p>
            <ul>
                <li>Still makes reasoning errors and can be confidently wrong</li>
                <li>Limited knowledge of events after September 2021</li>
                <li>Potential for bias in responses</li>
                <li>Can be manipulated into producing harmful content</li>
                <li>High computational costs for training and running</li>
            </ul>
            
            <h3>Future Developments</h3>
            <p>The next generation of models will likely focus on:</p>
            <ul>
                <li>Improved reasoning and fact-checking capabilities</li>
                <li>Better integration with external knowledge sources</li>
                <li>More efficient training methods to reduce costs</li>
                <li>Enhanced multimodal capabilities (video, audio, etc.)</li>
                <li>Mechanisms for better transparency and explainability</li>
            </ul>
        `,
        tags: ["AI", "GPT-4", "Language Models", "OpenAI"]
    },
    {
        id: 3,
        title: "Quantum Computing Breakthrough",
        image: "images/ai3.jpg",
        date: "2023-06-02",
        author: "Lisa Wong",
        category: "quantum",
        excerpt: "Researchers achieve quantum supremacy with new 128-qubit processor.",
        content: `
            <h3>The Breakthrough</h3>
            <p>Scientists at QuantumTech Labs have demonstrated quantum supremacy with their new 128-qubit processor, completing in minutes a calculation that would take the world's fastest supercomputer 10,000 years.</p>
            
            <h3>Technical Details</h3>
            <p>The new processor features:</p>
            <ul>
                <li>128 superconducting qubits with improved coherence times</li>
                <li>Novel error correction techniques reducing noise by 40%</li>
                <li>Advanced cooling system maintaining 15 millikelvin operation temperature</li>
                <li>New quantum bus architecture enabling better qubit connectivity</li>
            </ul>
            
            <h3>Potential Applications</h3>
            <p>This advancement opens doors for:</p>
            <ul>
                <li><strong>Drug Discovery:</strong> Simulating molecular interactions at quantum level</li>
                <li><strong>Materials Science:</strong> Designing superconductors that work at room temperature</li>
                <li><strong>Cryptography:</strong> Breaking current encryption and creating quantum-safe alternatives</li>
                <li><strong>Optimization:</strong> Solving complex logistics and scheduling problems</li>
                <li><strong>AI:</strong> Accelerating machine learning training processes</li>
            </ul>
            
            <h3>Challenges Ahead</h3>
            <p>While promising, significant hurdles remain:</p>
            <ul>
                <li>Maintaining qubit stability for longer computations</li>
                <li>Scaling to thousands of qubits needed for most practical applications</li>
                <li>Developing programming languages and tools for quantum algorithms</li>
                <li>Reducing costs to make quantum computing accessible</li>
            </ul>
            
            <h3>Industry Impact</h3>
            <p>Major tech companies are racing to develop practical quantum computers:</p>
            <ul>
                <li>Google and IBM continue to improve superconducting qubit designs</li>
                <li>Microsoft is betting on topological qubits</li>
                <li>Startups are exploring ion trap and photonic approaches</li>
                <li>Governments are increasing funding for quantum research</li>
            </ul>
        `,
        tags: ["Quantum Computing", "Physics", "Technology", "Innovation"]
    },
    {
        id: 4,
        title: "The Rise of Smart Cities: IoT in Urban Planning",
        image: "images/ai4.jpg",
        date: "2023-05-22",
        author: "David Kim",
        category: "iot",
        excerpt: "How IoT technologies are transforming urban environments into efficient, sustainable smart cities.",
        content: `
            <h3>What Makes a City Smart?</h3>
            <p>Smart cities leverage IoT sensors, data analytics, and connected infrastructure to improve urban living through:</p>
            <ul>
                <li>Real-time traffic monitoring and adaptive signal control</li>
                <li>Smart energy grids that optimize electricity distribution</li>
                <li>Waste management systems that alert when bins need emptying</li>
                <li>Environmental monitoring of air and water quality</li>
                <li>Public safety systems with gunshot detection and emergency response</li>
            </ul>
            
            <h3>Leading Smart Cities</h3>
            <p>Examples of successful implementations:</p>
            <ul>
                <li><strong>Singapore:</strong> Nationwide sensor network monitoring everything from traffic to cleanliness</li>
                <li><strong>Barcelona:</strong> Smart street lighting that saves 30% on energy costs</li>
                <li><strong>Copenhagen:</strong> Bike path network with traffic monitoring and air quality sensors</li>
                <li><strong>Tokyo:</strong> Earthquake early warning systems integrated with infrastructure</li>
            </ul>
            
            <h3>Technologies Enabling Smart Cities</h3>
            <p>Key components include:</p>
            <ul>
                <li>5G networks for high-speed, low-latency communication</li>
                <li>Edge computing for real-time data processing</li>
                <li>AI for predictive analytics and decision making</li>
                <li>Blockchain for secure data sharing between agencies</li>
                <li>Digital twins for city planning and simulation</li>
            </ul>
            
            <h3>Benefits to Citizens</h3>
            <p>Residents enjoy:</p>
            <ul>
                <li>Reduced commute times through optimized traffic flow</li>
                <li>Lower utility costs through efficient resource use</li>
                <li>Improved air quality and public health</li>
                <li>Enhanced public safety and emergency response</li>
                <li>More responsive government services</li>
            </ul>
            
            <h3>Challenges and Considerations</h3>
            <p>Implementation challenges include:</p>
            <ul>
                <li>High upfront infrastructure costs</li>
                <li>Data privacy and security concerns</li>
                <li>Need for interoperability between systems</li>
                <li>Digital divide potentially excluding some residents</li>
                <li>Maintenance and upgrade requirements</li>
            </ul>
        `,
        tags: ["IoT", "Smart Cities", "Urban Planning", "Sustainability"]
    },
    {
        id: 5,
        title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
        image: "images/ai5.jpg",
        date: "2023-06-10",
        author: "Amanda Chen",
        category: "blockchain",
        excerpt: "Exploring practical uses of blockchain technology in industries from healthcare to supply chain.",
        content: `
            <h3>Understanding Blockchain</h3>
            <p>At its core, blockchain is a decentralized, distributed ledger technology that provides:</p>
            <ul>
                <li>Immutable record-keeping</li>
                <li>Transparent transaction history</li>
                <li>Cryptographic security</li>
                <li>Elimination of single points of failure</li>
            </ul>
            
            <h3>Healthcare Applications</h3>
            <p>Blockchain is transforming healthcare through:</p>
            <ul>
                <li><strong>Patient Records:</strong> Secure, portable medical histories accessible by authorized providers</li>
                <li><strong>Drug Traceability:</strong> Tracking pharmaceuticals from manufacturer to patient to combat counterfeits</li>
                <li><strong>Clinical Trials:</strong> Immutable recording of trial data to prevent fraud</li>
                <li><strong>Genomic Data:</strong> Secure sharing of DNA information for research while protecting privacy</li>
            </ul>
            
            <h3>Supply Chain Management</h3>
            <p>Companies are using blockchain to:</p>
            <ul>
                <li>Track goods from origin to consumer</li>
                <li>Verify authenticity of luxury goods and collectibles</li>
                <li>Ensure ethical sourcing of materials</li>
                <li>Automate payments upon delivery confirmation</li>
            </ul>
            
            <h3>Financial Services</h3>
            <p>Beyond cryptocurrency, blockchain enables:</p>
            <ul>
                <li>Faster cross-border payments</li>
                <li>Smart contracts that execute automatically</li>
                <li>Fractional ownership of assets</li>
                <li>Improved identity verification</li>
            </ul>
            
            <h3>Government and Public Sector</h3>
            <p>Governments are exploring blockchain for:</p>
            <ul>
                <li>Secure voting systems</li>
                <li>Land registry and property records</li>
                <li>Identity management for citizens</li>
                <li>Transparent tracking of government spending</li>
            </ul>
            
            <h3>Challenges to Adoption</h3>
            <p>Barriers include:</p>
            <ul>
                <li>Scalability limitations</li>
                <li>Energy consumption concerns</li>
                <li>Regulatory uncertainty</li>
                <li>Integration with legacy systems</li>
                <li>Need for standardization</li>
            </ul>
        `,
        tags: ["Blockchain", "Cryptocurrency", "Supply Chain", "Finance"]
    }
];

const programmingTutorials = [
    {
        id: 1,
        title: "Getting Started with React",
        language: "javascript",
        difficulty: "beginner",
        duration: "45 min",
        date: "2023-05-10",
        content: `
            <h3>Introduction to React</h3>
            <p>React is a JavaScript library for building user interfaces. It lets you create reusable UI components.</p>
            
            <h3>Setting Up Your Environment</h3>
            <p>First, make sure you have Node.js installed. Then create a new React project:</p>
            <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
            
            <h3>Your First Component</h3>
            <p>Create a simple functional component in src/App.js:</p>
            <pre><code>import React from 'react';

function App() {
  return (
    &lt;div className="App"&gt;
      &lt;h1&gt;Hello, React!&lt;/h1&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
            
            <h3>JSX Syntax</h3>
            <p>JSX is a syntax extension that allows you to write HTML-like code in JavaScript:</p>
            <pre><code>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code></pre>
            
            <h3>Props and State</h3>
            <p>Props allow you to pass data to components, while state manages internal component data:</p>
            <pre><code>function Greeting(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

// Using the component
&lt;Greeting name="Sarah" /&gt;</code></pre>
            
            <h3>Handling Events</h3>
            <p>React events are named using camelCase:</p>
            <pre><code>function Button() {
  function handleClick() {
    alert('Button clicked!');
  }
  
  return (
    &lt;button onClick={handleClick}&gt;
      Click Me
    &lt;/button&gt;
  );
}</code></pre>
            
            <h3>Next Steps</h3>
            <p>Continue learning about:</p>
            <ul>
                <li>Hooks (useState, useEffect)</li>
                <li>Component lifecycle</li>
                <li>Routing with React Router</li>
                <li>State management with Context API or Redux</li>
            </ul>
        `,
        tags: ["React", "JavaScript", "Frontend", "Web Development"]
    },
    {
        id: 2,
        title: "Python REST API with Flask",
        language: "python",
        difficulty: "intermediate",
        duration: "60 min",
        date: "2023-04-15",
        content: `
            <h3>What is Flask?</h3>
            <p>Flask is a lightweight WSGI web application framework in Python. It's ideal for building REST APIs.</p>
            
            <h3>Setting Up</h3>
            <p>Install Flask and create a basic application:</p>
            <pre><code>pip install flask</code></pre>
            
            <pre><code>from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == '__main__':
    app.run(debug=True)</code></pre>
            
            <h3>Creating API Endpoints</h3>
            <p>Add routes for a simple book API:</p>
            <pre><code>from flask import Flask, jsonify, request

app = Flask(__name__)

books = [
    {"id": 1, "title": "Python Crash Course", "author": "Eric Matthes"},
    {"id": 2, "title": "Fluent Python", "author": "Luciano Ramalho"}
]

@app.route('/api/books', methods=['GET'])
def get_books():
    return jsonify(books)

@app.route('/api/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = next((b for b in books if b['id'] == book_id), None)
    if book:
        return jsonify(book)
    return jsonify({"error": "Book not found"}), 404</code></pre>
            
            <h3>Handling POST Requests</h3>
            <p>Add functionality to create new books:</p>
            <pre><code>@app.route('/api/books', methods=['POST'])
def add_book():
    if not request.json or not 'title' in request.json:
        return jsonify({"error": "Bad request"}), 400
    
    new_book = {
        "id": books[-1]['id'] + 1,
        "title": request.json['title'],
        "author": request.json.get('author', "")
    }
    
    books.append(new_book)
    return jsonify(new_book), 201</code></pre>
            
            <h3>Database Integration</h3>
            <p>Connect to SQLite database using Flask-SQLAlchemy:</p>
            <pre><code>from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
db = SQLAlchemy(app)

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(100), nullable=False)

# Initialize database
with app.app_context():
    db.create_all()</code></pre>
            
            <h3>Deployment</h3>
            <p>Options for deploying your Flask API:</p>
            <ul>
                <li>PythonAnywhere (simple hosting)</li>
                <li>Heroku (PaaS solution)</li>
                <li>Docker containers</li>
                <li>AWS/GCP cloud services</li>
            </ul>
        `,
        tags: ["Python", "Flask", "API", "Backend"]
    },
    {
        id: 3,
        title: "Responsive Web Design with CSS Grid",
        language: "css",
        difficulty: "beginner",
        duration: "30 min",
        date: "2023-06-05",
        content: `
            <h3>CSS Grid Basics</h3>
            <p>CSS Grid is a 2D layout system for the web. It lets you create complex responsive layouts easily.</p>
            
            <h3>Creating a Grid</h3>
            <p>Define a grid container and its columns/rows:</p>
            <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}</code></pre>
            
            <h3>Grid Areas</h3>
            <p>Name your grid areas for semantic layout:</p>
            <pre><code>.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }</code></pre>
            
            <h3>Responsive Grid</h3>
            <p>Adjust the grid for different screen sizes:</p>
            <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 600px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}</code></pre>
            
            <h3>Grid vs Flexbox</h3>
            <p>When to use each:</p>
            <ul>
                <li><strong>Grid:</strong> 2D layouts (rows and columns)</li>
                <li><strong>Flexbox:</strong> 1D layouts (either rows or columns)</li>
                <li>They work great together!</li>
            </ul>
            
            <h3>Advanced Techniques</h3>
            <p>Explore these powerful features:</p>
            <ul>
                <li>minmax() for flexible sizing</li>
                <li>auto-fill and auto-fit for responsive columns</li>
                <li>grid-auto-flow for controlling item placement</li>
                <li>subgrid for nested grids</li>
            </ul>
        `,
        tags: ["CSS", "Grid", "Responsive Design", "Frontend"]
    },
    {
        id: 4,
        title: "Machine Learning with Python",
        language: "python",
        difficulty: "advanced",
        duration: "90 min",
        date: "2023-05-20",
        content: `
            <h3>Introduction to ML</h3>
            <p>Machine learning is the science of getting computers to act without being explicitly programmed.</p>
            
            <h3>Setting Up</h3>
            <p>Install required libraries:</p>
            <pre><code>pip install numpy pandas matplotlib scikit-learn</code></pre>
            
            <h3>Loading Data</h3>
            <p>Use pandas to load and explore your dataset:</p>
            <pre><code>import pandas as pd

data = pd.read_csv('dataset.csv')
print(data.head())
print(data.describe())</code></pre>
            
            <h3>Preprocessing</h3>
            <p>Prepare your data for modeling:</p>
            <pre><code>from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

# Handle missing values
data = data.dropna()

# Separate features and target
X = data.drop('target', axis=1)
y = data['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Scale features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)</code></pre>
            
            <h3>Training a Model</h3>
            <p>Create and train a Random Forest classifier:</p>
            <pre><code>from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")</code></pre>
            
            <h3>Improving the Model</h3>
            <p>Techniques to boost performance:</p>
            <ul>
                <li>Feature engineering</li>
                <li>Hyperparameter tuning</li>
                <li>Cross-validation</li>
                <li>Ensemble methods</li>
            </ul>
            
            <h3>Deep Learning with TensorFlow</h3>
            <p>Basic neural network example:</p>
            <pre><code>import tensorflow as tf
from tensorflow.keras import layers

model = tf.keras.Sequential([
    layers.Dense(64, activation='relu'),
    layers.Dense(64, activation='relu'),
    layers.Dense(1)
])

model.compile(optimizer='adam',
              loss='mse',
              metrics=['mae'])

model.fit(X_train, y_train, epochs=10)</code></pre>
        `,
        tags: ["Python", "Machine Learning", "AI", "Data Science"]
    }
];

const solutions = [
    {
        id: 1,
        question: "How to fix slow Windows performance?",
        category: "windows",
        tags: ["performance", "speed", "optimization"],
        answer: `
            <p>Try these steps to improve Windows performance:</p>
            <ol>
                <li><strong>Run Disk Cleanup:</strong> Search for "Disk Cleanup" and delete temporary files.</li>
                <li><strong>Disable startup programs:</strong>
                    <ul>
                        <li>Press Ctrl+Shift+Esc to open Task Manager</li>
                        <li>Go to the Startup tab</li>
                        <li>Disable unnecessary programs</li>
                    </ul>
                </li>
                <li><strong>Check for malware:</strong> Run a full system scan with Windows Defender or a third-party antivirus.</li>
                <li><strong>Adjust for best performance:</strong>
                    <ul>
                        <li>Right-click This PC > Properties > Advanced system settings</li>
                        <li>Under Performance, click Settings</li>
                        <li>Select "Adjust for best performance"</li>
                    </ul>
                </li>
                <li><strong>Update drivers:</strong> Use Device Manager to update outdated drivers.</li>
                <li><strong>Add more RAM:</strong> If possible, upgrade your memory.</li>
                <li><strong>Consider upgrading to an SSD:</strong> This provides the most significant performance boost.</li>
                <li><strong>Reset Windows:</strong> As a last resort, use the "Reset this PC" option keeping your files.</li>
            </ol>
            <p><strong>Additional tips:</strong></p>
            <ul>
                <li>Disable visual effects (Settings > System > About > Advanced system settings > Performance Settings)</li>
                <li>Run the System File Checker (sfc /scannow in Command Prompt as admin)</li>
                <li>Check for Windows updates</li>
                <li>Uninstall unused programs</li>
            </ul>
        `,
        lastUpdated: "2023-06-15",
        views: 1245,
        helpful: 892
    },
    {
        id: 2,
        question: "Why is my MacBook overheating?",
        category: "mac",
        tags: ["overheating", "temperature", "fan"],
        answer: `
            <p>Common causes of MacBook overheating and solutions:</p>
            
            <h3>Immediate Actions</h3>
            <ol>
                <li><strong>Check Activity Monitor:</strong> Open Activity Monitor (Applications > Utilities) and look for processes using high CPU.</li>
                <li><strong>Close demanding apps:</strong> Quit resource-intensive applications like video editors or games.</li>
                <li><strong>Elevate your MacBook:</strong> Use a stand or book to improve airflow underneath.</li>
                <li><strong>Reset SMC:</strong> Shut down, then press Shift+Control+Option+Power button for 10 seconds (Intel Macs).</li>
            </ol>
            
            <h3>Long-Term Solutions</h3>
            <ul>
                <li><strong>Clean the vents:</strong> Dust buildup can block airflow. Use compressed air to clean vents.</li>
                <li><strong>Check fan operation:</strong> Use an app like Macs Fan Control to monitor fan speed.</li>
                <li><strong>Update macOS:</strong> Go to System Preferences > Software Update.</li>
                <li><strong>Replace thermal paste:</strong> For older MacBooks, degraded thermal paste can cause overheating.</li>
                <li><strong>Manage browser tabs:</strong> Too many open tabs, especially with video content, can overwork the CPU.</li>
                <li><strong>Use optimized apps:</strong> Some apps (like Chrome) are known to be resource-heavy.</li>
            </ul>
            
            <h3>When to Seek Professional Help</h3>
            <ul>
                <li>If fans are constantly running at maximum speed</li>
                <li>If the MacBook shuts down due to overheating</li>
                <li>If you notice burning smells or extreme heat</li>
                <li>If simple fixes don't resolve the issue</li>
            </ul>
            
            <p><strong>Prevention Tips:</strong></p>
            <ul>
                <li>Avoid using your MacBook on soft surfaces like beds or couches</li>
                <li>Keep the room temperature moderate</li>
                <li>Consider using a cooling pad for intensive tasks</li>
                <li>Regularly clean the exterior vents</li>
            </ul>
        `,
        lastUpdated: "2023-05-22",
        views: 876,
        helpful: 543
    },
    {
        id: 3,
        question: "How to recover deleted files?",
        category: "windows",
        tags: ["recovery", "files", "deleted"],
        answer: `
            <p>Options for recovering deleted files:</p>
            
            <h3>Basic Recovery Methods</h3>
            <ol>
                <li><strong>Check Recycle Bin/Trash:</strong> Deleted files often go here first.</li>
                <li><strong>Use File History (Windows) or Time Machine (Mac):</strong>
                    <ul>
                        <li>Windows: Search for "Restore files with File History"</li>
                        <li>Mac: Open Time Machine from the menu bar</li>
                    </ul>
                </li>
                <li><strong>Check cloud backups:</strong> Look in OneDrive, Google Drive, iCloud, etc.</li>
                <li><strong>Check email attachments:</strong> You may have sent the file to someone.</li>
            </ol>
            
            <h3>Using Recovery Software</h3>
            <p>If basic methods fail, try these tools (stop using the drive immediately):</p>
            <ul>
                <li><strong>Recuva</strong> (Windows, free)</li>
                <li><strong>Disk Drill</strong> (Mac/Windows, free basic version)</li>
                <li><strong>PhotoRec</strong> (Cross-platform, open source)</li>
                <li><strong>EaseUS Data Recovery</strong> (Windows/Mac, paid)</li>
            </ul>
            
            <p><strong>Recovery tips:</strong></p>
            <ul>
                <li>Install recovery software on a different drive than the one you're recovering from</li>
                <li>The sooner you attempt recovery, the better your chances</li>
                <li>Avoid writing new data to the drive</li>
                <li>For formatted drives, use deep scan options</li>
            </ul>
            
            <h3>Professional Data Recovery Services</h3>
            <p>For critical files when software fails:</p>
            <ul>
                <li>Costs typically range from $300-$3000</li>
                <li>Look for certified professionals (ACE, CRDE)</li>
                <li>Best for mechanical drive failures</li>
                <li>Success rates vary based on damage</li>
            </ul>
            
            <h3>Preventing Future Data Loss</h3>
            <ul>
                <li>Set up automatic backups (3-2-1 rule: 3 copies, 2 media types, 1 offsite)</li>
                <li>Use cloud storage services</li>
                <li>Be cautious with disk cleanup utilities</li>
                <li>Consider RAID for important data</li>
            </ul>
        `,
        lastUpdated: "2023-06-01",
        views: 1532,
        helpful: 1024
    },
    {
        id: 4,
        question: "How to fix 'No Bootable Device' error?",
        category: "windows",
        tags: ["boot", "startup", "error"],
        answer: `
            <p>Troubleshooting steps for "No Bootable Device" error:</p>
            
            <h3>Basic Checks</h3>
            <ol>
                <li><strong>Remove external devices:</strong> Unplug USB drives, external HDDs, etc.</li>
                <li><strong>Check BIOS boot order:</strong>
                    <ul>
                        <li>Restart and enter BIOS (usually F2, F12, DEL, or ESC)</li>
                        <li>Ensure your main drive is first in boot order</li>
                    </ul>
                </li>
                <li><strong>Reseat hard drive connections:</strong> For desktops, check SATA/power cables.</li>
            </ol>
            
            <h3>Advanced Solutions</h3>
            <ul>
                <li><strong>Repair bootloader:</strong>
                    <ol>
                        <li>Boot from Windows installation media</li>
                        <li>Select "Repair your computer"</li>
                        <li>Choose Troubleshoot > Advanced Options > Command Prompt</li>
                        <li>Run: <code>bootrec /fixmbr</code> then <code>bootrec /fixboot</code></li>
                        <li>Finally: <code>bootrec /rebuildbcd</code></li>
                    </ol>
                </li>
                <li><strong>Check disk for errors:</strong>
                    <ul>
                        <li>In Command Prompt from recovery: <code>chkdsk /f /r C:</code></li>
                        <li>This may take several hours</li>
                    </ul>
                </li>
                <li><strong>Test hard drive health:</strong>
                    <ul>
                        <li>Use manufacturer tools (SeaTools, WD Diagnostics, etc.)</li>
                        <li>Or try CrystalDiskInfo</li>
                    </ul>
                </li>
            </ul>
            
            <h3>When to Consider</h3>
            <ul>
                <li><strong>Reinstall Windows:</strong> If boot repair fails</li>
                <li><strong>Replace hard drive:</strong> If diagnostics show failure</li>
                <li><strong>Professional help:</strong> For RAID arrays or critical data</li>
            </ul>
            
            <p><strong>Prevention:</strong></p>
            <ul>
                <li>Regularly backup your system</li>
                <li>Use UPS to prevent power-related corruption</li>
                <li>Monitor drive health with SMART tools</li>
                <li>Avoid abrupt shutdowns</li>
            </ul>
        `,
        lastUpdated: "2023-05-30",
        views: 765,
        helpful: 432
    },
    {
        id: 5,
        question: "How to speed up a slow Android phone?",
        category: "mobile",
        tags: ["android", "speed", "performance"],
        answer: `
            <p>Ways to improve performance on slow Android devices:</p>
            
            <h3>Quick Fixes</h3>
            <ol>
                <li><strong>Restart your phone:</strong> Simple but often effective.</li>
                <li><strong>Clear app cache:</strong>
                    <ul>
                        <li>Settings > Storage > Other apps</li>
                        <li>Select apps and clear cache</li>
                    </ul>
                </li>
                <li><strong>Uninstall unused apps:</strong> Especially resource-heavy apps.</li>
                <li><strong>Disable animations:</strong>
                    <ul>
                        <li>Enable Developer options (tap Build Number 7 times)</li>
                        <li>Set Window/Transition/Animator scales to 0.5x or off</li>
                    </ul>
                </li>
            </ol>
            
            <h3>Storage Management</h3>
            <ul>
                <li><strong>Free up space:</strong> Keep at least 10% storage free.</li>
                <li><strong>Use Lite apps:</strong> Facebook Lite, Messenger Lite, etc.</li>
                <li><strong>Move photos/videos to cloud:</strong> Google Photos, Dropbox.</li>
                <li><strong>Use SD card:</strong> For media storage if supported.</li>
            </ul>
            
            <h3>System Optimization</h3>
            <ul>
                <li><strong>Update Android:</strong> Settings > System > System update.</li>
                <li><strong>Factory reset:</strong> Last resort, back up data first.</li>
                <li><strong>Use lightweight launcher:</strong> Nova Launcher, Lawnchair.</li>
                <li><strong>Disable bloatware:</strong> With ADB if needed.</li>
            </ul>
            
            <h3>Battery Considerations</h3>
            <p>Slow performance may indicate battery issues:</p>
            <ul>
                <li>Check battery health (some manufacturers provide tools)</li>
                <li>Replace battery if swollen or draining quickly</li>
                <li>Avoid extreme temperatures</li>
            </ul>
            
            <p><strong>When to upgrade:</strong></p>
            <ul>
                <li>If phone is more than 3 years old</li>
                <li>If running very old Android version</li>
                <li>If hardware is damaged</li>
            </ul>
        `,
        lastUpdated: "2023-06-12",
        views: 987,
        helpful: 654
    }
];

const techNews = [
    {
        id: 1,
        title: "Apple Announces Vision Pro Headset",
        image: "images/news1.jpg",
        date: "2023-06-05",
        source: "Kedre Tech",
        category: "ar/vr",
        excerpt: "Apple's new mixed reality headset promises to revolutionize how we interact with digital content.",
        content: `
            <h3>The Announcement</h3>
            <p>At WWDC 2023, Apple unveiled its long-rumored AR/VR headset called Vision Pro. Priced at $3,499, it represents Apple's first major new product category since the Apple Watch in 2015.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Display:</strong> Dual micro-OLED displays with 23 million pixels total</li>
                <li><strong>Performance:</strong> M2 chip with dedicated R1 processor for sensor processing</li>
                <li><strong>Input:</strong> Eye tracking, hand gestures, and voice control</li>
                <li><strong>Audio:</strong> Spatial audio with personalized sound</li>
                <li><strong>Battery:</strong> External battery pack with 2-hour life</li>
            </ul>
            
            <h3>Software Experience</h3>
            <p>Vision Pro runs visionOS, a new operating system that blends digital content with the physical world. Key aspects include:</p>
            <ul>
                <li>Fully 3D interface controlled with eyes, hands, and voice</li>
                <li>Ability to place apps anywhere in physical space</li>
                <li>Immersive environments for work and entertainment</li>
                <li>Compatibility with existing iOS and iPadOS apps</li>
            </ul>
            
            <h3>Use Cases</h3>
            <p>Apple demonstrated several compelling applications:</p>
            <ul>
                <li><strong>Productivity:</strong> Multiple virtual screens for work</li>
                <li><strong>Entertainment:</strong> Immersive movies and games</li>
                <li><strong>Communication:</strong> Spatial FaceTime with persona avatars</li>
                <li><strong>Creativity:</strong> 3D design and content creation</li>
            </ul>
            
            <h3>Market Impact</h3>
            <p>The Vision Pro enters a nascent AR/VR market that has struggled to gain mainstream traction. Analysts predict:</p>
            <ul>
                <li>Initial sales will be limited by the high price</li>
                <li>Developer support will be crucial for success</li>
                <li>Future models at lower price points are likely</li>
                <li>Could establish AR/VR as a major computing platform</li>
            </ul>
            
            <h3>Availability</h3>
            <p>The Vision Pro will launch early next year in the U.S., with other countries to follow. Developers can order a kit now to start building apps.</p>
        `,
        tags: ["Apple", "AR/VR", "Wearables", "Innovation"],
        views: 2453,
        comments: 124
    },
    {
        id: 2,
        title: "Tesla's Humanoid Robot Shows Progress",
        image: "images/news2.jpg",
        date: "2023-06-12",
        source: "External",
        category: "robotics",
        excerpt: "Optimus robot now can walk, pick up objects, and perform simple tasks autonomously.",
        content: `
            <h3>Latest Demonstration</h3>
            <p>Tesla has shown significant progress with its Optimus humanoid robot, demonstrating new capabilities at its 2023 shareholders meeting.</p>
            
            <h3>New Abilities</h3>
            <p>The current prototype can now:</p>
            <ul>
                <li>Walk with improved balance and coordination</li>
                <li>Recognize and pick up objects with 90% accuracy</li>
                <li>Perform simple factory tasks autonomously</li>
                <li>Learn new tasks through observation</li>
                <li>Operate for a full work shift on a single charge</li>
            </ul>
            
            <h3>Technical Specifications</h3>
            <ul>
                <li><strong>Height:</strong> 5'8" (173 cm)</li>
                <li><strong>Weight:</strong> 160 lbs (73 kg)</li>
                <li><strong>Actuators:</strong> 28 custom-designed electric joints</li>
                <li><strong>Sensors:</strong> Cameras, inertial measurement, force/torque sensing</li>
                <li><strong>Compute:</strong> Tesla-designed AI chip</li>
                <li><strong>Battery:</strong> 2.3 kWh, lasts 8 hours in typical use</li>
            </ul>
            
            <h3>Potential Applications</h3>
            <p>Tesla sees Optimus initially working in:</p>
            <ul>
                <li>Manufacturing and factory environments</li>
                <li>Dangerous or repetitive tasks</li>
                <li>Logistics and warehouse operations</li>
                <li>Eventually, household chores and elder care</li>
            </ul>
            
            <h3>Challenges Ahead</h3>
            <p>Significant hurdles remain before commercial deployment:</p>
            <ul>
                <li>Further improving reliability and safety</li>
                <li>Reducing production costs (target under $20,000)</li>
                <li>Developing more sophisticated AI for complex tasks</li>
                <li>Navigating regulatory approval</li>
            </ul>
            
            <h3>Competitive Landscape</h3>
            <p>Tesla faces competition from:</p>
            <ul>
                <li>Boston Dynamics (now owned by Hyundai)</li>
                <li>Agility Robotics (Digit robot)</li>
                <li>Various Chinese robotics startups</li>
                <li>Research labs developing humanoid robots</li>
            </ul>
            
            <h3>Timeline</h3>
            <p>Tesla aims for limited production in 2024, with broader availability by 2025-2026.</p>
        `,
        tags: ["Tesla", "Robotics", "AI", "Automation"],
        views: 1876,
        comments: 87
    },
    {
        id: 3,
        title: "Microsoft Integrates AI into Windows 11",
        image: "images/news3.jpg",
        date: "2023-05-30",
        source: "Kedre Tech",
        category: "software",
        excerpt: "New Copilot feature brings AI assistance directly to the Windows desktop experience.",
        content: `
            <h3>Windows Copilot</h3>
            <p>Microsoft has announced a major update to Windows 11 that deeply integrates AI capabilities throughout the operating system.</p>
            
            <h3>Key Features</h3>
            <p>The centerpiece is Windows Copilot, an AI assistant that can:</p>
            <ul>
                <li>Answer questions about your PC and settings</li>
                <li>Help troubleshoot problems</li>
                <li>Generate text content in applications</li>
                <li>Summarize documents and web pages</li>
                <li>Make recommendations based on context</li>
            </ul>
            
            <h3>Integration Points</h3>
            <p>AI features appear throughout Windows:</p>
            <ul>
                <li><strong>File Explorer:</strong> Natural language search and file organization</li>
                <li><strong>Photos:</strong> Advanced editing with AI-powered tools</li>
                <li><strong>Clipboard:</strong> Smart suggestions for pasted content</li>
                <li><strong>Settings:</strong> Proactive troubleshooting and optimization</li>
            </ul>
            
            <h3>Technical Details</h3>
            <ul>
                <li>Powered by a combination of cloud-based and on-device AI models</li>
                <li>Leverages Microsoft's partnership with OpenAI</li>
                <li>Privacy controls to limit data sharing</li>
                <li>Developer API for third-party app integration</li>
            </ul>
            
            <h3>Availability</h3>
            <p>The update will roll out in phases:</p>
            <ul>
                <li>Preview available to Insiders in June</li>
                <li>General availability beginning September 2023</li>
                <li>Some features may require newer hardware</li>
            </ul>
            
            <h3>Competitive Landscape</h3>
            <p>This move positions Windows against:</p>
            <ul>
                <li>Google's AI integration in ChromeOS</li>
                <li>Apple's rumored AI features in macOS</li>
                <li>Various Linux distributions experimenting with AI</li>
            </ul>
            
            <h3>Future Roadmap</h3>
            <p>Microsoft plans to expand these capabilities with:</p>
            <ul>
                <li>More personalized assistance</li>
                <li>Deeper Office app integration</li>
                <li>Advanced creative tools</li>
                <li>Enterprise-specific features</li>
            </ul>
        `,
        tags: ["Microsoft", "Windows", "AI", "Software"],
        views: 1654,
        comments: 92
    },
    {
        id: 4,
        title: "New EU Law Mandates Replaceable Smartphone Batteries",
        image: "images/news4.jpg",
        date: "2023-06-14",
        source: "External",
        category: "policy",
        excerpt: "European Parliament approves regulation requiring user-replaceable batteries in phones and tablets by 2027.",
        content: `
            <h3>The Regulation</h3>
            <p>The European Parliament has approved new regulations that will require smartphones and tablets sold in the EU to have user-replaceable batteries by 2027.</p>
            
            <h3>Key Requirements</h3>
            <ul>
                <li>Batteries must be replaceable with basic tools</li>
                <li>Manufacturers must make replacement batteries available for at least 5 years</li>
                <li>Devices must show battery health information</li>
                <li>Stricter recycling targets for battery materials</li>
            </ul>
            
            <h3>Impact on Manufacturers</h3>
            <p>This will require significant design changes:</p>
            <ul>
                <li>Current glued-in battery designs won't comply</li>
                <li>May lead to slightly thicker devices</li>
                <li>Could increase production costs initially</li>
                <li>May standardize battery form factors</li>
            </ul>
            
            <h3>Consumer Benefits</h3>
            <ul>
                <li>Extended device lifespan</li>
                <li>Reduced e-waste</li>
                <li>Lower long-term ownership costs</li>
                <li>Better repairability scores</li>
            </ul>
            
            <h3>Industry Response</h3>
            <p>Reactions have been mixed:</p>
            <ul>
                <li>Some manufacturers express concerns about design constraints</li>
                <li>Right to repair advocates strongly support the move</li>
                <li>Environmental groups praise the reduced waste</li>
                <li>Analysts expect global impact despite being EU regulation</li>
            </ul>
            
            <h3>Implementation Timeline</h3>
            <ul>
                <li>2025: Batteries must be more easily recyclable</li>
                <li>2026: Minimum recycled content requirements</li>
                <li>2027: User-replaceable battery mandate</li>
            </ul>
            
            <h3>Global Implications</h3>
            <p>While this is an EU regulation, it may affect global markets because:</p>
            <ul>
                <li>Manufacturers may standardize designs globally</li>
                <li>Other regions may adopt similar rules</li>
                <li>EU market size gives it regulatory influence</li>
            </ul>
        `,
        tags: ["EU", "Batteries", "Regulation", "Sustainability"],
        views: 1987,
        comments: 156
    },
    {
        id: 5,
        title: "Google Announces AI-Powered Search Features",
        image: "images/news5.jpg",
        date: "2023-05-24",
        source: "Kedre Tech",
        category: "ai",
        excerpt: "Search Generative Experience uses AI to provide summarized answers and follow-up suggestions.",
        content: `
            <h3>The Announcement</h3>
            <p>At Google I/O 2023, the company unveiled its AI-powered Search Generative Experience (SGE), fundamentally changing how search results are presented.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>AI Overviews:</strong> Summarized answers at the top of results</li>
                <li><strong>Follow-up Suggestions:</strong> Natural language query refinement</li>
                <li><strong>Vertical Integration:</strong> Shopping, local, and other specialized results</li>
                <li><strong>Multi-step Reasoning:</strong> Ability to handle complex queries</li>
            </ul>
            
            <h3>How It Works</h3>
            <p>The system combines:</p>
            <ul>
                <li>Google's latest PaLM 2 language model</li>
                <li>Traditional search ranking systems</li>
                <li>Fact-checking against web sources</li>
                <li>User context and preferences</li>
            </ul>
            
            <h3>Example Use Cases</h3>
            <ul>
                <li><strong>Planning:</strong> "Plan a 5-day trip to Rome with kids"</li>
                <li><strong>Research:</strong> "Compare DSLR cameras for wildlife photography"</li>
                <li><strong>Learning:</strong> "Explain quantum computing like I'm 10"</li>
                <li><strong>Creativity:</strong> "Give me dinner ideas with these ingredients"</li>
            </ul>
            
            <h3>Availability</h3>
            <p>Rolling out as an opt-in experiment:</p>
            <ul>
                <li>Initially in U.S. English only</li>
                <li>Accessible via Search Labs</li>
                <li>Mobile first, desktop later</li>
                <li>May become default experience based on feedback</li>
            </ul>
            
            <h3>Impact on Web Ecosystem</h3>
            <p>Potential consequences include:</p>
            <ul>
                <li>Reduced clicks to source websites for simple queries</li>
                <li>Increased value for authoritative sources</li>
                <li>New opportunities for structured data markup</li>
                <li>Shift in SEO strategies</li>
            </ul>
            
            <h3>Competitive Landscape</h3>
            <p>This positions Google against:</p>
            <ul>
                <li>Microsoft's AI-powered Bing</li>
                <li>ChatGPT and other conversational AI</li>
                <li>Vertical search specialists</li>
            </ul>
        `,
        tags: ["Google", "Search", "AI", "Web"],
        views: 1765,
        comments: 98
    }
];

const videos = [
    {
        id: 1,
        title: "iPhone 15 Pro Max Review: Worth the Upgrade?",
        thumbnail: "images/video1.jpg",
        duration: "15:32",
        views: "1.2M",
        date: "2023-06-10",
        category: "reviews",
        channel: "Kedre Tech",
        description: "We put the iPhone 15 Pro Max through its paces to see if it's worth the premium price. Camera tests, performance benchmarks, and battery life analysis included.",
        likes: 24500,
        comments: 1243,
        progress: 45
    },
    {
        id: 2,
        title: "Building a Gaming PC in 2023 - Step by Step Guide",
        thumbnail: "images/video2.jpg",
        duration: "28:15",
        views: "856K",
        date: "2023-05-22",
        category: "tutorials",
        channel: "Kedre Tech",
        description: "Complete walkthrough for building a high-end gaming PC with the latest components. We cover part selection, assembly, cable management, and first boot setup.",
        likes: 18700,
        comments: 876,
        progress: 72
    },
    {
        id: 3,
        title: "Top 5 Programming Languages to Learn in 2023",
        thumbnail: "images/video3.jpg",
        duration: "12:48",
        views: "2.3M",
        date: "2023-04-05",
        category: "education",
        channel: "Kedre Tech",
        description: "We analyze job market trends, salary data, and future prospects to determine the best programming languages to learn this year for beginners and experienced developers alike.",
        likes: 32400,
        comments: 1543,
        progress: 18
    },
    {
        id: 4,
        title: "Windows 11 vs macOS Ventura - Which is Better in 2023?",
        thumbnail: "images/video4.jpg",
        duration: "22:05",
        views: "1.1M",
        date: "2023-06-01",
        category: "comparisons",
        channel: "Kedre Tech",
        description: "Detailed comparison of Windows 11 and macOS Ventura across performance, productivity, gaming, creative work, and ecosystem integration to help you choose the right OS.",
        likes: 19800,
        comments: 987,
        progress: 56
    },
    {
        id: 5,
        title: "How to Speed Up Your Slow Laptop - 10 Easy Fixes",
        thumbnail: "images/video5.jpg",
        duration: "09:37",
        views: "1.8M",
        date: "2023-03-15",
        category: "tutorials",
        channel: "Kedre Tech",
        description: "Step-by-step guide to improving your laptop's performance with software tweaks, hardware upgrades, and maintenance tips that anyone can do.",
        likes: 28700,
        comments: 1321,
        progress: 89
    }
];

// Initialize App
function initApp() {
    // Set theme
    setTheme(currentTheme);
    
    // Apply user preferences
    applyUserPrefs();
    
    // Load content
    renderPhoneReviews();
    renderAiTechArticles();
    renderProgrammingTutorials();
    renderSolutions();
    renderTechNews();
    renderVideos();
    renderComments();
    updateStats();
    renderRecommendations();
    
    // Set active section based on hash
    if (window.location.hash) {
        showSection(window.location.hash);
    } else {
        showSection('#home');
    }
    
    // Register service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}

// Theme Functions
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
        themeToggle.innerHTML = '<span class="icon">☀️</span> Light Mode';
    } else {
        themeToggle.innerHTML = '<span class="icon">🌙</span> Dark Mode';
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
}

// User Preferences
function applyUserPrefs() {
    document.getElementById('prefShowRatings').checked = userPrefs.showRatings;
    document.getElementById('prefShowImages').checked = userPrefs.showImages;
    document.getElementById('prefDarkReader').checked = userPrefs.darkReader;
    document.getElementById('prefNewsAlerts').checked = userPrefs.newsAlerts;
    document.getElementById('prefReviewAlerts').checked = userPrefs.reviewAlerts;
    document.getElementById('prefSaveHistory').checked = userPrefs.saveHistory;
    document.getElementById('prefSaveComments').checked = userPrefs.saveComments;
}

function saveUserPrefs() {
    userPrefs = {
        showRatings: document.getElementById('prefShowRatings').checked,
        showImages: document.getElementById('prefShowImages').checked,
        darkReader: document.getElementById('prefDarkReader').checked,
        newsAlerts: document.getElementById('prefNewsAlerts').checked,
        reviewAlerts: document.getElementById('prefReviewAlerts').checked,
        saveHistory: document.getElementById('prefSaveHistory').checked,
        saveComments: document.getElementById('prefSaveComments').checked
    };
    
    localStorage.setItem('userPrefs', JSON.stringify(userPrefs));
    userPrefsPanel.classList.remove('open');
    alert('Preferences saved successfully!');
}

// Navigation Functions
function showSection(sectionId) {
    // Hide all sections
    pageSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const section = document.querySelector(sectionId);
    if (section) {
        section.classList.add('active');
        
        // Update active nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === sectionId) {
                link.classList.add('active');
            }
        });
        
        bottomNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === sectionId) {
                link.classList.add('active');
            }
        });
        
        // Update page title
        const pageTitle = document.querySelector('.page-title');
        if (sectionId === '#home') {
            pageTitle.textContent = 'Kedre Tech';
        } else {
            const sectionTitle = section.querySelector('h2').textContent;
            pageTitle.textContent = sectionTitle;
        }
    }
}

function toggleSideNav() {
    sideNav.classList.toggle('open');
}

function toggleUserPrefs() {
    userPrefsPanel.classList.toggle('open');
}

// Content Rendering Functions
function renderPhoneReviews(filter = 'all', sort = 'rating-desc') {
    phoneReviewsContainer.innerHTML = '';
    
    // Filter phones
    let filteredReviews = filter === 'all' 
        ? [...phoneReviews] 
        : phoneReviews.filter(review => review.category === filter);
    
    // Sort phones
    filteredReviews.sort((a, b) => {
        switch(sort) {
            case 'rating-asc':
                return a.rating - b.rating;
            case 'rating-desc':
                return b.rating - a.rating;
            case 'price-asc':
                return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
            case 'price-desc':
                return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
            case 'date-asc':
                return new Date(a.releaseDate) - new Date(b.releaseDate);
            case 'date-desc':
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            default:
                return 0;
        }
    });
    
    filteredReviews.forEach(review => {
        const stars = '★'.repeat(Math.floor(review.rating)) + '☆'.repeat(5 - Math.floor(review.rating));
        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${review.image}" alt="${review.title}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${review.title}</h3>
                ${userPrefs.showRatings ? `
                <div class="card-rating">
                    <span class="stars">${stars}</span>
                    <span>${review.rating}/5</span>
                </div>
                ` : ''}
                <div class="card-price">${review.price}</div>
                <div class="card-specs">
                    <div class="spec-item">
                        <span class="spec-label">Display:</span>
                        <span>${review.specs.display}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Processor:</span>
                        <span>${review.specs.processor}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">RAM:</span>
                        <span>${review.specs.ram}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Storage:</span>
                        <span>${review.specs.storage}</span>
                    </div>
                </div>
                <div class="pros-cons">
                    <div class="pros">
                        <h4><span class="icon">👍</span> Pros</h4>
                        <ul>
                            ${review.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cons">
                        <h4><span class="icon">👎</span> Cons</h4>
                        <ul>
                            ${review.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="#" class="read-review" data-review="${review.id}">Read Full Review</a>
                    <a href="#" class="view-details" data-phone="${review.id}">View Details</a>
                </div>
            </div>
        `;
        phoneReviewsContainer.appendChild(card);
    });
    
    // Populate compare dropdowns
    comparePhone1.innerHTML = '<option value="">Select Phone 1</option>';
    comparePhone2.innerHTML = '<option value="">Select Phone 2</option>';
    
    phoneReviews.forEach(phone => {
        const option1 = document.createElement('option');
        option1.value = phone.id;
        option1.textContent = phone.title;
        
        const option2 = option1.cloneNode(true);
        
        comparePhone1.appendChild(option1);
        comparePhone2.appendChild(option2);
    });
}

function renderAiTechArticles(category = 'all') {
    aiTechContainer.innerHTML = '';
    
    const filteredArticles = category === 'all' 
        ? [...aiTechArticles] 
        : aiTechArticles.filter(article => article.category === category);
    
    filteredArticles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            ${userPrefs.showImages ? `<img src="${article.image}" alt="${article.title}">` : ''}
            <div class="blog-content">
                <h3 class="blog-title">${article.title}</h3>
                <div class="blog-meta">
                    <span>${new Date(article.date).toLocaleDateString()}</span>
                    <span>By ${article.author}</span>
                </div>
                <p class="blog-excerpt">${article.excerpt}</p>
                <div class="blog-tags">
                    ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="#" class="read-more" data-article="${article.id}">Read More →</a>
            </div>
        `;
        aiTechContainer.appendChild(card);
    });
}

function renderProgrammingTutorials() {
    const tutorialsTab = document.getElementById('tutorials');
    const snippetsTab = document.getElementById('snippets');
    
    // Tutorials
    tutorialsTab.innerHTML = `
        <div class="tutorial-list">
            ${programmingTutorials.map(tutorial => `
                <div class="tutorial-item">
                    <h3>${tutorial.title}</h3>
                    <div class="tutorial-meta">
                        <span class="language">${tutorial.language}</span>
                        <span class="difficulty">${tutorial.difficulty}</span>
                        <span class="duration">${tutorial.duration}</span>
                    </div>
                    <div class="tutorial-tags">
                        ${tutorial.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="view-tutorial" data-tutorial="${tutorial.id}">View Tutorial</button>
                </div>
            `).join('')}
        </div>
    `;
    
    // Code Snippets
    snippetsTab.innerHTML = programmingTutorials.map(tutorial => `
        <div class="code-snippet">
            <div class="code-header">
                <span class="code-title">${tutorial.title} (${tutorial.language})</span>
                <button class="copy-btn">Copy</button>
            </div>
            <pre><code>${tutorial.content.match(/<pre><code>([\s\S]*?)<\/code><\/pre>/)[1]}</code></pre>
        </div>
    `).join('');
}

function renderSolutions(searchTerm = '', category = 'all') {
    solutionsContainer.innerHTML = '';
    
    let filteredSolutions = [...solutions];
    
    // Apply category filter
    if (category !== 'all') {
        filteredSolutions = filteredSolutions.filter(solution => solution.category === category);
    }
    
    // Apply search filter
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredSolutions = filteredSolutions.filter(solution => 
            solution.question.toLowerCase().includes(term) || 
            solution.answer.toLowerCase().includes(term) ||
            solution.tags.some(tag => tag.toLowerCase().includes(term))
        );
    }
    
    filteredSolutions.forEach(solution => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <span>${solution.question}</span>
                <span class="faq-toggle">▼</span>
            </div>
            <div class="faq-answer">
                ${solution.answer}
                <div class="faq-meta">
                    <span>Last updated: ${new Date(solution.lastUpdated).toLocaleDateString()}</span>
                    <span>${solution.views} views</span>
                    <span>${solution.helpful} found this helpful</span>
                </div>
                <div class="faq-tags">
                    ${solution.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        solutionsContainer.appendChild(faqItem);
    });
}

function renderTechNews(page = 1, source = 'all', timeframe = 'all') {
    newsContainer.innerHTML = '';
    
    let filteredNews = [...techNews];
    
    // Apply source filter
    if (source !== 'all') {
        filteredNews = filteredNews.filter(item => item.source.toLowerCase() === source);
    }
    
    // Apply timeframe filter
    if (timeframe !== 'all') {
        const now = new Date();
        filteredNews = filteredNews.filter(item => {
            const itemDate = new Date(item.date);
            const diffTime = now - itemDate;
            const diffDays = diffTime / (1000 * 60 * 60 * 24);
            
            switch(timeframe) {
                case 'today':
                    return diffDays < 1;
                case 'week':
                    return diffDays < 7;
                case 'month':
                    return diffDays < 30;
                default:
                    return true;
            }
        });
    }
    
    // Pagination
    totalNewsPages = Math.ceil(filteredNews.length / newsPerPage);
    const startIdx = (page - 1) * newsPerPage;
    const paginatedNews = filteredNews.slice(startIdx, startIdx + newsPerPage);
    
    paginatedNews.forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <div class="news-content">
                <h3 class="news-title">${news.title}</h3>
                <div class="news-meta">
                    <span>${new Date(news.date).toLocaleDateString()}</span>
                    <span>${news.source}</span>
                </div>
                <p class="news-excerpt">${news.excerpt}</p>
                <div class="news-actions">
                    <a href="#" class="read-full" data-news="${news.id}">Read Full Story →</a>
                    <button class="bookmark-news" data-news="${news.id}">Bookmark</button>
                </div>
            </div>
        `;
        newsContainer.appendChild(card);
    });
    
    // Update pagination controls
    newsPageIndicator.textContent = `${page} of ${totalNewsPages}`;
    prevNewsPage.disabled = page === 1;
    nextNewsPage.disabled = page === totalNewsPages;
}

function renderVideos(category = 'all', duration = 'all') {
    videoContainer.innerHTML = '';
    
    let filteredVideos = [...videos];
    
    // Apply category filter
    if (category !== 'all') {
        filteredVideos = filteredVideos.filter(video => video.category === category);
    }
    
    // Apply duration filter
    if (duration !== 'all') {
        filteredVideos = filteredVideos.filter(video => {
            const mins = parseInt(video.duration.split(':')[0]);
            switch(duration) {
                case 'short':
                    return mins < 5;
                case 'medium':
                    return mins >= 5 && mins <= 15;
                case 'long':
                    return mins > 15;
                default:
                    return true;
            }
        });
    }
    
    filteredVideos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="play-icon">▶</div>
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-content">
                <h3 class="video-title">${video.title}</h3>
                <div class="video-meta">
                    <span>${video.views} views</span>
                    <span>${video.date}</span>
                </div>
                <div class="video-progress">
                    <div class="video-progress-bar" style="width: ${video.progress}%"></div>
                </div>
            </div>
        `;
        videoContainer.appendChild(card);
    });
}

function renderComments() {
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            ${comment.rating ? `
            <div class="comment-rating-stars">
                ${'★'.repeat(comment.rating)}${'☆'.repeat(5 - comment.rating)}
            </div>
            ` : ''}
            <p class="comment-text">${comment.text}</p>
            <div class="comment-actions">
                <button class="comment-action">Like</button>
                <button class="comment-action">Reply</button>
                <button class="comment-action">Report</button>
            </div>
        </div>
    `).join('');
}

function updateStats() {
    phoneCount.textContent = phoneReviews.length;
    articleCount.textContent = aiTechArticles.length;
    tutorialCount.textContent = programmingTutorials.length;
    solutionCount.textContent = solutions.length;
}

function renderRecommendations(type = 'phones') {
    const container = document.getElementById(`rec-${type}`);
    container.innerHTML = '';
    
    let items = [];
    switch(type) {
        case 'phones':
            items = [...phoneReviews].sort(() => 0.5 - Math.random()).slice(0, 3);
            break;
        case 'articles':
            items = [...aiTechArticles].sort(() => 0.5 - Math.random()).slice(0, 3);
            break;
        case 'tutorials':
            items = [...programmingTutorials].sort(() => 0.5 - Math.random()).slice(0, 3);
            break;
    }
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'highlight-card';
        
        if (type === 'phones') {
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="highlight-content">
                    <h3>${item.title}</h3>
                    <p>${item.excerpt || item.review.substring(0, 100)}...</p>
                    <a href="#phone-reviews" class="view-more">View Phone</a>
                </div>
            `;
        } else if (type === 'articles') {
            card.innerHTML = `
                ${userPrefs.showImages ? `<img src="${item.image}" alt="${item.title}">` : ''}
                <div class="highlight-content">
                    <h3>${item.title}</h3>
                    <p>${item.excerpt.substring(0, 100)}...</p>
                    <a href="#ai-tech" class="view-more">Read Article</a>
                </div>
            `;
        } else if (type === 'tutorials') {
            card.innerHTML = `
                <div class="highlight-content">
                    <h3>${item.title}</h3>
                    <p>${item.content.substring(0, 100).replace(/<[^>]*>/g, '')}...</p>
                    <a href="#programming" class="view-more">View Tutorial</a>
                </div>
            `;
        }
        
        container.appendChild(card);
    });
}

// Comparison Functions
function openCompareModal() {
    compareModal.classList.add('open');
}

function closeCompareModal() {
    compareModal.classList.remove('open');
    compareData = { phone1: null, phone2: null };
    compareResults.innerHTML = '';
}

function updateCompareSelection() {
    compareData.phone1 = comparePhone1.value;
    compareData.phone2 = comparePhone2.value;
    
    // Disable the selected phone in the other dropdown
    Array.from(comparePhone1.options).forEach(option => {
        option.disabled = option.value === compareData.phone2;
    });
    
    Array.from(comparePhone2.options).forEach(option => {
        option.disabled = option.value === compareData.phone1;
    });
}

function comparePhones() {
    if (!compareData.phone1 || !compareData.phone2) {
        alert('Please select two phones to compare');
        return;
    }
    
    const phone1 = phoneReviews.find(p => p.id.toString() === compareData.phone1);
    const phone2 = phoneReviews.find(p => p.id.toString() === compareData.phone2);
    
    if (!phone1 || !phone2) {
        alert('Error loading phone data');
        return;
    }
    
    compareResults.innerHTML = `
        <table class="compare-table">
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>${phone1.title}</th>
                    <th>${phone2.title}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Price</td>
                    <td class="${phone1.price < phone2.price ? 'highlight' : ''}">${phone1.price}</td>
                    <td class="${phone2.price < phone1.price ? 'highlight' : ''}">${phone2.price}</td>
                </tr>
                <tr>
                    <td>Rating</td>
                    <td class="${phone1.rating > phone2.rating ? 'highlight' : ''}">${phone1.rating}/5</td>
                    <td class="${phone2.rating > phone1.rating ? 'highlight' : ''}">${phone2.rating}/5</td>
                </tr>
                <tr>
                    <td>Display</td>
                    <td>${phone1.specs.display}</td>
                    <td>${phone2.specs.display}</td>
                </tr>
                <tr>
                    <td>Processor</td>
                    <td>${phone1.specs.processor}</td>
                    <td>${phone2.specs.processor}</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>${phone1.specs.ram}</td>
                    <td>${phone2.specs.ram}</td>
                </tr>
                <tr>
                    <td>Storage</td>
                    <td>${phone1.specs.storage}</td>
                    <td>${phone2.specs.storage}</td>
                </tr>
                <tr>
                    <td>Camera</td>
                    <td>${phone1.specs.camera}</td>
                    <td>${phone2.specs.camera}</td>
                </tr>
                <tr>
                    <td>Battery</td>
                    <td>${phone1.specs.battery}</td>
                    <td>${phone2.specs.battery}</td>
                </tr>
                <tr>
                    <td>OS</td>
                    <td>${phone1.specs.os}</td>
                    <td>${phone2.specs.os}</td>
                </tr>
            </tbody>
        </table>
        
        <div class="compare-summary">
            <h4>Summary</h4>
            <p>The ${phone1.rating > phone2.rating ? phone1.title : phone2.title} has a better rating.</p>
            <p>The ${phone1.price < phone2.price ? phone1.title : phone2.title} is more affordable.</p>
            <p>${phone1.specs.ram > phone2.specs.ram ? phone1.title : phone2.title} has more RAM.</p>
            <p>${phone1.specs.storage.split('/')[0] > phone2.specs.storage.split('/')[0] ? phone1.title : phone2.title} offers more base storage.</p>
        </div>
    `;
}

// Chatbot Functions
function openChatbot() {
    chatbotModal.classList.add('open');
    chatMessages.innerHTML = `
        <div class="chat-message bot">
            Hello! I'm the Kedre Tech Assistant. How can I help you today?
        </div>
    `;
}

function closeChatbot() {
    chatbotModal.classList.remove('open');
}

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);
    
    // Clear input
    chatInput.value = '';
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.innerHTML = botResponse;
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('phone') || lowerMsg.includes('compare')) {
        return `We have detailed reviews of the latest smartphones. Check out our <a href="#phone-reviews">Phone Reviews</a> section or use our <a href="#" id="compareFromChat">comparison tool</a> to compare models.`;
    } else if (lowerMsg.includes('ai') || lowerMsg.includes('artificial intelligence')) {
        return `Our <a href="#ai-tech">AI & Technology</a> section covers the latest developments in artificial intelligence, including tutorials and explainers.`;
    } else if (lowerMsg.includes('programming') || lowerMsg.includes('code')) {
        return `The <a href="#programming">Programming</a> section has tutorials and code snippets for various languages. You can even try our code playground!`;
    } else if (lowerMsg.includes('problem') || lowerMsg.includes('issue') || lowerMsg.includes('error')) {
        return `For technical issues, check our <a href="#solutions">Software Problems & Solutions</a> section. You can search for specific error messages there.`;
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('support')) {
        return `You can reach us through the <a href="#contact">Contact</a> section. Fill out the form or check our contact information.`;
    } else {
        return "I'm not sure I understand. Could you please rephrase your question? Here are some topics I can help with: phone reviews, AI technology, programming, tech support, or contacting Kedre Tech.";
    }
}

// Code Execution
function runCode() {
    const code = codeEditor.value;
    const language = languageSelect.value;
    
    try {
        // Note: In a real app, you'd want to sanitize the code and run it in a sandbox
        // This is a simplified version for demonstration
        
        if (language === 'javascript') {
            // Capture console.log output
            const originalLog = console.log;
            let output = '';
            
            console.log = function(...args) {
                output += args.join(' ') + '\n';
                originalLog.apply(console, args);
            };
            
            // Execute the code
            eval(code);
            
            // Restore console.log
            console.log = originalLog;
            
            codeOutput.textContent = output || 'Code executed (no output)';
        } else if (language === 'python') {
            // In a real app, you'd call a Python interpreter API
            codeOutput.textContent = "Python execution would require a backend service. Here's what you wrote:\n" + code;
        } else {
            codeOutput.textContent = "Output for " + language + " code:\n" + code;
        }
    } catch (error) {
        codeOutput.textContent = "Error: " + error.message;
    }
}

function clearEditor() {
    codeEditor.value = '';
    codeOutput.textContent = '';
}

function updateLanguage() {
    const language = languageSelect.value;
    document.getElementById('currentLanguage').textContent = language.charAt(0).toUpperCase() + language.slice(1);
    
    // Update placeholder based on language
    switch(language) {
        case 'javascript':
            codeEditor.placeholder = '// Write your JavaScript code here\nconsole.log("Hello, Kedre Tech!");';
            break;
        case 'python':
            codeEditor.placeholder = '# Write your Python code here\nprint("Hello, Kedre Tech!")';
            break;
        case 'html':
            codeEditor.placeholder = '<!-- Write your HTML code here -->\n<h1>Hello, Kedre Tech!</h1>';
            break;
        case 'css':
            codeEditor.placeholder = '/* Write your CSS code here */\nbody {\n  background: #fff;\n}';
            break;
        case 'java':
            codeEditor.placeholder = '// Write your Java code here\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Kedre Tech!");\n  }\n}';
            break;
        default:
            codeEditor.placeholder = '// Write your code here';
    }
}

// Form Handling
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const attachment = document.getElementById('attachment').files[0];
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields');
        return;
    }
    
    // In a real app, you would send this data to a server
    const formData = {
        name,
        email,
        subject,
        message,
        attachment: attachment ? attachment.name : null,
        date: new Date().toISOString()
    };
    
    console.log('Form submitted:', formData); // For demonstration
    
    alert(`Thank you, ${name}! Your message has been received. We'll respond to ${email} soon.`);
    contactForm.reset();
}

function handlePostComment() {
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const newComment = {
            author: 'Anonymous',
            text: commentText,
            date: new Date().toLocaleDateString(),
            rating: selectedRating
        };
        
        comments.unshift(newComment);
        
        if (userPrefs.saveComments) {
            localStorage.setItem('comments', JSON.stringify(comments));
        }
        
        renderComments();
        commentInput.value = '';
        selectedRating = 0;
        resetStarRating();
    }
}

function setRating(rating) {
    selectedRating = rating;
    resetStarRating();
    
    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = '★';
            star.classList.add('active');
        } else {
            star.textContent = '☆';
            star.classList.remove('active');
        }
    });
}

function resetStarRating() {
    stars.forEach(star => {
        star.textContent = '☆';
        star.classList.remove('active');
    });
}

// Search and Filter Functions
function filterPhoneReviews(e) {
    const filter = e.target.dataset.filter;
    
    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Get current sort value
    const sort = sortPhones.value;
    
    // Render filtered reviews
    renderPhoneReviews(filter, sort);
}

function sortPhoneReviews() {
    const sort = sortPhones.value;
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderPhoneReviews(activeFilter, sort);
}

function searchSolutions() {
    const searchTerm = solutionSearch.value;
    const category = solutionCategory.value;
    renderSolutions(searchTerm, category);
}

function filterAiTech(e) {
    const category = e.target.dataset.category;
    
    // Update active category button
    aiCatBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    renderAiTechArticles(category);
}

function toggleTab(e) {
    const tabId = e.target.dataset.tab;
    
    // Update active tab button
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Show selected tab content
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

function filterNews() {
    const source = newsSource.value;
    const timeframe = newsTimeframe.value;
    renderTechNews(1, source, timeframe);
}

function changeNewsPage(direction) {
    const source = newsSource.value;
    const timeframe = newsTimeframe.value;
    
    if (direction === 'prev' && currentNewsPage > 1) {
        currentNewsPage--;
    } else if (direction === 'next' && currentNewsPage < totalNewsPages) {
        currentNewsPage++;
    }
    
    renderTechNews(currentNewsPage, source, timeframe);
}

function filterVideos() {
    const category = videoCategory.value;
    const duration = videoDuration.value;
    renderVideos(category, duration);
}

function toggleSearch() {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
}

function toggleFabMenu() {
    fabMenu.classList.toggle('open');
}

function handleFabAction(action) {
    switch(action) {
        case 'search':
            toggleSearch();
            break;
        case 'bookmark':
            alert('Bookmarks feature coming soon!');
            break;
        case 'feedback':
            window.location.hash = '#contact';
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
            break;
    }
    
    toggleFabMenu();
}

function changeRecommendationTab(e) {
    const type = e.target.dataset.recType;
    
    // Update active tab
    recTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Show selected content
    recContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`rec-${type}`).classList.add('active');
    
    // Render content if empty
    if (document.getElementById(`rec-${type}`).innerHTML === '') {
        renderRecommendations(type);
    }
}

// Copy Code Snippets
function setupCopyButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('copy-btn')) {
            const codeBlock = e.target.closest('.code-snippet').querySelector('code');
            const codeText = codeBlock.textContent;
            
            navigator.clipboard.writeText(codeText)
                .then(() => {
                    e.target.textContent = 'Copied!';
                    setTimeout(() => {
                        e.target.textContent = 'Copy';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        }
    });
}

// Toggle FAQ Answers
function setupFAQToggle() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('faq-question') || e.target.closest('.faq-question')) {
            const faqItem = e.target.closest('.faq-item');
            faqItem.classList.toggle('active');
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Hide splash screen after 3 seconds
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 3000);
    
    initApp();
});

window.addEventListener('hashchange', () => {
    showSection(window.location.hash);
});

menuBtn.addEventListener('click', toggleSideNav);
closeNavBtn.addEventListener('click', toggleSideNav);
themeToggle.addEventListener('click', toggleTheme);
searchBtn.addEventListener('click', toggleSearch);
fabBtn.addEventListener('click', toggleFabMenu);

fabOptions.forEach(option => {
    option.addEventListener('click', () => {
        handleFabAction(option.id.replace('fab', '').toLowerCase());
    });
});

contactForm.addEventListener('submit', handleContactFormSubmit);
postCommentBtn.addEventListener('click', handlePostComment);

stars.forEach((star, index) => {
    star.addEventListener('click', () => setRating(index + 1));
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', filterPhoneReviews);
});

sortPhones.addEventListener('change', sortPhoneReviews);
comparePhonesBtn.addEventListener('click', openCompareModal);
closeCompareModal.addEventListener('click', closeCompareModal);
cancelCompare.addEventListener('click', closeCompareModal);
confirmCompare.addEventListener('click', comparePhones);
comparePhone1.addEventListener('change', updateCompareSelection);
comparePhone2.addEventListener('change', updateCompareSelection);

aiCatBtns.forEach(btn => {
    btn.addEventListener('click', filterAiTech);
});

tabBtns.forEach(btn => {
    btn.addEventListener('click', toggleTab);
});

runCodeBtn.addEventListener('click', runCode);
clearEditorBtn.addEventListener('click', clearEditor);
languageSelect.addEventListener('change', updateLanguage);

solutionSearch.addEventListener('input', searchSolutions);
solutionCategory.addEventListener('change', searchSolutions);

newsSource.addEventListener('change', filterNews);
newsTimeframe.addEventListener('change', filterNews);
prevNewsPage.addEventListener('click', () => changeNewsPage('prev'));
nextNewsPage.addEventListener('click', () => changeNewsPage('next'));

videoCategory.addEventListener('change', filterVideos);
videoDuration.addEventListener('change', filterVideos);

chatbotBtn.addEventListener('click', openChatbot);
closeChatbotModal.addEventListener('click', closeChatbot);
sendChatBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

userPrefsBtn.addEventListener('click', toggleUserPrefs);
closePrefsBtn.addEventListener('click', () => userPrefsPanel.classList.remove('open'));
savePrefsBtn.addEventListener('click', saveUserPrefs);

recTabs.forEach(tab => {
    tab.addEventListener('click', changeRecommendationTab);
});

// Set up copy buttons and FAQ toggles
setupCopyButtons();
setupFAQToggle();

// Handle clicks on dynamic elements
document.addEventListener('click', (e) => {
    // Handle compare link from chatbot
    if (e.target.id === 'compareFromChat') {
        e.preventDefault();
        closeChatbot();
        openCompareModal();
    }
    
    // Handle read more links
    if (e.target.classList.contains('read-more')) {
        e.preventDefault();
        const articleId = e.target.dataset.article;
        const article = aiTechArticles.find(a => a.id.toString() === articleId);
        
        if (article) {
            alert(`Showing full article: ${article.title}\n\n${article.content.substring(0, 500)}...`);
            // In a real app, you'd show the full article in a modal or new page
        }
    }
    
    // Handle read full news links
    if (e.target.classList.contains('read-full')) {
        e.preventDefault();
        const newsId = e.target.dataset.news;
        const newsItem = techNews.find(n => n.id.toString() === newsId);
        
        if (newsItem) {
            alert(`Showing full news story: ${newsItem.title}\n\n${newsItem.content.substring(0, 500)}...`);
        }
    }
    
    // Handle view tutorial buttons
    if (e.target.classList.contains('view-tutorial')) {
        e.preventDefault();
        const tutorialId = e.target.dataset.tutorial;
        const tutorial = programmingTutorials.find(t => t.id.toString() === tutorialId);
        
        if (tutorial) {
            alert(`Showing tutorial: ${tutorial.title}\n\n${tutorial.content.substring(0, 500)}...`);
        }
    }
    
    // Handle read full review links
    if (e.target.classList.contains('read-review')) {
        e.preventDefault();
        const reviewId = e.target.dataset.review;
        const review = phoneReviews.find(r => r.id.toString() === reviewId);
        
        if (review) {
            alert(`Showing full review: ${review.title}\n\n${review.review}`);
        }
    }
    
    // Handle view details links
    if (e.target.classList.contains('view-details')) {
        e.preventDefault();
        const phoneId = e.target.dataset.phone;
        const phone = phoneReviews.find(p => p.id.toString() === phoneId);
        
        if (phone) {
            alert(`Showing detailed specs for: ${phone.title}\n\n${JSON.stringify(phone.specs, null, 2)}`);
        }
    }
    
    // Handle bookmark news buttons
    if (e.target.classList.contains('bookmark-news')) {
        e.preventDefault();
        alert('News item bookmarked! (This would be saved in a real app)');
    }
});

// Handle Enter key in comment input
commentInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handlePostComment();
    }
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === compareModal) {
        closeCompareModal();
    }
    
    if (e.target === chatbotModal) {
        closeChatbot();
    }
    
    if (e.target === userPrefsPanel) {
        userPrefsPanel.classList.remove('open');
    }
    
    // Close FAB menu when clicking outside
    if (!e.target.closest('.fab') && !e.target.closest('.fab-menu') && fabMenu.classList.contains('open')) {
        toggleFabMenu();
    }
});