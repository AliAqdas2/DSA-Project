import { useState, useEffect } from 'react';
import Navbar from './components/navbar';

export default function AddSongForm() {
  const [formData, setFormData] = useState({
    name: '',
    spotifyLink: '',
    artists: '',
    album: '',
    lyrics: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const extractSpotifyID = (url) => {
    const match = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const spotifyID = extractSpotifyID(formData.spotifyLink);

    if (!spotifyID) {
      setError('Invalid Spotify link. Please provide a valid track link (e.g., https://open.spotify.com/track/...).');
      setIsLoading(false);
      return;
    }

    const payload = {
      id: spotifyID,
      name: formData.name,
      album_name: formData.album,
      artists: formData.artists,
      lyrics: formData.lyrics,
      danceability: 0.63,
      energy: 0.6,
      key: 8,
      loudness: -6.3,
      mode: 1,
      speechiness: 0.04,
      acousticness: 0.27,
      instrumentalness: 0.0,
      liveness: 0.12,
      valence: 0.35,
      tempo: 120.0,
      duration_ms: 198000
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/add_document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to add song. Please check the backend connection and try again.');
      }

      setSuccess(true);
      setFormData({ name: '', spotifyLink: '', artists: '', album: '', lyrics: '' });
    } catch (err) {
      setError(err.message || 'An error occurred while submitting the form.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="min-h-screen flex flex-col font-body-md text-primary antialiased bg-[#F7F6F3]">
      <Navbar />

      <main className="flex-grow pt-[100px] pb-stack-lg px-margin-mobile md:px-margin-desktop flex justify-center items-center">
        <div className="w-full max-w-[520px] mx-auto text-left flex flex-col gap-stack-md mt-6">
          <header className="flex flex-col gap-unit mb-2">
            <p className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-unit">DATABASE INDEXING</p>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">
              Add new <span className="italic font-light">song</span>.
            </h1>
            <div className="w-[32px] h-[1px] bg-primary mt-2"></div>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-label-caps text-label-caps text-secondary uppercase">
                Song Title
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="e.g. Bohemian Rhapsody"
                className="w-full bg-[#fdf8f7] hairline-all py-3 px-4 font-body-md text-primary placeholder-[#BBBBB7] rounded-sm focus:border-primary focus:ring-0 outline-none transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="spotifyLink" className="font-label-caps text-label-caps text-secondary uppercase">
                Spotify Link
              </label>
              <input
                type="url"
                id="spotifyLink"
                name="spotifyLink"
                value={formData.spotifyLink}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="e.g. https://open.spotify.com/track/..."
                className="w-full bg-[#fdf8f7] hairline-all py-3 px-4 font-body-md text-primary placeholder-[#BBBBB7] rounded-sm focus:border-primary focus:ring-0 outline-none transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="artists" className="font-label-caps text-label-caps text-secondary uppercase">
                Artists (separated by commas)
              </label>
              <input
                type="text"
                id="artists"
                name="artists"
                value={formData.artists}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="e.g. Queen"
                className="w-full bg-[#fdf8f7] hairline-all py-3 px-4 font-body-md text-primary placeholder-[#BBBBB7] rounded-sm focus:border-primary focus:ring-0 outline-none transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="album" className="font-label-caps text-label-caps text-secondary uppercase">
                Album Name
              </label>
              <input
                type="text"
                id="album"
                name="album"
                value={formData.album}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="e.g. A Night at the Opera"
                className="w-full bg-[#fdf8f7] hairline-all py-3 px-4 font-body-md text-primary placeholder-[#BBBBB7] rounded-sm focus:border-primary focus:ring-0 outline-none transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lyrics" className="font-label-caps text-label-caps text-secondary uppercase">
                Lyrics
              </label>
              <textarea
                id="lyrics"
                name="lyrics"
                value={formData.lyrics}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="Paste song lyrics here..."
                className="w-full bg-[#fdf8f7] hairline-all py-3 px-4 font-body-md text-primary placeholder-[#BBBBB7] rounded-sm focus:border-primary focus:ring-0 outline-none transition-colors duration-200 min-h-[120px]"
                rows="4"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[48px] btn-default rounded-sm font-label-caps text-label-caps uppercase tracking-wider flex items-center justify-center gap-2 border border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-all duration-100"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                  <span>Indexing song...</span>
                </>
              ) : (
                <span>Add Song to Index</span>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 border border-error bg-[#ffdad6] text-error rounded-sm text-center font-metadata text-metadata">
              {error}
            </div>
          )}
        </div>
      </main>

      {/* Brutalist Toast Notification */}
      {success && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-4 bg-[#fdf8f7] border-heavy border-primary text-primary rounded-sm shadow-xl z-50 flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-[20px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <span className="font-label-caps text-[11px] tracking-wider uppercase">Song indexed successfully!</span>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full py-stack-md px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto border-t border-[#E2E1DC] bg-surface mt-auto">
        <span className="font-label-caps text-label-caps text-primary">Lyricist</span>
        <div className="flex gap-stack-md mt-stack-md md:mt-0">
          <a className="font-metadata text-metadata text-secondary hover:underline" href="#">Privacy</a>
          <a className="font-metadata text-metadata text-secondary hover:underline" href="#">Terms</a>
          <a className="font-metadata text-metadata text-secondary hover:underline" href="#">Archive</a>
        </div>
        <span className="font-metadata text-metadata text-secondary mt-stack-md md:mt-0">© 2024 Lyricist Editorial. All rights reserved.</span>
      </footer>
    </div>
  );
}
