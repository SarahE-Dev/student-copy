import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Note(props) {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{width: '50%'}} className='bg-dark text-white'>
            <Card.Body>
                <Card.Title>{props?.note?.title}</Card.Title>
                <Card.Text>{props?.note?.content}</Card.Text>
            </Card.Body>
            <Card.Footer>

              <Button variant='outline-primary'>Edit</Button>
          
              <Button variant='outline-danger' onClick={() => props.onDelete(props.note._id)}>Delete</Button>
            </Card.Footer>
        </Card>
    </div>
  )
}
