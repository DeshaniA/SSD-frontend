
import React, { useState ,useEffect} from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct,deleteproductbyid,updateproductbyid } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';
import axios from "axios";

//create products function
const ViewText = (props) => {
    
    const [conference, setConference] = useState([]);
    
    const [paperDetailModal, setProductDetails] = useState(null);
console.log("ddddd");
    useEffect(() => {
        function getConference() {
            axios.get("http://localhost:8065/api/workertask/getalltext/").then((res) => {
                setConference(res.data.data);
                console.log(res.data);
                console.log(res.data.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getConference();
    }, []);
   
    const handleCloseProductDetailsModal = () => {
        setProductDetails(false);
    }
    //show product detail modal
    const showProductDetailModal = (product) => {

        setProductDetails(product);
        //setProductDetailModal(true);
        console.log('nnn'+product);

    }
    const renderProductDetailsModal = () => {

        if (!paperDetailModal) {
            return null;
        }
        console.log('nnn');

        
        return (
            <Modal
                show={paperDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Reaseach paper details'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">Title</label>
                        <p className="key">{paperDetailModal.title}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Description</label>
                        <p className="key">{paperDetailModal.text}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.editorname}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.date}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.time}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.conductor}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.venue}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.email}</p>
                    </Col>
                    
                </Row>
                {/* <Row>
                    <Col md="12">
                        <label className="key">Description</label>
                        <p className="key">{productDetails.description}</p>
                    </Col>

                </Row> */}
                

            </Modal>
        );
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col >
                        <div>
                            <h3>WORKER TASKS </h3>
                            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr >
                        
                        <th>Title</th>
                        <th>Description</th>
                        
                        

                    </tr>
                </thead>
                {/* .filter((p)=>p.status == "pending") */}
                <tbody>{conference.map((conference, index) => (
                            <tr >
                                
                                <td onClick={() => showProductDetailModal(conference)}
                            key={conference._id}>{conference.title}</td>
                                <td>{conference.text}</td>
                                <td>{conference.date}</td>
                                
                                
                               

                            </tr>
                ))}</tbody>
            </Table>
                           
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                       
                    </Col>

                </Row>
            </Container>
            
            {renderProductDetailsModal()} 
            

        </Layout>
    )
}

export default ViewText