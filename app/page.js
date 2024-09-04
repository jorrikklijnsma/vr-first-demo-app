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
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Music', 'Gaming', 'News', 'Live', 'Sports'];
  const videos = [
    { id: 1, title: 'VR Gaming Experiences', views: '1.2M views', channel: 'VR Enthusiast' },
    { id: 2, title: 'Learn React in 2024', views: '800K views', channel: 'Code Master' },
    { id: 3, title: 'Relaxing Nature Sounds', views: '3M views', channel: 'Zen Channel' },
    { id: 4, title: 'Space Exploration News', views: '500K views', channel: 'Science Today' },
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setCurrentPage('detail');
    document.startViewTransition(() => {
      window.scrollTo(0, 0);
    });
  };

  const handleBackClick = () => {
    setCurrentPage('home');
    document.startViewTransition(() => {
      setSelectedVideo(null);
    });
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
        {currentPage === 'home' && (
          <>
            <div className='categories'>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-button ${category === activeCategory ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className='video-grid'>
              {videos.map((video) => (
                <div key={video.id} className='video-card' onClick={() => handleVideoClick(video)}>
                  <div className='video-thumbnail'></div>
                  <h3 className='video-title'>{video.title}</h3>
                  <p className='video-info'>
                    {video.channel} • {video.views}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {currentPage === 'detail' && selectedVideo && (
          <div className='video-detail'>
            <button className='back-button' onClick={handleBackClick}>
              Back to Home
            </button>
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
