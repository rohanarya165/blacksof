
const Footer = () => {
  return (
    <footer
      className="text-black bg-no-repeat bg-cover bg-right-bottom blade-top-padding blade-bottom-padding border-t border-opacity-10 border-gray"
      style={{
        backgroundImage:
          "url('https://supreme-group.vercel.app/static/media/footer.dbe7db48d54962232591.jpg')",
      }}
    >
      <div className="w-container max-w-screen-lg mx-auto">
        <div>
          {/* Logo */}
          <div>
            <a href="/">
              <span>
              <img
              src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
              className="h-10 md:h-12 xlg:h-12 my-[50px]"
              alt="Supreme logo"
              title="logo"
            />
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="md:flex hidden md:flex-row flex-col items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8">
            {/* Applications */}
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
                Applications
              </li>
              {[
                ['Apparel', '/applications/apparel'],
                ['Automotive', '/applications/automotive'],
                ['Filtration', '/applications/filtration'],
                ['Customised Nonwoven', '/applications/customised-nonwoven'],
              ].map(([label, link]) => (
                <li key={link}>
                  <a
                    href={link}
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                  >
                    <span className="sg-translate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Company */}
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate uppercase font-bold">Company</li>
              {[
                ['Who We Are', '/who-we-are'],
                ['Global Compentency', '/global-competency'],
                ['Innovation', '/innovation'],
                ['ESG Impact', '/esg-impact'],
              ].map(([label, link]) => (
                <li key={link}>
                  <a
                    href={link}
                    className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                  >
                    <span className="sg-translate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* More */}
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
                MORE
              </li>
              {[
                ['Contact Us', '/contact-us'],
                ['Careers', '/careers'],
              ].map(([label, link]) => (
                <li key={link}>
                  <a
                    href={link}
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                  >
                    <span className="sg-translate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social */}
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
                Follow Us
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/supreme-group-company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm font-normal transition-all duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Links */}
          <div className="grid grid-cols-2 md:hidden items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 2xl:mt-10 mt-8">
            {/* Repeat similar structure for mobile */}
            {[
              {
                title: 'Applications',
                links: [
                  ['Apparel', '/applications/apparel'],
                  ['Automotive', '/applications/automotive'],
                  ['Filtration', '/applications/filtration'],
                  ['Customized Nonwoven', '/applications/customised-nonwoven'],
                ],
              },
              {
                title: 'Company',
                links: [
                  ['Who We Are', '/who-we-are'],
                  ['Global Compentency', '/global-competency'],
                  ['Innovation', '/innovation'],
                  ['ESG Impact', '/esg-impact'],
                ],
              },
              {
                title: 'MORE',
                links: [
                  ['Contact Us', '/contact-us'],
                  ['Careers', '/careers'],
                ],
              },
              {
                title: 'Follow Us',
                links: [
                  [
                    'LinkedIn',
                    'https://www.linkedin.com/company/supreme-group-company/',
                  ],
                ],
              },
            ].map((section, i) => (
              <ul key={i} className="grid sm:gap-5 gap-3 text-black list-none">
                <li className="font-semibold uppercase text-opacity-90">
                  {section.title}
                </li>
                {section.links.map(([label, link]) => (
                  <li key={link}>
                    <a
                      href={link}
                      className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                      target={link.includes('http') ? '_blank' : '_self'}
                      rel={link.includes('http') ? 'noopener noreferrer' : ''}
                    >
                      <span className="sg-translate">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex gap-3 py-[60px] md:flex-row flex-col justify-between items-center blade-top-padding-xl">
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </h6>
          <h6 className="md:hidden block text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
