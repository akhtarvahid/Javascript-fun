let db = 'employees';

let name = document.querySelector("#name");
let address = document.querySelector("#add");
let phone = document.querySelector("#ph");
let btnAdd = document.querySelector(".add");
let tbody = document.querySelector('tbody');
let btnUpdate = document.querySelector('.updateBtn');
let updateId;

btnAdd.addEventListener('click', (e)=> {
  let request = indexedDB.open(db, 1);
  
  request.onupgradeneeded = () => {
    let res = request.result;
    res.createObjectStore('employee', { autoIncrement: true })
  }
  request.onsuccess = () => {
    let res = request.result;
    let tx = res.transaction('employee', 'readwrite');
    let store = tx.objectStore('employee');
    store.put({
      eId: Date.now(),
      name: name.value,
      address: address.value,
      phone: phone.value
    })

    name.value = '';
    address.value = '';
    phone.value = '';
  }
  e.preventDefault();
})

function read() {
    let request = indexedDB.open(db, 1);

    request.onsuccess = () => {
        let res = request.result;
        let tx = res.transaction('employee', 'readonly')
        let store = tx.objectStore('employee')
        let cursor = store.openCursor()
        cursor.onsuccess = () => {
            let curRes = cursor.result;
            if (curRes) {
                const tr = document.createElement('tr');
                const tdId = document.createElement('td');
                const tdName = document.createElement('td');
                const tdAddress = document.createElement('td');
                const tdPhone = document.createElement('td');
                
                tdId.innerHTML = `${curRes.key}`
                tdName.innerHTML = `${curRes.value.name}`
                tdAddress.innerHTML = `${curRes.value.address}`
                tdPhone.innerHTML = `${curRes.value.phone}`
                tr.appendChild(tdId)
                tr.appendChild(tdName)
                tr.appendChild(tdAddress)
                tr.appendChild(tdPhone)

                // tr.innerHTML += `
                //   ${curRes.value.name}
                //   ${curRes.value.address}
                //   ${curRes.value.phone}
                // `;
                const updateBtn = document.createElement('button');
                updateBtn.textContent = 'Update';
                updateBtn.classList.add('update');
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete'

                tr.appendChild(updateBtn);
                tr.appendChild(deleteBtn);
                tbody.appendChild(tr);
                curRes.continue()
            }

        }
    }

}
read();

const row = document.querySelector('tbody');
row.addEventListener('click', (e) => {
    const [editId, editName, editAddress, editPhone] = e.target.parentElement.children;
    if(e.target.className === 'update') {
          name.value = editName.textContent;
          address.value = editAddress.textContent;
          phone.value = editPhone.textContent;
          updateId = parseInt(editId.textContent);
          btnAdd.style.display = 'none';
          btnUpdate.style.display = 'block';
    }
});

btnUpdate.addEventListener('click', e => {
  e.preventDefault();
  let request = indexedDB.open(db, 1)
  request.onsuccess = () => {
      let res = request.result;
      let tx = res.transaction('employee', 'readwrite')
      let store = tx.objectStore('employee');
      store.put({
        eId: Date.now(),
        name: name.value,
        address: address.value,
        phone: phone.value
      }, updateId);
      alert("employee has been updated")
      location.reload()
  }
})