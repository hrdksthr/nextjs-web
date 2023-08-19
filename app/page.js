'use client';
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      <section className="relative min-h-screen flex flex-col">
        <nav
          className="px-6 w-full h-20 lg:h-24 z-20 hidden lg:block text-juni-dark-900 bg-white shadow-nav "
          data-testid="main-nav"
          style={{ top: "0px" }}
        >
          <div className="container flex items-center px-0 py-0 justify-center h-full">
            <h1
              className="flex-nav-icon w-20 h-full text-6xl items-center border-solid border-indigo-600 border-2 "
              data-testid="title-nav"
            >
              <a
                data-testid="generic-button"
                className="cursor-pointer logo nav-juni-icon icon-juni-logo text-icon-xs lg:text-20 h-full relative block z-20 leading-10 inline-block relative whitespace-nowrap"
                href="/"
              >
                <span></span>
              </a>
            </h1>
            <div className="flex items-center">
              <ul
                className="flex flex-nav-main-links z-20"
                data-testid="main-nav-container"
              >
                <li className="font-medium" data-testid="main-nav-option">
                  <a
                    aria-current="page"
                    data-testid="generic-button"
                    className="cursor-pointer px-4 xl:px-6 lg:py-4 leading-10 w-full border-b-4 border-transparent leading-10 inline-block relative whitespace-nowrap"
                    href="/"
                  >
                    <span>Pricing</span>
                  </a>
                </li>
                <li className="font-medium" data-testid="main-nav-option">
                  <a
                    data-testid="generic-button"
                    className="cursor-pointer px-4 xl:px-6 lg:py-4 leading-10 w-full border-b-4 border-transparent leading-10 inline-block relative whitespace-nowrap"
                    href="/"
                  >
                    <span>Coding</span>
                  </a>
                </li>
                <li className="font-medium" data-testid="main-nav-option">
                  <a
                    data-testid="generic-button"
                    className="cursor-pointer px-4 xl:px-6 lg:py-4 leading-10 w-full border-b-4 border-transparent leading-10 inline-block relative whitespace-nowrap"
                    href="/"
                  >
                    <span>Math</span>
                  </a>
                </li>
                <li className="font-medium" data-testid="main-nav-option">
                  <a
                    data-testid="generic-button"
                    className="cursor-pointer default px-4 xl:px-6 lg:py-4 leading-10 w-full border-b-4 border-transparent leading-10 inline-block relative whitespace-nowrap"
                    href="/tutoring/"
                  >
                    <span>Tutoring</span>
                  </a>
                </li>
                <li className="font-medium" data-testid="main-nav-option">
                  <a
                    data-testid="generic-button"
                    className="cursor-pointer px-4 xl:px-6 lg:py-4 leading-10 w-full border-b-4 border-transparent leading-10 inline-block relative whitespace-nowrap"
                    href="/"
                  >
                    <span>Instructors</span>
                  </a>
                </li>
                <li className="font-medium" data-testid="main-nav-option">
                  <h3 className="px-4 xl:px-6 lg:py-4 leading-10 w-full border-b-4 border-transparent cursor-default">
                    More
                  </h3>
                </li>
              </ul>
              <div className="ml-2">
                <div className="flex justify-end items-center w-full h-full space-x-1">
                  <a href="/">
                    <button aria-label="Wishlist" className="p-4 lg:p-1">
                      <div className="flex space-x-1">
                        <svg
                          className="w-5 h-5"
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.43798 2.9751C6.88108 1.38281 4.3191 1.38281 2.76219 2.9751C1.25399 4.51758 1.25399 6.98228 2.76219 8.52475L9.86136 15.7853C9.93747 15.8631 10.0627 15.8631 10.1388 15.7853L17.238 8.52476C18.7462 6.98228 18.7462 4.51758 17.238 2.9751C15.6811 1.38281 13.1191 1.38281 11.5622 2.9751L10.5363 4.02427C10.3952 4.16858 10.2019 4.24993 10.0001 4.24993C9.79825 4.24993 9.60494 4.16858 9.46383 4.02427L8.43798 2.9751ZM1.68968 1.92642C3.83498 -0.267629 7.3652 -0.267629 9.51049 1.92642L10.0001 2.42715L10.4897 1.92642C12.635 -0.267627 16.1652 -0.26763 18.3105 1.92642C20.3887 4.05184 20.3887 7.44801 18.3105 9.57343L11.2113 16.8339C10.5468 17.5135 9.45335 17.5135 8.78885 16.8339L1.68968 9.57343C-0.388507 7.44801 -0.388502 4.05184 1.68968 1.92642Z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </a>
                  <div className="w-5 h-5 rounded-full text-sm invisible bg-j-dark-600 text-white">
                    0
                  </div>
                </div>
              </div>
            </div>
            <ul
              className="flex flex-nav-side-links justify-end z-20 items-center"
              data-testid="side-nav-container"
            >
              <li>
                <a
                  data-testid="generic-button"
                  className="cursor-pointer link light inline-block px-6 xl:px-8 leading-10 inline-block relative whitespace-nowrap hover:underline leading-14"
                  href="https://app.junilearning.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Log in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://app.junilearning.com/signup?subjects=Computer+Science"
                  rel="noopener noreferrer"
                >
                  <div
                    data-testid="generic-button"
                    className="cursor-pointer button dark cursor-pointer button dark inline-block px-6 xl:px-8 text-sm text-center leading-15 text-sm text-center leading-15"
                  >
                    <span>Sign Up</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          className={`main-nav w-full z-20 block lg:hidden ${clicked ? 'h-full bg-white' : 'h-20'} ${clicked ? 'absolute': 'sticky'}  top-0`}
          data-testid="main-nav"
          style={{ top: "0px" }}
        >
          <div className={`w-full ${clicked ? 'shadow-nav relative z-10' : ''} text-j-dark-600`}>
            <div className="flex items-center px-6 py-0 justify-center h-20">
              <h1
                className="flex-nav-icon w-24 h-full text-6xl items-center"
                data-testid="title-nav"
              >
                <a
                  data-testid="generic-button"
                  className="cursor-pointer logo nav-juni-icon icon-juni-logo text-icon-xs lg:text-icon-s h-full relative block leading-10 inline-block relative whitespace-nowrap"
                  href="/"
                >
                  <span></span>
                </a>
              </h1>
              <div className="flex justify-end items-center w-full h-full space-x-1">
                <a href="/wishlist/">
                  <button aria-label="Wishlist" className="p-4 lg:p-1">
                    <div className="flex space-x-1">
                      <svg
                        className="w-5 h-5"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.43798 2.9751C6.88108 1.38281 4.3191 1.38281 2.76219 2.9751C1.25399 4.51758 1.25399 6.98228 2.76219 8.52475L9.86136 15.7853C9.93747 15.8631 10.0627 15.8631 10.1388 15.7853L17.238 8.52476C18.7462 6.98228 18.7462 4.51758 17.238 2.9751C15.6811 1.38281 13.1191 1.38281 11.5622 2.9751L10.5363 4.02427C10.3952 4.16858 10.2019 4.24993 10.0001 4.24993C9.79825 4.24993 9.60494 4.16858 9.46383 4.02427L8.43798 2.9751ZM1.68968 1.92642C3.83498 -0.267629 7.3652 -0.267629 9.51049 1.92642L10.0001 2.42715L10.4897 1.92642C12.635 -0.267627 16.1652 -0.26763 18.3105 1.92642C20.3887 4.05184 20.3887 7.44801 18.3105 9.57343L11.2113 16.8339C10.5468 17.5135 9.45335 17.5135 8.78885 16.8339L1.68968 9.57343C-0.388507 7.44801 -0.388502 4.05184 1.68968 1.92642Z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </a>
                <div className="w-5 h-5 rounded-full text-sm invisible bg-j-dark-600 text-white">
                  0
                </div>
              </div>
              <div
                className="lg:hidden z-20 font-medium ml-8"
                role="button"
                tabindex="0"
                onClick={() => setClicked(!clicked)}
              >
                {clicked ? 'Close' : 'Menu'}
              </div>
            </div>
          </div>
          <div className={`w-full h-full bg-white pt-3 flex-col ${clicked? 'flex' : 'hidden'}`}>
            <div className="px-6">
              <ul>
                <li
                  className="main-nav__item text-juni-dark-900 p-4 text-base font-medium shadow-mobile-nav-links"
                  data-testid="main-nav-option"
                >
                  <a
                    aria-current="page"
                    data-testid="generic-button"
                    className="cursor-pointer w-full text-left font-medium leading-10 inline-block relative whitespace-nowrap"
                    href="/pricing/"
                  >
                    <span>Pricing</span>
                  </a>
                </li>
                <li
                  className="main-nav__item text-juni-dark-900 p-4 text-base font-medium shadow-mobile-nav-links"
                  data-testid="main-nav-option"
                >
                  <a
                    data-testid="generic-button"
                    className="cursor-pointer w-full text-left font-medium leading-10 inline-block relative whitespace-nowrap"
                    href="/coding-for-kids/"
                  >
                    <span>Coding</span>
                  </a>
                </li>
                <li
                  className="main-nav__item text-juni-dark-900 p-4 text-base font-medium shadow-mobile-nav-links"
                  data-testid="main-nav-option"
                >
                  <a
                    data-testid="generic-button"
                    className="cursor-pointer w-full text-left font-medium leading-10 inline-block relative whitespace-nowrap"
                    href="/math-courses/"
                  >
                    <span>Math</span>
                  </a>
                </li>
                <li
                  className="main-nav__item text-juni-dark-900 p-4 text-base font-medium shadow-mobile-nav-links"
                  data-testid="main-nav-option"
                >
                  <button className="cursor-pointer default w-full text-left font-medium leading-10 inline-block relative whitespace-nowrap pr-6">
                    <span>Tutoring</span>
                    <i
                      className="icon-chevron-right text-2xl absolute block right-0 top-2/4 -translate-y-1/2 text-center w-5 h-5 leading-6"
                      data-testid="generic-button-icon"
                    ></i>
                  </button>
                </li>
                <li
                  className="main-nav__item text-juni-dark-900 p-4 text-base font-medium shadow-mobile-nav-links"
                  data-testid="main-nav-option"
                >
                  <a
                    data-testid="generic-button"
                    className="cursor-pointer w-full text-left font-medium leading-10 inline-block relative whitespace-nowrap"
                    href="/juni-instructors/"
                  >
                    <span>Instructors</span>
                  </a>
                </li>
                <li
                  className="main-nav__item text-juni-dark-900 p-4 text-base font-medium shadow-mobile-nav-links"
                  data-testid="main-nav-option"
                >
                  <button className="cursor-pointer title w-full text-left font-medium leading-10 inline-block relative whitespace-nowrap pr-6">
                    <span>More</span>
                    <i
                      className="icon-chevron-right text-2xl absolute block right-0 top-2/4 -translate-y-1/2 text-center w-5 h-5 leading-6"
                      data-testid="generic-button-icon"
                    ></i>
                  </button>
                </li>
              </ul>
              <ul className="flex flex-col-reverse items-center pt-8">
                <a
                  data-testid="generic-button"
                  className={clicked ? "cursor-pointer link light main-nav__side-option text-base font-medium link light inline-block px-24 mt-2 leading-10 inline-block relative whitespace-nowrap hover:underline leading-14" :"cursor-pointer link light main-nav__side-option text-base font-medium link light inline-block px-8 leading-10 inline-block relative whitespace-nowrap hover:underline leading-14"}
                  href="https://app.junilearning.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Log in</span>
                </a>
                <a
                  href="https://app.junilearning.com/signup?subjects=Computer+Science"
                  rel="noopener noreferrer"
                >
                  <div
                    data-testid="generic-button"
                    className={clicked ? "cursor-pointer button dark cursor-pointer button dark main-nav__side-option text-base font-medium button dark inline-block px-24 mt-2 text-sm text-center leading-15 text-sm text-center leading-15" :"cursor-pointer button dark cursor-pointer button dark main-nav__side-option text-base font-medium button dark inline-block px-8 text-sm text-center leading-15 text-sm text-center leading-15"}
                  >
                    <span>Sign Up</span>
                  </div>
                </a>
              </ul>
            </div>
            <ul className="px-6 hidden">
              <li
                className="main-nav__item text-juni-dark-900 p-2 leading-4 text-base shadow-mobile-nav-links"
                data-testid="main-nav-option"
              >
                <button className="flex justify-start w-full h-full">
                  <i
                    className="icon-chevron-left text-2xl"
                    data-testid="generic-button-icon"
                  ></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <footer className="bg-juni-dark-900 text-white" data-testid="main-footer">
          <div className="flex flex-wrap xl:flex-nowrap px-6 container w-full">
            <ul
              className="grid md:grid-cols-4 grid-cols-2 gap-3 w-full md:py-15"
              data-testid="main-footer-navigation"
            >
              <li
                className="text-white text-sm py-1 w-full"
                data-testid="main-footer-option"
              >
                <h3 className="leading-7 min-h-7 pb-2 false">Subjects</h3>
                <ul
                  className="main-footer__children-nav-list"
                  data-testid="main-footer-child-list"
                >
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/coding-for-kids/"
                    >
                      <span>Coding</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/math-courses/"
                    >
                      <span>Math</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/investing-entrepreneurship/"
                    >
                      <span>Investing &amp; Entrepreneurship</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/science-for-kids/"
                    >
                      <span>Science</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/communications-for-kids/"
                    >
                      <span>Communications</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/tutoring/"
                    >
                      <span>Help with Schoolwork</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/courses/"
                    >
                      <span>All Courses</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="text-white text-sm py-1 w-full"
                data-testid="main-footer-option"
              >
                <h3 className="leading-7 min-h-7 pb-2 false">How It Works</h3>
                <ul
                  className="main-footer__children-nav-list"
                  data-testid="main-footer-child-list"
                >
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/curriculum/"
                    >
                      <span>Curriculum</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/tutoring/"
                    >
                      <span>Tutoring</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      aria-current="page"
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/pricing/"
                    >
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/juni-instructors/"
                    >
                      <span>Instructors</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/student-projects/"
                    >
                      <span>Student Projects</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/reviews/"
                    >
                      <span>Reviews</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="text-white text-sm py-1 w-full"
                data-testid="main-footer-option"
              >
                <h3 className="leading-7 min-h-7 pb-2 false">Resources</h3>
                <ul
                  className="main-footer__children-nav-list"
                  data-testid="main-footer-child-list"
                >
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/blog/"
                    >
                      <span>Blog</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="https://aceit.ai/"
                      rel="noopener noreferrer"
                    >
                      <span>On Demand ACT &amp; SAT Prep</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/homeschool/"
                    >
                      <span>Homeschool</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/giftcards/"
                    >
                      <span>Gift Cards</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="https://app.junilearning.com/help/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Help Center &amp; FAQ</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/instructor-calendar-syncing/"
                    >
                      <span>Instructor Calendar Syncing</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="text-white text-sm py-1 w-full"
                data-testid="main-footer-option"
              >
                <h3 className="leading-7 min-h-7 pb-2 false">About Juni</h3>
                <ul
                  className="main-footer__children-nav-list"
                  data-testid="main-footer-child-list"
                >
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/about-us/"
                    >
                      <span>{`Founders' Story`}</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="https://web.fountain.com/c/juni-learning"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Careers</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="https://www.fountain.com/c/juni-learning"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Instructor Jobs</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/terms/"
                    >
                      <span>Our Policies</span>
                    </a>
                  </li>
                  <li
                    className="text-white text-sm py-1 w-full"
                    data-testid="main-footer-child-option"
                  >
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer text-j-dark-300 hover:text-white text-sm block"
                      href="/contact/"
                    >
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="flex flex-col justify-start text-sm pt-15 pb-7">
              <div
                data-testid="main-footer__newsletter"
                className="flex pb-12 lg:pb-0"
              >
                <div className="text-white text-sm footer-email-catcher">
                  <div className="pb-2 text-sm">
                    <h3 className="leading-7 min-h-7 pb-2">
                      Subscribe to our newsletter
                    </h3>
                    <p>
                      Learn about our latest events, resources, <br />
                      programs, and more!
                    </p>
                  </div>
                  <form className="footer-email-catcher-input-and-button">
                    <div className="flex flex-row h-12 sm:w-96 w-full">
                      <input
                        placeholder="Email"
                        type="email"
                        className="block text-juni-dark-900 rounded-lg px-4 mr-2 w-full "
                      />
                      <button
                        type="submit"
                        className="flex items-center bg-juni-pink-600 hover:bg-juni-pink-700 text-white text-sm px-4 text-center rounded-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <p className="text-xxs leading-none text-j-dark-300">
                    By subscribing you agree with our{" "}
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer underline leading-10 inline-block relative whitespace-nowrap"
                      href="/docs/Juni_Learning_Terms_of_Use.pdf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Terms of Use</span>
                    </a>{" "}
                    &amp;{" "}
                    <a
                      data-testid="generic-button"
                      className="cursor-pointer underline leading-10 inline-block relative whitespace-nowrap"
                      href="/docs/Juni_Learning_Privacy_Policy.pdf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Privacy Policy</span>
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="py-6">
                <p>2261 Market St #4242, San Francisco, CA 94114</p>
                <a
                  className="block leading-5"
                  href="mailto:hello@learnwithjuni.com"
                >
                  hello@learnwithjuni.com
                </a>
              </div>
              <div className="flex flex-row text-white">
                <a
                  data-testid="generic-button"
                  className="cursor-pointer leading-10 inline-block relative whitespace-nowrap pr-6"
                  href="https://www.instagram.com/junilearning/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                  <i
                    className="icon-instagram text-3xl text-j-purple-600 hover:text-white"
                    data-testid="generic-button-icon"
                  ></i>
                </a>
                <a
                  data-testid="generic-button"
                  className="cursor-pointer leading-10 inline-block relative whitespace-nowrap pr-6"
                  href="https://www.facebook.com/junilearning/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                  <i
                    className="icon-facebook text-3xl text-j-purple-600 hover:text-white"
                    data-testid="generic-button-icon"
                  ></i>
                </a>
                <a
                  data-testid="generic-button"
                  className="cursor-pointer leading-10 inline-block relative whitespace-nowrap pr-6"
                  href="https://twitter.com/junilearning/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                  <i
                    className="icon-twitter text-3xl text-j-purple-600 hover:text-white"
                    data-testid="generic-button-icon"
                  ></i>
                </a>
                <a
                  data-testid="generic-button"
                  className="cursor-pointer leading-10 inline-block relative whitespace-nowrap pr-6"
                  href="https://www.tiktok.com/@junilearning/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                  <i
                    className="icon-tiktok text-3xl text-j-purple-600 hover:text-white"
                    data-testid="generic-button-icon"
                  ></i>
                </a>
                <a
                  data-testid="generic-button"
                  className="cursor-pointer leading-10 inline-block relative whitespace-nowrap pr-6"
                  href="https://discord.gg/qqRkC3cd4b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                  <i
                    className="icon-discord text-3xl text-j-purple-600 hover:text-white"
                    data-testid="generic-button-icon"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-j-dark-900">
            <p className="container px-6 text-sm leading-10 text-j-dark-300">
              Copyright © 2023 Some name here. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}
