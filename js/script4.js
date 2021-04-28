$(document).ready(function() {
    var __dom = document.getElementById("view4_linechart");
    var __myChart = echarts.init(__dom);
    var app = {};

    var option;

    $.ajax({

        dataType: "json",
        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain",
        type: 'GET',
        success: function(data) {
            $("#view4_content_1 #View4Tbl").empty();
            $("#heading").text("latest 50 measurments and Types");


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
                    <td>Rain</td>
                    <td>${r.rain}</td>
                            
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
                            data: data.map(item => item.rain),
                            type: 'line'
                        }]
                    };

                    if (option && typeof option === 'object') {
                        __myChart.setOption(option);
                    }
                }


            }
            tablebody = $("#view4_content_1 #View4Tbl");
            tablebody.append(tab);
        }
    });
    $('#view4_Measurements').change(function() {

        $("#view4_content_1 #View4Tbl").html("");
        var measurments = $('#view4_Measurements').find(":selected").text();

        if (measurments == "rain") {
            $('#view4_timeinterval').change(function() {
                var view4_timeinterval = $('#view4_timeinterval').find(":selected").text();

                if (view4_timeinterval == "Now") {

                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
                            $("#heading").text("latest 50 measurments and Types");

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
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
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
                                            data: data.map(item => item.rain),
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        __myChart.setOption(option);
                                    }
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else
                if (view4_timeinterval == "24 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/23",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
                            $("#heading").text("latest 24 Hours, values are hourly averages");

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
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
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
                                        data: data.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "48 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/47",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
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
                                        data: data.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "72 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/71",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
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
                                        data: data.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "1 week") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/167",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
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
                                        data: data.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "1 month") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/730",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
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
                                        data: data.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                }
            })

        } else if (measurments == "wind_speed") {
            $('#view4_timeinterval').change(function() {
                var view4_timeinterval = $('#view4_timeinterval').find(":selected").text();

                if (view4_timeinterval == "Now") {

                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
                            $("#heading").text("latest 50 Measurments and Typs");

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
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
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
                                            data: data.map(item => item.wind_speed),
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        __myChart.setOption(option);
                                    }
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else
                if (view4_timeinterval == "24 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/23",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
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
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "48 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/47",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
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
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "72 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/71",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
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
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "1 week") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/167",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>Rain</td>
                                    <td>${r.wind_speed}</td>
                                            
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
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "1 month") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/730",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
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
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                }
            })
        } else if (measurments == "light") {
            $('#view4_timeinterval').change(function() {
                var view4_timeinterval = $('#view4_timeinterval').find(":selected").text();

                if (view4_timeinterval == "Now") {

                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/light",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
                            $("#heading").text("latest 50 measurments and Types");

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
                                    <td>light</td>
                                    <td>${r.light}</td>
                                            
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
                                            data: data.map(item => item.light),
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        __myChart.setOption(option);
                                    }
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else
                if (view4_timeinterval == "24 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/light/23",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>light</td>
                                    <td>${r.light}</td>
                                            
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
                                        data: data.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "48 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/light/47",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>light</td>
                                    <td>${r.light}</td>
                                            
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
                                        data: data.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "72 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/light/71",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>light</td>
                                    <td>${r.light}</td>
                                            
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
                                        data: data.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "1 week") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/light/167",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>light</td>
                                    <td>${r.light}</td>
                                            
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
                                        data: data.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "1 month") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/light/730",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                    <td>light</td>
                                    <td>${r.light}</td>
                                            
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
                                        data: data.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                }
            })
        } else if (measurments == "temperature") {
            $('#view4_timeinterval').change(function() {
                var view4_timeinterval = $('#view4_timeinterval').find(":selected").text();

                if (view4_timeinterval == "Now") {

                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
                            $("#heading").text("latest 50 measurments and Type");

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
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        __myChart.setOption(option);
                                    }
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else
                if (view4_timeinterval == "24 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/23",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "48 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/47",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "72 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/71",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }



                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "1 week") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/167",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (view4_timeinterval == "1 month") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/730",
                        type: 'GET',
                        success: function(data) {
                            $("#view4_content_1 #View4Tbl").empty();
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
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }


                            }
                            tablebody = $("#view4_content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                }
            })
        } else if (measurments == "wind_direction") {
            $('#view4_timeinterval').change(function() {
                var timeinterval = $('#view4_timeinterval').find(":selected").text();

                if (timeinterval == "Now") {


                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 50 measurements type");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                if (count <= 50) {
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
                                            data: out.map(item => item.date_time.slice(11, 19))
                                                // [r.date_time.slice(11, 19)]
                                        },
                                        yAxis: {
                                            type: 'value'
                                        },
                                        series: [{
                                            data: out.map(item => item.wind_direction),
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        __myChart.setOption(option);
                                    }
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else
                if (timeinterval == "24 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/23")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 24 hours, values are hourly averages");
                            let tab =
                                `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

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
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_direction),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "48 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/47")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 48 hours, values are hourly averages");
                            let tab =
                                `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

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
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_direction),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "72 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/71")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 72 hours, values are hourly averages");
                            let tab =
                                `<tr>
      <th>Row_Number</th>
      <th>Date</th>
      <th>Time</th>
      <th>Measurement_Type</th>
      <th>Value</th>
     </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

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
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_direction),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 week") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/167")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest week, values are hourly averages");
                            let tab =
                                `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

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
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_direction),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 month") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/730")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest month, values are hourly averages");
                            let tab =
                                `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

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
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_direction),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                }
            })
        }
    })
})