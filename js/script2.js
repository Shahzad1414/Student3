$(document).ready(function() {
    var __dom = document.getElementById("view2_barchart");
    var __myChart = echarts.init(__dom);
    var app = {};

    var option;
    $.ajax({

        dataType: "json",
        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature",
        type: 'GET',
        success: function(data) {
            $("#content_1 #View2Tbl").empty();
            $("#heading").text("The latest 50 measurements");
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
                    <td>temperature</td>
                    <td>${r.temperature}</td>
                            
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
                            data: data.map(item => item.temperature),
                            type: 'bar'
                        }]
                    };

                    if (option && typeof option === 'object') {
                        __myChart.setOption(option);
                    }
                }


            }
            tablebody = $("#content_1 #View2Tbl");
            tablebody.append(tab);
        }
    });
    $('#timeinterval').change(function() {
        var timeinterval = $('#timeinterval').find(":selected").text();

        if (timeinterval == "Now") {

            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View2Tbl").empty();
                    $("#heading").text("The latest 50 measurements");
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
                                    <td>temperature</td>
                                    <td>${r.temperature}</td>
                                            
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
                                    data: data.map(item => item.temperature),
                                    type: 'bar'
                                }]
                            };

                            if (option && typeof option === 'object') {
                                __myChart.setOption(option);
                            }
                        }


                    }
                    tablebody = $("#content_1 #View2Tbl");
                    tablebody.append(tab);
                }
            });
        } else
        if (timeinterval == "24 hours") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/23",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View2Tbl").empty();
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
                                    <td>temperature</td>
                                    <td>${r.temperature}</td>
                                            
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
                                data: data.map(item => item.temperature),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }



                    }
                    tablebody = $("#content_1 #View2Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (timeinterval == "48 hours") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/47",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View2Tbl").empty();
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
                                    <td>temperature</td>
                                    <td>${r.temperature}</td>
                                            
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
                                data: data.map(item => item.temperature),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }



                    }
                    tablebody = $("#content_1 #View2Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (timeinterval == "72 hours") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/71",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View2Tbl").empty();
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
                                    <td>temperature</td>
                                    <td>${r.temperature}</td>
                                            
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
                                data: data.map(item => item.temperature),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }



                    }
                    tablebody = $("#content_1 #View2Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (timeinterval == "1 week") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/167",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View2Tbl").empty();
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
                                    <td>temperature</td>
                                    <td>${r.temperature}</td>
                                            
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
                                data: data.map(item => item.temperature),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }


                    }
                    tablebody = $("#content_1 #View2Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (timeinterval == "1 month") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/730",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View2Tbl").empty();
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
                                    <td>temperature</td>
                                    <td>${r.temperature}</td>
                                            
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
                                data: data.map(item => item.temperature),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }


                    }
                    tablebody = $("#content_1 #View2Tbl");
                    tablebody.append(tab);
                }
            });
        }
    })
})