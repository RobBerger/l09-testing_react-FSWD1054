import Button from 'react-bootstrap/Button'

function handleDeleteContact() {
  alert('Contact Deleted!')
}

function Contact(props) {
  const { contact: { name = "Not Found" } = {} } = props
  return (
    <>
    <span>{name}</span>
    <Button onClick={handleDeleteContact}>Delete</Button>
    </>
  )
}
export default Contact