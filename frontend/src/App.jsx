function App() {
  const firstname ="David";
  const middlename="Alan";
  const surname="Smith";
  const age="23";
  const country="Sri Lanka";
  const getFullName=(f,m,s) =>{
    return `${f} ${m} ${s}`;
  }
  return (
    <>
      <div className="cont">
        <h1>Study Time Tracker</h1>
        <p>Full name : {firstname}{middlename}{surname}</p>
        <p>Full Name (using function) :{getFullName("Himansha","Dewmin","Jayalath Pathiranage")}</p>
        <p>Age :{age}</p>
        <p>Country: {country}</p>
      </div>
    </>
  );
}

export default App;
