

const Footer = () => {

  
  return (
    <div className="overflow-x-hidden">
        <footer className="bg-[#fef8e8] text-center text-sm py-10 px-4 mt-16">
  {/* Navigation Links */}
  <nav className="flex flex-wrap justify-start items-center mx-auto border border-l-0 border-r-0  border-t-gray-200 border-b-gray-200 max-w-[1440px] gap-4 mb-6 text-gray-700 font-medium h-[130px]">
    <a href="#" className="hover:text-yellow-600 transition">Game Guides</a>
    <a href="#" className="hover:text-yellow-600 transition">Game Reviews</a>
    <a href="#" className="hover:text-yellow-600 transition">Tips & Tricks</a>
    <a href="#" className="hover:text-yellow-600 transition">About</a>
    <a href="#" className="hover:text-yellow-600 transition">Contact</a>
  </nav>

  {/* Email Subscription Form */}
    <h1 className="text-center font-bold text-2xl m-8">Sign up to receive email updates, fresh news and more!</h1>
  <form className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
    <input
      type="email"
      placeholder="Enter your email"
      className="px-5 py-3 text-base border rounded-md w-[300px] sm:w-[360px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
    <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-base px-6 py-3 rounded-md transition">
      Subscribe
    </button>
  </form>

  {/* Footer Text */}
  <p className="text-gray-500 text-md border border-t-gray-200 border-l-0 border-r-0 border-b-0 pt-5">
    Copyright © 2025 <span className="font-semibold">111 Patti Guide</span> | Powered by <span className="text-yellow-600 font-semibold">111PattiGuide</span>
  </p>
    </footer>
    </div>
  )
}

export default Footer   