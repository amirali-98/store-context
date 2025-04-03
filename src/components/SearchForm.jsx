import { IoSearchSharp } from "react-icons/io5";

export default function SearchForm() {
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-dashed border-orange-600 p-1 px-2 bg-white rounded-xl h-10 w-[300px] outline-none"
      />
      <button
        type="submit"
        className="bg-orange-600 h-10 w-10 flex items-center justify-center text-white rounded-xl text-2xl cursor-pointer"
      >
        <IoSearchSharp />
      </button>
    </form>
  );
}
