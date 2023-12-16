import React, {useState} from 'react'
import EbookComponent from '../ebookComponent';
import { Col, Container, Row } from 'react-bootstrap';

const WorksEbooks = () => {
    const [ebooks, setEbooks] = useState([
        {
            id: 123,
            title: "Book Title 1",
            authorName: "John",
            authorProfilePic: "https://media.istockphoto.com/id/968526678/photo/laughing-young-man-on-gray-background.jpg?s=612x612&w=0&k=20&c=08IdwXc1pONirofr6ngH76a5o8ziLBXv2xR6XocOwkg=",
            authorId: "123",
            coverImage: "https://www.wowmakers.com/static/Video-thumbnail-e743f3689ca0c0bac8faab39023da37f.jpeg",
            type: "Free",
        },
        {
            id: 123,
            title: "Book Title 1",
            authorName: "John",
            authorProfilePic: "https://media.istockphoto.com/id/968526678/photo/laughing-young-man-on-gray-background.jpg?s=612x612&w=0&k=20&c=08IdwXc1pONirofr6ngH76a5o8ziLBXv2xR6XocOwkg=",
            authorId: "123",
            coverImage: "https://www.wowmakers.com/static/Video-thumbnail-e743f3689ca0c0bac8faab39023da37f.jpeg",
            type: "Free",
        },
        {
            id: 123,
            title: "Book Title 1",
            authorName: "John",
            authorProfilePic: "https://media.istockphoto.com/id/968526678/photo/laughing-young-man-on-gray-background.jpg?s=612x612&w=0&k=20&c=08IdwXc1pONirofr6ngH76a5o8ziLBXv2xR6XocOwkg=",
            authorId: "123",
            coverImage: "https://www.wowmakers.com/static/Video-thumbnail-e743f3689ca0c0bac8faab39023da37f.jpeg",
            type: "Free",
        },
        {
            id: 123,
            title: "Book Title 1",
            authorName: "John",
            authorProfilePic: "https://media.istockphoto.com/id/968526678/photo/laughing-young-man-on-gray-background.jpg?s=612x612&w=0&k=20&c=08IdwXc1pONirofr6ngH76a5o8ziLBXv2xR6XocOwkg=",
            authorId: "123",
            coverImage: "https://www.wowmakers.com/static/Video-thumbnail-e743f3689ca0c0bac8faab39023da37f.jpeg",
            type: "Paid",
        },
        {
            id: 123,
            title: "Book Title 1",
            authorName: "John",
            authorProfilePic: "https://media.istockphoto.com/id/968526678/photo/laughing-young-man-on-gray-background.jpg?s=612x612&w=0&k=20&c=08IdwXc1pONirofr6ngH76a5o8ziLBXv2xR6XocOwkg=",
            authorId: "123",
            coverImage: "https://www.wowmakers.com/static/Video-thumbnail-e743f3689ca0c0bac8faab39023da37f.jpeg",
            type: "Free",
        },
    ]); 

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
                                    <EbookComponent key={index} ebook={ebook}/>
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