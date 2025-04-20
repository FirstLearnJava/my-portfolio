import AnimatedText from '../components/AnimatedText';
//import { GithubIcon } from '../components/Icons.js';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portfolioWebsiteOverview from '../../public/images/projects/portfolio-website-overview.jpg';
import niemandcover from '../../public/images/projects/niemand-website-overview.jpg';
import simeonCover from '../../public/images/projects/simeonOhlsen-website-overview.webp';
import { motion } from 'framer-motion';
import TransitionEffect from '../components/TransitionEffect';

const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light
     dark:bg-dark dark:border-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      {/* <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light rounded-br-3xl xs:right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '> */}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          alt={title}
          src={img}
          className="w-full h-auto"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 xs:p-0 px-6 text-lg font-semibold sm:px-4 sm:text-base "
          >
            Visit Project
          </Link>
        </div>
      </div>
      {/* </div> */}
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4 ">
      {/*       <div className="absolute top-0 -right-3 -z-10 w-[101% h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"> */}
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          alt={title}
          src={img}
          className="w-full h-auto"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
      {/*       </div> */}
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Matthias Floimayr | About Page</title>
        <meta name="description" content="about Matthias"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-20 xs:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Personal Website Simeon Ohlsen"
                img={simeonCover}
                summary="A fully responsive e-commerce store, using ReactJS, PostgreSQL database migration, user authentication/authorization and a integrated checkout-page by the Stripe-API."
                link="https://simeonohlsen.com/"
                github="https://github.com/FirstLearnJava/personal-website-simeon"
                type="Featured project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="E-commerce Pottery Store"
                img={niemandcover}
                summary="A fully responsive e-commerce store, using ReactJS, PostgreSQL database migration, user authentication/authorization and a integrated checkout-page by the Stripe-API."
                link="https://pjct-next-ecommerce-niemand.onrender.com/"
                github="https://github.com/FirstLearnJava/pjct-next-ecommerce-niemand"
                type="Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="React Portfolio Website"
                img={portfolioWebsiteOverview}
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
page transitions, cool background effects, unique design and it is mobile responsive."
                link="https://portfolio-matthias-floimayr.netlify.app/"
                github="https://github.com/FirstLearnJava/my-portfolio"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
