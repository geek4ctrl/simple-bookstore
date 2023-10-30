"use client"

import React, { useEffect, useState } from "react";
import books from "../local-json/books.json";

const Content = (props: any) => {

    const [filteredBooks, setFilteredBooks] = useState(books);
    const [filteredAndStoredBooks, setFilteredAndStoredBooks] = useState(books);

    const [longestPalindrome, setLongestPalindrome] = useState("");

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


    // Part 4: Probem-Solving


    // A function named longestPalindromicSubstring that takes an input string event from the input field
    const longestPalindromicSubstring = (event: any) => {

        // The event is passed to a const variable for simplicity of manipulation throughout the function
        const value = event.target.value;

        // Checks the length of the input string. If it's an empty string, the function returns an empty string.
        if (value.length < 1) {
            return "";
        }

        // Initializes an empty sstring. This will be used to store the longest palindromic substring
        let longest = "";

        // Start a for loop that iterates through the characters of the input string. Th loop variable is used to
        // represent the current character's index

        for (let i = 0; i < value.length; i++) {

            // The function expandAroundCenter is called
            let palindrome1 = expandAroundCenter(value, i, i);

            // This compares the length of the palindrome found with the length of the longest palindrome found so far
            // If palindrome 2 is longer, it updates the longest variable with palindrome 2
            if (palindrome1.length > longest.length) {
                longest = palindrome1;
            }

            // The function expandAroundCenter is called
            let palindrome2 = expandAroundCenter(value, i, i + 1);

            // This compares the length of the palindrome found with the length of the longest palindrome found so far
            // If palindrome 2 is longer, it updates the longest variable with palindrome 2
            if (palindrome2.length > longest.length) {
                longest = palindrome2;
            }
        }

        // Passed the longest palindrome to be displayed
        setLongestPalindrome(longest)

        // The function returns the longest variable
        return longest;
    }

    // The expandAroundCenter is considered to be an helper function.
    // It take the input string s and two indices, left and right which
    // represent the potential centersof a palindrome.

    function expandAroundCenter(s: any, left: any, right: any) {

        // The while loop checks if the characters at positions left and right are the same
        // and if left and right are withing the boundary of the string.
        // It expands outwards as long as the characters match and the indices are within 
        // the string bounds.

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        // Here it has found the maximum palindromic substring with the given center.
        // It returns the the substring from left + 1 to right.
        // This is the palindrome found.
        return s.substring(left + 1, right);
    }

    // Part 5: Code Review

    // The code provided appears to be using a templating engine liike EJS (Embedded JavaScript) to generate HTML content
    // dynamically. But there is one issue: the `<% %> tags used to delimit JavaScript code blocks are not standard EJS syntax.

    // The correct syntax for EJS code blocks should `<% %>` for Javscript code and `<%= %>` for outputting the result of 
    // an expression. The code you provided uses '<%= %> inside the JavaScript code block, which is the correct usage.

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

                <button className="flex flex-row items-center justify-center bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow sm:w-full w-full" onClick={sortTitleInAscendingOrder}>
                    Sort By Title(ASC)

                    <span><img width="25" height="25" src="https://img.icons8.com/ios/50/up--v1.png" alt="up--v1" /></span>
                </button>
                <button className="flex flex-row items-center justify-center bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full" onClick={sortTitleInDescendingOrder}>
                    Sort By Title(DESC)

                    <img width="25" height="25" src="https://img.icons8.com/ios/50/down--v1.png" alt="down--v1" />
                </button>
                <button className="flex flex-row items-center justify-center bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full" onClick={sortAuthorInAscendingOrder}>
                    Sort By Author(ASC)

                    <span><img width="25" height="25" src="https://img.icons8.com/ios/50/up--v1.png" alt="up--v1" /></span>
                </button>
                <button className="flex flex-row items-center justify-center bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full" onClick={sortAuthorInDescendingOrder}>
                    Sort By Author(DESC)

                    <img width="25" height="25" src="https://img.icons8.com/ios/50/down--v1.png" alt="down--v1" />
                </button>

            </div>

            <div className="flex flex-row mt-5 text-center p-4 bg-gray-100 flex-wrap ml-20 mr-20 rounded-md">

                {
                    filteredAndStoredBooks && filteredAndStoredBooks.map(({ title, author }) => (

                        <div key="title" className="basis-1/3 p-2">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 w-85 w-full">
                                <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{author}</div>
                                    <p className="text-gray-600 text-base">
                                        {title}
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#payspace</span>
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#books</span>
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">#code</span>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>

            <div className="flex flex-col justify-center items-center mt-20 pt-20">

                <div className="font-sans font-inter text-base leading-normal text-center tracking-tighter text-fill-fill bg-opacity-0 bg-black text-5xl">
                    Longest Palindrome Problem
                </div>
                <div className="font-sans font-inter text-base leading-normal text-center tracking-tighter text-fill-fill bg-opacity-0 bg-black text-5xl text-gray-400">
                    Solution.
                </div>

                <input className="p-16 bg-white focus:outline-none focus:shadow-outline border border-gray-100 rounded-md py-2 px-2 block appearance-none leading-normal mt-20 mb-20 w-1/2 shadow-md rounded-md"
                    type="text"
                    placeholder="Please type something..."
                    onChange={longestPalindromicSubstring} />

            </div>

            <div className="flex flex-row mt-5 text-center p-4 bg-gray-100 flex-wrap ml-20 mr-20 rounded-md">

                <p>Here is the longest Palindrome: {longestPalindrome} </p>

            </div>

            <div className="flex flex-col  mt-5 text-left p-4 bg-gray-100 flex-wrap ml-20 mr-20 rounded-md">

                <h1>Algorithm:</h1>

                <div>
                    <img src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1698390148/dky5aiffa8okg2hxjaen.png" alt="" />
                </div>
            </div>
        </>

    )
}

export default Content;