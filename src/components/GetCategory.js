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
      url: 'http://localhost:8080/category',
      data: [],
      modalCreateOpen: false,
      modalDetailOpen: false,
      modalEditOpen: false,
      modalDeleteOpen: false,
      category_id: 0,
      category_name: '',
      name: '',
      price: 0,
      description: ''
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
    console.log(this.state.data)
  }

  createCategory = () => {
    this.setState({
      modalCreateOpen: true
    })
  }

  createSubmit = async() => {
    await axios.post(this.state.url, qs.stringify({
      name: this.state.name,
      category: this.state.category_name
    }))
    this.setState({
      modalCreateOpen: false
    }, async()=>{
      await this.getData()
    })
  }

  detailCategory = async(id)=>{
    const {data} = await axios.get(`${this.state.url}/${id}`)
    this.setState({
      modalDetailOpen: true,
      category_id: data.category_id,
      category_name: data.category_name,
      ...data.data[0]
    })
  }

  editCategory = async(id)=>{
    const {data} = await axios.get(`${this.state.url}/${id}`)
    this.setState({
      modalEditOpen: true,
      category_id: data.category_id,
      category_name: data.category_name
    })
  }

  changeInput = (edit) => {
    this.setState({
      [edit.target.name]: edit.target.value
    })
  }

  editSubmit = async(e) => {
    e.preventDefault()
    await axios.put(`${this.state.url}/${this.state.category_id}`, qs.stringify({
      category: this.state.category_name
    }))
    this.setState({
      modalEditOpen: false
    }, async()=>{
      await this.getData()
    })
  }

  deleteModal = async(id)=>{
    const {data} = await axios.get(`${this.state.url}/${id}`)
    this.setState({
      modalDeleteOpen: true,
      category_id: data.category_id,
      category_name: data.category_name
    })
  }

  deleteCategory = async(id) => {
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
            <h1>List of Category</h1>
            <Button outline className='btn-themeColor' onClick={()=>this.createCategory()}>Create Category</Button>
          </Jumbotron>
          <Table size='sm' bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category name</th>
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
                      <td>
                        <Button block size="sm" color="primary" onClick={()=>this.detailCategory(item.category_id)}>Detail</Button>
                      </td>
                      <td>
                        <Button block size="sm" color="warning" onClick={()=>this.editCategory(item.category_id)}>Edit</Button>
                      </td>
                      <td>
                        <Button block size="sm" color="danger" onClick={()=>this.deleteModal(item.category_id)}>Delete</Button>
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
                  <Label for='category_name' className='text-muted'>Category Name</Label>
                  <Input name='category_name' onChange={this.changeInput}/>
                  <Button block type='submit' color='primary'>Submit</Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>this.setState({modalCreateOpen: false})}>Close</Button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalDetailOpen}>
              <ModalBody>
                <h2>{this.state.category_id}</h2>
                <h6>{this.state.category_name}</h6>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>this.setState({modalDetailOpen: false})}>Close</Button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalEditOpen}>
              <ModalBody>
                <Form onSubmit={this.editSubmit}>
                  <Label for='category_name' className='text-muted'>Category Name</Label>
                  <Input name='category_name' onChange={this.changeInput} value={this.state.category_name} />
                  <Button block type='submit' color='primary'>Submit</Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>this.setState({modalEditOpen: false})}>Cancel</Button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalDeleteOpen}>
              <ModalBody>
                <h5>Are you sure to delete category {this.state.category_name}?</h5>
              </ModalBody>
              <ModalFooter>
                <Button block onClick={()=>this.deleteCategory(this.state.category_id)} color='danger'>Yes</Button>
                <Button block onClick={()=>this.setState({modalDeleteOpen: false})}>No</Button>
              </ModalFooter>
          </Modal>
        </Container>
      </React.Fragment>
    )
  }
}

export default GetItems
