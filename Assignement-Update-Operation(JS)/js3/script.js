var proContainer = JSON.parse(localStorage.getItem("products")) || [];
displayPro();

var proName = document.getElementById("proName");
var proPrice = document.getElementById("proPrice");
var proCategory = document.getElementById("proCategory");
var proDesc = document.getElementById("proDesc");
var addButton = document.getElementById("btn");

addButton.onclick = function () {
  var pro = {
    name: proName.value,
    price: proPrice.value,
    category: proCategory.value,
    desc: proDesc.value,
    isUpdating: false
  };
  //    console.log(pro);
  proContainer.push(pro);
  displayPro();
  localStorage.setItem("products", JSON.stringify(proContainer));
};

function displayPro() {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i < proContainer.length; i++) {
        var pro = proContainer[i];
        if (!pro.isUpdating) {
            var tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${i + 1}</td>
                <td>${pro.name}</td>
                <td>${pro.price}</td>
                <td>${pro.category}</td>
                <td>${pro.desc}</td>
                <td>
                    <button class="btn update" onclick="updatePro(${i})">Update</button>
                    <button class="btn delete" onclick="delPro(${i})">Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        }
        else {
            var tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${i + 1}</td>
                <td><input type="text" value="${pro.name}" id="name-${i}" /></td>
                <td><input type="number" value="${pro.price}" id="price-${i}" /></td>
                <td><input type="text" value="${pro.category}" id="category-${i}" /></td>
                <td><input type="text" value="${pro.desc}" id="desc-${i}" /></td>
                <td>
                    <button type="button" class="btn save" onclick="savePro(${i})">Save</button>
                    <button type="button" class="btn cancel" onclick="cancelUpdate(${i})">Cancel</button>
                </td>
            `;
            tbody.appendChild(tr);
        }
    }
}

function updatePro(index) {
    proContainer[index].isUpdating = true;
    displayPro();
}

function cancelUpdate(index) {
    proContainer[index].isUpdating = false;
    displayPro();
}

function search() {
    var searchTerm = document.getElementById("proSearch").value.toLowerCase();
    var filteredProducts = proContainer.filter(function(pro) {
        return pro.name.toLowerCase().includes(searchTerm);
    });
    displayFilteredPro(filteredProducts);
}

function displayFilteredPro(filteredProducts) {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i < filteredProducts.length; i++) {
        var pro = filteredProducts[i];
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${pro.name}</td>
            <td>${pro.price}</td>
            <td>${pro.category}</td>
            <td>${pro.desc}</td>
            <td>
                <button class="btn update" onclick="updatePro(${i})">Update</button>
                <button class="btn delete" onclick="delPro(${i})">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    }
}

function delPro(index) {
  proContainer.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(proContainer));
  displayPro();
}

function savePro(index) {
    var name = document.getElementById(`name-${index}`).value;
    var price = document.getElementById(`price-${index}`).value;
    var category = document.getElementById(`category-${index}`).value;
    var desc = document.getElementById(`desc-${index}`).value;
    
    proContainer[index].name = name;
    proContainer[index].price = price;
    proContainer[index].category = category;
    proContainer[index].desc = desc;
    proContainer[index].isUpdating = false;
    
    localStorage.setItem("products", JSON.stringify(proContainer));
    displayPro();
}