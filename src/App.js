import  Button  from './components/Button';
import Footer from './components/Footer';
// this function creates the App component which contains the form element
function App() {

  return (
    <div className="App">
          <main className="form-signin w-100 m-auto">
           {/* form element */}
            <form>
                <Header/>
                <Input type={"email"} placeholder={"name@example.com"} id={"floatingInput"} labelValue={"Email address"} />
                <Input type={"password"} placeholder={"password"} id={"floatingPassword"} labelValue={"Password"} />
                <Checkbox>  </Checkbox>
                <Button>Cliquer ici</Button>
                <Footer></Footer> 
            </form>
          </main>
    </div>
  );
}
// default export of the App components

export default App;