import React from 'react';
import {default as axios} from 'axios'
import qs from 'querystring'
import {
  Container, Jumbotron, Table, Button, 
  Modal, ModalBody, ModalFooter, Input,
  Form, Label
} from 'reactstrap'

class GetItems extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      url: 'http://localhost:8080/users',
      data: [],
      modalCreateOpen: false,
      modalDetailOpen: false,
      modalEditOpen: false,
      modalDeleteOpen: false,
      id: '',
      name: '',
      email: '',
      phone_number: '',
      gender: '',
      date_of_birth: ''
    }
  }

  async componentDidMount(){
    await this.getData()
  }

  getData = async()=>{
    const {data} = await axios.get(`${this.state.url}`)
    this.setState({
      data: data.data,
    })
  }

  changeInput = (edit) => {
    this.setState({
      [edit.target.name]: edit.target.value
    })
  }

  createUser = () => {
    this.setState({
      modalCreateOpen: true
    })
  }

  createSubmit = async() => {
    await axios.post(this.state.url, qs.stringify({
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phone_number,
      gender: this.state.gender,
      dateOfBirth: this.state.date_of_birth
    }))
    this.setState({
      modalCreateOpen: false
    }, async()=>{
      await this.getData()
    })
  }

  detailUser = async(id)=>{
    const {data} = await axios.get(`${this.state.url}/${id}`)
    this.setState({
      modalDetailOpen: true,
      ...data.data[0]
    })
  }

  editUser = async(id)=>{
    const {data} = await axios.get(`${this.state.url}/${id}`)
    this.setState({
      modalEditOpen: true,
      ...data.data[0]
    })
  }

  editSubmit = async(e) => {
    e.preventDefault()
    await axios.patch(`${this.state.url}/${this.state.id}`, qs.stringify({
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phone_number,
      gender: this.state.gender,
      dateOfBirth: this.state.date_of_birth
    }))
    this.setState({
      modalEditOpen: false
    }, async()=>{
      await this.getData()
    })
  }

  deleteModal = (id)=>{
    this.setState({
      modalDeleteOpen: true,
      id: id
    })
  }

  deleteUser = async(id) => {
    await axios.delete(`${this.state.url}/${id}`)
    this.setState({
      modalDeleteOpen: false
    }, async()=>{
      await this.getData()
    })
  }

  render(){
    return(
      <React.Fragment>
        <Container>
          <Jumbotron className="mt-5">
            <h1>List of Users</h1>
            <Button outline className='btn-themeColor' onClick={()=>this.createUser()}>Create User</Button>
          </Jumbotron>
          <Table size='sm' bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th colSpan='3'>Option</th>
              </tr>
            </thead>
            <tbody>
            {this.state.data.map(item=>{
                return(
                  <React.Fragment>
                    <tr>
                      <th scope='row'>{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.gender}</td>
                      <td>
                        <Button block size="sm" color="primary" onClick={()=>this.detailUser(item.id)}>Detail</Button>
                      </td>
                      <td>
                        <Button block size="sm" color="warning" onClick={()=>this.editUser(item.id)}>Edit</Button>
                      </td>
                      <td>
                        <Button block size="sm" color="danger" onClick={()=>this.deleteModal(item.id)}>Delete</Button>
                      </td>
                    </tr>
                  </React.Fragment>
                )
              })
            }
            </tbody>
          </Table>
          <Modal isOpen={this.state.modalCreateOpen}>
              <ModalBody>
              <Form onSubmit={this.createSubmit}>
                  <Label for='name' className='text-muted'>Name</Label>
                  <Input name='name' onChange={this.changeInput}/>
                  <Label for='email' className='text-muted'>Email</Label>
                  <Input name='email' onChange={this.changeInput}/>
                  <Label for='phone_number' className='text-muted'>Phone Number</Label>
                  <Input name='phone_number' onChange={this.changeInput}/>
                  <Label for='gender' className='text-muted'>Gender</Label>
                  <Input type="select" name="gender" onChange={this.changeInput}  id="selectCategory">
                    <option selected>...</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </Input>
                  <Label for='date_of_birth' className='text-muted'>Date of Birth</Label>
                  <Input name='date_of_birth' onChange={this.changeInput}/>
                  <Button block type='submit' color='primary'>Submit</Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>this.setState({modalCreateOpen: false})}>Close</Button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalDetailOpen}>
              <ModalBody>
                <Table bordered>
                  <thead>
                    <tr>
                      <th colSpan='2'>Detail of id {this.state.id}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row'>Name</th>
                      <td>{this.state.name}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Email</th>
                      <td>{this.state.email}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Phone Number</th>
                      <td>0{this.state.phone_number}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Gender</th>
                      <td>{this.state.gender}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Date of Birth</th>
                      <td>{this.state.date_of_birth}</td>
                    </tr>
                  </tbody>
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>this.setState({modalDetailOpen: false})}>Close</Button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalEditOpen}>
              <ModalBody>
                <Form onSubmit={this.editSubmit}>
                <Label for='name' className='text-muted'>Name</Label>
                  <Input name='name' onChange={this.changeInput} value={this.state.name} />
                  <Label for='email' className='text-muted'>Email</Label>
                  <Input name='email' onChange={this.changeInput} value={this.state.email} />
                  <Label for='phone_number' className='text-muted'>Phone Number</Label>
                  <Input name='phone_number' onChange={this.changeInput} value={this.state.phone_number} />
                  <Label for='gender' className='text-muted'>Gender</Label>
                  <Input type="select" name="gender" onChange={this.changeInput}  id="selectCategory">
                    <option selected>...</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </Input>
                  <Label for='date_of_birth' className='text-muted'>Date of Birth</Label>
                  <Input name='date_of_birth' onChange={this.changeInput} value={this.state.date_of_birth} />
                  <Button block type='submit' color='primary'>Submit</Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>this.setState({modalEditOpen: false})}>Cancel</Button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalDeleteOpen}>
              <ModalBody>
                <h5>Are you sure to delete user with id {this.state.id}?</h5>
              </ModalBody>
              <ModalFooter>
                <Button block onClick={()=>this.deleteUser(this.state.id)} color='danger'>Yes</Button>
                <Button block onClick={()=>this.setState({modalDeleteOpen: false})}>No</Button>
              </ModalFooter>
          </Modal>
        </Container>
      </React.Fragment>
    )
  }
}

export default GetItems
