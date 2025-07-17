import Footer from "./Footer";
import Navigation from "./Navigation";

const Reviews = () => {
  return (
    <div className="bg-[#fef8e8] overflow-x-hidden">
      <Navigation />
      <div className="h-[400px] w-[800px] bg-white mx-auto m-8">
        <div className="p-10">
          <h1 className="text-4xl font-medium mb-6">Game Reviews</h1>
          <p className="text-gray-600 text-lg">
            It seems we can’t find what you’re looking for. Perhaps searching
            can help.
          </p>
          <div className="flex items-center gap-3 px-4 py-6">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-200 px-4 py-2 "
          />
          <button className="bg-[#d09a40] px-4 py-2 rounded text-white font-light">
            SEARCH
          </button>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
