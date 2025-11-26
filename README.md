SellerSight
AI‑Powered Competitive Review Intelligence for Amazon Sellers
Understand reviews faster. Fix what matters. Beat competitors.

🚀 Overview
SellerSight is an AI-powered competitive review intelligence platform designed for Amazon third‑party sellers, eCommerce product teams, consultants, and manufacturers who need real insight—not guesswork.

Instead of manually reading thousands of reviews, SellerSight automatically:

Extracts and clusters topics within reviews (durability, sizing, packaging, shipping, UX, etc.)

Tracks sentiment trends over time

Identifies why ratings are rising or falling

Compares performance vs competitor ASINs

Generates prioritized fix recommendations based on impact × effort

Supports all insights with evidence‑based review citations

🎯 Key Features
Feature	Description
Review Intelligence	Analyze thousands of reviews in seconds
Feature‑Level Clustering	Identify issues & praise by product feature
Competitive Gap Analysis	Compare your ASINs vs top competitors
Prioritized Fix Engine	Data‑backed improvement actions ranked by impact
Sentiment Trends	Track changes across time windows
PDF Reports & Alerts	Export & automate summaries
Dashboard	Visual insights + charts (coming soon)
🧠 How It Works
SellerSight uses a modern AI architecture:

Next.js + React (Vercel) — front‑end and hosting

OpenAI — language/analysis model

Pinecone — vector database for review search

Exa — live web search for competitor pages

Amazon Reviews 2023 dataset — public review text & metadata

Custom pipelines — sentiment scoring, clustering, prioritization

🛠️ Tech Stack
Layer	Technology
Frontend	Next.js, React, Tailwind
Backend	Node / Python ingestion
AI	OpenAI GPT‑4.1 / embeddings
Vector DB	Pinecone
Web Search	Exa API
Deployment	Vercel
Review Source	Amazon Reviews 2023 public dataset
🏁 Getting Started
Clone the repository
git clone https://github.com/sellersight/sellersight-ai.git
cd sellersight-ai
npm install
npm run dev
Environment Variables
Create .env.local and add:

OPENAI_API_KEY=
PINECONE_API_KEY=
PINECONE_INDEX_NAME=
EXA_API_KEY=
📦 Data Ingestion
Upload Amazon reviews or competitor exports into /data or connect scraping pipeline.

Example fields expected for ingestion:

asin
parent_asin
rating
review_text
timestamp
verified_purchase
helpful_vote
🧪 Example Questions
Ask SellerSight anything like:

Why are my ratings dropping for ASIN B08ABC123 in the last 30 days?
Where is Competitor X outperforming me?
Give me the top 5 fixes that will improve ratings fastest.
Show me feature-level sentiment trend for durability vs packaging.
🧱 Roadmap
 Multi‑ASIN comparison dashboard

 Automatic alerts + PDF weekly reports

 Review sentiment heatmaps

 ASIN onboarding UI

 Manufacturing QC link integration

🤝 Contributing
Pull requests welcome. For major changes, open an issue first to discuss improvements.

📬 Contact
For access or partnership inquiries:
Email: support@sellersight.ai
Website: https://sellersight.ai (coming soon)

📜 License
Private / proprietary (Not open source)
