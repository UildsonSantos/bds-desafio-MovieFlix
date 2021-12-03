import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <Link to="/movies">
      <button className="btn btn-primary">
        <h6>{text}</h6>
      </button>
      </Link>
    </div>
  );
};

export default ButtonIcon;