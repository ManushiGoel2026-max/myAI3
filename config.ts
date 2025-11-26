// config.ts

export const OWNER_NAME = `SellerSight`;

export const OWNER_DESCRIPTION = `
SellerSight is an AI-powered competitive review intelligence assistant for Amazon third-party sellers.
It analyzes public Amazon reviews, competitor listings, and feature-level sentiment to identify why ratings move,
where competitors outperform you, and which fixes will have the highest impact on reviews, returns, and conversion.
`;

export const ASSISTANT_TITLE = `SellerSight – Review Intelligence for Amazon Sellers`;

export const ASSISTANT_TAGLINE = `Understand reviews faster. Fix what matters. Beat competitors.`;

// Optional: what you show in the sidebar / landing hero
export const APP_LONG_DESCRIPTION = `
SellerSight turns noisy Amazon review text into structured, actionable insight.
Upload your review exports, returns data, and support logs, then compare against competitor ASINs.
The assistant will:
• detect feature-level themes (durability, sizing, packaging, shipping, listing clarity, etc.),
• track sentiment trends over time,
• run gap analysis vs competitors, and
• recommend prioritized fixes with supporting review evidence.
`;

// If myAI3 has feature flags, keep Exa + Pinecone ON
export const ENABLE_WEB_SEARCH = true;  // uses EXA_API_KEY for live web data when needed
export const ENABLE_VECTOR_DB = true;   // uses Pinecone for your review / doc knowledge base
