import Card from 'react-bootstrap/Card';

const EbookCard = ({ ebook }) =>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{ebook.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ebook.author}</Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link href={`/pdfs/${ebook.fileName}`}> পড়ুন </Card.Link>
        <Card.Link href={`/pdfs/${ebook.fileName}`}> ডাউনলোড করুন </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default EbookCard;