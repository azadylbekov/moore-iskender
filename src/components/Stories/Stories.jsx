import React from "react";
import { Container } from "../Container";
import styles from "./Stories.module.scss";
import photo1 from "@/assets/images/stories/photo1.png";
import photo2 from "@/assets/images/stories/photo2.png";
import photo3 from "@/assets/images/stories/photo3.png";
import photo4 from "@/assets/images/stories/photo4.png";
import photo5 from "@/assets/images/stories/photo5.png";

const stories = [
  {
    id: 1,
    text: "Скидки",
    image: photo1,
  },
  {
    id: 2,
    text: "Акции",
    image: photo2,
  },
  {
    id: 3,
    text: "Распродажа",
    image: photo3,
  },
  {
    id: 4,
    text: "Подарки",
    image: photo4,
  },
  {
    id: 5,
    text: "Подарки",
    image: photo5,
  },
];

for (let i = 1; i < 9; i++) {
	let story = {
		id: stories[stories.length - 1].id + i,
		text: '',
		image: null
	}
	stories.push(story)
}

export const Stories = () => {

  return (
    <div className={styles.storyBlock}>
      <Container>
        <div>
          {stories.map((story) => (
            <div key={story.id} className={styles.storyItem}>
              <div className={story.image ? styles.storyImg : styles.storyNoImg}>
                {story.image && <img src={story.image} alt="" />}
              </div>
              <span className={!story.text ? styles.storyNoText : ""}>{story.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
