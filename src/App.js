import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import { useState } from "react";
import { Container } from "react-bootstrap";
function App() {
  const [personData, setPersonData] = useState(person);
  const onDeleteData = () => {
    setPersonData([]);
  };
  const onViewData = () => {
    setPersonData(person);
  };
  return (
    <>
      <Container className="py-5 ">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction onDeleteData={onDeleteData} onViewData={onViewData} />
      </Container>
    </>
  );
}

export default App;
