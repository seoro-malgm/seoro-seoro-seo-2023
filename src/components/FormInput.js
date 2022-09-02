function LabelText(props) {
  return props.name ? <div>{props.name}</div> : <></>;
}

export default function FormInput(
  props = {
    type: "text",
    name: null,
  }
) {
  return (
    <div className="form-input">
      <label>
        <LabelText name={props.name}></LabelText>
        <input type={props.type} placeholder={props.placeholder || `${props.name}을 입력하세요`} />
      </label>
    </div>
  );
}
