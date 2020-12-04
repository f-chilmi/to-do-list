import React, { Component } from 'react'
import store from '../redux/store'
import getData from '../redux/action/getData'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form, Button, Input, FormGroup, Modal, ModalBody, Spinner} from 'reactstrap'

class Home extends Component {
  state = {
    plan: {},
    title: '',
    description: '',
    modalOpen: false,
  }

  componentDidMount(){
    store.dispatch(getData.getData())
    this.setData()
  }

  componentDidUpdate() {
    if(this.state.plan.length < 1) {
      if(this.props.data.data.length > 0){
        this.setData()
      }
    }
  }

  getDetail = (index) => {
    console.log(index)
    this.setState({modalOpen: true})
  }

  setData = () => {
    this.setState({plan: this.props.data.data})
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submit = (e) => {
    e.preventDefault()
    let {plan, title, description} = this.state
    plan = [...this.state.plan, {title, description}]
    this.setState({plan: plan})
    // this.setState(this.state.plan)
  }

  delete = (e, index) => {
    e.preventDefault()
    let {plan} = this.state
    if(plan[index].status === 1){
      console.log('Forbidden delete data')
    } else {
      plan.splice(index, 1)
    }
    this.setState({plan: plan})
  }

  render() {
    const {plan} = this.state
    return (
      <div className="parent">
        <div className="content">
          <h1 className="titleH1">MY TO DO LIST</h1>
          <Form onSubmit={this.submit} className="form">
            <FormGroup className="formGroup">
              <Input type="text" name="title" className="input" placeholder="Add title" onChange={this.onChangeText} />
              <Input type="textarea" name="description" className="input" placeholder="Add description" onChange={this.onChangeText}/>
              <Button outline color="primary" className="button">Add</Button>
            </FormGroup>
          </Form>
          {this.props.data.isLoading &&  <Spinner/>}
          {plan.length > 0 && (plan.map((item, index)=>(
            <div >
              <div className="cardPlan" >
                <Link className="titlePlan" onClick={()=>this.getDetail(index)}>{item.title}{' '}</Link>
                <p className="contentPlan">{item.description}</p>
              </div>
              <div>
                <button onClick={(e)=>this.delete(e, index)}>Delete</button>
              </div>
            </div>
          )))}

          <Modal isOpen={this.state.modalOpen} className="modal">
            <ModalBody>
              Lorem ipsum
            </ModalBody>
            <Button onClick={()=>this.setState({modalOpen: false})}>Cancel</Button>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.fetchData,
})
const mapDispatchToProps = {
  getData: getData.getData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
