import React, {Component} from 'react';

// Content component (Class -> ES6)
class Content extends Component{

// Define State
constructor(props){
    super(props);

    // this.addToCard = this.addToCard.bind(this);

    this.state = {
      total : 0,
      qty : 0,
    };
  }

  addToCard(priceBook){

    alert(this)
      this.setState({
          qty : this.state.qty + 1,
          total : this.state.total + priceBook
      });
      console.log(this.state.total);
  }

  cancel(priceBook){
    this.setState({
        qty : this.state.qty - 1,
        total : this.state.total - priceBook
    });

}

  render() {

    let backGround = {
        backgroundColor: 'yellow',
    };

     let contentInfo = this.props.books.map((book, index) => {
        let bookInfo = '';
        bookInfo =  
            <div key={book.id} className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    ID : {book.id}  
                    <img alt="Product1" src = {book.image} width = "400px" height="200px"/>
                        <div className="caption">
                            <h3>Title : {book.name}</h3>
                            <p>
                                ID : {book.children}
                                <br/>
                                Price : {book.price} {book.unit}
                                <br/>
                                Status : {book.qty > 0 ? 'Remaining' : 'Out of stock'}
                            </p>
                            <br/>
                            <div >
                                <button type="button" className="btn btn-default" onClick={() => this.addToCard(book.price)}>Add To Card</button>
                                <button type="button" className="btn btn-default" onClick={() => this.cancel(book.price)}>Cancel</button>
                            </div>     
                </div>
            </div>
        </div>
        return bookInfo;
     })

      return(
          <div>
              <div style={backGround}>
                <h2>Shopping Cart</h2>
              </div>
             
              <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                    <th>Quantity : {this.state.qty}</th>
                    </tr>
                    <tr>
                    <th>Totals :  {this.state.total} VND</th>
                    </tr>
                </thead>
                </table>
              <br/>
                {contentInfo}
               <br/>
                
            </div> 
      );
    }
}

export default Content;