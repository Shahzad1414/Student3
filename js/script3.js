$(document).ready(function() {
    var __dom = document.getElementById("view3_barchart");
    var __myChart = echarts.init(__dom);
    var app = {};

    var option;
    $.ajax({

        dataType: "json",
        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction",
        type: 'GET',
        success: function(data) {
            $("#view3_content_1 #View3Tbl").empty();
            $("#heading").text("latest 20 measurements and Types");

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
                if (count <= 20) {
                    tab += `<tr> 
                            <td>${count} </td>
                            <td>${r.date_time.slice(0,10)}</td> 
                            <td>${r.date_time.slice(11,19)}</td>
                            <td>wind_direction</td>
                            <td>${r.wind_direction}</td>
                                    
                        </tr>`;

                    option = {
                        xAxis: {
                            type: 'category',
                            data: data.map(item => item.date_time.slice(11, 19))
                                // [r.date_time.slice(11, 19)]
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: data.map(item => item.wind_direction),
                            type: 'bar'
                        }]
                    };

                    if (option && typeof option === 'object') {
                        __myChart.setOption(option);
                    }
                }


            }
            tablebody = $("#view3_content_1 #View3Tbl");
            tablebody.append(tab);
        }
    });
    $('#view3_timeinterval').change(function() {
        var view3_timeinterval = $('#view3_timeinterval').find(":selected").text();

        if (view3_timeinterval == "Now") {

            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction",
                type: 'GET',
                success: function(data) {
                    $("#view3_content_1 #View3Tbl").empty();
                    $("#heading").text("latest 20 measurments an types");

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
                        if (count <= 20) {
                            tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_direction</td>
                                    <td>${r.wind_direction}</td>
                                            
                                </tr>`;

                            option = {
                                xAxis: {
                                    type: 'category',
                                    data: data.map(item => item.date_time.slice(11, 19))
                                        // [r.date_time.slice(11, 19)]
                                },
                                yAxis: {
                                    type: 'value'
                                },
                                series: [{
                                    data: data.map(item => item.wind_direction),
                                    type: 'bar'
                                }]
                            };

                            if (option && typeof option === 'object') {
                                __myChart.setOption(option);
                            }
                        }


                    }
                    tablebody = $("#view3_content_1 #View3Tbl");
                    tablebody.append(tab);
                }
            });
        } else
        if (view3_timeinterval == "24 hours") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/23",
                type: 'GET',
                success: function(data) {
                    $("#view3_content_1 #View3Tbl").empty();
                    $("#heading").text("latest 24 hours, values are hourly averages");

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

                        tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_direction</td>
                                    <td>${r.wind_direction}</td>
                                            
                                </tr>`;
                        option = {
                            xAxis: {
                                type: 'category',
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }



                    }
                    tablebody = $("#view3_content_1 #View3Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (view3_timeinterval == "48 hours") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/47",
                type: 'GET',
                success: function(data) {
                    $("#view3_content_1 #View3Tbl").empty();
                    $("#heading").text("latest 48 hours, values are hourly averages");

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

                        tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_direction</td>
                                    <td>${r.wind_direction}</td>
                                            
                                </tr>`;
                        option = {
                            xAxis: {
                                type: 'category',
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }



                    }
                    tablebody = $("#view3_content_1 #View3Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (view3_timeinterval == "72 hours") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/71",
                type: 'GET',
                success: function(data) {
                    $("#view3_content_1 #View3Tbl").empty();
                    $("#heading").text("latest 72 hours, values are hourly averages");


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

                        tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_direction</td>
                                    <td>${r.wind_direction}</td>
                                            
                                </tr>`;
                        option = {
                            xAxis: {
                                type: 'category',
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }



                    }
                    tablebody = $("#view3_content_1 #View3Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (view3_timeinterval == "1 week") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/167",
                type: 'GET',
                success: function(data) {
                    $("#view3_content_1 #View3Tbl").empty();
                    $("#heading").text("latest week, values are hourly averages");

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

                        tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_direction</td>
                                    <td>${r.wind_direction}</td>
                                            
                                </tr>`;

                        option = {
                            xAxis: {
                                type: 'category',
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }


                    }
                    tablebody = $("#view3_content_1 #View3Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (view3_timeinterval == "1 month") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/730",
                type: 'GET',
                success: function(data) {
                    $("#view3_content_1 #View3Tbl").empty();
                    $("#heading").text("latest month, values are hourly averages");

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

                        tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_direction</td>
                                    <td>${r.wind_direction}</td>
                                            
                                </tr>`;

                        option = {
                            xAxis: {
                                type: 'category',
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }


                    }
                    tablebody = $("#view3_content_1 #View3Tbl");
                    tablebody.append(tab);
                }
            });
        }
    })
})