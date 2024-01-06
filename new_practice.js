let activeIndex = 0;
const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
	const nextIndex = (activeIndex + 1) % groups.length;
	const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
	const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
	
  currentGroup.dataset.status = "after";

	nextGroup.dataset.status = "becoming-active-from-before";

	setTimeout(() => {
  nextGroup.dataset.status = "active";
		activeIndex = nextIndex;
	});
};

const handleHateClick = ()=>{
  const previousIndex = (activeIndex - 1 + groups.length) % groups.length;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`)
  const previousGoup = document.querySelector(`[data-index="${previousIndex}"]`)

  currentGroup.dataset.status = "before";
  
  previousGoup.dataset.status = "becoming-active-from-after"

  setTimeout(() => {
    previousGoup.dataset.status = "active";
    activeIndex = previousIndex;
  }, 0);
}