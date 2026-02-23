import React from 'react';
import type { BlogPost } from '../../types';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  onReadMore: (slug: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, onReadMore }) => {
  const isDark = index % 2 !== 0;

  return (
    <article
      className={`reveal-advanced p-10 md:p-14 rounded-[3.5rem] transition-all duration-700 hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] hover:-translate-y-4 group border relative overflow-hidden cursor-pointer ${isDark
        ? 'bg-wispr-dark text-wispr-cream border-white/5'
        : 'bg-white text-wispr-dark border-wispr-dark/5'
        }`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
      onClick={() => onReadMore(post.slug)}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[2000ms] pointer-events-none"></div>

      {/* Category Badge */}
      <div className="mb-8">
        <span
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] ${isDark
            ? 'bg-wispr-purple/20 text-wispr-purple'
            : 'bg-wispr-purple/10 text-wispr-purple'
            }`}
        >
          <Sparkles size={12} />
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-lander text-2xl md:text-3xl font-bold mb-6 leading-tight tracking-tight transition-all duration-500 group-hover:translate-x-2 ${isDark ? 'text-wispr-cream' : 'text-wispr-dark'
          }`}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p
        className={`text-base md:text-lg font-medium leading-relaxed mb-10 line-clamp-3 ${isDark ? 'text-white/40' : 'text-slate-500'
          }`}
      >
        {post.excerpt}
      </p>

      {/* Meta Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Author Avatar Placeholder */}
          {/* <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-brand font-black text-sm ${isDark ? 'bg-white/10 text-white/60' : 'bg-wispr-cream text-wispr-dark/60'
              }`}
          >
            {post.author.name.charAt(0)}
          </div> */}
          <div>
            {post.author.linkedin ? (
              <a
                href={post.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`font-brand text-[11px] font-black hover:text-wispr-purple transition-colors ${isDark ? 'text-wispr-cream' : 'text-wispr-dark'
                  }`}
              >
                {post.author.name}
              </a>
            ) : (
              <p
                className={`font-brand text-[11px] font-black ${isDark ? 'text-wispr-cream' : 'text-wispr-dark'
                  }`}
              >
                {post.author.name}
              </p>
            )}
            <div
              className={`flex items-center gap-2 text-[10px] font-brand font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-slate-400'
                }`}
            >
              <Clock size={10} />
              {post.readTime}
            </div>
          </div>
        </div>

        {/* Read More Arrow */}
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-12deg] ${isDark
            ? 'bg-white/5 text-wispr-purple group-hover:bg-wispr-purple group-hover:text-wispr-dark'
            : 'bg-wispr-cream text-wispr-dark group-hover:bg-wispr-purple'
            }`}
        >
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div
        className={`mt-10 pt-6 border-t flex justify-between items-center opacity-10 group-hover:opacity-30 transition-opacity ${isDark ? 'border-white' : 'border-wispr-dark'
          }`}
      >
        <span className="font-brand text-[9px] font-black tracking-[0.25em] uppercase">
          {post.publishedAt}
        </span>
        <span className="font-pike text-[9px] font-black tracking-widest uppercase">
          READ ARTICLE
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
