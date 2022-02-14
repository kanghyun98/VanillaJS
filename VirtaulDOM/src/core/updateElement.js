function updateElement(parent, newNode, oldNode) {
  // oldNode만 있는 경우
  if (!newNode && oldNode) return oldNode.remove();

  // newNode만 있는 경우
  if (newNode && !oldNode) return parent.appendChild(newNode);

  // oldNode, newNode 모두 text 타입인 경우
  if (newNode instanceof Text && oldNode instanceof Text) {
    if (oldNode.nodeValue === newNode.nodeValue) return;
    oldNode.nodeValue = newNode.nodeValue;
    return;
  }

  // oldNode와 newNode의 태그가 다른 경우
  if (newNode.nodeName !== oldNode.nodeName) {
    const index = [...parent.childNodes].indexOf(oldNode);
    oldNode.remove();
    parent.appendChild(newNode, index);
    return;
  }

  // oldNode와 newNode의 태그가 같은 경우
  updateAttributes(oldNode, newNode);

  // 하위 요소 재귀
  const newChildren = [...newNode.childNodes];
  const oldChildren = [...oldNode.childNodes];
  const maxLength = Math.max(newChildren.length, oldChildren.length);
  for (let i = 0; i < maxLength; i++) {
    updateElement(oldNode, newChildren[i], oldChildren[i]);
  }
}

// attribute 비교 후 변경된 부분만 변경
function updateAttributes(oldNode, newNode) {
  // 추가 및 변경
  for (const { name, value } of [...newNode.attributes]) {
    if (value === oldNode.getAttribute(name)) continue;
    oldNode.setAttribute(name, value);
  }

  // 제거
  for (const { name } of [...oldNode.attributes]) {
    if (newNode.getAttribute(name) !== undefined) continue;
    oldNode.removeAttribute(name);
  }
}

export default updateElement;
