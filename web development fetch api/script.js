fetch("https://fakestoreapi.com/products")
.then((data)=>{
    // console.log(data) //json form
    
    return data.json()//converted into object
})
.then((objectdata)=>{//data.json() data store in objectdata 
    console.log(objectdata)//data is in array object form
    if(objectdata.length>0){
        var temp="";
        objectdata.forEach((value)=>{
            temp+=`<tr>
            <td>${value.title}</td>
            <td>${value.description}</td>
            <td>${value.price}</td>
            <td><img src="${value.image}"/></td>
            </tr>`;
            
        })
        document.getElementById('table-body').innerHTML=temp
    }
    // var currentPage=0;
    // let pages="";
    // let page_size=5;
    // pages=paginate(objectdata,page_size);
    // page=pages[currentPage]
    // printRows(page)
    // function printRows(arr){
    //     arr.forEach(element=>{
    //         $(".page-data").append(`<tr>
    //         <td>${value.title}</td>
    //         <td>${value.description}</td>
    //         <td>${value.price}</td>
    //         <td><img src="${value.image}"/></td>
    //         </tr>`)
    //     })
    // }
    // function paginate(arr,size){
    //     return arr.reduce((acc,val,i)=>{
    //         let idx=Math.floor(i/size)
    //         let page=acc[idx]||(acc[idx]=[])
    //         page.push(val)
    //         return acc
    //     },[])

    // }
    
    })
.catch((err)=>{
    console.log(err)
})