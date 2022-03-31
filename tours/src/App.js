import Tour from "./components/Tour/Tour";

const url = "https://course-api.com/react-tours-project";

function App() {
  return (
    <div className="container">
      <h2 className="container__title">Our Tours</h2>
      <Tour />
    </div>
  );
}

export default App;

//loading page
//app-->tour--> tourdetails
