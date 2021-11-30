/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from '@heroicons/react/solid'
import platterImage from '../public/platter.jpg'

export default function PreFooterCta() {
    return (
        <div className="relative bg-gray-800 mt-24 mb-24">
            <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src={platterImage}
                    alt=""
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Award winning support</h2>
                    <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
                    <p className="mt-3 text-lg text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                        scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                        tincidunt duis.
                    </p>
                    <div className="mt-8">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                            >
                                View Menu
                                <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
