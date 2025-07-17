import Navigation from "./Navigation";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <section className="bg-[#fef8e8] py-22 px-6 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold  mb-6">
            About Us – 111 Patti Guide
          </h1>

          <p className="text-lg mb-6">
            Welcome to{" "}
            <span className="font-semibold text-yellow-600">
              111PattiGuide.xyz
            </span>{" "}
            — your go-to gaming blog for fun, strategy, and skill-based play.
          </p>

          <p className="text-base mb-4">
            We created this blog with one simple goal: to make gaming more
            enjoyable, informative, and accessible for everyone. Whether you’re
            just getting started or looking to sharpen your skills, our guides,
            tips, and reviews are designed to help you play smarter and have
            more fun.
          </p>

          <p className="text-base mb-4">
            We cover a wide range of games, including board games, casual mobile
            games, card games for entertainment, and other non-gambling digital
            games. You’ll find everything from step-by-step tutorials to
            strategy insights and gameplay updates — all written to keep things
            exciting, safe, and educational.
          </p>

          <h2 className="text-5xl font-bold mt-8 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Step-by-step game guides for beginners and casual players</li>
            <li>Smart tips and strategies to boost your gameplay</li>
            <li>Honest reviews of trending skill-based games</li>
            <li>Safe download suggestions for popular apps</li>
            <li>Gaming news and updates you can trust</li>
          </ul>

          <h2 className="text-5xl font-bold mt-8 mb-4">
            Our Commitment
          </h2>
          <p className="text-base mb-4">
            We do not promote real-money gaming, gambling, or betting of any
            kind. All the games and content shared on our site are meant for
            entertainment and educational purposes only. Our blog is built to
            comply with Google Ads policies, ensuring a safe and responsible
            platform for all users.
          </p>

          <h2 className="text-5xl font-bold mt-8 mb-4">
            Join the Fun!
          </h2>
          <p className="text-base mb-4">
            Gaming isn’t just about winning — it’s about learning, improving,
            and enjoying the process. We’re here to build a community of gamers
            who love skill-based play, friendly competition, and lifelong
            learning through games.
          </p>

          <p className="text-base mb-4">
            Feel free to explore our latest posts, subscribe for weekly updates,
            or reach out if you have questions or suggestions.
          </p>

          <p className="text-base mt-6 font-semibold ">
            Thank you for visiting{" "}
            <span className="text-yellow-600">111PattiGuide.xyz</span> — where
            gaming meets smart fun.
            <br />
            <span className="text-xl mt-2 block">Let the games begin!</span>
          </p>
        </div>
      <Footer />
      </section>

    </div>
  );
};

export default About;
