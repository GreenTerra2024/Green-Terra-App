

const Input = ({ type, placeholder, onChange }) => {
  return (
    <input
    type={type}
    onChange={onChange}
    placeholder = {placeholder}
    className="w-full py-4 px-2 rounded-md outline-none"
  />
  )
}

export default Input
