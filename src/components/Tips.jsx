import Navigation from './Navigation'
import Footer from './Footer'
import { Link } from "react-router-dom";

const Tips = () => {
     const card = {
    title: "How AI Is Changing the Way We Play Games in 2025",
    description:
      "Dragon Chess combines fast-paced gameplay with tactical depth. In this review, we break down its features, pros, and how it compares to traditional board games. Discover why it’s quickly becoming a favorite among casual and competitive players alike.",
    img: "/images/post-img-5.jpg", // Make sure this image exists in your public/images folder
    link: "/game-tips",
  };
  return (
    <div className='bg-[#fef8e8] overflow-x-hidden'>
        <Navigation />
         <section className="py-16 px-6  min-h-screen max-w-[950px] mx-auto">
      <h1 className="text-5xl font-medium mb-12 text-gray-900">
        Tips, Tricks
      </h1>

      <div className="max-w-5xl mx-auto">
        <div className=" overflow-hidden">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x500?text=Image+Not+Found";
            }}
          />
          <div className="p-8">
            <Link to={card.link}>
                  <h2 className="text-3xl font-medium text-gray-800 mb-4 cursor-pointer hover:text-yellow-600 transition">
                    {card.title}
                  </h2>
                </Link>
            <p className="mb-4 text-lg text-gray-700 leading-relaxed">
              {card.description}
            </p>
            <Link
                  to={card.link}
                  className="text-black font-medium text-sm hover:text-yellow-600 transition"
                >
                  Read More →
                </Link>
          </div>
        </div>
      </div>
    </section>
        <Footer />
    </div>
  )
}

export default Tips