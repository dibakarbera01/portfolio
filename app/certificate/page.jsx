import React from 'react'
import certificate from "@/data/certficate.json";
import Link from 'next/link';
export default function page() {
    return (
        <>
        <div className="max-w-[85rem] px-8 py-10 sm:px-6 lg:px-10 lg:py-24 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificate.map((data, index) => (
            <Link key={index}
              className="group flex flex-col h-full   p-6 rounded-xl bg-stone-50 hover:border hover:border-blue-500 transition-all"
              href={data.redirect_url}
            >
              <div className="aspect-w-16 aspect-h-16">
                <img
                  className="w-full object-cover rounded-xl"
                  src={data.image_url}
                  alt="Image Description"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-800 ">
                  {data.id}
                </h3>
                {/* <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  {data.description}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
        </div>

           
        </>
    )
}
