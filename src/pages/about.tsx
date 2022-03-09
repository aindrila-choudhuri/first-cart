const navFlexClass = "flex flex-row items-center justify-center h-96 m-20"
const divWrapperClass = "basis-1/3"
const greyBoxStyle = "basis-1/3 bg-neutral-300 h-96"

const textBoldStyle = "text-3xl"
const textStyle = "text-m mt-5"
const buttonStyle =
  "bg-neutral-300 hover:bg-neutral-500 text-black py-2 px-4 rounded mt-5"

const About: React.FC = () => {
  return (
    <div className={navFlexClass}>
      <div className={divWrapperClass}>
        <p className={textBoldStyle}>
          Unlock the future of your business with subscription payments
        </p>
        <p className={textStyle}>
          Billycart is a global recurring payments platform that equips
          businesses and their customers with more control, flexibility and
          transperancy in their payments plan
        </p>
        <button type="button" className={buttonStyle}>
          Sign Up
        </button>
      </div>
      <div className={greyBoxStyle} />
    </div>
  )
}

export default About
