import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJs , LinearScale,CategoryScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'

function Chart({arr= [], currency, days}) {

    ChartJs.register(
        LinearScale,
        CategoryScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend

    )

    const prices = [];
  const dates = [];

  for (let i = 0; i < arr.length; i++) {
    if(days=== "24hr")
    dates.push(new Date(arr[i][0]).toLocaleTimeString())
else
dates.push(new Date(arr[i][0]).toLocaleDateString())
    prices.push(arr[i][1])
    
    
  }
  



    const data = {
        labels: dates,
        datasets: [
          {
            label: `Price in ${currency}`,
            data: prices,
            borderColor: "rgb(255,99,132)",
            backgroundColor: "rgba(255,99,132,0.5)",
          },
        ],
      };
  return (
    <div>
        <Line
        options={{
            responsive : true,
        }}

        data={data}
        />
      
    </div>
  )
}

export default Chart
