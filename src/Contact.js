function Contact(props) {
    const { contact: { name = "Not Found" } = {} } = props
    return (
      <span>{name}</span>
    )
  }
  export default Contact