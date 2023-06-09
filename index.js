const Box = (props) => {
  //  Write your code here.
  const { boxProperties, textContent } = props;
  return (
    <div className={`box ${boxProperties}`}>
      <p className="text-content"> {textContent} </p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="flex-container">
      <Box boxProperties="properties" textContent="Small" />
      <Box boxProperties="properties1" textContent="Medium" />
      <Box boxProperties="properties2" textContent="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
