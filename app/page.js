'use client';

import { useState } from 'react';
import './page.css';
import {
  Search,
  House,
  ChartNoAxesCombined,
  Vote,
  Menu,
  ThumbsUp,
  ThumbsDown,
  Share,
  Save,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [navigationPath, setNavigationPath] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: 'entertainment', name: 'Entertainment', icon: '🎭' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
  ];

  const subcategories = {
    entertainment: [
      { id: 'movies', name: 'Movies', icon: '🎬' },
      { id: 'music', name: 'Music', icon: '🎵' },
      { id: 'gaming', name: 'Gaming', icon: '🎮' },
    ],
    education: [
      { id: 'science', name: 'Science', icon: '🔬' },
      { id: 'history', name: 'History', icon: '📜' },
      { id: 'languages', name: 'Languages', icon: '🗣️' },
    ],
    technology: [
      { id: 'programming', name: 'Programming', icon: '👨‍💻' },
      { id: 'gadgets', name: 'Gadgets', icon: '📱' },
      { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
    ],
    sports: [
      { id: 'football', name: 'Football', icon: '🏈' },
      { id: 'basketball', name: 'Basketball', icon: '🏀' },
      { id: 'tennis', name: 'Tennis', icon: '🎾' },
    ],
  };

  const videos = [
    {
      id: 1,
      title: 'Introduction to React',
      category: 'programming',
      views: '1.2M views',
      channel: 'Code Master',
    },
    {
      id: 2,
      title: 'History of Ancient Rome',
      category: 'history',
      views: '800K views',
      channel: 'History Buff',
    },
    {
      id: 3,
      title: 'Top 10 Sci-Fi Movies',
      category: 'movies',
      views: '3M views',
      channel: 'Film Fanatic',
    },
    {
      id: 4,
      title: 'Learning Spanish Basics',
      category: 'languages',
      views: '500K views',
      channel: 'Polyglot Pro',
    },
    // Add more video objects as needed
  ];

  const handleCategoryClick = (category) => {
    setNavigationPath([...navigationPath, category]);
    setCurrentPage('subcategory');
  };

  const handleSubcategoryClick = (subcategory) => {
    setNavigationPath([...navigationPath, subcategory]);
    setCurrentPage('videos');
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setCurrentPage('detail');
  };

  const handleBackClick = () => {
    if (navigationPath.length > 0) {
      const newPath = [...navigationPath];
      newPath.pop();
      setNavigationPath(newPath);
      setCurrentPage(
        newPath.length === 0 ? 'home' : newPath.length === 1 ? 'subcategory' : 'videos'
      );
    } else {
      setCurrentPage('home');
    }
    setSelectedVideo(null);
  };

  return (
    <div className='vr-youtube'>
      <header className='header'>
        <button className='icon-button menu-button'>
          <Menu size={24} />
        </button>
        <h1 className='logo'>VR YouTube</h1>
        <div className='search-container'>
          <input type='text' placeholder='Search' className='search-input' />
          <button className='icon-button search-button'>
            <Search size={24} />
          </button>
        </div>
      </header>

      <nav className='sidebar'>
        <button className='nav-button active'>
          <House size={24} /> Home
        </button>
        <button className='nav-button'>
          <ChartNoAxesCombined size={24} /> Trending
        </button>
        <button className='nav-button'>
          <Vote size={24} /> Subscriptions
        </button>
      </nav>

      <main className='main-content'>
        {currentPage !== 'home' && (
          <button className='back-button' onClick={handleBackClick}>
            <ArrowLeft size={24} /> Back
          </button>
        )}

        {currentPage === 'home' && (
          <div className='category-grid'>
            {categories.map((category) => (
              <button
                key={category.id}
                className='category-card'
                onClick={() => handleCategoryClick(category)}
              >
                <span className='category-icon'>{category.icon}</span>
                <span className='category-name'>{category.name}</span>
                <ChevronRight size={24} className='chevron-icon' />
              </button>
            ))}
          </div>
        )}

        {currentPage === 'subcategory' && (
          <div className='category-grid'>
            {subcategories[navigationPath[navigationPath.length - 1].id].map((subcategory) => (
              <button
                key={subcategory.id}
                className='category-card'
                onClick={() => handleSubcategoryClick(subcategory)}
              >
                <span className='category-icon'>{subcategory.icon}</span>
                <span className='category-name'>{subcategory.name}</span>
                <ChevronRight size={24} className='chevron-icon' />
              </button>
            ))}
          </div>
        )}

        {currentPage === 'videos' && (
          <div className='video-grid'>
            {videos
              .filter((video) => video.category === navigationPath[navigationPath.length - 1].id)
              .map((video) => (
                <div key={video.id} className='video-card' onClick={() => handleVideoClick(video)}>
                  <div className='video-thumbnail'></div>
                  <h3 className='video-title'>{video.title}</h3>
                  <p className='video-info'>
                    {video.channel} • {video.views}
                  </p>
                </div>
              ))}
          </div>
        )}

        {currentPage === 'detail' && selectedVideo && (
          <div className='video-detail'>
            <div className='video-player'></div>
            <h2 className='detail-title'>{selectedVideo.title}</h2>
            <p className='detail-info'>
              {selectedVideo.channel} • {selectedVideo.views}
            </p>
            <div className='action-buttons'>
              <button className='action-button'>
                <ThumbsUp size={24} /> Like
              </button>
              <button className='action-button'>
                <ThumbsDown size={24} /> Dislike
              </button>
              <button className='action-button'>
                <Share size={24} /> Share
              </button>
              <button className='action-button'>
                <Save size={24} /> Save
              </button>
            </div>
            <p className='video-description'>
              This is a placeholder description for the video. In a real application, this would
              contain details about the video content.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
