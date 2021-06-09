import React from 'react';
import Link from 'next/link';
import Image from './image';
import Moment from 'react-moment';

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a>
        <div>
          <div className="shadow-md">
            <Image image={article.image} />
          </div>
          <div className="mt-2">
            <p
              id="title"
              className="font-mono text-base md:text-xl font-bold text-gray-900 dark:text-gray-100">
              {article.title}
            </p>
            <p
              id="description"
              className="font-mono text-sm font-regular text-gray-700 dark:text-gray-300">
              {article.description}
            </p>
            <p
              id="description"
              className="font-mono text-sm font-regular text-gray-500 dark:text-gray-400">
              {<Moment format="MMMM Do, YYYY">{article.published_at}</Moment>}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
