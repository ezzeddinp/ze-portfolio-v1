
import Link from "next/link"
import { MdVerified as VerifiedIcon } from 'react-icons/md'
import Tooltip from "@/common/components/elements/Tooltip"

const Logo = () => {
  // const [isHover, setIsHover] = useState(false)
  // const filterdMenu = MENU_ITEMS?.filter(item => item?.isShow)

  return (
    <div
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      // className="fixed flex flex-row justify-center text-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 hover:w-64 hover:items-stretch hover:p-4 hover:transition-all hover:duration-500 dark:shadow-neutral-800 lg:flex"
      className="flex flex-row items-center justify-center"
    >
      {/* <Link href="/" className="flex items-center text-dark dark:text-light pl-[18px]"> */}
      {/* <div className=" w-10 md:w-10 rounded-full overflow-hidden  mr-2 md:mr-4"> */}
        {/* {/* <div className={`flex h-64 ${isHover ? 'items-start' : 'items-center'}`}>
            {isHover ? (
              <Profile />
            ) : ( */}
        {/* <div className="flex flex-row items-center gap-8"> */}
          {/* <div className="z-10 rounded-full border-2 border-white shadow-md dark:border-neutral-800"> */}
            {/* <Image src={PROFILE_URL} alt="profile" width={47} height={47} className="rounded-full" /> */}
          {/* </div> */}
          {/* <ToggleThemeIcon /> */}
        {/* </div> */}
        {/* )}
          </div> */}
      {/* </div> */}
      <div className="flex items-center justify-center gap-2 p-4">
          <Link href="/" passHref>
            <h2 className="font-sora flex-grow whitespace-nowrap text-black dark:text-white text-lg font-medium lg:text-lg">zeddin</h2>
          </Link>
          <Tooltip title="Verified">
            <VerifiedIcon size={15} className="text-blue-400" />
          </Tooltip>
        </div>
      {/* </Link> */}
    </div>
  )
}

export default Logo