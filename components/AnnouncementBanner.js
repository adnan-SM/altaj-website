/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from '@heroicons/react/outline'
import { useState } from 'react';

export default function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(true);
    // bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
    //bg-gradient-to-r from-orange-400 to-pink-500
    return (
        <div className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <div className="max-w-7xl mx-auto py-6 px-3 sm:px-6 lg:px-8">
                <div className="pr-16 sm:text-center sm:px-16">
                    <p className="font-medium text-white text-xl">
                        <span className="md:hidden">We announced a new product!</span>
                        <span className="hidden md:inline">We're open & available for delivery. </span>
                        <span className="block sm:ml-2 sm:inline-block">
              <a href="/products" className="text-white font-bold underline">
                {' '}
                  Order Now <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
                    </p>
                </div>
                <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-center sm:pt-1 sm:pr-2 sm:items-center">
                    <button
                        type="button"
                        className="flex p-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        <span className="sr-only">Dismiss</span>
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    )
}
