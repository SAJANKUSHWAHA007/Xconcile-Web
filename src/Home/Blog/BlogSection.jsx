'use client';

import * as React from 'react';
import BlogGridSection from '@/components/common/BlogGridSection';

export const homeBlogPosts = [
  {
    id: 1,
    title: 'Guide to Schedule D Form 1040: Capital Gains and Losses',
    description:
      'The sale of an investment either leads to a gain or a loss, but knowing the tax .....',
    image: '/assets/images/blog.svg',
    date: 'Jul 14, 2026',
    readTime: '5 min',
    link: '#blog-1',
  },
  {
    id: 2,
    title: 'Guide to Schedule D Form 1040: Capital Gains and Losses',
    description:
      'The sale of an investment either leads to a gain or a loss, but knowing the tax .....',
    image: '/assets/images/blog.svg',
    date: 'Jul 14, 2026',
    readTime: '5 min',
    link: '#blog-2',
  },
  {
    id: 3,
    title: 'Guide to Schedule D Form 1040: Capital Gains and Losses',
    description:
      'The sale of an investment either leads to a gain or a loss, but knowing the tax .....',
    image: '/assets/images/blog.svg',
    date: 'Jul 14, 2026',
    readTime: '5 min',
    link: '#blog-3',
  },
];

export default function BlogSection() {
  return (
    <BlogGridSection
      id="blogs"
      badge="Our Blog"
      title="Helpful Accounting Insights"
      subtitle="Explore our latest accounting tips, guides, and business insights."
      items={homeBlogPosts}
      maxWidth="xl"
    />
  );
}
