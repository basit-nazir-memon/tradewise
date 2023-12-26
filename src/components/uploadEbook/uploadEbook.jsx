import React, {useState} from 'react';
import { Col, Container, Nav, Navbar, Row, ListGroup } from 'react-bootstrap';
import { Button, Modal,  Form, Input, InputNumber  } from 'antd';
import "video-react/dist/video-react.css";
import './uploadEbook.css';
import { faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Image } from 'antd';
import { useNavigate } from 'react-router';
import TextArea from 'antd/es/input/TextArea';
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
    const [pic, setPic] = useState(null);

    const [title, setTitle] = useState("Title");
    const [modal1Open, setModal1Open] = useState(true);
    const [contents, setContents] = useState([{
        title: "Title 1",
        content: ""
    }])

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
            console.log(info.file, info.fileList);
            }
            if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            setPic(info.file);
            } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const [selected, setSelected] = useState(0);

    const addItem = () => {
        let temp = contents;
        temp = [...temp, {title: `Title ${contents.length + 1}`, content: ""}];
        setContents(temp);
    }

    const deleteItem = () => {

    }


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
                            <Button danger>Cancel</Button>
                            <Button type='primary' danger style={{marginLeft: '10px'}}>Post</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
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
                        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${1}`}
                        placeholder={
                        <Image
                            preview={false}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                            width={200}
                        />
                        }
                    />

                    <hr />
                    <p><b>Book Description</b></p>
                    <p>{bookIntroduction}</p>

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
                    <Form.Item
                    name={['user', 'cover']}
                    label="Cover"
                    rules={[
                        {
                        required: true
                        },
                    ]}
                    >
                        <Dragger {...props} >
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