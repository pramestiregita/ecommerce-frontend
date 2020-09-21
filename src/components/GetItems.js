import React from 'react';
import {default as axios} from 'axios'
import qs from 'querystring'
import {
  Container, Jumbotron, Table, Button, 
  Modal, ModalBody, ModalFooter, Input,
  InputGroup, InputGroupAddon, InputGroupText,
  Form, Label, Row, Col, Alert
} from 'reactstrap'

class GetItems extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      url: 'http://localhost:8080/items',
      data: [],
      category: [],
      modalCreateOpen: false,
      alertCreate: false,
      modalDetailOpen: false,
      modalEditOpen: false,
      modalDeleteOpen: false,
      id: '',
      name: '',
      price: '',
      description: '',
      category_id: 0
    }
  }

  async componentDidMount(){
    await this.getData()
    await this.getCategory()
  }

  getData = async()=>{
    const {data} = await axios.get(`${this.state.url}`)
    this.setState({
      data: data.data,
    })
  }

  getCategory = async()=>{
    const {data} = await axios.get('http://localhost:8080/category')
    this.setState({
      category: data.data,
      alertCreate: false
    })
  }

  createItem = () => {
    this.setState({
      modalCreateOpen: true
    })
  }

  createSubmit = async() => {
    await axios.post(this.state.url, qs.stringify({
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      categoryId: this.state.category_id 
    }))
    this.setState({
      modalCreateOpen: false,
      alertCreate: true
    }, async()=>{
      await this.getData()
    })
    console.log(this.state.alertCreate)
  }

  detailItem = async(id)=>{
    const {data} = await axios.get(`${this.state.url}/${id}`)
    this.setState({
      modalDetailOpen: true,
      ...data.data[0]
    })
  }

  editItem = async(id)=>{
    const {data} = await axios.get(`${this.state.url}/${id}`)
    this.setState({
      modalEditOpen: true,
      ...data.data[0]
    })
  }

  changeInput = (edit) => {
    this.setState({
      [edit.target.name]: edit.target.value
    })
  }

  editSubmit = async(e) => {
    e.preventDefault()
    await axios.patch(`${this.state.url}/${this.state.id}`, qs.stringify({
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      categoryId: this.state.category_id
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

  deleteItem = async(id) => {
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
            <h1>List of Items</h1>
            <Button outline className='btn-themeColor' onClick={()=>this.createItem()}>Create Item</Button>
          </Jumbotron>
          <Alert color='success' isOpen={this.state.alertCreate}>
            Success! Item has been created!
          </Alert>
          <Table size='sm' bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
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
                        <Row>
                          <Col sm='1'>Rp</Col>
                          <Col>{item.price}</Col>
                        </Row>
                      </td>
                      <td>{item.category_name}</td>
                      <td>
                        <Button block size="sm" color="primary" onClick={()=>this.detailItem(item.id)}>Detail</Button>
                      </td>
                      <td>
                        <Button block size="sm" color="warning" onClick={()=>this.editItem(item.id)}>Edit</Button>
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
                  <Input name='name' onChange={this.changeInput} />
                  <Label for='price' className='text-muted'>Price</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Rp</InputGroupText>
                    </InputGroupAddon>
                    <Input name='price' onChange={this.changeInput}  />
                  </InputGroup>
                  <Label for='select' className='text-muted'>Category</Label>
                  <Input type="select" name="category_id" onChange={this.changeInput}  id="selectCategory">
                    <option selected>...</option>
                    {this.state.category.map(item=>{
                      return(
                        <React.Fragment>
                          <option value={item.category_id}>{item.category_name}</option>
                        </React.Fragment>
                      )
                    })
                    }
                  </Input>
                  <Label for='description' className='text-muted'>Description</Label>
                  <Input name='description' type='textarea' onChange={this.changeInput}  />
                  <Button block type='submit' color='primary'>Submit</Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>this.setState({modalCreateOpen: false})}>Close</Button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalDetailOpen}>
              <ModalBody>
                <h2>{this.state.name}</h2>
                <h6>{this.state.category_name}</h6>
                <h4>Rp. <span className='text-danger'>{this.state.price}</span></h4>
                <p>{this.state.description}</p>
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
                  <Label for='price' className='text-muted'>Price</Label><InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Rp</InputGroupText>
                    </InputGroupAddon>
                    <Input name='price' onChange={this.changeInput} value={this.state.price}  />
                  </InputGroup>
                  <Label for='select' className='text-muted'>Category</Label>
                  <Input type="select" name="category_id" onChange={this.changeInput}  id="selectCategory">
                    <option selected>...</option>
                    {this.state.category.map(item=>{
                      return(
                        <React.Fragment>
                          <option value={item.category_id}>{item.category_name}</option>
                        </React.Fragment>
                      )
                    })
                    }
                  </Input>
                  <Label for='description' className='text-muted'>Description</Label>
                  <Input name='description' type='textarea' onChange={this.changeInput} value={this.state.description}  />
                  <Button block type='submit' color='primary'>Submit</Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>this.setState({modalEditOpen: false})}>Cancel</Button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalDeleteOpen}>
              <ModalBody>
                <h5>Are you sure to delete item with id {this.state.id}?</h5>
              </ModalBody>
              <ModalFooter>
                <Button block onClick={()=>this.deleteItem(this.state.id)} color='danger'>Yes</Button>
                <Button block onClick={()=>this.setState({modalDeleteOpen: false})}>No</Button>
              </ModalFooter>
          </Modal>
        </Container>
      </React.Fragment>
    )
  }
}

export default GetItems
