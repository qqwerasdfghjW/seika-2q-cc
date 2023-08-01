import Chart from 'chart.js/auto';

(async function() {
  const data = [
    { year: "かわいい", count: 27 },
    { year: "おもしろい", count: 26 },
    { year: "やんちゃ", count: 27 },
    { year: "人見知り", count: 29 },
    { year: "頭の良さ", count: 28 },
    { year: "大きさ", count: 26 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'radar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'ログ',
            data: data.map(row => row.count),
            borderColor: 'rgba(116, 80, 48, 0.6)',
            backgroundColor: 'rgba(116, 80, 48, 0.2)',
          },
          {
            label: 'ショコラ',
            data: [26, 30, 28, 25, 27, 29], 
            borderColor: 'rgba(169, 206, 236, 1)',
            backgroundColor: 'rgba(169, 206, 236, 0.2)',
          },
          {
            label: 'ネロ',
            data: [29, 28, 27, 28, 29, 28], 
            borderColor: 'rgba(255, 255, 0, 1)',
            backgroundColor: 'rgba(255, 255, 0, 0.2)',
          }
        ]
      }
    }
  );
})();

