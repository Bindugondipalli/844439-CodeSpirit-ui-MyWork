const DATAS_KEY = "datas";

getDatasFromLocalStorage = () =>{
    let datas=[];
    
    if(localStorage.getTrainee(DATAS_KEY)){
        datas=JSON.parse(localStorage.getTrainee(DATAS_KEY));
    }

    return datas;
}

addTraineeFormSubmit = () =>{
    let datas = getDatasFromLocalStorage();

    let traineeNameTextBox = document.querySelector("#inm");
    let traineeAddressTextBox = document.querySelector("#address");
    let traineeCityTextBox = document.querySelector("#city");
    let traineePackageTextBox=document.querySelector("#pckg");
    let traineetrainerPreferencetextBox=document.querySelector("#tpref");
    let traineePhonenumberTextBox=document.querySelector("#phn");

    let data = {
        name:traineeNameTextBox.value,
        address:parseString(traineeAddressTextBox.value),
        city:parseString(traineeCityTextBox.value),
	    package:parseFloat(traineePackageTextBox.value),
	    preference:parseString(traineetraineePreferenceTextBox.value),
	    phonenumber:parseInt(traineePhonenumberTextBox.value)
    };

    datas.push(data);
    localStorage.setTrainee(DATAS_KEY,JSON.stringify(datas));
}

loadTrainees = () =>{
    let datas = getDatasFromLocalStorage();

    let tableBody = document.querySelector("#triData");

/*  products.forEach(product => {
        let prdRow = createProductRow(product);
        tableBody.append(prdRow);
    }); */

    for(let data of datas){
        let triRow = createDataRow(data);
        tableBody.append(triRow);
    }
}

createDataRow = (data) =>{

    let nameCol = document.createElement("td");
    nameCol.textContent=trainee.name;
    
    let addressCol = document.createElement("td");
    addressCol.textContent=trainee.address;

    let cityCol = document.createElement("td");
    cityCol.textContent=trainee.city;

    let packageCol = document.createElement("td");
    packageCol.textContent=trainee.package;

    let traineepreferenceCol = document.createElement("td");
    traineepreferencecol.textContent=trainee.traineepreference;

    let phoneNumberCol = document.createElement("td");
    phoneNumberCol.textContent=trainee.phonenumber;


    let triRow = document.createElement("tr");
    triRow.append(nameCol);
    triRow.append(addressCol);
    triRow.append(cityCol);
    triRow.append(packageCol);
    triRow.append(traineepreferenceCol);
    triRow.append(phoneNumberCol);

    return triRow;
}

