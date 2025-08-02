import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntlayer, useLocale } from 'react-intlayer';
import type { BlogPost } from '../../services/blogService';
import { fetchBlogPosts } from '../../services/blogService';
// import { blogSummaryListContent } from './BlogSummaryList.content';
import './BlogSummaryList.css';

export const BlogSummaryList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { locale } = useLocale();
  
  const content = useIntlayer('blog-summary-list');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const blogPosts = await fetchBlogPosts(locale);
        setPosts(blogPosts);
        setError(null);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError(content.error?.value || 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [locale]); // Removed content from dependencies to prevent infinite loops

  const handlePostClick = (post: BlogPost) => {
    // Create a URL-friendly slug from the post title
    const slug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // Navigate to the blog post with the slug in the URL and post data in state
    navigate(`/blog/${slug}`, { 
      state: { post, key: `${slug}-${Date.now()}`},
    });
  };

  if (loading) {
    return <div className="loading">{content.loading || 'Loading...'}</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (posts.length === 0) {
    return <div className="empty">{content.emptyMessage}</div>;
  }

  return (
    <div className="blog-summary-list">
      <h2>{content.title}</h2>
      <p className="description">{content.description}</p>
      <div className="blog-grid">
        {posts.map((post) => (
          <div 
            key={`${post.link}-${post.language}`} 
            className="blog-card"
            onClick={() => handlePostClick(post)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePostClick(post);
              }
            }}
          >
            {post.thumbnail && (
              <div className="blog-thumbnail">
                <img src={post.thumbnail} alt={post.title} />
              </div>
            )}
            <div className="blog-content">
              <h3>{post.title}</h3>
              <div className="blog-meta">
                <span className="date">
                  {new Date(post.pubDate).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <p className="excerpt">
                {post.description.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
              </p>
              <span className="read-more">{content.readMore}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};