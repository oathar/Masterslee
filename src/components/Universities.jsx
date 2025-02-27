import { useNavigate } from "react-router-dom";

export default function Universities() {
  const navigate = useNavigate();

  const universities = [
    {
      name: "Stanford University",
      image: "https://imgs.search.brave.com/-3al_hzl4ooqZLHBSS3GI6B5AVGd3Pu0bhx2jj-5v-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYXJk/aW5hbGF0d29yay5z/dGFuZm9yZC5lZHUv/c2l0ZXMvY2FyZGlu/YWxhdHdvcmsvZmls/ZXMvc3R5bGVzL2N0/YV8xeF81OTZ4Mzk3/L3B1YmxpYy9tZWRp/YS9pbWFnZS9nYWxs/ZXJ5L3N0YW5mb3Jk/LXN1bnNldF8wLmpw/Zz9oPWM3NDc1MGY2/Jml0b2s9Z3Riazdl/X2s",
      path: "/universities/stanford",
    },
    {
      name: "University of California, San Francisco",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCOLkq1Vt9UeUNha2T5Oe7Fyzdf3T5tOwxQ&s",
      path: "/universities/ucsf",
    },
    {
        name: "Harvard University",
        image: "https://cdn.britannica.com/69/141169-050-CD5892EB/Baker-Library-Harvard-Business-School-Boston-University.jpg",
      },
      {
        name: "University of California, Berkeley",
        image: "https://images.shiksha.com/mediadata/images/1495170014php5jrKAW.jpeg",
      },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Universities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {universities.map((uni, index) => (
          <div
            key={index}
            className="relative p-4 border rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="h-48 w-full bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${uni.image})` }}
            ></div>

            {/* University Name */}
            <h2 className="text-xl font-semibold mt-4 text-center">{uni.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}