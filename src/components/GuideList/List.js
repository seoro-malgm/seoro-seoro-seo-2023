import Spinner from "components/Spinner";
export default function GuideList(props) {
  const { items } = props;

  function TagItem(props) {
    const items = props.item;
    return items.map((item) => <span className="tag">{item.name}</span>);
  }

  function ListItem(props) {
    const { id, content, major, subtopic, etc, reference } = props.item;
    console.log("reference", reference);
    return (
      <div className="list-item" key={id}>
        <header className="item-header">
          <h2>{content}</h2>
          <div className="info">
            <span>
              <i>{etc}</i>
            </span>
            {reference.length ? (
              <a href={reference[0]} target="_blank" rel="noopener noreferrer">
                참고자료
              </a>
            ) : (
              <></>
            )}
          </div>
        </header>
        <section className="item-footer">
          <div>
            <TagItem item={major} />
            <TagItem item={subtopic} />
          </div>
        </section>
      </div>
    );
  }

  const list = items.map((item) => {
    return (
      <li className="list-column">
        <ListItem item={item}></ListItem>
      </li>
    );
  });

  return <ul className="guide-list">{list && list.length ? list : <Spinner></Spinner>}</ul>;
}
