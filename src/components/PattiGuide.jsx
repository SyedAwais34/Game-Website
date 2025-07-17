import Footer from "../components/Footer";
import Navigation from "./Navigation";
import { useParams, Link } from "react-router-dom";

const posts = [
  {
    title: "How to Play 111 Patti for Beginners – Complete Rules Explained",
    link: "/patti-guide",
    category: "Patti",
    img: "/images/post-img-2.jpg",
  },
  {
    title: "Flying Chess vs. Ludo vs. Snakes & Ladders – Which is Best for Game Night?",
    link: "/online-games",
    category: "Board",
    img: "/images/post-img-1.jpg",
  },
  {
    title: "Another Guide Article About Patti Strategy",
    link: "/game-tips",
    category: "Patti",
    img: "/images/post-img-3.jpg",
  },
];

const PattiGuide = () => {
  const currentLink = "/patti-guide";
  const currentIndex = posts.findIndex((post) => post.link === currentLink);
  const currentPost = posts[currentIndex];

  const related = posts.filter(
    (p) => p.category === currentPost.category && p.link !== currentPost.link
  );

  const prevPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  return (
    <div className="bg-[#fef8e8] overflow-x-hidden">
      <Navigation />
      <section className="py-16 px-6 bg-white text-gray-800 max-w-[1000px] mx-auto mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-medium mb-8">
            {currentPost.title}
          </h1>

          <img
          src="/images/post-img-2.jpg"
          alt="Top Mobile Games in Pakistan"
          className="mx-auto mb-10 w-full max-w-3xl"
        />

          <p className="text-lg mb-6">
            111 Patti (also known as Teen Patti) is a popular card game that’s easy to learn and fun to play with friends and family. Rooted in traditional Indian culture, 111 Patti has evolved into an engaging online and offline entertainment experience. Whether you’re playing casually at home or enjoying a digital version on your phone, this game is a great way to sharpen your decision-making and strategic thinking skills. <br /> <br />

            In this guide, we’ll explain the complete rules, card rankings, and game flow of 111 Patti—perfect for beginners.
          </p>

          <h2 className="text-5xl font-bold mt-10 mb-4">What Is 111 Patti?</h2>
          <p className="mb-6">
            111 Patti is a three-card game inspired by Poker...
          </p>

          <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
            <li>It’s a game of skill and strategy.</li>
            <li>It can be played offline with friends or online in apps.</li>
            <li>It’s commonly played in a circle with 3 to 6 players...</li>
          </ul>

          <h2 className="text-5xl font-bold mt-10 mb-4">What You Need to Start</h2>
          <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
            <li>A standard 52-card deck (excluding jokers)</li>
            <li>3 to 6 players (at least 2 to start)</li>
            <li>Poker points (for scoring only)</li>
          </ul>

          <h2 className="text-5xl font-bold mt-10 mb-4">Game Flow: Step-by-Step</h2>
          <p className="mb-4">Let’s walk through the basic steps of playing 111 Patti:</p>

          <h3 className="text-3xl font-semibold mb-2">1. Ante (Boot Amount)</h3>
          <p className="mb-4">All players place an initial minimum stake...</p>
          <p className="italic text-sm text-gray-600 mb-6">💡 In apps, this is done automatically.</p>

          <h3 className="text-3xl font-semibold mb-2">2. Dealing Cards</h3>
          <p className="mb-4">Each player is dealt 3 face-down cards...</p>
          <p className="mb-6">
            <strong>Seen Player:</strong> Has viewed their 3 cards <br />
            <strong>Blind Player:</strong> Plays without looking at cards
          </p>

          <h3 className="text-3xl font-semibold mb-2">3. Rounds Begin</h3>
          <p className="mb-2">Players take turns clockwise. On your turn, you can:</p>
          <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-700">
            <li><strong>Chaal:</strong> Place chips to stay in the game</li>
            <li><strong>Fold/Pack:</strong> Quit the round if your cards are weak</li>
          </ul>
          <p className="mb-6">
            Blind Player: Can chaal 1x or 2x the current point <br />
            Seen Player: Can chaal 2x or 4x the current blind point
          </p>

          <h3 className="text-3xl font-semibold mb-2">4. Showdown</h3>
          <p className="mb-6">When only two players remain, one can request a Show...</p>

          <h2 className="text-5xl font-bold mt-10 mb-4">111 Patti Hand Rankings (High to Low)</h2>
          <table className="w-full mb-10 table-auto border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left text-sm">
                <th className="p-3 border-b">Rank</th>
                <th className="p-3 border-b">Hand Type</th>
                <th className="p-3 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr><td className="p-3 border-b">1️⃣</td><td className="p-3 border-b">Trail/Trio</td><td className="p-3 border-b">Three cards of the same rank</td></tr>
              <tr><td className="p-3 border-b">2️⃣</td><td className="p-3 border-b">Pure Sequence</td><td className="p-3 border-b">Three consecutive cards of same suit</td></tr>
              <tr><td className="p-3 border-b">3️⃣</td><td className="p-3 border-b">Sequence</td><td className="p-3 border-b">Three consecutive cards, any suits</td></tr>
              <tr><td className="p-3 border-b">4️⃣</td><td className="p-3 border-b">Color</td><td className="p-3 border-b">Three cards of same suit</td></tr>
              <tr><td className="p-3 border-b">5️⃣</td><td className="p-3 border-b">Pair</td><td className="p-3 border-b">Two cards of same rank</td></tr>
              <tr><td className="p-3 border-b">6️⃣</td><td className="p-3 border-b">High Card</td><td className="p-3 border-b">No pair or sequence; highest card wins</td></tr>
            </tbody>
          </table>

          <h2 className="text-4xl font-bold mt-10 mb-4">Pro Tips for Beginners</h2>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Start with Blind</li>
            <li>Observe Players</li>
            <li>Don’t Rush to Fold</li>
            <li>Practice Offline</li>
            <li>Play Responsibly</li>
          </ul>

          <h2 className="text-4xl font-bold mt-10 mb-4">Is 111 Patti Safe to Play?</h2>
          <p className="mb-6">Yes! When played responsibly, it helps develop skills like:</p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Probability and strategy</li>
            <li>Memory and concentration</li>
            <li>Social interaction and bonding</li>
          </ul>

          <h2 className="text-4xl font-bold mt-10 mb-4">Want to Try 111 Patti Online?</h2>
          <p className="mb-6">There are several apps where you can play 111 Patti for free...</p>

          <h2 className="text-4xl font-bold mt-10 mb-4">Final Thoughts</h2>
          <p className="mb-12">111 Patti is more than just a game—it’s a great way to bond...</p>

          {/* Previous/Next Buttons */}
          <div className="mt-12 flex justify-between items-center border-t pt-6">
            {prevPost ? (
              <Link
                to={prevPost.link}
                className="text-sm text-yellow-600 hover:text-yellow-700 transition"
              >
                ← Previous Post
              </Link>
            ) : <span />}

            {nextPost ? (
              <Link
                to={nextPost.link}
                className="text-sm text-yellow-600 hover:text-yellow-700 transition"
              >
                Next Post →
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <div className="mt-20 max-w-5xl mx-auto p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-6">Related Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/online-games">
            <div className="overflow-hidden">
              <img
                src="/images/post-img-1.jpg"
                alt="Patti Guide"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium -text-gray-800">
                  Top Online Mobile Games in Pakistan (2025 Edition)
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PattiGuide;
