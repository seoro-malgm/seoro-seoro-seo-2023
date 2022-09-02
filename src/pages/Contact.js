import FormInput from "components/FormInput";
import MalgmForm from "components/MalgmForm";

export const Contact = () => {
  return (
    <div id="page-contact">
      <header className="contact-header">
        <h1>지금 구독하세요</h1>
        <span>지금 드리는 혜택 어쩌구</span>
      </header>
      <section>
        <MalgmForm>
          <FormInput name="닉네임"></FormInput>
          <FormInput name="이메일" type="email"></FormInput>
        </MalgmForm>
      </section>
    </div>
  );
};
