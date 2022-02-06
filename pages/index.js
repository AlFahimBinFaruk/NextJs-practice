import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Image from "next/image";
import { useState } from "react";
import SingleCard from "../components/SingleCard";
import styles from "../styles/Home.module.css";

const blogs = [
  { title: "Blog Number one", desc: "Hello i am al-fahim bin faruk." },
  { title: "Blog Number two", desc: "This is my First Blog" },
  { title: "Blog Number three", desc: "this is blog no one" },
  { title: "blog Four", desc: "this is blog no one" },
  { title: "blog one", desc: "this is blog no one" },
  { title: "blog one", desc: "this is blog no one" },
  { title: "blog one", desc: "this is blog no one" },
  { title: "blog one", desc: "this is blog no one" },
  { title: "blog one", desc: "this is blog no one" },
];


function Home({ blogs }) {
  return (
    <div className={styles.container}>
      <MDBContainer className="my-5">
        <h4 className="text-center mb-2">Your Blogs</h4>
        <MDBRow>
          {blogs &&
            blogs.map((i) => {
              return (
                <MDBCol md="3">
                  <SingleCard {...i} />
                </MDBCol>
              );
            })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}


export async function getServerSideProps(context) {
  const req=context.req;
  const res=context.res;
  return {
    props: {
      blogs
    }
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       blogs,
//     },
//     revalidate:1
//   };
// }

export default Home;
