import React from "react";
import SearchBox from "./SearchBox";
import DarkTheme from "./DarkTheme";

const Home = () => {
  return (
    <div className='flex min-h-screen w-full bg-stone-200 p-1.5 sm:p-4 pt-10 sm:12 transition-all dark:bg-slate-900'>
      <div className='border border-sky-500  mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded-md p-2'>
        <section className='flex justify-between gap-3'>
          <p className='text-x1 font-semibold dark:text-white'>repofinder</p>
          <DarkTheme />
        </section>
      </div>
    </div>
  );
};

export default Home;
