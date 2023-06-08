import Tour from "./Tour";

const Tours = ({ data, removeTour }) => {
  // const [id] = props;

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {data ? (
          data.map((item) => (
            <Tour key={item.id} {...item} removeTour={removeTour} />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </section>
  );
};

export default Tours;
