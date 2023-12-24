import ReactDOM from "react-dom/client";
import Teacher, { CStudent,AIndex,Greeting, Greet } from "./app";  //no .js extension required.
import { Component } from "react";

import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Content } from "./Components/Content";

import Layout from "./Components/Layout";

//Component Here, Student is component
//Below is function based component.

// function Student()
// {
//     return <h2>Hello, I am Student!!</h2>
// }



// const arooot = ReactDOM.createRoot(document.getElementById("root"));
// //arooot.render(<Student/>);

// arooot.render(<Teacher/>);


//Class based component

// class AStudent extends Component
// {
//     render()
//     {
//         return(
//         <>
//           <h2>Hello from AStudent Component!!</h2>
//         </>
//         )
//     }
// }


// const broot = ReactDOM.createRoot(document.getElementById("root"));

// broot.render(<AStudent/>);




// class BStudent extends Component
// {
//     render()
//     {
//         return(
//         <>
//           <h2>Hello from BStudent Component!!</h2>
//           <p>I am new here.</p>
//         </>
//         )
//     }
// }


// const croot = ReactDOM.createRoot(document.getElementById("root"));

// croot.render(<BStudent/>);



// const droot = ReactDOM.createRoot(document.getElementById("root"));

// droot.render(<CStudent/>)


class BHeader extends Component
{
    render()
    {
        return(<>
          <h1>Hello from Header Comp!!</h1>
        </>)
    }
}


class BContent extends Component
{
    render()
    {
        return(<>
         <h1>Hello from Body Comp!!</h1>
        </>)
    }
}


class BFooter extends Component{
    render()
    {
        return(<>
         
         <h1>Hello From Footer Component!!</h1>
         
        </>)
    }
}


class BIndex extends Component
{
    render()
    {
        return(<>
          
          <BHeader/>
          <BContent/>
          <BFooter/>
        
        </>)
    }
}



// const eroot = ReactDOM.createRoot(document.getElementById("root"));

// eroot.render(<BIndex/>);


// const froot = ReactDOM.createRoot(document.getElementById("root"));

// froot.render(<AIndex/>);



// class CIndex extends Component
// {
//     render()
//     {
//         return(<>
          
//           <Header/>
//           <Content/>
//           <Footer/>
        
//         </>)
//     }
// }

// const groot = ReactDOM.createRoot(document.getElementById("root"));
// groot.render(<CIndex/>);




// const hroot = ReactDOM.createRoot(document.getElementById("root"));

// hroot.render(<Layout/>);


//Component Constructor

// class EStudent extends Component
// {
//     constructor()
//     {
//         super(); //<-- super() is important.
//         this.subject = "Maths"; //this is not recommeded for creating properties.
//         this.address = {          //Create properties in object form.
//             Pincode:482002,
//             Street:"Civil line"
//         };

//         this.state = {
//             OptionalSubject:"CS",
//             Level: "Expert"
//         }
//     }

//     render()
//     {
//         return(<>

//            <h2>Expert in {this.subject}</h2>
//            <h3>Address Pincode = {this.address.Pincode}</h3>
//            <h3>Address Street = {this.address.Street}</h3>
//            <h3>{this.state.OptionalSubject} {this.state.Level}</h3>
//         </>
//         )
//     }
// }
// const iroot = ReactDOM.createRoot(document.getElementById("root"));
// iroot.render(<EStudent/>);




// destructuring object


// class FStudent extends Component
// {
//     constructor()
//     {
//         super(); //<-- super() is important.
//         this.subject = "Maths"; //this is not recommeded for creating properties.
//         this.address = {          //Create properties in object form.
//             Pincode:482002,
//             Street:"Civil line"
//         };

//         this.state = { //this is best way for creating properties 
//             OptionalSubject:"CS",
//             Level: "Expert"
//         }
//     }

//     render()
//     {
//         const {OptionalSubject,Level} = this.state;  //Object destructuing.

//         return(<>

//            <h2>Expert in {this.subject}</h2>
//            <h3>Address Pincode = {this.address.Pincode}</h3>
//            <h3>Address Street = {this.address.Street}</h3>
//            <h3>{OptionalSubject} {Level}</h3>
//         </>
//         )
//     }
// }

// const jroot = ReactDOM.createRoot(document.getElementById("root"));
// jroot.render(<FStudent/>);



class Input extends Component //input is invalid name of component, first character should be capital.
{

    render()
    {
        return(
            <>
            
            <h2>Hello Tech!!</h2>
            <input type="text"/>
            <button type="button">Save</button>

            </>
        )
    }

}

// const kroot = ReactDOM.createRoot(document.getElementById("root"));

// // kroot.render(<input/>)
// kroot.render(<Input/>)



//Props

// function DIndex()
// {
//   return (<>
  
//     <Greeting name="Arjun" percentage={85}/>
//     <Greeting name="Abrar" percentage={95}/>

//   </>)
// }

// const lroot = ReactDOM.createRoot(document.getElementById("root"));
// lroot.render(<DIndex/>);


// function EIndex()
// {
//     return(<>
       
//        <Greet name="Aman" percentage={75}/>
//        <Greet name="Tom" percentage={78}/>

//     </>)
// }

// const mroot = ReactDOM.createRoot(document.getElementById("root"));

// mroot.render(<EIndex/>);



class FIndex extends Component
{
    render()
    {
        return(<>
         <Greet name="Ankita" percentage={88}/>
         <Greet name="Nishi" percentage={78}/>
        </>)
    }
}

const nroot = ReactDOM.createRoot(document.getElementById("root"));

nroot.render(<FIndex/>);

//Pure and Impure functions in Javascript











