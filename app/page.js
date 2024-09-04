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
        <h1 className='logo'>VR YouTube</h1>
        <div className='search-container'>
          <input type='text' placeholder='Search' className='search-input' />
          <button className='icon-button search-button'>
            <Search size={24} />
          </button>
        </div>
        <button className='icon-button profile-button' onClick={handleProfileClick}>
          <User size={24} />
        </button>
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
