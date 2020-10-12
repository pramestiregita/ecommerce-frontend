/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
} from 'reactstrap';
import numeral from 'numeral';

// import components
import Rating from './StarRatings';

// import images
import image from '../assets/images/image.jpg';

const { REACT_APP_BACKEND_URL } = process.env;

export default function CardItem(props) {
  return (
    <>
      <Card className="rounded-lg shadow card-product">
        <CardImg top width="100%" src={props.image ? `${REACT_APP_BACKEND_URL}${props.image}` : image} alt="Item image" />
        <CardBody>
          <CardText className="m-0"><span className="font-weight-bold h6">{props.name}</span></CardText>
          <CardText className="m-0 mt-2">
            <span className="font-weight-bold h5 text-danger">
              Rp.
              {numeral(props.price).format(0, 0).toString().replace(',', '.')
                .replace(',', '.')}
            </span>
          </CardText>
          <CardText className="m-0 mt-2"><span className="text-muted h6">{props.store}</span></CardText>
          <CardText>
            <Rating number={props.ratings} />
          </CardText>
        </CardBody>
      </Card>
    </>
  );
}
