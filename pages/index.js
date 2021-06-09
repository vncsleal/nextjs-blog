import React from 'react';
import Articles from '../components/articles';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="mt-8 mx-8 md:mx-20">
        <div>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI('/articles'),
    fetchAPI('/categories'),
    fetchAPI('/homepage'),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
