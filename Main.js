let MyForm = document.getElementById("MyForm");
let TBody = document.getElementById("TBody");
let ShowDataSection = document.getElementById("ShowDataSection");

let InstrumentList = [];


MyForm.addEventListener("submit",(a)=>{
    a.preventDefault();

    let Data = {
        Id: a.target[0].value,
        BrandName: a.target[1].value,
        InstrumentName: a.target[2].value,
        Poster: a.target[3].value,
        Price: a.target[4].value,

    };
    InstrumentList.push(Data);

    DisplayRows(InstrumentList)

});


function DisplayRows(list){

    TBody.innerHTML = "";

    for(let i of list)
    {
        // TBody.innerHTML += ` 
        // <tr>
        //         <td>${i.Id}</td>
        //         <td>${i.BrandName}</td>
        //         <td>${i.InstrumentName}</td>
        //         <td><img src="${i.Poster}" alt="${i.InstrumentName}"></td>
        //         <td>${i.Price}</td>
        //         <td><button>Update</button></td>
        //         <td><button>Delete</button></td>
        //         <td><button>Show</button></td>
        
        // </tr>`


        let Tr = document.createElement("tr");
        Tr.innerHTML = `
                <td>${i.Id}</td>
                <td>${i.BrandName}</td>
                <td>${i.InstrumentName}</td>
                <td><img src="${i.Poster}" alt="${i.InstrumentName}"></td>
                <td>${i.Price}</td>
                <td><button>Update</button></td>
                <td><button>Delete</button></td>
        `

        let ShowTd = document.createElement("td")
        let ShowButton = document.createElement("button")
        ShowButton.innerText = "Show"
        ShowButton.onclick= ()=>{
            ShowCard(i);
        }
    


        ShowTd.appendChild(ShowButton);
        Tr.appendChild(ShowTd)
        TBody.appendChild(Tr)


    }

}





function ShowCard(data)
{

    ShowDataSection.innerHTML = `
         <div class="Card">
            <span>X</span>
            <img src="${data.Poster}" alt="">
            <h2>${data.InstrumentName}</h2>
            <h4>${data.BrandName}</h4>
            <p>${data.Price}</p>
        </div>
    `
}


