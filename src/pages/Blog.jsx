import SectionHeader from '../components/common/SectionHeader';
import { useState } from 'react';
import posts from '../data/posts';
import { Link } from 'react-router-dom';

function Blog() {
  const categories = [
    { name: "Career", count: 12, color: "bg-cyan-900/50 text-cyan-300" },
    { name: "Cloud", count: 8, color: "bg-blue-900/50 text-blue-300" },
    { name: "Interviews", count: 15, color: "bg-green-900/50 text-green-300" },
    { name: "Personal Growth", count: 6, color: "bg-purple-900/50 text-purple-300" }
  ];

  const featuredPosts = [
    {
      title: "How I Cracked AWS Solutions Architect in 30 Days",
      category: "Cloud",
      excerpt: "A detailed breakdown of my study strategy, resources used, and key insights that helped me pass the exam on the first attempt.",
      readTime: "8 min read",
      date: "Dec 15, 2024"
    },
    {
      title: "The Real Truth About Technical Interviews",
      category: "Interviews",
      excerpt: "What actually matters in technical interviews, based on conducting 100+ interviews and helping students prepare.",
      readTime: "12 min read",
      date: "Dec 10, 2024"
    },
    {
      title: "Building a Career Accelerator: Lessons Learned",
      category: "Career",
      excerpt: "The journey of building a platform that has helped 500+ students, including mistakes made and insights gained.",
      readTime: "15 min read",
      date: "Dec 5, 2024"
    },
    {
      title: "From Student to Mentor: The Mindset Shift",
      category: "Personal Growth",
      excerpt: "How transitioning from learning to teaching changed my perspective on growth, responsibility, and impact.",
      readTime: "10 min read",
      date: "Nov 28, 2024"
    }
  ];

  // add full content for Read more
  // use posts data and provide pagination
  const allPosts = posts;
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <main className="pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Blog"
            subtitle="Insights, experiences, and practical advice from the field"
          />
          
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <div key={index} className={`px-4 py-2 rounded-full ${category.color} cursor-pointer hover:opacity-80 transition-opacity`}>
                  {category.name} ({category.count})
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Featured Posts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {allPosts.slice(0, visibleCount).map((post, index) => (
                <article key={post.slug} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-sm">{post.date}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h4>
                  
                  <div className="md:flex md:items-start md:gap-6">
                    <img src={post.image} alt="" className="w-full md:w-40 h-28 object-cover rounded mb-4 md:mb-0" />
                    <div className="flex-1">
                      <p className="text-slate-300 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-slate-400 text-sm">{post.readTime} • by {post.author?.name}</div>
                        <Link to={`/blog/${post.slug}`} className="text-cyan-400 hover:text-cyan-300 font-medium">Read more →</Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visibleCount < allPosts.length && (
              <div className="text-center mt-8">
                <button onClick={() => setVisibleCount((v) => v + 4)} className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors">Load more</button>
              </div>
            )}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-slate-800/20 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">More Content Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                I'm constantly sharing insights and experiences. Follow along for regular updates on career growth, 
                technical skills, and the journey of building something meaningful.
              </p>
              <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;