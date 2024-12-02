import magiccraftLogo from '@/assets/images/magiccraft-logo.webp'
import {
  FaXTwitter,
  FaDiscord,
  FaTelegram,
  FaReddit,
  FaInstagram,
  FaMedium,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6'

const socialLinks = [
  {
    icon: <FaXTwitter size={20} />,
    link: 'https://twitter.com/MagicCraftGame',
  },
  {
    icon: <FaDiscord size={20} />,
    link: 'https://discord.gg/c4bgnsqzQR',
  },
  {
    icon: <FaTelegram size={20} />,
    link: 'https://t.me/magiccraftgamechat',
  },
  {
    icon: <FaReddit size={20} />,
    link: 'https://www.reddit.com/r/magiccraftgame/',
  },
  {
    icon: <FaInstagram size={20} />,
    link: 'https://www.instagram.com/magiccraftgame/',
  },
  {
    icon: <FaMedium size={20} />,
    link: 'https://medium.com/@MagicCraftGame',
  },
  {
    icon: <FaLinkedin size={20} />,
    link: 'https://www.linkedin.com/company/magiccraft',
  },
  {
    icon: <FaTiktok size={20} />,
    link: 'https://www.tiktok.com/@magiccraftgame',
  },
  {
    icon: <FaYoutube size={20} />,
    link: 'https://www.youtube.com/@MagicCraftGame',
  },
]

const gameLinks = [
  {
    title: 'Story',
    link: 'https://magiccraft.io/story',
  },
  {
    title: 'Gallery',
    link: 'https://magiccraft.io/#gallery',
  },
  {
    title: 'Studios',
    link: 'https://magiccraft.io/studios',
  },
  {
    title: 'Team',
    link: 'https://magiccraft.io/#team',
  },
]

const tokenLinks = [
  {
    title: 'Staking',
    link: 'https://app.magiccraft.io/pledging',
  },
  {
    title: 'Marketplace',
    link: 'https://app.magiccraft.io/marketplace/explorer',
  },
  {
    title: 'MCRT Token',
    link: 'https://magiccraft.io/mcrt-token',
  },
  {
    title: 'Tokenomics',
    link: 'https://magiccraft.io/mcrt-token#tokenomics',
  },
  {
    title: 'Roadmap',
    link: 'https://magiccraft.io/numbers#roadmap',
  },
  {
    title: 'Whitepaper',
    link: 'https://docs.magiccraft.io/',
  },
]

const moreLinks = [
  {
    title: 'Careers',
    link: 'https://magiccraft.io/careers',
  },
  {
    title: 'FAQ',
    link: 'https://magiccraft.io/faq',
  },
  {
    title: 'Become a partner',
    link: 'https://magiccraft.io/partnership',
  },
  {
    title: 'Contact us',
    link: 'https://magiccraft.io/contact-us',
  },
  {
    title: 'Verify',
    link: 'https://app.magiccraft.io/verify',
  },
  {
    title: '$MCRT',
    link: 'https://magiccraft.io/mcrt-token',
  },
]


const Footer = () => {
  return (
    <footer className="text-primary relative z-10  py-10 lg:ml-[12em] ">
      <div className="mx-auto flex w-11/12 max-w-[1650px] flex-col-reverse justify-between gap-10 lg:flex-row">
        {/* <button className='hidden lg:block'>
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173152/Go_to_top_of_page_fgfqwp.webp"
            className=" absolute left-[4em]   cursor-pointer"
          />
        </button>
        <button className=' hidden lg:block'>
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173193/Chat_bot_button_a3hguu.webp"
            className="absolute right-[7em] -mt-10    cursor-pointer"
          />
        </button> */}
        <div className="lg:ml-10 flex w-full flex-col lg:w-1/2 ">
          <div>
            <img
              src={magiccraftLogo}
              alt="Magiccraft Logo"
              className="max-w-[200px]"
            />
          </div>
          <div className="space-y-[18px] pt-5">
            <p className="text-md text-white/60">
              &copy; 2021-2024 MagicCraft Ltd. All rights reserved
            </p>
            <ul className="flex flex-row space-x-6 text-md text-[#98FFF9]">
              <a
                href="https://magiccraft.io/privacy-policy"
                rel="noreferrer noopener"
              >
                <li>Privacy Policy</li>
              </a>
              <a
                href={'https://magiccraft.io/terms-of-use'}
                rel="noreferrer noopener"
              >
                <li>Terms and Conditions</li>
              </a>

              <a
                href="https://magiccraft.io/disclaimer"
                rel="noreferrer noopener"
              >
                <li>Disclaimer</li>
              </a>
            </ul>

            <p className="text-md text-white/60">
              MagicCraft Services and MCRT Token are not available in the United
              States or other prohibited jurisdictions. Services for this
              product are facilitated though MagicCraft Ltd.
            </p>
          </div>
          <div className="flex flex-wrap  gap-6 pt-9 text-white/40">
            {socialLinks.map((item, i) => {
              return (
                <a key={i} rel="noreferrer noopener" href={item.link}>
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-3  lg:w-1/2 ">
          <div className="w-full space-y-7 ">
            <h5 className="text-2xl text-white/60">Game</h5>
            <ul className="space-y-[14px] text-md text-[#98FFF9]">
              {gameLinks.map((item, i) => {
                return (
                  <li key={i}>
                    <a href={item.link} rel="noreferrer noopener">
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="w-full space-y-7 block lg:hidden ">
            <h5 className="text-2xl text-white/60">Token</h5>
            <ul className="space-y-[14px] text-md text-[#98FFF9]">
              {tokenLinks.map((item, i) => {
                return (
                  <li key={i}>
                    <a href={item.link} rel="noreferrer noopener">
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>{' '}
          <div className="w-full space-y-7 ">
            <h5 className="text-2xl text-white/60">More</h5>
            <ul className="space-y-[14px] text-md text-[#98FFF9]">
              {moreLinks.map((item, i) => {
                return (
                  <li key={i}>
                    <a href={item.link} rel="noreferrer noopener">
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto my-4 h-px w-11/12  bg-gradient-to-r from-[#556DE033] via-[#556DE0] to-[#556DE033]"></div>
      <div className="mx-auto lg:w-[43.5em] max-w-4xl  text-center">
        <p className="text-sm text-[#8896AB]">
          $MCRT is only marketed and offered for sale to experienced investors
          who can independently understand the risks associated with a
          cryptocurrency project. If you are new to the cryptocurrency space,
          please make sure you thoroughly familiarise yourself with the risks
          associated with $MCRT as per our{' '}
          <a
            className="text-primary text-[#98FFF9] underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.magiccraft.io/usdmcrt-token/tokenomics"
          >
            Whitepaper
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
