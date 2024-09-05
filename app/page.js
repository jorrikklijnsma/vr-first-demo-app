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
  Play,
  ArrowLeft,
  User,
} from 'lucide-react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [navigationPath, setNavigationPath] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
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
    {
      id: 5,
      title: 'AI and the Future of Work',
      category: 'ai',
      views: '1.5M views',
      channel: 'Future Forward',
    },
    {
      id: 6,
      title: 'Football Skills and Tricks',
      category: 'football',
      views: '2M views',
      channel: 'Soccer Star',
    },
  ];

  const channels = [
    { id: 1, name: 'Tech Guru', subscribers: '1M subscribers', avatar: '👨‍💻' },
    { id: 2, name: 'Fitness Fanatic', subscribers: '500K subscribers', avatar: '💪' },
    { id: 3, name: 'Cooking Master', subscribers: '2M subscribers', avatar: '👨‍🍳' },
  ];

  const playlists = [
    { id: 1, name: 'Learn React', videos: 20, thumbnail: '⚛️' },
    { id: 2, name: 'Workout Routines', videos: 15, thumbnail: '🏋️' },
    { id: 3, name: 'Easy Recipes', videos: 30, thumbnail: '🍳' },
  ];

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel);
    setCurrentPage('channel');
  };

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
    setCurrentPage('playlist');
  };

  const handleProfileClick = () => {
    setCurrentPage('profile');
  };

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
        <h1 className='logo'>
          VR
          <svg
            viewBox='0 0 90 20'
            preserveAspectRatio='xMidYMid meet'
            focusable='false'
            className='logo-icon'
          >
            <g viewBox='0 0 90 20' preserveAspectRatio='xMidYMid meet'>
              <g>
                <path
                  d='M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z'
                  fill='#FF0000'
                ></path>
                <path
                  d='M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z'
                  fill='white'
                ></path>
              </g>
              <g>
                <g>
                  <path d='M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z'></path>
                  <path d='M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z'></path>
                  <path d='M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z'></path>
                  <path d='M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z'></path>
                  <path d='M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z'></path>
                  <path d='M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z'></path>
                  <path d='M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z'></path>
                </g>
              </g>
            </g>
          </svg>
        </h1>
        <div className='header-input-container'>
          <div className='search-container'>
            <input type='text' placeholder='Search' className='search-input' />
            <button className='icon-button search-button'>
              <Search size={24} />
            </button>
          </div>
          <button className='icon-button profile-button' onClick={handleProfileClick}>
            <User size={24} />
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
          <>
            <h2 className='section-title'>Featured Channels</h2>
            <div className='channel-grid'>
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  className='channel-card'
                  onClick={() => handleChannelClick(channel)}
                >
                  <span className='channel-avatar'>{channel.avatar}</span>
                  <span className='channel-name'>{channel.name}</span>
                  <span className='channel-subscribers'>{channel.subscribers}</span>
                </button>
              ))}
            </div>

            <h2 className='section-title'>Popular Playlists</h2>
            <div className='playlist-grid'>
              {playlists.map((playlist) => (
                <button
                  key={playlist.id}
                  className='playlist-card'
                  onClick={() => handlePlaylistClick(playlist)}
                >
                  <span className='playlist-thumbnail'>{playlist.thumbnail}</span>
                  <span className='playlist-name'>{playlist.name}</span>
                  <span className='playlist-videos'>{playlist.videos} videos</span>
                  <Play size={24} className='play-icon' />
                </button>
              ))}
            </div>

            <h2 className='section-title'>Categories</h2>
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

            <h2 className='section-title'>Recommended Videos</h2>
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

        {currentPage === 'channel' && selectedChannel && (
          <div className='channel-page'>
            <div className='channel-header'>
              <span className='channel-avatar large'>{selectedChannel.avatar}</span>
              <h2 className='channel-name'>{selectedChannel.name}</h2>
              <p className='channel-subscribers'>{selectedChannel.subscribers}</p>
              <button className='subscribe-button'>Subscribe</button>
            </div>
            <div className='channel-content'>
              <h3 className='section-title'>Latest Videos</h3>
              <div className='video-grid'>
                {/* Placeholder for channel videos */}
                <div className='video-card'>
                  <div className='video-thumbnail'></div>
                  <h3 className='video-title'>Channel Video 1</h3>
                  <p className='video-info'>1M views • 2 days ago</p>
                </div>
                {/* Add more video cards as needed */}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'playlist' && selectedPlaylist && (
          <div className='playlist-page'>
            <div className='playlist-header'>
              <span className='playlist-thumbnail large'>{selectedPlaylist.thumbnail}</span>
              <h2 className='playlist-name'>{selectedPlaylist.name}</h2>
              <p className='playlist-videos'>{selectedPlaylist.videos} videos</p>
              <button className='play-all-button'>
                <Play size={24} /> Play All
              </button>
            </div>
            <div className='playlist-content'>
              <div className='video-list'>
                {/* Placeholder for playlist videos */}
                <div className='video-list-item'>
                  <div className='video-thumbnail small'></div>
                  <div className='video-info'>
                    <h3 className='video-title'>Playlist Video 1</h3>
                    <p className='video-channel'>Channel Name</p>
                  </div>
                </div>
                {/* Add more video list items as needed */}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'profile' && (
          <div className='profile-page'>
            <div className='profile-header'>
              <span className='profile-avatar'>😎</span>
              <h2 className='profile-name'>Your Name</h2>
            </div>
            <div className='profile-content'>
              <h3 className='section-title'>Your Playlists</h3>
              <div className='playlist-grid'>
                {/* Placeholder for user playlists */}
                <button className='playlist-card'>
                  <span className='playlist-thumbnail'>🎵</span>
                  <span className='playlist-name'>Favorite Music</span>
                  <span className='playlist-videos'>10 videos</span>
                  <Play size={24} className='play-icon' />
                </button>
                {/* Add more playlist cards as needed */}
              </div>
              <h3 className='section-title'>Your Subscriptions</h3>
              <div className='channel-grid'>
                {/* Placeholder for user subscriptions */}
                <button className='channel-card'>
                  <span className='channel-avatar'>🎨</span>
                  <span className='channel-name'>Art Channel</span>
                  <span className='channel-subscribers'>500K subscribers</span>
                </button>
                {/* Add more channel cards as needed */}
              </div>
            </div>
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
