import Button from 'react-bootstrap/Button'

function Contact(props) {
  const { contact: { name = "Not Found" } = {} } = props
  return (
    <>
    <span>{name}</span>
    <Button>Delete</Button>
    </>
  )
}
  export default Contact