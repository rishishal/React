import { useEffect, useState } from "react";
import { Search } from "lucide-react";

const SearchBox = () => {
  const [user, setUser] = useState("");
  const GITHUB_API = `https://api.github.com/users/${user}`;

  useEffect(() => {
    const getData = setTimeout(async () => {
      const response = await fetch(GITHUB_API);
      const data = await response.json();
      console.log(data);
    }, 300);
    return () => clearTimeout(getData);
  }, [user]);

  return (
    <div className='flex items-center gap-2 w-full shadow-md focus-within:ring-2  dark:focus-within:ring-gray-200 focus-within:ring-slate-800  p-2 rounded-lg  dark:bg-slate-800 bg-white '>
      <section className='flex items-center w-full h-full gap-2 '>
        <Search className='text-2xl text-blue-500' />
        <input
          className='w-full h-[40px] rounded bg-inherit outline-none px-1 text-sm '
          type='text'
          placeholder='GitHub username...'
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <button className='rounded-lg bg-blue-500 px-5 py-2 text-white hover:opacity-80  transition-all'>
          Search
        </button>
      </section>
    </div>
  );
};

export default SearchBox;
