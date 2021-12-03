import Star from 'assets/images/star.png';

import './styles.css';

type Props = {
  username: string;
  comment: string;
};

const CardReview = ({ username, comment }: Props) => {
  return (
    <div className="card-review-container">
      <div className="card-review-title">
        <img src={Star} alt="star" />
        <h6>{username}</h6>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default CardReview;
