'use client';

import { useState } from 'react';
import './page.css';
import { Search, House, ChartNoAxesCombined, Vote, Menu } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Music', 'Gaming', 'News', 'Live', 'Sports'];
  const videos = [
    { title: 'VR Gaming Experiences', views: '1.2M views', channel: 'VR Enthusiast' },
    { title: 'Learn React in 2024', views: '800K views', channel: 'Code Master' },
    { title: 'Relaxing Nature Sounds', views: '3M views', channel: 'Zen Channel' },
    { title: 'Space Exploration News', views: '500K views', channel: 'Science Today' },
  ];

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

      <main className='main-content'>
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

        <div className='video-grid'>
          {videos.map((video, index) => (
            <div key={index} className='video-card'>
              <div className='video-thumbnail'></div>
              <h3 className='video-title'>{video.title}</h3>
              <p className='video-info'>
                {video.channel} • {video.views}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
