const list = document.querySelector('ul.collection')
const listitem = document.querySelector('li.collection-item')
console.log('list', list)
console.log('list item', listitem)
const nodes = document.querySelector('ul.collection').childNodes
console.log('nodes', nodes)
nodes.forEach(node => {
    console.log('node type', node.nodeName)
});
console.log('node type', nodes[0].nodeName)
console.log('node type', nodes[1].nodeName)
document.querySelector('ul.collection').children[0].children[0].id = "special-id"
const children = document.querySelector('ul.collection').children[0].children[0]
console.log('children', children)