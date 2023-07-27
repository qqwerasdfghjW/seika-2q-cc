import Chart from 'chart.js/auto';

(async function() {
  const data = [
    { year: "かっこよさ", count: 23 },
    { year: "つよさ", count: 20 },
    { year: "かわいさ", count: 15 },
    { year: "なつきど", count: 25 },
    { year: "さいず", count: 22 },
    { year: "やんちゃど", count: 30 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'radar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'ショコラ',
            data: data.map(row => row.count),
            borderColor: 'rgba(175, 223, 228, 1)',
            backgroundColor: 'rgba(175, 223, 228, 0.2)',
          },
          {
            label: 'ネロ',
            data: [10, 15, 18, 12, 20, 17], 
            borderColor: 'rgba(255, 30, 0, 1)',
            backgroundColor: 'rgba(255, 30, 0, 0.2)',
          },
          {
            label: 'ログ',
            data: [21, 8, 13, 26, 11, 2], 
            borderColor: 'rgba(167, 87, 168, 1)',
            backgroundColor: 'rgba(167, 87, 168, 0.2)',
          }
        ]
      }
    }
  );
})();

