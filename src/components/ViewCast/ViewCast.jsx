import { useParams } from 'react-router-dom';

const ViewCast = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="test">
      <h1>{id}</h1>
    </div>
  );
};

export default ViewCast;
