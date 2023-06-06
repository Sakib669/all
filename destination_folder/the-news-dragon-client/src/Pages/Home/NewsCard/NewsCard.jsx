import moment from 'moment';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const NewsCard = ({ news }) => {

    const { thumbnail_url, author, total_view, title, rating, details, _id, image_url } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ width: '40px', height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='fw-bold mb-0'>
                        {author?.name}
                    </p>
                    <p className='text-secondary'>
                        <small>
                            {moment(author.published_date).format('yyyy-mm-D')}

                        </small>
                    </p>
                </div>


                <div className='text-secondary'>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Img src={image_url} alt="" />
                <Card.Text className='text-secondary'>
                    {details.length < 250 ?
                        <>{details}</>
                        :
                        <>{details.slice(0, 250)}... <Link className='text-warning' to={`/news/${_id}`}>Read More</Link>
                        </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex' >
                <div className='flex-grow-1 align-items-center d-flex'>
                    <Rating style={{ maxWidth: 100 }}
                     value={Math.round(rating.number || 0)}
                      readOnly />
                    <span className='ms-2'>
                        {rating.number}
                    </span>
                </div>
                <div className="text-secondary">
                    <FaEye></FaEye>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;