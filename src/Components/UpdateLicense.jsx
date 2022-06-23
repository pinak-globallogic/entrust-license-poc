import React from 'react'

export default function UpdateLicense() {

    // const [name, setName] = useState(''); 
    // const [calories, setCalories] = useState(''); 
    // const [fat, setFat] = useState(''); 
    // const [carbs, setCarbs] = useState(''); 
    // const [protein, setProtein] = useState(''); 

        return (
          // <!-- Start of Project FORM -->
    
          <div className="project">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h5 className="display-4 text-center">Edit License</h5>
                  <hr />
                  <form onSubmit={(event) => this.submitHandler(event)}>
                    <div className="form-group">
                      <input
                        type="text"
                       // value={props.name}
                        onChange={(event) => this.changeHandler(event,"name")}
                        className="form-control form-control-lg "
    
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        value={this.state.accountNumber}
                        onChange={(event) => this.changeHandler(event,"accountNumber")}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        value={this.state.description}
                        onChange={(event) => this.changeHandler(event,"description")}
                        className="form-control form-control-lg"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <select className="form-control form-control-lg" name="priority" value="HIGH"
    >
                        <option value={3}>Define priority</option>
                        <option value={1}>High</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Low</option>
                      </select>
                    </div>
    
                    <div className="form-group">
                      <input
                        type="text"
                        onChange={(event) => this.changeHandler(event,"balance")}
                        className="form-control form-control-lg"
                        value="1000"
                      />
                    </div>
                    <input
                      type="submit"
                      onChange={(event) => this.changeHandler(event,"priority")}
                      className="btn btn-primary btn-block mt-4"
                      value="Update"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
    
          // <!-- END OF PROJECT FORM -->
        );
     
}

