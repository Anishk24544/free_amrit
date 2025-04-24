// pages/query.js
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function QueryPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show theme UI when mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      // Simulate search API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResults([
        { id: 1, title: 'Result 1', description: 'Description for result 1' },
        { id: 2, title: 'Result 2', description: 'Description for result 2' },
        { id: 3, title: 'Result 3', description: 'Description for result 3' },
      ]);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 transition-colors duration-200">
      {/* Glass Nav Bar */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-neutral-100/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Query App</span>
            </div>
            <div className="flex items-center space-x-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                >
                  {theme === 'dark' ? '🌞' : '🌙'}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Backdrop Blur */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl rounded-3xl"></div>
          <div className="relative backdrop-blur-sm bg-neutral-100/50 dark:bg-neutral-900/50 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Find what you're looking for
            </h1>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              Enter your query below to search our database
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your search query..."
                className="flex-grow px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-70"
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </form>
          </div>
        </div>

        {/* Results Section */}
        {results.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Search Results
            </h2>
            <div className="space-y-4">
              {results.map((result) => (
                <div 
                  key={result.id}
                  className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                    {result.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {result.description}
                  </p>
                  <div className="mt-4">
                    <button className="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && query && results.length === 0 && (
          <div className="mt-8 p-8 text-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm">
            <p className="text-neutral-700 dark:text-neutral-300">No results found for your query.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Query App. All rights reserved.
        </div>
      </footer>
    </div>
  );
}