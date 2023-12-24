import { Component } from "react";

export default function Teacher()
{
    return <h2>Hello from Teacher Component!!</h2>
}


class CStudent extends Component
{
    render()
    {
        return(
        <>
          <h2>Hello from CStudent Component!!</h2>
          <p>I am new here.</p>
        </>
        )
    }
}

export {CStudent}; //named export



class AHeader extends Component
{
    render()
    {
        return(<>
          <h1>Hello from Header Comp!!</h1>
        </>)
    }
}


class AContent extends Component
{
    render()
    {
        return(<>
         <h1>Hello from Body Comp!!</h1>
        </>)
    }
}


class AFooter extends Component{
    render()
    {
        return(<>
         
         <h1>Hello From Footer Component!!</h1>
         
        </>)
    }
}


class AIndex extends Component
{
    render()
    {
        return(<>
          
          <AHeader/>
          <AContent/>
          <AFooter/>
        
        </>)
    }
}

export {AIndex}


// function Greeting(props)
// {
//    console.log(props);
//    const {name,percentage} = props;
//    return(
//     <>
    
//      {/* <p>Hello {props.name}, Greetings!!! your percentage is {props.percentage}</p> */}

//      <p>Hello {name}, Greetings!!! your percentage is {percentage}</p>

//     </>
//    )
// }




function Greeting({name,percentage})
{
//    console.log(props);
//    const {name,percentage} = props;
   return(
    <>
    
     {/* <p>Hello {props.name}, Greetings!!! your percentage is {props.percentage}</p> */}

     <p>Hello {name}, Greetings!!! your percentage is {percentage}</p>

    </>
   )
}
export {Greeting}





class Greet extends Component
{
    render()
    {
        const {name,percentage} = this.props; //In class based we use this.props, here we get value only in props

        return(
            <p>Hello {name}, Greetings!!! your percentage is {percentage}</p>
        )
    }
    

}

export {Greet}


