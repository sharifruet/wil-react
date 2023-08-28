import React from 'react';
import EbookCard from './EbookCard';
import { Col, Container, Row } from 'react-bootstrap';

const Ebook = () => {
  // List of PDF filenames
  const pdfs = [
      {name: "আশূরায়ে মুহাররম ও আমাদের করণীয়", author:"মুহাম্মাদ আসাদুল্লাহ আল-গালিব", fileName:"Ashura-i-muharram_by_prof._dr._muhammad_asadullah_al-ghalib.pdf"}, 
      {name: "তরজমাতুল কুরআন", author:"মুহাম্মাদ আসাদুল্লাহ আল-গালিব", fileName:"Tarjamatul_Quran_1-30_ para_by_prof_dr_asadullah_al-ghalib_demo.pdf"}, 
      {name: "বিবর্তনবাদ", author:"মুহাম্মাদ আসাদুল্লাহ আল-গালিব", fileName:"bibortonbad_by_prof._dr._muhammad_asadullah_al-ghalib.pdf"}, 
      {name: "হাদীছ অস্বীকারকারীদের সংশয় নিরসন", author:"ড. আহমাদ আব্দুল্লাহ ছাকিব", fileName:"hadeeth_oshikar_by_Dr._saqib_demo.pdf"}, 
      {name: "ইকামতে দ্বীন : পথ ও পদ্ধতি", author:"মুহাম্মাদ আসাদুল্লাহ আল-গালিব", fileName:"iqamate-din-poth-o-podhoti_by_prof._dr._muhammad_asadullah_al-ghalib.pdf"}, 
      {name: "মৃত্যুকে স্মরণ", author:"মুহাম্মাদ আসাদুল্লাহ আল-গালিব", fileName:"mrittuke_soron_by_prof._dr._muhammad_asadullah_al-ghalib.pdf"}, 
      {name: "অল্পে তুষ্টি : জীবনের প্রশান্তি", author:"আব্দুল্লাহ আল-মা‘রূফ", fileName:"olpe tusti_by_abdullah_al_maruf.pdf"}, 
      {name: "সীরাতুর রাসূল (ছাঃ)", author:"মুহাম্মাদ আসাদুল্লাহ আল-গালিব", fileName:"seeratur_Rasool _SM_by_prof_dr._muhammad_asadullah_al_ghalib.pdf"}, 
      {name: "ছিয়াম ও ক্বিয়াম", author:"মুহাম্মাদ আসাদুল্লাহ আল-গালিব", fileName:"siyam_o_qiyam_by_prof._dr._muhammad_asadullah_al-ghalib.pdf"}, 
    ]; // Add your PDF filenames

  return (
    <Container>
      <h1 className="m-2 border-bottom border-info">ফ্রি ই-বুক</h1>
      <Row>
        {pdfs.map((pdf, index) => (
          <Col key={index} className="mb-4">
            <EbookCard ebook={pdf} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Ebook;

