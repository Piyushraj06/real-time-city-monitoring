import { useNavigate } from "react-router-dom";

const SeherSuchna = () => {
  const navigate = useNavigate();

  const topics = [
    { title: "Noise Pollution", image: "/assets/noisepollution.png", link: "/noise" },
    { title: "Water Pollution", image: "/assets/waterPollution.jpg", link: "/water" },
    { title: "Air Pollution", image: "/assets/airpollution.jpg", link: "/" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6a11cb] via-[#b91372] to-[#ff758c] py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl text-white font-bold mb-10">Seher Suchna Seva</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {topics.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition"
            onClick={() => navigate(item.link)}
          >
            <img src={item.image} alt={item.title} className="h-60 w-full object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeherSuchna;
