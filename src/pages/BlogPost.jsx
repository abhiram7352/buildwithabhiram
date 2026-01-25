import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts';

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-20 px-6">
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-2xl font-bold">Post not found</h2>
          <p className="text-slate-400 mt-4">We couldn't find that post.</p>
          <Link to="/blog" className="mt-6 inline-block px-4 py-2 bg-cyan-600 text-white rounded">Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="relative">
        <div style={{backgroundImage: `url(${post.image})`}} className="h-64 bg-cover bg-center">
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 -mt-20">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                <div className="text-slate-400 text-sm">{post.date} • {post.readTime} • by {post.author.name}</div>
              </div>
              <div className="text-sm text-cyan-300 px-3 py-1 bg-slate-800 rounded">{post.category}</div>
            </div>

            <div className="prose prose-invert text-slate-200" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded">#{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPost;
