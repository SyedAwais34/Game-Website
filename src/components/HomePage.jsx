import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const downloadGames = [
    "Download Flying Chess",
    "Download Dragon Tiger Cave",
    "Download Patti No1",
    "Download 3 Patti Gold",
    "Download Teen Patti Blue",
    "Download Flying Chess Pro",
    "Download 3 Patti Loot",
    "Download 3 Patti Ok",
    "Download 3 Patti Lucky",
  ];

  const filteredGames = downloadGames.filter((text) =>
    text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#fef8e8] font-sans text-[#1a1a1a] overflow-x-hidden">
      {/* Header */}
      <Navigation onSearch={setSearchTerm} />

      {/* Downloads section */}
      <section className="text-center py-6 px-4">
        <img
          src="/images/1.webp"
          alt="Trusted Games"
          className="mx-auto mb-4"
        />

        <div className="flex flex-col items-center gap-4">
          {filteredGames.map((text, i) => (
            <React.Fragment key={i}>
              <button
                className={`flex items-center justify-center min-w-[260px] max-w-[320px] px-6 py-3 rounded-[12px] text-[18px] text-white text-center font-medium transition duration-300
            ${
              [
                "bg-gradient-to-r from-pink-500 to-red-500",
                "bg-gradient-to-r from-green-400 to-blue-500",
                "bg-gradient-to-r from-yellow-400 to-orange-500",
                "bg-gradient-to-r from-indigo-500 to-purple-600",
                "bg-gradient-to-r from-teal-400 to-cyan-600",
                "bg-gradient-to-r from-rose-400 to-pink-600",
                "bg-gradient-to-r from-lime-400 to-emerald-500",
                "bg-gradient-to-r from-blue-500 to-indigo-700",
                "bg-gradient-to-r from-amber-500 to-yellow-600",
              ][i % 9]
            } hover:opacity-90`}
              >
                <MdOutlineFileDownload size={30} className="mr-2" />
                {text}
              </button>

              {i === 2 && (
                <img
                  src="/images/2.webp"
                  alt="Special Banner"
                  className="mx-auto my-4 w-[650px]"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <img src="/images/3.webp" alt="Refer & Earn" className="mx-auto mt-6" />
      </section>

      {/* Welcome section */}
      <section className="bg-white py-18 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <div>
            <p className="text-sm font-bold text-black mb-2">
              Your Gaming Blog for Skill, Fun & Strategy
            </p>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Welcome to 111 <br /> Patti Guide
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Looking for a gaming blog that keeps things smart, fun, and
              totally entertaining? 111PattiGuide.xyz is your go-to source for
              informative game articles, how-to guides, strategy tips, and game
              reviews — all focused on skill-based and casual games that you can
              enjoy with friends or solo. Whether you enjoy board games, card
              games, or the latest skill-based app titles, our blog is here to
              guide you, educate you, and keep you in the loop with trending
              game content
            </p>

            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              What You’ll Find on <br /> 111PattiGuide.xyz
            </h3>

            <ul className="space-y-1 text-gray-700 list-disc list-inside">
              <li>
                <strong>Informative Game Guides:</strong> From classic board
                games to modern app-based games, we break down the rules and
                teach you how to play — no confusion, just fun.
              </li>
              <li>
                <strong>Gaming Tips & Smart Play Strategies:</strong> Learn how
                to play better with tips that improve your focus, memory, and
                gameplay — perfect for casual players and curious minds.
              </li>
              <li>
                <strong>Reviews & Game Highlights:</strong> Find out which games
                are worth playing. We cover mobile, card, and board games that
                are entertaining, safe, and skill-based.
              </li>
              <li>
                <strong>News & Updates:</strong> Stay current with the latest
                game updates, new features, and trending titles in the gaming
                world.
              </li>
              <li>
                <strong>Trusted Download Links:</strong> We only guide you
                toward safe and verified download sources — no shady apps, just
                clean fun.
              </li>
            </ul>
          </div>

          {/* Right Image with Full Height */}
          <div className="self-stretch">
            <img
              src="/images/4.png"
              alt="Card deck"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-10 px-4 text-center min-h-[100vh] flex flex-col items-center justify-center">
        <h3 className="text-5xl font-bold mb-10 text-gray-900">
          Popular Categories
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-40 gap-y-16 max-w-[1440px] mx-auto">
          {[
            {
              title: "Game Guides",
              img: "/images/1c.jpg",
              path: "/game-guides",
            },
            {
              title: "Game Reviews",
              img: "/images/2c.jpeg",
              path: "/reviews",
            },
            {
              title: "Tips & Tricks",
              img: "/images/3c.jpeg",
              path: "/tips",
            },
            {
              title: "Trending Games",
              img: "/images/4c.jpeg",
              path: "/trending-games",
            },
          ].map((cat, i) => (
            <Link to={cat.path} key={i}>
              <div className="relative group rounded-xl overflow-hidden w-[340px] h-[420px] cursor-pointer shadow-md hover:shadow-xl transition duration-300">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-end justify-center">
                  <h4 className="text-white text-3xl font-semibold mb-6 text-center">
                    {cat.title}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-12">
          <button className="bg-[#d09a40] text-[18px] text-white px-6 py-2 rounded hover:bg-yellow-500 transition">
            Explore Them All
          </button>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="bg-[#fef8e8] py-12 px-4">
        <h3 className="text-5xl font-bold text-center mb-6">Latest Post</h3>
        <p className="text-center mb-8">
          Check out our newest posts and see what’s trending in the gaming
          world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Top Online Mobile Games in Pakistan (2025 Edition)",
              description:
                "In recent years, Pakistan’s mobile gaming scene has witnessed explosive growth. With better internet access, affordable smartphones, and a young population eager for digital entertainment,",
              img: "/images/post-img-1.jpg",
              link: "/online-games",
            },
            {
              title:
                "How to Play 111 Patti for Beginners – Complete Rules Explained",
              description:
                "111 Patti (also known as Teen Patti) is a popular card game that’s easy to learn and fun to play with friends and family. Rooted",
              img: "/images/post-img-2.jpg",
              link: "/patti-guide",
            },
            {
              title: "How Strategy Games Teach Everyday Skills",
              description:
                "When you think of video games or board games, fun and entertainment might be the first things that come to mind. But did you know",
              img: "/images/post-img-3.jpg",
              link: "/Game-teach",
            },
            {
              title:
                "Flying Chess vs. Ludo vs. Snakes & Ladders – Which is Best for Game Night?",
              description:
                "When it comes to family game nights or friendly get-togethers, nothing beats the charm of classic board games. But with so many options, one big",
              img: "/images/post-img-4.jpg",
              link: "/board-game",
            },
            {
              title: "How AI Is Changing the Way We Play Games in 2025",
              description:
                "Artificial Intelligence (AI) is no longer just a buzzword—it’s actively transforming the gaming industry in 2025. From smarter NPCs and procedurally generated worlds to dynamic",
              img: "/images/post-img-5.jpg",
              link: "/game-tips",
            },
          ].map((post, i) => (
            <div
              key={i}
              className="bg-[#fef8e8] rounded shadow-md overflow-hidden"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-60 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x160?text=Image+Not+Found";
                }}
              />
              <div className="p-4">
                <Link to={post.link}>
                  <h4 className="font-bold text-[18px] mb-2 hover:text-yellow-600 transition">
                    {post.title}
                  </h4>
                </Link>
                <p className="text-[14px] text-gray-500 mb-2">
                  {post.description}
                </p>
                <Link
                  to={post.link}
                  className="text-black font-bold text-sm hover:text-yellow-600 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
