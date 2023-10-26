"use client"

import React, { useEffect, useState } from "react";
import books from "../local-json/books.json"

const Content = (props: any) => {

    const [filteredBooks, setFilteredBooks] = useState(books);
    const [filteredAndStoredBooks, setFilteredAndStoredBooks] = useState(books);

    const handleFilter = (event: any) => {
        const value = event.target.value;
        const filtered = books.filter(book => book.title.includes(value) || book.author.includes(value));
        setFilteredBooks(filtered);
        setFilteredAndStoredBooks(filtered);
    };

    const sortTitleInAscendingOrder = () => {
        setFilteredAndStoredBooks([...filteredBooks].sort((a: any, b: any) => a.title > b.title ? 1 : -1));
    }

    const sortTitleInDescendingOrder = () => {
        setFilteredAndStoredBooks([...filteredBooks].sort((a: any, b: any) => b.title > a.title ? -1 : 1));
    }

    const sortAuthorInAscendingOrder = () => {
        setFilteredAndStoredBooks([...filteredBooks].sort((a: any, b: any) => a.author > b.author ? 1 : -1));
    }

    const sortAuthorInDescendingOrder = () => {
        setFilteredAndStoredBooks([...filteredBooks].sort((a: any, b: any) => a.author > b.author ? -1 : 1));
    }

    // console.log('Lakisa ba buku: ', filteredBooks)

    return (

        <>
            <div className="flex flex-col justify-center items-center mt-20 pt-20">

                <div className="font-sans font-inter text-base leading-normal text-center tracking-tighter text-fill-fill bg-opacity-0 bg-black text-5xl">
                    Knowledge Library Platform.
                </div>
                <div className="font-sans font-inter text-base leading-normal text-center tracking-tighter text-fill-fill bg-opacity-0 bg-black text-5xl text-gray-400">
                    Lovingly made for your mind.
                </div>

                <input className="p-16 bg-white focus:outline-none focus:shadow-outline border border-gray-100 rounded-md py-2 px-2 block appearance-none leading-normal mt-20 mb-20 w-1/2 shadow-md rounded-md"
                    type="text"
                    placeholder="Please type something..."
                    onChange={handleFilter} />

            </div>

            <div className="lg:flex lg:flex-row sm:justify-center justify-around items-center m-5 sm:flex sm:flex-col w-100">

                <button className="bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow sm:w-full w-full" onClick={sortTitleInAscendingOrder}>
                    Sort By Title(ASC)

                    <span> <ion-icon name="arrow-up-outline"></ion-icon> </span>
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full" onClick={sortTitleInDescendingOrder}>
                    Sort By Title(DESC)

                    <span> <ion-icon name="arrow-down-outline"></ion-icon> </span>
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full" onClick={sortAuthorInAscendingOrder}>
                    Sort By Author(ASC)

                    <span> <ion-icon name="arrow-up-outline"></ion-icon> </span>
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full" onClick={sortAuthorInDescendingOrder}>
                    Sort By Author(DESC)

                    <span> <ion-icon name="arrow-down-outline"></ion-icon> </span>
                </button>

            </div>

            <div className="flex flex-row mt-5 text-center p-4 bg-gray-100 flex-wrap ml-20 mr-20 rounded-md">

                {
                    filteredAndStoredBooks && filteredAndStoredBooks.map(({ title, author }) => (

                        <div className="basis-1/3 p-2">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 w-85 w-full">
                                <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{author}</div>
                                    <p className="text-gray-600 text-base">
                                        {title}
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#photography</span>
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#travel</span>
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">#winter</span>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </>

    )
}

export default Content;