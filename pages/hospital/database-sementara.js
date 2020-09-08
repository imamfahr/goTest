const getDataRS = async () => {
  try {
    let response = await fetch(
      "https://5f55a45f39221c00167fb0c7.mockapi.io/covid19/RumahSakit"
    );
    let data = await response.json();

    console.log("data rs", data);

    let listContainer = document.getElementById("list-container");

    // for (let i = 0;i<data.length;i++){
    //   let inputCity = document.getElementById('input-city');
    //   let cityList = document.createElement('option');
    //   cityList.value=`${[i]}`;
    //   cityList.innerHTML=`${data[i].KotaRS}`;
    //   inputCity.appendChild(cityList)
    // }

    // data.forEach((elm)=> {
    //   let inputCity = document.getElementById('input-city');
    //   let cityList = document.createElement('option');
    //   cityList.innerHTML=`${elm.KotaRS}`;
    //   inputCity.appendChild(cityList)
    // })

    data.forEach((el) => {
      let hospitalContainer = document.createElement("div");
      hospitalContainer.className = "hospitalCard";
      hospitalContainer.innerHTML = `
          <div class="row">
            <div class="container-list-host row" id='container-list-host'>
              <div class="row">
                <div class="col l4 s3 img-field" style ="background-image: url('${el.img}')">
                </div>
                <div class="col  l8 s9">
                  <p id="hospitalName">${el.namaRumahSakit}</p>
                    <span id="hospitalAdress">${el.alamatRS}</span>  
                  </p>
                  <p id='hospitalCity'>${el.KotaRS}</p>
                  <div class="service">
                  </div>
                  <a class="waves-effect waves-light btn btn-small-pilih"><i class="material-icons right">arrow_forward</i>pilih lokasi tes</a>
                </div>
                </div>
              </div>
            </div>
          `;

      listContainer.appendChild(hospitalContainer);

      let service = document.getElementsByClassName("service");
      let serviceProvided = document.createElement("div");

      for (let i = 0; i < service.length; i++) {
        if (el.pcr && el.rapid) {
          serviceProvided.innerHTML = `
              <p><span id="test-method">&check; Rapid test </span><span class="price">(Rp ${el.biayapcr})</p>
              <p><span id="test-method">&check; PCR / Swab test </span><span class="price">(Rp ${el.biayarapid})</p>
              `;
          service[i].appendChild(serviceProvided);
        } else if (el.pcr == true && el.rapid == false) {
          serviceProvided.innerHTML = `
              <p><span id="test-method">&check; PCR / Swab test </span><span class="price">(Rp ${el.biayapcr})</p>`;
          service[i].appendChild(serviceProvided);
        } else if (el.pcr == false && el.rapid == true) {
          serviceProvided.innerHTML = `
              <p><span id="test-method">&check; Rapid test </span><span class="price">(Rp ${el.biayarapid})</p>`;
          service[i].appendChild(serviceProvided);
        }
      }

    });


    // let cariRumahSakit = document.getElementById('cariRumahSakit').value

    // let searchButton = document.querySelector('#search-button')

    // searchButton.addEventListener('click',function (){
    //   let resultFilter = []

    //   console.log(cariRumahSakit)
    //   for (let i=0; i<data.length; i++){
    //     if(data[i].namaRumahSakit.includes(cariRumahSakit)){
    //       resultFilter.push(data[i])
    //     }
    //   }
  
    //   console.log(resultFilter);
    // })
    
    //filtering hospital data



  } catch {
    console.log("maaf server sedang maintenance");
  }
};

getDataRS();




if()