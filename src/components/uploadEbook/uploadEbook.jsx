import React, {useState} from 'react';
import { Col, Container, Nav, Navbar, Row, ListGroup, Alert, Form as Form1 } from 'react-bootstrap';
import { Button, Modal,  Form, Input, InputNumber, Select  } from 'antd';
import "video-react/dist/video-react.css";
import './uploadEbook.css';
import { faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Image } from 'antd';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { Option } from 'antd/es/mentions';
const { Dragger } = Upload;


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const onFinish = (values) => {
    console.log(values);
};

const UploadEbook = () => {
    const [bookTitle, setBookTitle] = useState("Title");
    const [bookIntroduction, setBookIntroduction] = useState("");
    const [bookCategory, setBookCategory] = useState("trading");
    const [bookType, setBookType] = useState("free");
    const [bookPrice, setBookPrice] = useState(0);
    const [pic, setPic] = useState(null);

    const [title, setTitle] = useState("Title");
    const [modal1Open, setModal1Open] = useState(true);
    const [contents, setContents] = useState([{
        title: "Title 1",
        content: ""
    }])

    const [selected, setSelected] = useState(0);

    const addItem = () => {
        let temp = contents;
        temp = [...temp, {title: `Title ${contents.length + 1}`, content: ""}];
        setContents(temp);
    }

    const deleteItem = () => {

    }

    const [error, setError] = useState("");

    const [selectedChapterTitle, setSelectedChapterTitle] = useState("");
    const [selectedChapterContent, setSelectedChapterContent] = useState("");


    const handleChapterTitleChange = (e) => {
        const items =  contents;
        items[selected].title = e.target.value;
        setSelectedChapterTitle(e.target.value);
        setContents(items);
    }

    const handleChapterContentChange = (e) => {
        const items =  contents;
        items[selected].content = e.target.value;
        setSelectedChapterContent(e.target.value);
        setContents(items);
    }

    const navigate = useNavigate()

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');

    const formItemLayout =
        formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

    const buttonItemLayout =
        formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

    const handleChange = async ({ file }) => {
        try {
            const formData = new FormData();
            formData.append("file", file.originFileObj);
        
            const response = await axios.post("http://localhost:5000/works/upload/image", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            });
        
            if (response.data && response.data.url) {
                setPic(response.data.url);
                console.log(response.data.url);
                file.status = 'done';
            } else {
                console.log("Invalid response from the server");
            }
        } catch (error) {
            console.log("Error uploading image:", error.message);
        }
    };

    const postBook = async (event) => {

        event.preventDefault();
        
        if (!bookTitle){
            setError("Book Title is Required!");
            return;
        }
        if (!bookIntroduction){
            setError("Book Introduction is Required!");
            return;
        }
        if (!pic){
            setError("Book Cover Image is Required!");
            return;
        }

        let flag = false;
        contents.forEach((content, index) => {
            if (!content.title){
                setError(`Title of Content#${index+1} is Required!`);
                flag = true;
                return;
            }
            if (!content.content){
                setError(`Content of Content#${index+1} is Required!`);
                flag = true;
                return;
            }
        })

        if (flag){
            return;
        }

        setError("");

        try {
            const formData = new FormData();
            formData.append("title", bookTitle);
            formData.append("introduction", bookIntroduction);
            formData.append("category", bookCategory);
            formData.append("coverImage", pic);
            formData.append("contents", JSON.stringify(contents));
            formData.append("price", bookPrice);
            formData.append("bookType", bookType);

            console.log(formData);
        
            const response = await axios.post("http://localhost:5000/works/ebooks", {
                title: bookTitle,
                introduction: bookIntroduction,
                category: bookCategory,
                coverImage: pic,
                contents: contents,
                price: bookPrice,
                bookType: bookType
            }, {
                headers: {
                    "Content-Type": "application/json", // Set content type to JSON
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

        
            console.log("Ebook uploaded successfully:", response.data);
            navigate('/manage/works');
        } catch (error) {
            setError(error.message);
            console.error("Error uploading ebook:", error.message);
        }
    }

    return (
        <>
            <Navbar collapseOnSelect expand="md" className="bg-body" style={{borderBottom: '1px solid lightgray' }}>
                <Container>
                    <Navbar.Brand>{bookTitle}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to={'/manage/works'}><Button danger>Cancel</Button></Link>
                            <Button type='primary' danger style={{marginLeft: '10px'}} onClick={postBook}>Post</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            {
                error ?
                <Row>
                    <Container style={{width: '90%'}} className='mt-3'>
                        <Alert variant='danger'>
                            {error}
                        </Alert>
                    </Container>
                </Row>
                : ''
            }
            <Row md={3} xs={1} style={{width: '100%', '--bs-gutter-x': '0rem'}}>
                <Col md={3} xs={12} className='shadow' style={{border: '1px solid lightgray', padding: '10px 15px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h5>Contents</h5>
                        <FontAwesomeIcon icon={faPlus} onClick={addItem}/>
                    </div>
                    <ListGroup defaultActiveKey={`#${contents[0].title}`}>
                        {
                            contents.map((element, index) => {
                                return (
                                    <ListGroup.Item key={index} action href={`#${element.title}`} onClick={() => {
                                        setSelected(index);
                                        setSelectedChapterTitle(contents[index].title);
                                        setSelectedChapterContent(contents[index].content);
                                    }}>
                                        {element.title}
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>

                </Col>
                <Col md={6} xs={12} className='shadow' style={{border: '1px solid lightgray', padding: '10px 15px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h5>Chapter Details</h5>
                    </div>
                    <Form.Item label="Title">
                        <Input value={selectedChapterTitle} onChange={handleChapterTitleChange}/>
                    </Form.Item>
                    <Form.Item label="Contents">
                        <TextArea rows={10} value={selectedChapterContent} onChange={handleChapterContentChange}/>
                    </Form.Item>
                </Col>
                <Col md={3} xs={12} className='shadow' style={{border: '1px solid lightgray', padding: '10px 15px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h5>Book Details</h5>
                        <FontAwesomeIcon icon={faPenToSquare} onClick={() => setModal1Open(true)}/>
                    </div>
                    <hr />

                    <p><b>Cover Image</b></p>
                    <Image
                        width={200}
                        src={pic}
                        placeholder={
                        <Image
                            preview={false}
                            src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952tfzojw08m6i7xegbp1fsnh2pebxy0qqbu9c5pcww&ep=v1_gifs_search&rid=200w.gif&ct=g"
                            width={200}
                        />
                        }
                    />

                    <hr />
                    <p><b>Book Description</b></p>
                    <p>{bookIntroduction}</p>

                    <hr />
                    <p><b>Book Category</b></p>
                    <p>{bookCategory}</p>

                    <hr />
                    <p><b>Book Pricing</b></p>
                    <p>{bookType == 'free' ? "Free" : `Paid - $${bookPrice}`}</p>


                </Col>
            </Row>

            <Modal
                title="Upload E-book"
                centered
                open={modal1Open}
                onOk={() => {
                    onFinish();
                    setModal1Open(false);
                }}
                onCancel={() => {
                    setModal1Open(false);
                    navigate('/manage/works');
                }}
            >
                <Form
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                        padding: 10
                    }}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                    name={['user', 'title']}
                    label="Title"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                    <Input onChange={(e) => setBookTitle(e.target.value)} value={bookTitle}/>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Introduction" rules={[
                        {
                        required: true,
                        },
                    ]}>
                    <Input.TextArea onChange={(e) => setBookIntroduction(e.target.value)} value={bookIntroduction}/>
                    </Form.Item>
                    <Form.Item name={['user', 'category']} label="Category" rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Select 
                        defaultValue="trading"
                        style={{
                        width: 120,
                        }}
                        options={[
                        {
                            value: 'education',
                            label: 'Education',
                        },
                        {
                            value: 'trading',
                            label: 'Trading',
                        },
                        {
                            value: 'business',
                            label: 'Business',
                        },
                        {
                            value: 'stocks',
                            label: 'Stocks',
                        },
                        ]} 
                        onChange={(value) => setBookCategory(value)}
                    />
                    </Form.Item>
                    <Form.Item name={['user', 'type']} label="Type" rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Select 
                        defaultValue="free"
                        style={{
                        width: 120,
                        }}
                        options={[
                        {
                            value: 'free',
                            label: 'Free',
                        },
                        {
                            value: 'paid',
                            label: 'Paid',
                        },
                        ]} 
                        onChange={(value) => setBookType(value)}
                    />
                    </Form.Item>
                    {
                        bookType != 'free' ?
                        <Form.Item name={['user', 'price']} label="Price" rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <InputNumber min={1} max={10000} defaultValue={1} onChange={(value)=>setBookPrice(value)} />
                        </Form.Item>
                        : ''
                    }    
                    <Form.Item
                    name={['user', 'cover']}
                    label="Cover"
                    rules={[
                        {
                        required: true
                        },
                    ]}
                    >
                        <Dragger 
                            accept=".png"
                            listType="picture"
                            maxCount={1}
                            name="file" // Ensure that the field name matches the server's expected field name
                            onChange={handleChange}
                            onDrop = {(e) => {
                                console.log('Dropped files', e.dataTransfer.files)
                            }}
                        >
                            <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Uploading high resolution image is recommended!
                            </p>
                        </Dragger>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default UploadEbook;