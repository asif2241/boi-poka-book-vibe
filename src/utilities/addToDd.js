const getStoredList = ()=>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else{
        return [];
    }
}

const addToReadList = (id)=>{
  const storedList = getStoredList();
  if(storedList.includes(id)){
    console.log(id, 'already exists');
  }
  else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
  }
}

// localStorage.setItem('test-array', JSON.stringify([1, 2, 3]));
// console.log(localStorage.getItem('test-array')); // Outputs: "[1,2,3]"
// console.log(typeof localStorage.getItem('read-list')); // Output: "string"
// console.log(localStorage.getItem('read-list')); // Output: '["id1","id2"]'


export {addToReadList, getStoredList}