let request = new XMLHttpRequest();
request.open("GET", "http://webapi19sa-1.course.tamk.cloud/v1/weather")
request.send()
request.onload = () => {
    //console.log(request);
    data = JSON.parse(request.response)
    let tab =
        `<tr>
               <th>Row_Number</th>
               <th>Date</th>
               <th>Time</th>
               <th>Measurement_Type</th>
               <th>Value</th>
           </tr>`;
    let count = 0;
    for (let r of data) {

        count = count + 1;
        if (count <= 50) {

            tab += `<tr> 
        <td>${count} </td>
        <td>${r.date_time.slice(0,10)}</td> 
        <td>${r.date_time.slice(11,19)}</td>
        <td>${Object.keys(r.data)}</td>
        <td>${Object.values(r.data)}</td>
                 
    </tr>`;
        }
    }
    document.getElementById("view1tbl").innerHTML = tab;

}