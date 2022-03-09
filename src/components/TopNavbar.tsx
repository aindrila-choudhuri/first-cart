import Link from "next/link"

// const textClassBold = "font-bold"
// const textClassBoldMarginTop = "font-bold mt-12"
// const textClassLight = "font-light"
// const textClassLightPaddingBottom = "font-light pb-12"
// const textClassGrayXl = "text-gray-700 text-2xl"
// const textClassGray = "text-gray-500"
// const textClassUpperCase = "font-bold uppercase"
// const textClassSemiBold = "text-gray-700 text-2xl font-semibold"

const textClassXLPaddingXY =
  "text-2xl pr-12 border-r border-gray-10 flex justify-start" // divide-y divide-green-500
const leftAlignClass = "flex justify-start"
const rightAlignClass = "flex justify-end ml-auto mr-0"
const navFlexClass = "flex pt-1 w-full"
const textClassUpperCasePaddingX = "uppercase px-3"
// const textClassUpperCasePaddingXFlex = "uppercase px-3 flex justify-end"
const flexClass = "flex px-8 py-8 bg-white"

const Navbar = () => {
  return (
    <div className={flexClass}>
      <h1 className={textClassXLPaddingXY}>Firstcart</h1>
      <nav className={navFlexClass}>
        <div className={leftAlignClass}>
          <Link href="/">
            <a className={textClassUpperCasePaddingX}> Home </a>
          </Link>
          <Link href="/about">
            <a className={textClassUpperCasePaddingX}> About </a>
          </Link>
        </div>
        <div className={rightAlignClass}>
          <Link href="/login">
            <a className={textClassUpperCasePaddingX}> Login </a>
          </Link>
          <Link href="/login">
            <a className={textClassUpperCasePaddingX}> Get Started </a>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
