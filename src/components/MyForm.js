import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

class MyForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      name: '',
      email: '',
      dob: '',
      course: ''
    }

    this.state.students = [
      {
        id: 0,
        name: 'test',
        email: 'test@test.com',
        dob: '2024-12-21',
        course: 'Test' 
      }
    ];
  }

  handleStudentRemove(student) {
    const index = this.state.students.indexOf(items);
    const studentsCopy = [...this.state.students]
    studentsCopy.splice(index, 1);
    this.setState(studentsCopy);
  };

  handleAddStudent(evt) {
    evt.preventDefault()
    var id = (+ new Date() + Math.floor(Math.random() * 9999)).toString(36);
    var student = {
      id: id,
      name:   this.state.name,
      email:  this.state.email,
      dob:    this.state.dob,
      course: this.state.course
    }
    const studentsCopy = [...this.state.students]
    studentsCopy.push(student);
    this.setState({students: studentsCopy});
  }

  editField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onCourseChange = (selectedOption) => {
    console.log(selectedOption)
    this.setState({course: selectedOption});
  };
  openModal = (event) => {
    event.preventDefault()
    this.handleCalculateTotal()
    this.setState({isOpen: true})
  };
  closeModal = (event) => this.setState({isOpen: false});

  render(){
    return (
      <>
        <Form onSubmit={this.handleAddStudent.bind(this)}>
          <Row className="p-4 my-3">
            <Col lg="9">
              <div className="border rounded bg-white p-4">
                  <h2 className="mb-2"> Add Student Form </h2>

                  <Form.Group className="mb-3" controlId="studentName">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control type="text" name={"name"} value={this.state.name} onChange={(event) => this.editField(event)} placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="studentEmail">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control type="email" name={"email"} value={this.state.email} onChange={(event) => this.editField(event)} placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="studentDob">
                    <Form.Label className="fw-bold">DOB</Form.Label>
                    <Form.Control type="date" name={"dob"} value={this.state.dob} onChange={(event) => this.editField(event)}/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Select onChange={event => this.onCourseChange(event.target.value)} aria-label="Available courses">
                      <option>Select course</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Medical">Medical</option>
                      <option value="Art">Art</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="mt-2">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>  
                
              </div>  
            </Col>
            <Col lg="3">
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th className="text-end">DOB</th>
                    <th className="text-end">Course</th>
                  </tr>
                </thead>

                 <tbody>
                   {this.state.students.map((student, i) => {
                        return(
                          <tr id={i} key={i}>
                            <td style={{width: '70px'}}>
                              {student.name}
                            </td>
                            <td>
                              {student.email}
                            </td>
                            <td className="text-end" style={{width: '100px'}}>{student.dob}</td>
                            <td className="text-end" style={{width: '100px'}}>{student.course}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
              </Table>         
            </Col>
          </Row>
        </Form>
      </>  
    )
  }
}

export default MyForm;