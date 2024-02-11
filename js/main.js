const posterList = getNode(".nav > ul");
const Background = getNode("body");
const Poster = getNode(".visual img");
const nickName = getNode(".nickName");

function addClass(node, value) {
  return node.classList.add(value);
}
function removeClass(node, value) {
  return node.classList.remove(value);
}

function handleSlide(e) {
  e.preventDefault();

  const target = e.target.closest("li");
  const a = e.target.closest("button");
  const list = [...posterList.children];
  console.log(list);
  if (!target || !a) return;

  const index = target.dataset.index;
  const SelectedPoster = data[index - 1];

  attr(Poster, "src", `./assets/${SelectedPoster.name.toLowerCase()}.jpeg`);
  attr(Poster, "alt", SelectedPoster.alt);
  nickName.textContent = SelectedPoster.name;

  const gradient = `linear-gradient(to bottom, ${SelectedPoster.color[0]}, ${SelectedPoster.color[1]})`;
  Background.style.backgroundImage = gradient;

  list.forEach((li) => removeClass(li, "is-active"));

  addClass(target, "is-active");
}

posterList.addEventListener("click", handleSlide);
