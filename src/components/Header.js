import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 px-6">
      <div className="h-[5em] max-w-7xl mx-auto flex items-center justify-between ">
        <img src="/src/images/CT-Logo.png"></img>
        <h2 className="mt-0.5 text-fuchsia-900 text-sm tracking-[0.2em]">
          CODING TRAIN
        </h2>

        <div className='items-center text-center'>
          <Link to="/">
            <h1 className="font-semibold tracking-[0.3em] text-noc-400">
              THE <span className="font-black">NATURE</span> OF CODE
            </h1>
          </Link>
        </div>

        <a
          href="https://nostarch.com/nature-code"
          className="hidden sm:block bg-noc-400 hover:bg-noc-600 text-white rounded-full font-semibold px-6 py-3 shadow"
        >
          Buy this book
        </a>

        <a
          href="https://github.com/sponsors/CodingTrain"
          className="hidden sm:block bg-slate-100 hover:bg-slate-500 text-noc-400 rounded-full font-semibold px-6 py-3 shadow"
        >
          ♡
        </a>
      </div>
    </header>
  );
};

export default Header;
