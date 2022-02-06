import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router'
const SingleCard = ({title,desc}) => {
    let router=useRouter()
  return (
    <MDBCard className='shadow my-1'>
    <MDBCardBody>
      <MDBCardTitle>{title}</MDBCardTitle>
      <MDBCardText>{desc}</MDBCardText>
      <MDBBtn onClick={()=>router.push(`/Blog/${title}`)}>Go somewhere</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  );
};

export default SingleCard;
