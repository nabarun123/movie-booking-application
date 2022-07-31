import React, { useState, useEffect } from "react";
import { getAllTheatres } from "../../api/theatres";
import MaterialTable from "@material-table/core";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import Footer from "../../components/footer/Footer";
import { Modal, Button } from "react-bootstrap";

function TheatresList() {
  const [theatresList, setTheatresList] = useState([]);
  const [selectedTheatre, setSelectedTheatre] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllTheatres()
      .then((response) => {
        const { data, status } = response;
        if (status === 200) {
          console.log(data);
          setTheatresList(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteTheatre = (rowData) => {
    const theatreId = rowData._id;
    const theatresListAfterDelete = theatresList.filter((theatre) => {
      const { _id } = theatre; // taking the id of the theatre
      return _id !== theatreId;
    });
    setTheatresList(theatresListAfterDelete);
  };

  const editTheatre = (rowData) => {
    setSelectedTheatre({ ...rowData });
    setShowModal(true);
  };

  return (
    <div>
      <div>
        <MaterialTable
          data={theatresList}
          title="THEATRES LIST"
          columns={[
            {
              title: "Theatre Name",
              field: "name",
            },
            {
              title: "Theater ID",
              field: "_id",
            },
            {
              title: "Description",
              field: "description",
            },
            {
              title: "Pin code",
              field: "pinCode",
            },
            {
              title: "City",
              field: "city",
            },
          ]}
          actions={[
            {
              icon: Edit,
              tooltip: "Edit Theater",
              onClick: (event, rowData) => {
                editTheatre(rowData);
              },
            },
            {
              icon: Delete,
              tooltip: "Delete Theater",
              onClick: (event, rowData) => {
                deleteTheatre(rowData);
              },
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            sorting: true,
            filtering: true,
            exportMenu: [
              {
                label: "Export PDF",
                exportFunc: (cols, datas) =>
                  ExportPdf(cols, datas, "Theater Records"),
              },
              {
                label: "Export CSV",
                exportFunc: (cols, datas) =>
                  ExportCsv(cols, datas, "Theater Records"),
              },
            ],

            headerStyle: {
              backgroundColor: "#202429",
              color: "#fff",
            },
            rowStyle: {
              backgroundColor: "#EEE",
            },
          }}
        />
      </div>

      {showModal && (
        <Modal
          show={showModal}
          onHide={() => {
            setShowModal(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>EDIT THEATRE HERE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h3>{selectedTheatre._id}</h3>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <Footer />
    </div>
  );
}

export default TheatresList;
