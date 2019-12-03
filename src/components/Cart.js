import React, {Component} from 'react';
import { throwStatement } from '@babel/types';

// Old
function Cart(){
        return(
          <div>
              <table className="table table-bordered table-hover">
                  <tbody>
                      <tr>
                     
                      </tr>
                  </tbody>
              </table>
          </div>
        );
  }

// ES6
class Cart extends Component{
    render() {
        return(
          <div>
              <table className="table table-bordered table-hover">
                  <tbody>
                      <tr>
                     
                      </tr>
                  </tbody>
              </table>
          </div>
        );
      }
  }

export default Cart;
