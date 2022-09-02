import { useEffect, useState } from "react";

import { Database } from "api/Database";
import GuideList from "components/GuideList/List";

export const Home = (props) => {
  const [db, setDB] = useState([]);

  async function getDB() {
    try {
      const { data } = await Database.getDB();
      if (data.results) {
        const items = data.results.map((item) => {
          const { properties, id } = item;
          const { content, major, subtopic, etc, reference } = properties;
          return {
            id,
            content: content?.title[0]?.plain_text,
            major: major.multi_select.map((m) => {
              return { color: m.color, name: m.name };
            }),
            subtopic: subtopic.multi_select.map((m) => {
              return { color: m.color, name: m.name };
            }),
            etc: etc?.rich_text.map((t) => t.plain_text),
            reference: reference?.rich_text.map((t) => t.plain_text),
          };
        });
        setDB(items);
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    getDB();
  }, []);

  return (
    <div>
      <GuideList items={db}></GuideList>
    </div>
  );
};
