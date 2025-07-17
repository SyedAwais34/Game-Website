import Navigation from "./Navigation"
import Footer from "./Footer"

const Contact = () => {
  return (
    <div className="bg-[#fef8e8] overflow-x-hidden">
        <Navigation />
    <section className=" py-16 px-6 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full mx-auto bg-[#fef8e8] p-8">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-6">Contact</h2>
        <p className="font-semibold text-3xl mb-8">Message us</p>

        <form className="space-y-6">
          {/* Name Fields */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name *</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email *</label>
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message *</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="px-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
        <Footer />
    </div>
  )
}

export default Contact