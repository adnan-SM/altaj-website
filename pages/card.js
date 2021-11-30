export default function Card() {
    return (
        <div>
            <div className='h-[600px] w-[450px] rounded-2xl my-24 mx-auto group relative
            bg-food-image-main object-fit bg-no-repeat border-2 border-white
            hover:border-2 hover:border-[#766df490] hover:shadow-lg cursor-pointer'>
            <span
                className='absolute bottom-0 w-full h-0 rounded-2xl
                 bg-gradient-to-t from-[#766df495] via-[#766df450] to-[#766df400]
                 group-hover:h-full group-hover:transform group-hover:transition-height
                  duration-500 ease-in-out'
            />
                <span className='absolute hidden bottom-12 right-8 text-white
                 text-xl group-hover:block'
                >
                    Discover this recipe >
                </span>
                <span className='bg-[#ffb15c] text-white text-2xl absolute top-8 right-0 py-2 px-4 rounded-l-lg'>
                    Desserts
                </span>
        </div>
    </div>
    )
}
