export function htmlDom(html) {
  const $el = document.createElement("div");
  $el.innerHTML = html;
  return $el.firstElementChild;
}
