import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import React from 'react';

const articles = () => {
  return (
    <>
      <Head>
        <title>Matthias Floimayr | Articles Page</title>
        <meta name="description" content="my articles"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="This page is not available for now."
            className="mb-16 text-xl"
          />
          {/* <ul>
            <li>Featured articles-1</li>
            <li>Featured articles-2</li>
          </ul>  */}
        </Layout>
      </main>
    </>
  );
};

export default articles;
