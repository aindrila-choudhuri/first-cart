const navFlexClass = "flex flex-row items-center justify-center h-96 m-20"
const divWrapperClass = "basis-1/3"
const greyBoxStyle = "basis-1/3 bg-neutral-300 h-96"

const textStyle = "text-3xl"
const buttonStyle =
  "bg-neutral-300 hover:bg-neutral-500 text-black py-2 px-4 rounded mt-5"

const Home: React.FC = () => {
  return (
    <div className={navFlexClass}>
      <div className={divWrapperClass}>
        <p className={textStyle}>Subscription payments that move with you</p>
        <button type="button" className={buttonStyle}>
          Learn More
        </button>
      </div>
      <div className={greyBoxStyle} />
    </div>
  )
}

export default Home
