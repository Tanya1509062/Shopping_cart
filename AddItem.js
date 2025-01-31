import React from 'react';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render() { 
        return <form className="row mb-5">
        <div className="mb-3 col-4">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            aria-describedby="name"
            name="productName"
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="InputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price" name="productPrice"
          />
        </div>
        <button type="submit" className="btn btn-primary col-4" onClick={()=>{
            this.props.addItem()
        }}>
          Add
        </button>
      </form>
      ;
    }
}
 
export default AddItem;