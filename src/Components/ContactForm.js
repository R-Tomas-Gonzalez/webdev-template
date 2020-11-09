import React, { Component } from 'react';
import { Form, Grid, Button, Header, Segment, Modal, Icon, TextArea} from 'semantic-ui-react'

class ContactForm extends Component {
    state = { 
        modalOpen: false,
     }


    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => {
        this.setState({ modalOpen: false })}



    render() { 
        return ( 
            <Modal
            trigger={<Button className="project-button" icon="mail outline" onClick={this.handleOpen}></Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
          >
            
            <Modal.Content>
              <h3>Contact Me</h3>
              <Form >
                            <input type="text" name="name" placeholder="Your Name" onChange={this.handleChange} />
                            <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                            <TextArea type="text" name="message" placeholder='Message' onChange={this.handleChange}/>
                        </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.handleClose}  inverted>
                <Icon name='checkmark' /> Submit
              </Button>
            </Modal.Actions>
          </Modal>
         );
    }
}
 
export default ContactForm;