import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const GameGuide = () => {
  const cards = [
    {
      title: "How to Play 111 Patti for Beginners – Complete Rules Explained",
      description:
        "111 Patti (also known as Teen Patti) is a popular card game that’s easy to learn and fun to play with friends and family. Rooted in traditional Indian culture, 111 Patti has evolved into an engaging online and offline entertainment experience. Whether you’re playing casually at home or enjoying a digital version on your phone, […]",
      img: "/images/post-img-2.jpg",
      link: "/patti-guide",
    },
    {
      title:
        "Flying Chess vs. Ludo vs. Snakes & Ladders – Which is Best for Game Night?",
      description:
        "When it comes to family game nights or friendly get-togethers, nothing beats the charm of classic board games. But with so many options, one big question always pops up: which game should we play? Today, we’ll compare three of the most popular casual board games — Flying Chess, Ludo, and Snakes & Ladders — to",
      img: "/images/post-img-4.jpg",
      link: "/board-game",
    },
  ];

  return (
    <div className="bg-[#fef8e8] overflow-x-hidden">
      <Navigation />
      <section className="py-16 px-6 min-h-screen max-w-[950px] mx-auto">
        <h1 className="text-5xl font-medium text-gray-900 mb-12">
          Game Guides
        </h1>
        <div className="border-b border-b-gray-200 mb-12 max-w-[1000px] mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#fef8e8] rounded-xl overflow-hidden">
              <div className="w-full h-[500px] md:h-[600px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-2 mt-4 mb-6">
                <Link to={card.link}>
                  <h2 className="text-3xl font-medium text-gray-800 mb-4 cursor-pointer hover:text-yellow-600 transition">
                    {card.title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-lg mb-4">{card.description}</p>
                <Link
                  to={card.link}
                  className="text-black font-medium text-sm hover:text-yellow-600 transition"
                >
                  Read More →
                </Link>
                <div className="border-b border-b-gray-200 mt-8"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GameGuide;
