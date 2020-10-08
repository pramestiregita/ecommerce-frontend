import React from 'react';
import {default as axios} from 'axios'
import qs from 'querystring'
import {
  Container, Table, Button, Modal, ModalBody, ModalFooter, Input,
  InputGroup, InputGroupAddon, InputGroupText, Form, Label, Row, Col, 
  Alert, ButtonGroup
} from 'reactstrap'

// importing images
import search from '../assets/images/search2.png'
import sort from '../assets/images/sort.svg'
import asc from '../assets/images/asc.png'
import desc from '../assets/images/desc.png'
import detail from '../assets/images/detail.png'
import edit from '../assets/images/edit.png'
import deleteIcon from '../assets/images/delete.png'
import prev from '../assets/images/prev.png'
import next from '../assets/images/next.png'

class GetItems extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      url: 'http://localhost:8080/product',
      data: [],
      count: 0,
      currentPage: 0,
      pageCount: [],
      message: '',
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
      category_name: '',
      category_id: 0,
      search: '',
      sort: 'name',
      sortBy: '',
      page: 1,
      limit: 5
    }
  }

  async componentDidMount(){
    await this.getData()
    await this.showData()
    await this.getCategory()
  }

  getData = async()=>{
    const {data} = await axios.get(`${this.state.url}`)
    // console.log(data)
    this.setState({
      data: data.data,
      message: data.message,
      count: data.pageInfo.count,
      currentPage: data.pageInfo.currentPage,
      pages: data.pageInfo.pages,
      prevLink: data.pageInfo.prevLink,
      nextLink: data.pageInfo.nextLink
    })
  }

  showData = async()=>{
    const {data} = await axios.get(`${this.state.url}?limit=${this.state.limit}`)
    // console.log(data)
    this.setState({
      data: data.data,
      pages: data.pageInfo.pages,
      pageCount: Array.from({length: data.pageInfo.pages}, (v, k) => k+1),
      prevLink: data.pageInfo.prevLink,
      nextLink: data.pageInfo.nextLink
    })
    // console.log(this.state.pageCount)
  }

  changeInput = (edit) => {
    this.setState({
      [edit.target.name]: edit.target.value
    })
    console.log(this.state.sort)
  }

  searchData = (e) => {
    e.preventDefault()
    this.setState({
      url: `http://localhost:8080/product?limit=${this.state.limit}&search=${this.state.search}&sort[${this.state.sort}]=${this.state.sortBy}`
    }, async()=>{
      await this.getData()
    })
    // this.props.history.push(`/items?search=${this.state.search}`)
  }

  pagination = (e) => {
    e.preventDefault()
    this.setState({
      url: `http://localhost:8080/product?page=${this.state.page}&limit=${this.state.limit}&search=${this.state.search}`
    }, async()=>{
      await this.getData()
    })
  }

  handleSearch = () => {
    console.log(this.state.search)
  }

  getCategory = async()=>{
    const {data} = await axios.get('http://localhost:8080/category')
    this.setState({
      category: data.data
    })
    console.log(this.state.category)
  }

  createItem = () => {
    this.setState({
      modalCreateOpen: true
    })
  }

  createSubmit = async(e) => {
    e.preventDefault()
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
  }

  detailItem = async(id)=>{
    const {data} = await axios.get(`${this.state.url}/${id}`)
    console.log(data)
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

  deleteModal = (id, name)=>{
    this.setState({
      modalDeleteOpen: true,
      id: id,
      name: name
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
          <div className='mt-5'>
            <span className='h1 font-weight-bold'>List of Items</span>
          </div>
          <div>
            <Row className='mb-4 mt-3'>
              <Col lg='4'>
                <Form onSubmit={this.searchData}>
                  <InputGroup>
                    <Input className='input search pl-4' name='search' type='search' onChange={this.changeInput} placeholder='Search' aria-label='Search' />
                    <InputGroupAddon addonType='prepend'>
                      <Button className='btn-1 btn-search' type='submit' aria-label='search'>
                        <img src={search} alt='...' />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </Col>
              <Col lg='2'>
                <Form onSubmit={this.searchData}>
                  <InputGroup>
                    <Input className='input search' type="select" name="sort" onChange={this.changeInput} aria-label='Sort'>
                      <option value='name'>Name</option>
                      <option value='price'>Price</option>
                      <option value='category'>Category</option>
                    </Input>
                    <InputGroupAddon addonType='prepend'>
                      <Button className='btn-1 btn-search' type='submit' aria-label='sort'>
                        <img src={sort} alt='...' />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </Col>
              <Col lg='2'>
                <Form onSubmit={this.searchData}>
                  <ButtonGroup>
                    <Button className='asc btn-1 border-0' onClick={()=>this.setState({sortBy: 'asc'})} name='sortBy' value='desc' type='submit' >
                      <img src={asc} alt='...' />
                    </Button>
                    <Button className='desc btn-1 border-0' onClick={()=>this.setState({sortBy: 'desc'})} name='sortBy' value='desc' type='submit' >
                      <img src={desc} alt='...' />
                    </Button>
                  </ButtonGroup>
                </Form>
              </Col>
              <Col lg='4' className='text-right'>
                <Button className='btn-1 px-4 rounded-pill' onClick={()=>this.createItem()}>Create Item</Button>
              </Col>
            </Row>
          </div>
          <Alert color='success' isOpen={this.state.alertCreate}>
            Success! Item has been created!
          </Alert>
          <Table size='sm' bordered hover responsive>
            <thead>
              <tr>
                <th className='text-center'>#</th>
                <th className='text-center'>Name</th>
                <th className='text-center'>Price</th>
                <th className='text-center'>Category name</th>
                <th className='text-center' colSpan='3'>Option</th>
              </tr>
            </thead>
            <tbody>
            {this.state.data == null ? 
              <tr>
                <td colSpan='7' className='text-center h6'>{this.state.message}</td>
              </tr> :
              this.state.data.map(item=>{
                return(
                  <React.Fragment>
                    <tr>
                      <th scope='row' className='text-center'>
                        {this.state.data.indexOf(item)+1}
                      </th>
                      <td>{item.name}</td>
                      <td>
                        <Row>
                          <Col sm='1'>Rp</Col>
                          <Col>{item.price}</Col>
                        </Row>
                      </td>
                      <td>{item.category}</td>
                      <td>
                        <Button block size="sm" color="primary" onClick={()=>this.detailItem(item.id)}>
                          <img src={detail} alt='...' />
                        </Button>
                      </td>
                      <td>
                        <Button block size="sm" color="warning" onClick={()=>this.editItem(item.id)}>
                          <img src={edit} alt='...' />
                        </Button>
                      </td>
                      <td>
                        <Button block size="sm" color="danger" onClick={()=>this.deleteModal(item.id, item.name)}>
                          <img src={deleteIcon} alt='...' />
                        </Button>
                      </td>
                    </tr>
                  </React.Fragment>
                )
              })
            }
            </tbody>
          </Table>
          <Row className='align-items-center justify-content-between'>
            <Col lg='2'>
              <span>Total items : {this.state.count}</span>
            </Col>
            <Col lg='2'>
              <Form onSubmit={this.pagination}>
                <InputGroup>
                  <InputGroupAddon>
                    {this.state.currentPage > 1 ? 
                      <Button className='asc btn-1 border-0' onClick={()=>this.setState({page: this.state.currentPage-1})} name='page' value='desc' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={prev} alt='...' />
                      </Button> :
                      <Button disabled className='asc btn-1 border-0' name='page' value='desc' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={prev} alt='...' />
                      </Button>
                    }
                  </InputGroupAddon>
                  <Input name='page' onChange={this.changeInput} value={this.state.currentPage} aria-label='Page'/>
                  <InputGroupAddon>
                    {this.state.currentPage < this.state.pages ? 
                      <Button className='desc btn-1 border-0' onClick={()=>this.setState({page: this.state.currentPage+1})} name='page' value='desc' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={next} alt='...' />
                      </Button> :
                      <Button disabled className='desc btn-1 border-0' name='page' value='desc' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={next} alt='...' />
                      </Button>
                    }
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </Col>
          </Row>
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
                    <option selected>Choose Category</option>
                    {this.state.category.map(item=>{
                      return(
                        <React.Fragment>
                          <option value={item.id}>{item.name}</option>
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
                <h2 className='font-weight-bold'>{this.state.name}</h2>
                <h6>{this.state.category_name}</h6>
                <h4 className='font-weight-bold'>Rp. {this.state.price}</h4>
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
                  <Label for='price' className='text-muted'>Price</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Rp</InputGroupText>
                    </InputGroupAddon>
                    <Input name='price' onChange={this.changeInput} value={this.state.price}  />
                  </InputGroup>
                  <Label for='select' className='text-muted'>Category</Label>
                  <Input type="select" name="category_id" onChange={this.changeInput} id="selectCategory">
                    {/* {this.state.category.map(item=>{
                      return(
                        <React.Fragment>
                          {item.category_id === this.state.category_id ?
                            <option selected value={item.category_id}>{item.category_name}</option> :
                            <option value={item.category_id}>{item.category_name}</option>
                          }
                        </React.Fragment>
                      )
                    })
                    } */}
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
                <h5>Are you sure to delete {this.state.name}?</h5>
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
