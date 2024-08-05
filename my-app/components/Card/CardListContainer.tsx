import { CardList } from "./CardList";

const data = [
  {
    title: "Mathematics",
    description: "Dive into the world of numbers and unlock the secrets of equations, geometry, and calculus. This course offers a comprehensive approach to mastering mathematical concepts, from basic arithmetic to advanced problem-solving techniques. Perfect for students and enthusiasts aiming to enhance their analytical skills.",
    thumbnail: "/images/math.png",
    url: "https://www.coursera.org/courses?query=mathematics",
  },
  {
    title: "Science",
    description: "Embark on a journey through the fascinating realms of biology, chemistry, and physics. Our Science course provides hands-on experiments and interactive lessons designed to ignite curiosity and foster a deep understanding of the natural world. Ideal for aspiring scientists and curious minds.",
    thumbnail: "/images/science.png",
    url: "https://www.coursera.org/browse/health/basic-science",
  },
  {
    title: "History",
    description: "Travel back in time to discover the events and figures that shaped our world. This course covers ancient civilizations, pivotal moments, and influential leaders, offering a comprehensive overview of global history. Perfect for history buffs and those seeking to understand the past's impact on the present.",
    thumbnail: "/images/history.png",
    url: "https://www.coursera.org/browse/arts-and-humanities/history",
  },
  {
    title: "Language Arts",
    description: "Enhance your reading, writing, and communication skills with our Language Arts course. Through engaging lessons and creative projects, you'll explore literature, grammar, and effective expression. Ideal for students and professionals aiming to refine their language abilities and creativity.",
    thumbnail: "/images/langart.png",
    url: "https://www.goodandbeautiful.com/pre-k-8-curriculum/language-arts/",
  },
];

function CardListContainer() {
  return <CardList cards={data} />;
}

export { CardListContainer };