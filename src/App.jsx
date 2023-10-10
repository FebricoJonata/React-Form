import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";

function Form() {
  return (
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="name" class="form-control" placeholder="Enter Name" />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" placeholder="Enter Email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" />
      </div>
      <div class="form-group">
        <label for="inputfile">Profile Picture</label> <br />
        <input type="file" class="form-control-file" />
      </div>
      <div className="form-group">
      <label for="gender">Choose Gender</label> <br />
        <select class="custom-select custom-select-sm">
          <option selected>Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
      </div>
      <div class="form-group">
        <input type="checkbox" class="form-check-input" />
        <label class="form-check-label mx-2" for="check-box">
          Agree with Terms and Condition
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

const App = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div className="form-box">
          <h1>Form</h1>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
