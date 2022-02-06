import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
} from "mdb-react-ui-kit";



const BlogDetails = ({ data }) => {
  return (
    <MDBContainer className="my-5">
    {data &&   <MDBCard className="mb-3">
        <MDBCardImage position="top" src={data.imgSrc} alt="..." />
        <MDBCardBody>
          <MDBCardTitle>{data.title}</MDBCardTitle>
          <MDBCardText>{data.desc}</MDBCardText>
          <MDBCardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>}
    </MDBContainer>
  );
};

export async function getServerSideProps(context) {
  const data = {
        id:context.params.slug ,
        imgSrc: "https://mdbootstrap.com/img/new/slides/041.webp",
        title: "JavaScript Mastery",
        desc: "When combined with Incremental Static Regeneration, getStaticProps will run in the background while the stale page is being revalidated, and the fresh page served to the browser.Because getStaticProps runs at build time, it does not have access to the incoming request (such as query parameters or HTTP headers) as it generates static HTML. If you need access to the request for your page, consider using Middleware in addition to getStaticProps.",
      };
  return {
    props: {data}// will be passed to the page component as props
  }
}

//****** is not generating data in page source *******/
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug:'m1' } }
//     ],
//     fallback: true // false or 'blocking'
//   };
// }

// export async function getStaticProps(context) {
//   const data = {
//     id:context.params.slug,
//     imgSrc: "https://mdbootstrap.com/img/new/slides/041.webp",
//     title: "JavaScript Mastery",
//     desc: "When combined with Incremental Static Regeneration, getStaticProps will run in the background while the stale page is being revalidated, and the fresh page served to the browser.Because getStaticProps runs at build time, it does not have access to the incoming request (such as query parameters or HTTP headers) as it generates static HTML. If you need access to the request for your page, consider using Middleware in addition to getStaticProps.",
//   };
//   return {
//     props: {data},
//   };
// }

export default BlogDetails;
