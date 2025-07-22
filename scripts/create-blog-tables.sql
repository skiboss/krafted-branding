-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    image_url VARCHAR(500),
    author VARCHAR(100) NOT NULL,
    featured BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, author, featured) VALUES
('Strategies, Trends & Thought Leadership', 'strategies-trends-thought-leadership', 'Explore data-backed articles, case studies, and expert tips in healthcare and e-commerce marketing.', 'Full blog post content about marketing strategies and trends...', '/placeholder.svg?height=400&width=600', 'Henry Okafor', TRUE),
('Cracking the Code of Healthcare SEO in 2025', 'healthcare-seo-2025', 'Smart SEO strategies are transforming patient discovery and bookings.', 'Detailed content about healthcare SEO strategies...', '/placeholder.svg?height=200&width=300', 'Henry Okafor', FALSE),
('TikTok Ads and Gen Z Sales Growth', 'tiktok-ads-gen-z-growth', 'TikTok is outperforming traditional ads for Gen Z conversions.', 'Analysis of TikTok advertising effectiveness...', '/placeholder.svg?height=200&width=300', 'Henry Okafor', FALSE);
