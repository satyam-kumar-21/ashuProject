import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Real Estate',
    description: 'Exploring the trends and technologies shaping the future of real estate.',
    date: 'August 15, 2024'
  },
  {
    id: 2,
    title: 'Top 10 Home Buying Tips',
    description: 'Essential tips to help you make the best home purchase decision.',
    date: 'July 30, 2024'
  },
  {
    id: 3,
    title: 'Why Renting Might Be the Right Choice',
    description: 'Key benefits and considerations when deciding to rent instead of buy.',
    date: 'June 20, 2024'
  }
];

function Blog() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-600 to-blue-400 text-white">
      {/* Section with Blog Title */}
      <div className="w-full md:h-[20vh] h-[15vh] flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">Our Blog</h1>
      </div>

      {/* Main Content Section */}
      <div className="md:py-16 py-4 px-2 md:px-6 bg-white text-gray-800">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">{post.title}</h2>
              <p className="text-lg mb-4">{post.description}</p>
              <p className="text-gray-500 font-medium">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
