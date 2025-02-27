import { Link } from "react-router-dom";

export default function Universities() {
  const universities = [
    {
      name: "Stanford University",
      image: "https://olmsted.org/wp-content/uploads/2023/06/Main-Quad-from-Palm-Dive-by-Linda-Cicero.png"
    },
    {
      name: "University of California, San Francisco",
      image: "https://www.ruseducation.in/wp-content/uploads/2022/01/university-of-california-san-francisco-school-of-medicine.webp"
    },
    {
      name: "Harvard University",
      image: "https://vnis.edu.vn/wp-content/uploads/2023/09/Harvard-University-1-1.webp"
    },
    {
      name: "University of California, Berkeley",
      image: "https://images.shiksha.com/mediadata/images/1495170014php5jrKAW.jpeg"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Universities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {universities.map((uni) => (
          <Link
            key={uni.name}
            to="#"
            className="relative group overflow-hidden rounded-xl block"
          >
            <img
              src={uni.image}
              alt={uni.name}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">{uni.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}