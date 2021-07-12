import React from 'react'
const delurll = "https://no1book-app.herokuapp.com/activatesubscriber/"

class Reactivateuser extends React.Component{
    constructor(){
        super()
    } 
    render(){
        return(
            <>
            </>
        ) 
    } 
    componentDidMount(){
        if(this.props.match.params.id){
            fetch(`${delurll}${this.props.match.params.id}`
            ,
            { 
            method:'PUT',
            Headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
          })
          .then(this.props.history.push('/admin_login'))
          
        }}
        
    }


export default Reactivateuser;