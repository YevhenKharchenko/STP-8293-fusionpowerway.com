const contextMenu = document.querySelector('.context-menu');
const menuBtn = document.querySelector('.nav-btn');
const closeContextBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', onMenuButtonClick);

function onMenuButtonClick() {
  contextMenu.classList.add('is-open');
  menuBtn.classList.add('closed');
  closeContextBtn.classList.add('is-open');
  document.body.classList.add('screen-freeze');

  contextMenu.addEventListener('click', onContextMenuLinkClick);
  closeContextBtn.addEventListener('click', onCloseContextButtonClick);
}

function onCloseContextButtonClick() {
  contextMenu.classList.remove('is-open');
  closeContextBtn.classList.remove('is-open');
  menuBtn.classList.remove('closed');
  document.body.classList.remove('screen-freeze');

  contextMenu.removeEventListener('click', onContextMenuLinkClick);
  closeContextBtn.removeEventListener('click', onCloseContextButtonClick);
}

function onContextMenuLinkClick(e) {
  if (
    e.target.nodeName === 'A' ||
    !e.target.classList.contains('context-menu')
  ) {
    onCloseContextButtonClick();
  }
}
