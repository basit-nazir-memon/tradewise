import React, {useState, useEffect} from 'react'
import EbookComponent from '../ebookComponent';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const WorksEbooks = ({id}) => {
    const [ebooks, setEbooks] = useState([]); 

    const handleDeleteFunc = async (event, id) => {
        event.stopPropagation();

        const token = localStorage.getItem('token');
        try {
            const response = await axios.delete(
                `http://localhost:5000/works/ebooks/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            setEbooks((ebookss) => ebookss.filter((ebook) => ebook._id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        const fetchEbooksData = async () => {
            try {
                const token = localStorage.getItem('token');

                if (token) {
                    let url;

                    if (id){
                        url = `http://localhost:5000/works/author/${id}/ebooks`
                    }else{
                        url = 'http://localhost:5000/works/ebooks/mine'
                    }
        
                    const response = await axios.get(url, {
                        headers: {
                        Authorization: `Bearer ${token}`,
                        },
                    });
                    if (response.data){
                        setEbooks(response.data);
                    }
                } else {
                    console.log('Token not found.');
                }
            } catch (error) {
                console.error('Error fetching ebooks:', error);
            }
        };
        fetchEbooksData();
    }, []);
    

    return (
        <Container className='mt-3'>
            <div className="noContentFound" style={{display: ebooks.length > 0 ? "none" : "flex"}} >
                <img src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=740&t=st=1702639999~exp=1702640599~hmac=57eaf7377997c5ad7bc2636c7e4961d23db7764e6f2ac3fb2dd8908e33dc5237" alt="No Content Found" />
                <p>No Content Found</p>
            </div>
            <div style={{display: ebooks.length > 0 ? 'block' : "none"}}>
                <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                    {
                        ebooks.map((ebook, index) => {
                            return (
                                <Col>
                                    <EbookComponent key={index} ebook={ebook} isAuthor={id ? false : true} handleDelete={handleDeleteFunc}/>
                                </Col>
                            )
                        })
                    } 
                </Row>
            </div>
        </Container>
    )
}

export default WorksEbooks;