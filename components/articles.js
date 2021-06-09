import React from 'react';
import Card from './card';

const Articles = ({ articles }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
