$(document).ready(function() {
    var dom = document.getElementById("linechart");
    var myChart = echarts.init(dom);
    var app = {};

    var option;
    $('#timeinterval').change(function() {
        var timeinterval = $('#timeinterval').find(":selected").text();

        if (timeinterval == "Now") {

            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View4Tbl").empty();

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
                                    boundaryGap: false,
                                    data: data.map(item => item.date_time.slice(11, 19))
                                        // [r.date_time.slice(11, 19)]
                                },
                                yAxis: {
                                    type: 'value'
                                },
                                series: [{
                                    data: data.map(item => item.wind_direction),
                                    type: 'line',
                                    areaStyle: {}
                                }]
                            };

                            if (option && typeof option === 'object') {
                                myChart.setOption(option);
                            }
                        }


                    }
                    tablebody = $("#content_1 #View4Tbl");
                    tablebody.append(tab);
                }
            });
        } else
        if (timeinterval == "24 hours") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/23",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View4Tbl").empty();
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
                                boundaryGap: false,
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'line',
                                areaStyle: {}
                            }]
                        };

                        if (option && typeof option === 'object') {
                            myChart.setOption(option);
                        }



                    }
                    tablebody = $("#content_1 #View4Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (timeinterval == "48 hours") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/47",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View4Tbl").empty();
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
                                boundaryGap: false,
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'line',
                                areaStyle: {}
                            }]
                        };

                        if (option && typeof option === 'object') {
                            myChart.setOption(option);
                        }



                    }
                    tablebody = $("#content_1 #View4Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (timeinterval == "72 hours") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/71",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View4Tbl").empty();
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
                                boundaryGap: false,
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'line',
                                areaStyle: {}
                            }]
                        };

                        if (option && typeof option === 'object') {
                            myChart.setOption(option);
                        }



                    }
                    tablebody = $("#content_1 #View4Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (timeinterval == "1 week") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/167",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View4Tbl").empty();
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
                                boundaryGap: false,
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'line',
                                areaStyle: {}
                            }]
                        };

                        if (option && typeof option === 'object') {
                            myChart.setOption(option);
                        }
                    }
                    tablebody = $("#content_1 #View4Tbl");
                    tablebody.append(tab);
                }
            });
        } else

        if (timeinterval == "1 month") {
            $.ajax({

                dataType: "json",
                url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/730",
                type: 'GET',
                success: function(data) {
                    $("#content_1 #View4Tbl").empty();
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
                                boundaryGap: false,
                                data: data.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data.map(item => item.wind_direction),
                                type: 'line',
                                areaStyle: {}
                            }]
                        };

                        if (option && typeof option === 'object') {
                            myChart.setOption(option);
                        }


                    }
                    tablebody = $("#content_1 #View4Tbl");
                    tablebody.append(tab);
                }
            });
        }
    })
})