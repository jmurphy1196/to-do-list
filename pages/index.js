import Head from 'next/head';
import {Row, Col, Container, Button} from 'reactstrap';
import {Todo} from '../components/Todo';
import { Component } from 'react';
import Center from 'react-center'

export default class Home extends Component {
    constructor(){
      super();

      this.state = {
        todos: [],
        id: 0,

      };
      this.writeToDo = this.writeToDo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      this.editTodo = this.editTodo.bind(this);
      this.changeTodo = this.changeTodo.bind(this);
      
    }


    writeToDo(event) {
        let val = document.getElementById('todo').value;
        let regEx = /\W/g;
        let count = 1;
        
        for(let i = 0; i < val.length; i++){
          if(regEx.test(val[i])){
           count += 1;
            
          }
          
        }
        console.log(count);
        

        if(count === val.length || val == '') {
          alert('enter valid text');
          document.getElementById('todo').value = '';
        } else {

            
        let arr = this.state.todos;
        let newId = this.state.id + 1; 
        this.state.id += 1;
        arr.push({desc: val, id: newId, edit: false});
        this.setState({
          todos: arr,

        });
        document.getElementById('todo').value = '';
      
        }

    
        
        
    }

    deleteTodo(ident){
      let id = ident;
    
      
     const arr = [...this.state.todos];
     let indToDel;
     arr.forEach((el, ind) => {
      if(el.id === id){
        indToDel = ind;
      }
     });

     arr.splice(indToDel, 1);
    
     

     this.setState({
       todos: arr
     });
     console.log(this.state);
      
      

    }

    editTodo(ident){

      let target = ident;
      
      
      let arr = this.state.todos.slice();

      arr.forEach((el, ind) => {
          if(el.id == target){
              el.edit = true;
          }
      });

      this.setState({
        todos: arr
      });


    }
    
    changeTodo(ident){
      let target = ident;
      ident = ident.toString();
      let newDesc = document.getElementById(`edit${target}`).value;
      

      let arr = this.state.todos.slice();

      arr.forEach((el, ind) => {
          if(el.id == target){
            el.desc = newDesc;
            el.edit = false;
          }
      });

    this.setState({
      todos: arr
    });
      
    }

    render(){
      
        

      let style = {
        position: 'relative',
        left: '15vw',
        width: '40vw'
      }
      const btn_style = {
        position: 'relative',
        left: '15vw',
        

      }
      let style2 = {
        position: 'relative',
        width: '75vw',
       
      }
      let id_style = {
        position: 'relative',
        
        width: '7vw'
      }
      const desc_style = {
        position: 'relative',
        
        width: '47vw'
      }

      const edit_style = {
        position: 'relative',
        
        width: '10vw'
      }
      const del_style = {
        position: 'relative',
        
        width: '10vw'
      }
      return (
        
        <>
        <Head>
        <title>To do list</title>
        <link 
  href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" 
  rel="stylesheet"  type='text/css' />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         <Container>
            <h1 className='text-center'>To do's</h1>
              
              
               <br />

           <Container style={style2}>
             <Row>
               <input type='text' placeholder='write todo...' style={style} id='todo'/> 
               <Button onClick={this.writeToDo} style={btn_style}><i className="fa fa-comment" aria-hidden="true" ></i></Button>
             </Row>
             <br /> <br />
             
              <Row>
                <div style={id_style}>
                  <Center> <strong><span>ID</span></strong> </Center>
                </div>
                <div style={desc_style}>
                <Center> <strong><span>Description</span></strong>  </Center>
                </div>
                <div style={del_style}>
                <Center>  <strong><span>Delete</span></strong>  </Center>
                </div>
                <div style={edit_style}>
                <Center>  <strong><span>Edit</span></strong>  </Center>
                </div>
              </Row>
              <br />
               {this.state.todos !== [] ? this.state.todos.map((el, index) => {
                  return ( 
                    <>
                      <Todo  change={() => this.changeTodo(el.id)} isEdit={el.edit} edit={() => this.editTodo(el.id)} delete={() => this.deleteTodo(el.id)} desc={el.desc} id={el.id} idStyle={id_style} descStyle={desc_style} delStyle={del_style} editStyle={edit_style}/>
                      <br />
                   </>
                  )
               }) : null}
              </Container>
           
          </Container>
          
        </>
      )
    }
}
