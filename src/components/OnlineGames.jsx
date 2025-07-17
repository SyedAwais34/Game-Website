import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const games = [
  {
    title: "PUBG Mobile",
    description:
      "Still leading the charts in Pakistan, PUBG Mobile (PlayerUnknown’s Battlegrounds) continues to be a fan favorite. This battle royale game offers intense multiplayer action, where players fight to be the last one standing.",
    features: [
      "Local servers for better performance",
      "Active eSports community",
      "Regular updates and events",
      "Available in Urdu language interface",
    ],
  },
  {
    title: "Free Fire",
    description:
      "Garena Free Fire is a strong competitor to PUBG, especially on low- and mid-range smartphones. With shorter matches and smooth gameplay, it’s a go-to for many Pakistani gamers.",
    features: [
      "Fast-paced 10-minute matches",
      "Low device requirements",
      "Local tournaments and social communities",
    ],
  },
  {
    title: "Ludo Star",
    description:
      "Based on the classic board game, Ludo Star has become a favorite in Pakistani households. It’s easy to learn and perfect for playing with friends or family.",
    features: [
      "Nostalgic gameplay",
      "Local cultural appeal",
      "Fun with friends and voice chat features",
    ],
  },
  {
    title: "Call of Duty: Mobile",
    description:
      "COD Mobile delivers a console-like shooter experience on mobile, offering a mix of multiplayer and battle royale modes.",
    features: [
      "Smooth graphics and realistic weapons",
      "Popular with competitive gamers",
      "Regular seasonal updates",
    ],
  },
  {
    title: "Candy Crush Saga",
    description:
      "For casual gamers, Candy Crush Saga remains one of the most downloaded games. Its simple mechanics and addictive levels make it a favorite across all age groups.",
    features: ["Offline gameplay mode", "No age limit", "Low storage usage"],
  },
  {
    title: "8 Ball Pool",
    description:
      "With millions of players globally, 8 Ball Pool has a solid player base in Pakistan. It offers smooth multiplayer matches and competitive rankings.",
    features: [
      "Skill-based gameplay",
      "Social features like friend challenges",
      "Available in offline and online modes",
    ],
  },
  {
    title: "Subway Surfers",
    description:
      "A favorite among kids and teens, Subway Surfers is an endless runner game that offers fast-paced action and colorful visuals.",
    features: [
      "Easy to pick up and play",
      "Offline access",
      "Regular updates with new cities",
    ],
  },
  {
    title: "Asphalt 9: Legends",
    description:
      "Asphalt 9 brings high-octane car racing to your mobile phone. It’s a go-to game for racing fans in Pakistan.",
    features: [
      "Stunning graphics",
      "Licensed cars from top brands",
      "Multiplayer tournaments",
    ],
  },
];

const bonusMentions = [
  "Among Us – Social deduction fun, still popular in casual groups.",
  "Clash of Clans – A long-standing favorite for strategy fans.",
  "My Talking Tom – Loved by younger audiences.",
];

export default function OnlineGames() {
  return (
    <div className="bg-[#fef8e8] overflow-x-hidden">
      <Navigation />
      <div className="py-16 px-6 bg-white text-gray-800 max-w-[1000px] mx-auto mt-16">
        <div className="max-w-3xl mx-auto"> 
        <h1 className="text-3xl mb-4">
          Top Online Mobile Games in Pakistan (2025 Edition)
        </h1>
        <img
          src="/images/post-img-1.jpg"
          alt="Top Mobile Games in Pakistan"
          className="mx-auto mb-10 w-full max-w-3xl"
        />
        <p className="mb-6">
          In recent years, Pakistan’s mobile gaming scene has witnessed
          explosive growth. With better internet access, affordable smartphones,
          and a young population eager for digital entertainment, online mobile
          games have become a popular pastime for millions. Whether you’re into
          action-packed battle royales, brain-teasing puzzles, or relaxing board
          games, there’s something for everyone. In this article, we explore the
          top online mobile games currently trending in Pakistan.
        </p>

        {games.map((game, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-4xl font-bold mb-6">
              {index + 1}. {game.title}
            </h2>
            <p className="mb-6">{game.description}</p>
            <ul className="list-disc pl-6">
              {game.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-6">Bonus Mentions:</h2>
          <ul className="list-disc pl-6">
            {bonusMentions.map((mention, i) => (
              <li key={i}>{mention}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-4xl font-bold mb-6">Final Thoughts</h2>
          <p>
            Pakistan’s mobile gaming audience is growing rapidly, and the range
            of top online games reflects the diversity of interests. From
            intense shooters to chill family-friendly games, mobile games are
            now part of daily life. Whether you’re a hardcore gamer or just
            looking to kill time, these trending mobile games offer quality
            entertainment with a tap of your screen.
          </p>
          <p className="mt-4">
            Let us know your favorite mobile game in the comments, and stay
            tuned to our blog for more gaming updates!
          </p>
        </div>
         {/* Prev/Next */}
          <div className="mt-12 flex justify-between items-center border-t pt-6">
            <Link
              to="/board-game"
              className="text-sm text-yellow-600 hover:text-yellow-700 transition"
            >
              ← Previous Post
            </Link>
            <Link
              to="/game-tips"
              className="text-sm text-yellow-600 hover:text-yellow-700 transition"
            >
              Next Post →
            </Link>
          </div>
        </div>
      </div>
      {/* Optional Related Section */}
      <div className="mt-20 max-w-5xl mx-auto p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-6">Related Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/patti-guide">
            <div className="overflow-hidden">
              <img
                src="/images/post-img-2.jpg"
                alt="Patti Guide"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium -text-gray-800">
                  How to Play 111 Patti for Beginners
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
