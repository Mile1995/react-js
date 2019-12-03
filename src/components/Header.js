import React, {Component} from 'react';

// Header component (Class -> ES6)
class Header extends Component{
    render() {
        return(
          <div>
              8888
               <nav className="navbar navbar-inverse">
                 <a className="navbar-brand">#State</a>
                 <ul className="nav navbar-nav">
                     <li className="active">
                         <a>Home</a>
                     </li>
                     <li className="active">
                         <a>Products</a>
                     </li>
                     <li className="active">
                         <a>Help</a>
                     </li>
                     <li className="active">
                         <a>Contact Us</a>
                     </li>
                 </ul>

                 <div>
                <form>
                    <input type="text" value=""></input>
                </form>
              </div>   
             </nav>

             <div>
                <form>
                    <input type="text" value=""></input>
                </form>
              </div>   
          </div>

          
        );
      }
  }

class Header2 extends Component{
    render()
    {
        return(
            <div >
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Q&amp;A</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>

            <div>
                <form>
                    <input type="text" value=""></input>
                </form>
              </div>
          </div>
        );
    }
}

export default Header;
