import { useState, useEffect } from 'react';
import { BlogList } from 'components/templates/BlogList';
import type { Post } from 'components/templates/BlogList';

export const BlogListPage = () => {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <BlogList posts={posts} />;
};
