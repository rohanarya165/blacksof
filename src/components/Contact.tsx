
const ContactForm = () => {
  return (
    <div className="bg-blue-500 ">
      <div className="max-w-[1380px] mx-auto px-4 lg:w-10/12 relative">
        <div className="bg-blue-500 grid grid-cols-12 px-4 md:px-0 rounded-lg py-8 md:py-10 lg:py-12 xl:py-16">
          {/* Left Side - Contact Details */}
          <div className="col-span-12 md:col-span-5 text-white mb-6 md:mb-0">
            <h2 className="text-2xl lg:text-3xl font-semibold">Get in touch</h2>
            <div className="h-[2px] w-12 bg-white my-4"></div>
            <p className="text-lg">For general enquiries</p>
            <ul className="mt-6 space-y-4">
              <li>
                <strong className="text-lg">Address :</strong>
                <p className="text-sm md:text-base">
                  110, 16th Road, Chembur, Mumbai - 400071
                </p>
              </li>
              <li>
                <strong className="text-lg">Phone :</strong>
                <p className="text-sm md:text-base">
                  <a href="tel:+912225208822" className="hover:underline">
                    +91 22 25208822
                  </a>
                </p>
              </li>
              <li>
                <strong className="text-lg">Email :</strong>
                <p className="text-sm md:text-base">
                  <a
                    href="mailto:info@supremegroup.co.in"
                    className="hover:underline"
                  >
                    info@supremegroup.co.in
                  </a>
                </p>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-span-12 md:col-span-7">
            <form className="grid gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border-b-2 border-white bg-transparent text-white py-2 outline-none placeholder-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b-2 border-white bg-transparent text-white py-2 outline-none placeholder-white"
              />
              <input
                type="text"
                placeholder="Company"
                className="border-b-2 border-white bg-transparent text-white py-2 outline-none placeholder-white"
              />
              <textarea
                rows={3}
                placeholder="Message"
                className="border-b-2 border-white bg-transparent text-white py-2 outline-none placeholder-white"
              ></textarea>
              <button
                type="submit"
                className="border border-white text-white py-3 px-8 rounded-full transition-all hover:bg-white hover:text-black"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
