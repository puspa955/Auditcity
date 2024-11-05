import { Card, CardContent } from "../ui/card";

const Reviews = ({ count, rating }) => {
  return (
    <Card className="my-4">
      <CardContent>
        <h4>Reviews</h4>
        <p>{count} reviews</p>
        <p>Rating: {rating} / 5</p>
      </CardContent>
    </Card>
  );
};

export default Reviews;
