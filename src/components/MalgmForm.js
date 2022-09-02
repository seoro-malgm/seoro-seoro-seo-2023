export default function MalgmForm(props) {
  return (
    <form action="submit">
      <section>{props.children}</section>
      <footer>
        <button type="submit">제출하기</button>
      </footer>
    </form>
  );
}
