import Tour from "./Tour";

const Tours = ({ data, removeTour }) => {
  // const [id] = props;

  return (
    <section className="tours">
      {data ? (
        data.map((item) => (
          <Tour key={item.id} {...item} removeTour={removeTour} />
        ))
      ) : (
        <p></p>
      )}
    </section>
  );
};

export default Tours;
