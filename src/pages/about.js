import AnimatedText from '../components/AnimatedText';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/portfolio-about-picture.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '../components/Skills';
import Education from '../components/Education';
import TransitionEffect from '../components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Matthias Floimayr | About Page</title>
        <meta name="description" content="about Matthias"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start md:order-2 md:items-center md:col-span-8">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75 mt-2">
                Biography
              </h2>
              <p className="font-medium mt-6">
                Hi, I&apos;m Matthias Floimayr, a web developer and UI/UX
                designer with a passion for creating beautiful, functional, and
                user-centered digital experiences.
              </p>
              <p className="font-medium mt-2">
                I believe that design is about more than just making things look
                pretty. It&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium mt-2">
                I bring my commitment to design excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion by contributing to
                your companies projects.
              </p>
            </div>
            <div className="col-span-3 h-max rounded-2xl border-2 border-solid border-dark dark:border-light dark:bg-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 sm:col-span-8">
              <Image
                src={profilePic}
                alt="Matthias Floimayr"
                className="w-full h-max rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end  justify-center xl:items-center text-right">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end  justify-center xl:items-center text-right">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          {/* <Experience /> */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
