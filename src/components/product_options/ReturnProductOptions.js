import TShirtOptions from "../../components/product_options/TShirtOptions";

export default function ReturnProductOptions(state) {
    const option = state.state.type;
    const product = state.state;
    console.log(state);
    if (option === "camisa") {
      return (
        <TShirtOptions
          product={product}
          options={state.options}
          setOptions={state.setOptions}
        />
      );
    } else if (option === "chuteira") {
      return "BootOptions";
    } else if (option === "bola") {
      return "BallOptions";
    }
  }