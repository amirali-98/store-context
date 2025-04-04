const categories = [
  { id: "1", title: "All" },
  { id: "2", title: "Electronics" },
  { id: "3", title: "Jewelery" },
  { id: "4", title: "Men's clothing" },
  { id: "5", title: "Women's clothing" },
];

export default function Categories({ setQuery }) {
  function categoryHandler(category) {
    setQuery(query => ({ ...query, category }));
  }

  return (
    <div className="mb-4">
      <h2 className="mb-2 text-2xl font-semibold text-orange-600">
        Categories
      </h2>
      <div className="flex gap-5 overflow-x-auto pb-2">
        {categories.map(category => (
          <span
            key={category.id}
            className="shrink-0 bg-gray-400 text-white py-2 px-5 rounded-full cursor-pointer transition-colors hover:bg-gray-500"
            onClick={() => categoryHandler(category.title.toLowerCase())}
          >
            {category.title}
          </span>
        ))}
      </div>
    </div>
  );
}
