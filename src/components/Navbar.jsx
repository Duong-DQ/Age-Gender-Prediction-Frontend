import { useState } from 'react'
import logo from '../assets/logo.png'
import { GrLanguage } from "react-icons/gr"
import { FaXmark, FaBars, FaGithub } from "react-icons/fa6"
import { Disclosure } from '@headlessui/react'

const Navbar = () => {
  const navItems = [
    { link: "Predict", path: "predict" },
    { link: "How To Use", path: "use" },
    { link: "Tools & API", path: "tools-api" },
    { link: "Our Work", path: "our-work" },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="!bg-white !bg-opacity-90 !backdrop-blur-lg !shadow-sm fixed w-full z-50 top-0 d-none-mobile-app">
      <div className="mx-auto w-full px-8">
        <div className="flex justify-between">
          {/* logo */}
          <a href="/" className="flex-none py-4 flex items-center xl:!mr-8 !mr-4">
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="ml-3 text-4xl text-graydark font-logo tracking-wide font-medium whitespace-nowrap">
              AgeGender<span className="text-graylight">.ai</span>
            </span>
          </a>

          {/* navbar list */}
          <ul className="hidden xl:flex flex-grow items-center gap-4 xl:gap-8 my-0">
            {
              navItems.map(({ link, path }) =>
                <a key={link} href={path} className="group flex items-center cursor-pointer transition ease-in-out no-underline hover:text-brandtypo active:text-brandtypo text-typo py-6 focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded">{link}</a>
              )
            }
          </ul>

          {/* language and github btn */}
          <div className="hidden flex-none xl:flex items-center gap-4 xl:gap-8 my-0">
            <a href="/" className="group flex items-center cursor-pointer transition ease-in-out no-underline hover:text-brandtypo active:text-brandtypo text-typo py-6 focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded">
              <GrLanguage className="mr-2" /> <span>Language</span></a>
            <a role="button" href="/git" className="rounded-full font-semibold transition ease-in-out text-center no-underline hover:no-underline inline-flex items-center justify-center text-base px-6 h-11 active:scale-[0.98] text-typo !bg-secondary hover:!bg-secondary-hover active:!bg-secondary-hover focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover">
              <FaGithub className="mr-2" />Github
            </a>
          </div>

          {/* navbar btn for mobile display */}
          <div className="flex flex-none xl:hidden items-center">
            <Disclosure as="div">
              {({ open }) => (<>
                <Disclosure.Button className="!-mr-4 h-full focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded">
                  <span className="!p-4 flex flex-col justify-center align-middle group">
                    <span className={`bg-typo group-hover:bg-brandtypo group-active:bg-brandtypo w-7 rounded h-[3px] !mb-1 group-active:rotate-45 group-active:translate-y-[5.5px] transition ease-in-out ${open ? "rotate-45 translate-y-[5.5px]" : ""}`}></span>
                    <span className={`bg-typo group-hover:bg-brandtypo group-active:bg-brandtypo w-7 rounded h-[3px] !mt-1 group-active:-rotate-45 group-active:-translate-y-[5.5px] transition ease-in-out ${open ? "-rotate-45 -translate-y-[5.5px]" : ""}`}></span>
                  </span>
                </Disclosure.Button>

                <Disclosure.Panel className="absolute w-full left-0 bg-white z-20">
                  <div className="!pt-0 px-8 overflow-y-scroll h-screen pb-[170px]">
                    <ul className="flex flex-col divide-y-2 divide-secondary">
                      {
                        navItems.map(({ link, path }) =>
                          <a key={link} href={path} className="group flex items-center cursor-pointer transition ease-in-out no-underline hover:text-brandtypo active:text-brandtypo text-typo py-8 font-semibold focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded">{link}</a>
                        )
                      }
                    </ul>
                    <ul className="flex flex-col divide-y-2 divide-secondary">
                      <li className="w-full">
                        <a role="button" href="/" class="rounded-full font-semibold transition ease-in-out text-center no-underline hover:no-underline inline-flex items-center justify-center text-base px-6 h-11 active:scale-[0.98] text-typo !bg-secondary hover:!bg-secondary-hover active:!bg-secondary-hover w-full focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover">Sign up</a>
                      </li>
                    </ul>
                  </div>
                </Disclosure.Panel>
              </>
              )}
            </Disclosure>


          </div>

        </div>


        {/* <div className="flex flex-none xl:hidden items-center">
          <button >
            {
              isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary" />) : (<FaBars />)
            }
          </button>
        </div> */}


      </div>
    </nav >
  )
}

export default Navbar