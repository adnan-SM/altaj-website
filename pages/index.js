import Head from 'next/head'
import AnnouncementBanner from "../components/AnnouncementBanner";
import Fade from 'react-reveal/Fade';
import {StarIcon} from "@heroicons/react/solid";
import Recommended from "../components/Recommended";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import PreFooterCta from "../components/PreFooterCTA";
import CTASection from "../components/CTASection";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnnouncementBanner />
      <div className="flex flex-col items-center justify-center min-h-screen pt-24 pb-8">
        <img src="https://svgshare.com/i/XiX.svg" className="hidden lg:block absolute left-24 top-48 transform rotate-45 h-16 w-16 animate-pulse"/>
        <img src="https://svgshare.com/i/Xhk.svg" className="hidden lg:block absolute left-36 top-64 transform rotate-[25deg] h-32 w-32 opacity-40"/>
        <img src="https://svgshare.com/i/XiY.svg" className="hidden lg:block absolute right-36 top-[720px] transform rotate-[35deg] h-32 w-32 opacity-40"/>
        <img src="https://svgshare.com/i/Xjy.svg" className="hidden lg:block absolute right-64 top-[300px] transform rotate-[-10deg] h-32 w-32 opacity-40"/>
        <main className="w-full">
          <div className="flex flex-col flex-1 items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">
            <span className="text-red-600 text-opacity-90">Delicious foods, {' '}</span>
            <a className="" href="https://nextjs.org">
              at your doorstep
            </a>
          </h1>

          <p className="mt-3 text-2xl max-w-2xl">
            <span>Now enjoy mouth watering delicious food from the comfort of your home. Just sit back & relax while we bring your favorite food right to </span>
            <span className="inline-block p-2 font-mono text-lg bg-red-300 rounded-md transform rotate-1 hover:-rotate-1">
              your doorstep
            </span>
          </p>
          <a
              href="https://nextjs.org/docs"
              className="p-6 mt-24 bg-red-500 opacity-90 text-left w-[18rem] md:w-96 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-400 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-center text-white">Order Now &rarr;</h3>
          </a>
          <div className="mt-6">
            <div className="inline-flex items-center divide-x divide-red-300">
              <div className="flex-shrink-0 flex pr-4">
                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1 pl-4 py-1 text-sm text-gray-500 sm:py-3">
                <span className="font-medium text-gray-900">Rated 5 stars on Zomato by </span> {' '}
                <span className="font-medium text-red-500">500+ users</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="p-6 mt-6 text-left border-2 border-pink-400 w-[18rem] md:w-96 rounded-xl text-pink-500 bg-pink-50 lg:text-black lg:bg-transparent hover:text-pink-500 hover:bg-pink-50 hover:transition-all focus:text-pink-500"
            >
              <h3 className="text-2xl font-bold">Book A Table &rarr;</h3>
              {/*<p className="mt-4 text-xl">*/}
              {/*  Discover and deploy boilerplate example Next.js projects.*/}
              {/*</p>*/}
            </a>

            <Link href="/outlets">
              <a
                  className="p-6 mt-6 text-left border-2 border-orange-400 w-[18rem] md:w-96 rounded-xl text-orange-500 bg-orange-50 lg:text-black lg:bg-transparent hover:text-orange-500 hover:bg-orange-50 focus:text-orange-500"
              >
                <h3 className="text-2xl font-bold">View Outlets &rarr;</h3>
                {/*<p className="mt-4 text-xl">*/}
                {/*  Instantly deploy your Next.js site to a public URL with Vercel.*/}
                {/*</p>*/}
              </a>
            </Link>
          </div>
          </div>
          <Fade bottom cascade>
            <div className="relative max-w-7xl my-24 mx-auto px-8 sm:px-4 md:px-16 lg:px-8">
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 bg-green-500">
                <div className="pt-10 pb-12 px-4 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                  <div className="lg:self-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                      <span className="block text-left">Our Story</span>
                      <span className="block text-red-900 text-left my-4">A celebration of food</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-orange-100 text-left max-w-sm">
                      Everything we do, right from sourcing the freshest ingredients to preparing each meal with care is a reflection on our commitment to
                      bring you an experience you won't find anywhere else.
                    </p>
                    <p className="text-2xl text-left text-pink-700 my-4 cursor-pointer">Learn More &rarr;</p>
                    {/*<a*/}
                    {/*    href="#"*/}
                    {/*    className="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"*/}
                    {/*>*/}
                    {/*  Order Now*/}
                    {/*</a>*/}
                  </div>
                </div>
                <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                  <img
                      className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                      src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                      alt="App screenshot"
                  />
                </div>
              </div>
            </div>
          </Fade>
          <div>
            <Recommended/>
          </div>
          <Fade bottom>
            <Stats />
          </Fade>
        </main>
        <Fade bottom>
          <CTASection />
          <div className="border-t border-gray-200 max-w-full">
            <Footer />
          </div>
        </Fade>
      </div>
    </div>
  )
}
