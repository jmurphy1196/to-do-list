import React from 'react'
import Center from 'react-center'
import {Row, Button} from 'reactstrap'

export const Todo = (props) => {
    let x = props.desc;
    let inputId = 'edit' + props.id;
    console.log(props.isEdit);
    
    if (x.length > 23){
        x = Array.from(x);
        x.splice(23, x.length-23);
        x.push('...');  
        x = x.join('');
        console.log(x);
        
    }
    if (props.isEdit === false){
        return (
            <Row>
                 <div style={props.idStyle}>
                      <Center> <span>{props.id}</span> </Center>
                    </div>
                    <div style={props.descStyle}>
                    <Center> <span>{props.desc.length <  30 ? props.desc : x}</span> </Center>
                    </div>
                    <div style={props.delStyle}>
                    <Center>  <Button onClick={props.delete} value={props.id} color='danger'><i value={props.id} className="fa fa-trash" aria-hidden="true"></i></Button> </Center>
                    </div>
                    <div style={props.editStyle}>
                    <Center> <Button onClick={props.edit} value={props.id} color='warning'><i value={props.id} className="fa fa-pencil-square-o" aria-hidden="true"></i></Button> </Center>
                    </div>
                    <br />
            </Row>
        )
    } else {
        return (
            <Row>
                 <div style={props.idStyle}>
                      <Center> <span>{props.id}</span> </Center>
                    </div>
                    <div style={props.descStyle}>
                    <Center> <input id={inputId} defaultValue={props.desc} type='text'/> </Center>
                    </div>
                    <div style={props.delStyle}>
                    <Center>  <Button onClick={props.delete} value={props.id} color='danger'><i className="fa fa-trash" aria-hidden="true"></i></Button> </Center>
                    </div>
                    <div style={props.editStyle}>
                    <Center> <Button onClick={props.change} value={props.id} color='success'><i class="fa fa-check-square-o" aria-hidden="true"></i></Button> </Center>
                    </div>
                    <br />
            </Row>
        )

    }
    
}