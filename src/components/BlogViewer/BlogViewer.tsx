import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import type { BlogPost } from '../../services/blogService';
import { fetchBlogPosts } from '../../services/blogService';
import { useIntlayer, useLocale } from 'react-intlayer';
import './BlogViewer.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
// import blogViewerContent from './BlogViewer.content';

// Extend the location state type
type LocationState = {
  post?: BlogPost;
};

export const BlogViewer = () => {
  const { postId } = useParams<{ postId: string }>();
  const location = useLocation();
  const locationState = location.state as LocationState;
  const [post, setPost] = useState<BlogPost | null>(locationState?.post || null);
  const [loading, setLoading] = useState(!locationState?.post);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { locale } = useLocale();
  
  const content = useIntlayer('blog-viewer');

  useEffect(() => {
    // If we have a post in location state and it's in the current locale, use it
    if (locationState?.post && locationState.post.language === locale) {
      return;
    }

    let isMounted = true;
    
    const loadPost = async () => {
      try {
        if (isMounted) setLoading(true);
        
        const posts = await fetchBlogPosts(locale);
        
        if (!isMounted) return;
        
        // Try to find the post by URL slug first, then by title
        const foundPost = posts.find(p => {
          if (!postId) return false;
          // const postSlug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          const postSlug = p.link
          return p.link.includes(postId) || postSlug === postId;
        });
        
        if (isMounted) {
          if (foundPost) {
            setPost(foundPost);
          } else {
            setError(content.notFound?.value || 'Post not found');
          }
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        if (isMounted) {
          setError(content.error?.value || 'Failed to load blog post');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadPost();
    
    // Cleanup function to prevent state updates after component unmounts
    return () => {
      isMounted = false;
    };
  }, [postId, locale]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div className="loading">{content.loading || 'Loading...'}</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={handleBack} className="back-button">
          {content.backToBlog || 'Back to Blog'}
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="not-found">
        <p>{content.notFound || 'Post not found'}</p>
        <button onClick={handleBack} className="back-button">
          {content.backToBlog || 'Back to Blog'}
        </button>
      </div>
    );
  }

  return (
    <>
    <Header />
    <div className="blog-viewer">
      <button onClick={handleBack} className="back-button">
        {content.backToBlog || 'Back to Blog'}
      </button>
      
      <article className="blog-post">
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>{content.publishedOn || 'Published on'} </span>
            <time dateTime={new Date(post.pubDate).toISOString()}>
              {new Date(post.pubDate).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          {post.thumbnail && (
            <div className="post-thumbnail">
              <img src={post.thumbnail} alt={post.title} />
            </div>
          )}
        </header>

        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content || post.description }}
        />
      </article>
    </div>
    <Footer />
    </>
    
  );
};
