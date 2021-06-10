import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { fetchAPI } from '../../lib/api';
import Layout from '../../components/layout';
import Image from '../../components/image';
import Seo from '../../components/seo';
import { getStrapiMedia } from '../../lib/media';

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />

      <div className="relative grid md:mx-6 place-items-center bg-black">
        <Image
          image={article.image}
          style={{ opacity: 0.7, width: '100%' }}
          layout="fill"
          objectFit="cover"
        />
        <h1 className="absolute grid place-items-center place-self-center text-white text-lg md:text-5xl font-mono font-bold">
          {article.title}
        </h1>
      </div>
      <div className="flex space-x-2 pt-2 pb-2 mx-8 md:mx-60">
        <div className="shadow-md rounded-full">
          {article.author.picture && (
            <Image
              image={article.author.picture}
              style={{
                position: 'static',
                borderRadius: '50%',
                height: 24,
              }}
            />
          )}
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-mono font-bold">
            {article.author.name}
          </p>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-mono">
            <Moment format="MMMM Do, YYYY">{article.published_at}</Moment>
          </p>
        </div>
      </div>
      <div className="text-sm text-gray-900 dark:text-gray-100 font-mono mx-8 md:mx-60">
        <ReactMarkdown children={article.content} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI('/articles');

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const categories = await fetchAPI('/categories');

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
