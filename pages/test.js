import HeroItem from "../components/HeroItem";
import LogoCloud from "../components/LogoCloud";
import FeatureSections from "../components/FeatureSection";
import ContactForm from "../components/ContactForm";

export default function Test() {
    return (
        <div className='ml-4 mr-4 md:ml-[10%] md:mr-[10%] mb-8 md:mb-12'>
            <div className='grid grid-cols-1 mx-8 md:mx-0 md:grid-cols-2 gap-4 mt-24'>
                <div className='flex flex-col gap-y-6 justify-center items-start'>
                    <span className='text-gray-500 font-open-sans'>WHO ARE WE?</span>
                    <h1 className='font-semibold text-6xl'>Design agency that inspires</h1>
                    <p className='text-2xl text-gray-500'>Our team aims to deliver the most outstanding work in every pixel.</p>
                    <button className='bg-blue-500 py-3 px-4 rounded-md text-white text-lg min-w-[10rem] my-4'>Case Studies</button>
                </div>
                <HeroItem />
            </div>
            <div>
                <LogoCloud spacing='mt-24'/>
            </div>
            <FeatureSections />
            <div className='mt-36'>
                <div className='ml-[-5%] mr-[-5%] bg-[#21325b] bg-hero-pattern rounded-xl text-white'>
                    <div className='py-16 mx-16 flex flex-row flex-wrap justify-around items-center gap-y-12 lg:gap-y-0'>
                        <div className='flex flex-col justify-around items-start gap-y-[4rem]'>
                            <div>
                                <h1 className='font-bold font-open-sans text-4xl'>Hire Us</h1>
                                <div className='font-semibold text-md text-white opacity-70 mt-4'>Whatever your goal - we will get you there </div>
                                <div className='w-1/2 bg-[#677788] h-[2px] mt-8'/>
                            </div>
                            <div className='bg-white text-gray-500 rounded-md py-2 px-4'>Book A Call Now</div>
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
