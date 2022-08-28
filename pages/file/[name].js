import React from "react";
import Image from "next/image";
import ContactForm from "../../compos/FormDetail";
import CommentsUi from "../../compos/CommentsUi";
import { imageDes } from "../../utils/constant";
import { useRouter } from "next/router";

const Detail = () => {
  const { query } = useRouter();
  const keys = Object.keys(query);
  return (
    <div className="file-detail">
      <div className="file-wrapper">
        <Image src={keys[0]} alt={keys[1]} height="360" width="640" />
        <div className="img-des">
          <p>{imageDes}</p>
        </div>
      </div>
      <hr style={{ color: "rgb(81, 71, 71)", margin: "4rem auto 2rem" }} />
      <CommentsUi name={query.name} />
      <ContactForm name={query.name} />
    </div>
  );
};

export default Detail;
