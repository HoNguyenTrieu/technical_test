import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PublicNavbar from "./components/PublicNavbar";
import { leadActions } from "./redux/actions/lead.action";
import { Button, Container, Table } from "react-bootstrap";
import ModalPage from "./components/ModalPage";

function App() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const leads = useSelector((state) => state.leads.leads);
  console.log(leads);

  useEffect(() => {
    dispatch(leadActions.getLeads());
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <PublicNavbar />
      <Container>
        <ModalPage
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
        <Button variant="dark" className="mb-3 mt-3" onClick={handleShow}>
          Add Lead
        </Button>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Num</th>
              <th>Location Type</th>
              <th>Location String</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.first_name}</td>
                <td>{lead.email}</td>
                <td>{lead.mobile}</td>
                <td>{lead.location_type}</td>
                <td>{lead.location_string}</td>
                <td className="d-flex">
                  <div>
                    <Button variant="primary" size="sm">
                      Mark Update
                    </Button>{" "}
                    <Button variant="primary" size="sm">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default App;
