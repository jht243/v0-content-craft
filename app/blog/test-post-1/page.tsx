import React from 'react';

export default function BlogPost() {
  return (
    <article className="max-w-2xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Test Post 1</h1>
      <div className="prose">
        <p>This is a test post to verify that Vercel automatically deploys new blog posts.</p>
        <p>If you can see this, the auto-deploy is working correctly!</p>
      </div>
    </article>
  );
}
