import { Link } from "react-router-dom";

export default function Countries() {
  const countries = [
    {
      name: "USA",
      image: "https://matrixpathimmigration.com/wp-content/uploads/2024/03/statue-liberty-usa.jpg"
    },
    {
      name: "UK",
      image: "https://acko-cms.ackoassets.com/Best_time_to_visit_UK_6dae1f2b10.png"
    },
    {
      name: "Australia",
      image: "https://assets.studies-overseas.com/Study_in_Australia_1f4284046b.png"
    },
    {
      name: "Canada",
      image: "https://matrix.in/cdn/shop/articles/canada3_960x.jpg?v=1709210626"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Featured Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {countries.map((country) => (
          <Link
            key={country.name}
            to="#"
            className="relative group overflow-hidden rounded-xl block"
          >
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}