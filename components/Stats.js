/* This example requires Tailwind CSS v2.0+ */
export default function Stats() {
    return (
        <div className="bg-gradient-to-r to-orange-400 from-pink-500">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by people all over India</h2>
                    <p className="mt-3 text-xl text-white sm:mt-4">
                        We have been serving delicious food across multiple cities in India.
                    </p>
                </div>
                <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                    <div className="flex flex-col">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Orders</dt>
                        <dd className="order-1 text-5xl font-extrabold text-white">50k</dd>
                    </div>
                    <div className="flex flex-col mt-10 sm:mt-0">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Delivery</dt>
                        <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
                    </div>
                    <div className="flex flex-col mt-10 sm:mt-0">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Happy Customers</dt>
                        <dd className="order-1 text-5xl font-extrabold text-white">20k</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
