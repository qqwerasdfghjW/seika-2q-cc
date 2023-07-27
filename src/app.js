import Chart from 'chart.js/auto';

(async function() {
  const data = [
    { year: "ゲーム性", count: 18 },
    { year: "グラフィック", count: 20 },
    { year: "世界観", count: 25 },
    { year: "コンテンツ", count: 20 },
    { year: "BGM", count: 21 },
    { year: "個人的好み", count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'radar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'MH4',
            data: data.map(row => row.count),
            borderColor: 'rgba(116, 80, 48, 0.6)',
            backgroundColor: 'rgba(116, 80, 48, 0.2)',
          },
          {
            label: 'MHWI',
            data: [26, 30, 28, 25, 27, 29], 
            borderColor: 'rgba(169, 206, 236, 1)',
            backgroundColor: 'rgba(169, 206, 236, 0.2)',
          },
          {
            label: 'MHRS',
            data: [21, 17, 22, 26, 20, 26], 
            borderColor: 'rgba(255, 255, 0, 1)',
            backgroundColor: 'rgba(255, 255, 0, 0.2)',
          }
        ]
      }
    }
  );
})();

